// Contact details: shown on every page wherever data-contact is set.
var CONTACT = { phone: '+995 32 2 420 710', email: 'info@teki.ge', address: 'ილია ჭავჭავაძის გამზირი 37მ, თბილისი' };

(function () {
  document.querySelectorAll('[data-contact]').forEach(function (el) {
    var v = CONTACT[el.getAttribute('data-contact')];
    if (!v) return;
    el.textContent = v;
    el.classList.remove('todo');
    if (el.tagName === 'A') el.href = el.getAttribute('data-contact') === 'email' ? 'mailto:' + v : 'tel:' + v.replace(/\s/g, '');
  });

  // Mobile menu
  var btn = document.getElementById('menu-btn'), menu = document.getElementById('mobile-nav');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // Lead form → the endpoint in data-endpoint → helpdesk CRM (contact + deal).
  // GitHub Pages serves static files only, so the endpoint runs elsewhere; until it is set, the form says so.
  var form = document.getElementById('lead-form');
  if (!form) return;
  var startedAt = Date.now();
  function newId() { try { return crypto.randomUUID(); } catch (e) { return String(Date.now()) + Math.random().toString(16).slice(2); } }
  function setInvalid(id, bad) { document.getElementById(id).classList.toggle('invalid', bad); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var email = v('email');
    var badName = !v('name'), badType = !v('type');
    var badContact = !v('phone') && !email;
    var badEmail = !!email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setInvalid('f-name', badName); setInvalid('f-type', badType); setInvalid('f-phone', badContact); setInvalid('f-email', badEmail);
    if (badName || badType || badContact || badEmail) {
      var first = form.querySelector('.invalid .input'); if (first) first.focus();
      return;
    }
    var data = {}; new FormData(form).forEach(function (val, key) { data[key] = val; });
    data.ts = startedAt; data.submission_id = form.dataset.submission || (form.dataset.submission = newId());
    var endpoint = form.getAttribute('data-endpoint');
    var ok = document.getElementById('form-ok'), okText = document.getElementById('form-ok-text'), submit = document.getElementById('submit-btn');
    function done() { ok.hidden = false; ok.classList.remove('is-error'); document.getElementById('form-ok-title').textContent = 'მოთხოვნა მიღებულია.'; okText.textContent = 'დაგიკავშირდებით ვიზიტის დროის შესათანხმებლად.'; form.querySelectorAll('.input').forEach(function (i) { i.value = ''; }); delete form.dataset.submission; submit.disabled = false; }
    function fail(title, text) { submit.disabled = false; ok.hidden = false; ok.classList.add('is-error'); document.getElementById('form-ok-title').textContent = title; okText.textContent = text; }
    if (!endpoint) { fail('ფორმა დროებით არ მუშაობს.', 'დაგვიკავშირდით ტელეფონით ან ელფოსტით, მონაცემები ფორმის გვერდითაა.'); return; }
    submit.disabled = true;
    fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) {
        if (r.ok) return done();
        if (r.status === 422) return fail('გადაამოწმეთ ველები.', 'სახელი, ობიექტის ტიპი და ტელეფონი ან ელფოსტა სავალდებულოა.');
        if (r.status === 429) return fail('ძალიან ბევრი მცდელობა.', 'სცადეთ რამდენიმე წუთში ან დაგვირეკეთ.');
        throw new Error(r.status);
      })
      .catch(function () { fail('გაგზავნა ვერ მოხერხდა.', 'სცადეთ თავიდან ან დაგვირეკეთ.'); });
  });
})();
