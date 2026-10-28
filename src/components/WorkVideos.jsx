import { useEffect, useRef, useState } from 'react'
import { More, SecHead, Section, Lead, asset } from './ui.jsx'
import { VIDEOS } from '../content.js'
import { useI18n } from '../i18n/index.jsx'

// A silent loop that plays only while on screen. With reduced motion it stays on its poster with controls.
function Clip({ src, caption }) {
  const ref = useRef(null)
  const [still, setStill] = useState(false)
  useEffect(() => {
    const v = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStill(true); return }
    v.muted = true // React doesn't carry `muted` over from server-rendered markup; autoplay needs it.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.3 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <figure className="m-0">
      <video
        ref={ref}
        src={asset(`${src}.mp4`)}
        poster={asset(`${src}.jpg`)}
        muted
        loop
        playsInline
        preload="metadata"
        controls={still}
        aria-label={caption}
        className="aspect-[9/16] w-full rounded-xl bg-bg-2 object-cover"
      />
      <figcaption className="mt-2 text-[13px] leading-5 text-ink-2">{caption}</figcaption>
    </figure>
  )
}

// `limit` shows only the first clips (the home page uses four). `videos` and `copy` swap in another
// set, such as the illustrative stock clips on the services page.
export default function WorkVideos({ band, more, limit, videos = VIDEOS, copy, id = 'work-title' }) {
  const { t } = useI18n()
  const w = copy ?? t.work
  return (
    <Section band={band} labelledBy={id}>
      <SecHead kicker={w.kicker} title={w.title} id={id} more={more && <More to="/team/">{w.more}</More>}>
        <Lead>{w.lead}</Lead>
      </SecHead>
      <div className={`mt-8 grid grid-cols-2 gap-4 ${videos.slice(0, limit).length === 5 ? 'max-w-[1100px] md:grid-cols-5' : 'max-w-[880px] md:grid-cols-4'}`}>
        {videos.slice(0, limit).map((src, i) => <Clip key={src} src={src} caption={w.clips[i]} />)}
      </div>
    </Section>
  )
}
