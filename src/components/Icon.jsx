// Line icons, drawn once in a hidden sprite and referenced with <use>.
const PATHS = {
  electric: <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8z" />,
  hvac: <><path d="M12 2.5v19" /><path d="M3.8 7.25l16.4 9.5" /><path d="M20.2 7.25 3.8 16.75" /><path d="M9.5 4l2.5 2.5L14.5 4" /><path d="M9.5 20l2.5-2.5 2.5 2.5" /></>,
  generator: <><path d="M4 7.5h16a1 1 0 0 1 1 1V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.5a1 1 0 0 1 1-1z" /><path d="M8 7.5V5h8v2.5" /><path d="M6 18v2.5" /><path d="M18 18v2.5" /><path d="M12.6 9.5 10.2 13h3.4l-2.4 3.5" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  ticket: <><path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z" /><path d="M14 6v12" strokeDasharray="2 2" /></>,
  box: <><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" /><path d="M3.5 7.5 12 12l8.5-4.5" /><path d="M12 12v9" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4" /><path d="M12 16V8" /><path d="M16 16v-6" /></>,
  image: <><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="m21 16-5-5-8 8" /></>,
  history: <><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6" /><path d="M3.5 4v4h4" /><path d="M12 8v4l3 2" /></>,
  shield: <><path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17" /><path d="M8 3v4" /><path d="M16 3v4" /></>,
  users: <><circle cx="9" cy="8.5" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5.2a3.5 3.5 0 0 1 0 6.6" /><path d="M18 14.2a6.5 6.5 0 0 1 3.5 5.8" /></>,
}

export function IconSprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        {Object.entries(PATHS).map(([id, p]) => <symbol key={id} id={`i-${id}`} viewBox="0 0 24 24">{p}</symbol>)}
      </defs>
    </svg>
  )
}

export default function Icon({ name, className = 'size-5' }) {
  return (
    <svg className={`shrink-0 fill-none stroke-current stroke-[1.75] [stroke-linecap:round] [stroke-linejoin:round] ${className}`} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  )
}
