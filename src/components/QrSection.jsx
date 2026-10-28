import Icon from './Icon.jsx'
import { Dia, H2, Kicker, Lead, Section, asset } from './ui.jsx'
import { STOCK } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

// A QR-looking pattern for the sample unit card. It is an illustration and does not scan.
// Seeded, so the server render and the browser draw the same picture.
function QrArt({ label }) {
  const N = 25
  let seed = 0x7e1c1
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff)
  const inFinder = (x, y) => [[0, 0], [N - 7, 0], [0, N - 7]].some(([fx, fy]) => x >= fx - 1 && x <= fx + 7 && y >= fy - 1 && y <= fy + 7)
  const cells = []
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!inFinder(x, y) && rnd() > 0.52) cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />)
  const finder = (fx, fy) => (
    <g key={`f${fx}${fy}`}>
      <rect x={fx} y={fy} width="7" height="7" />
      <rect x={fx + 1} y={fy + 1} width="5" height="5" fill="#fff" />
      <rect x={fx + 2} y={fy + 2} width="3" height="3" />
    </g>
  )
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} role="img" aria-label={label} className="size-24 shrink-0 rounded-md bg-white p-1 text-[#14202e]" fill="currentColor" shapeRendering="crispEdges">
      {cells}
      {finder(0, 0)}{finder(N - 7, 0)}{finder(0, N - 7)}
    </svg>
  )
}

function SampleCard() {
  const { t } = useI18n()
  const q = t.qr
  return (
    <figure className="m-0 grid gap-5 rounded-xl bg-(--card) p-6 shadow-[0_12px_32px_-18px_rgba(20,32,46,.35)]">
      <div className="flex items-start gap-4">
        <QrArt label={q.qrAlt} />
        <div className="grid gap-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent"><Dia />{q.example}</span>
          <span className="font-latin text-lg leading-6 tracking-[.03em]">TEKI · TK-0142</span>
          <span className="text-sm font-bold">{q.unit}</span>
          <span className="text-[13px] text-ink-2">{q.place}</span>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-[13px] font-bold">{q.historyTitle}</h3>
        <ul className="grid gap-2">
          {q.history.map(([d, x]) => (
            <li key={d} className="grid grid-cols-[44px_minmax(0,1fr)] gap-2 text-[13px] leading-5">
              <span className="font-semibold text-ink-2">{d}</span><span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-1 rounded-lg bg-bg-2 px-3 py-2.5 text-[13px] leading-5">
        <span className="flex items-center gap-2"><Icon name="shield" className="size-4 text-ok" />{q.warranty}</span>
        <span className="flex items-center gap-2"><Icon name="calendar" className="size-4 text-accent" />{q.next}</span>
      </div>
      <span aria-hidden="true" className="inline-flex min-h-10 items-center justify-center rounded-lg bg-btn px-4 text-sm font-semibold text-white">{q.action}</span>
    </figure>
  )
}

export default function QrSection({ band }) {
  const { t } = useI18n()
  const q = t.qr
  return (
    <Section band={band} labelledBy="qr-title">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,380px)] md:gap-14">
        <div>
          <Kicker>{q.kicker}</Kicker>
          <H2 id="qr-title">{q.title}</H2>
          <Lead>{q.lead}</Lead>
          <ol className="mt-6 grid gap-3">
            {q.steps.map((s, i) => (
              <li key={s} className="grid grid-cols-[28px_minmax(0,1fr)] items-baseline gap-3">
                <span className="text-lg font-extrabold text-accent">0{i + 1}</span>
                <span className="text-sm leading-[22px] text-ink-2">{s}</span>
              </li>
            ))}
          </ol>
          <img src={asset(STOCK.qr)} alt={t.stock.qr} width="800" height="600" loading="lazy" className="mt-6 aspect-[4/3] h-auto w-full max-w-[380px] rounded-xl object-cover" />
        </div>
        <SampleCard />
      </div>
    </Section>
  )
}
