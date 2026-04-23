import { useReveal } from '../hooks/useReveal'

function ExperienceCard({
  delayClass = '',
  dateClassName,
  date,
  title,
  org,
  bullets,
}) {
  const revealRef = useReveal()

  return (
    <div
      ref={revealRef}
      className={`glass-panel rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:bg-white/5 transition-colors reveal ${delayClass}`.trim()}
    >
      <div className={`${dateClassName} text-lg font-mono whitespace-nowrap min-w-[120px]`}>
        {date}
      </div>
      <div className="w-px bg-white/10 hidden md:block"></div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="text-gray-400 mb-3">{org}</div>
        <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const titleRevealRef = useReveal()

  const timeline = [
    {
      key: 'gfg-campus-mantri',
      dateClassName: 'text-holoCyan',
      date: '2025 - 2026',
      title: 'Campus Mantri',
      org: 'GeeksforGeeks',
      bullets: [
        'As a GfG Campus Mantri, I connect students with coding opportunities.',
        'I foster teamwork, guide peers to resources, and organize impactful coding initiatives.',
        'This role enhances my leadership, empowering others and strengthening Jamia Hamdard’s coding culture.',
      ],
    },
    {
      key: 'pizeonfly-intern',
      delayClass: 'delay-100',
      dateClassName: 'text-gray-500',
      date: "Sep - Oct '24",
      title: 'Web Developer Intern',
      org: 'Pizeonfly Pvt Ltd.',
      bullets: [
        'Completed a one-month internship focused on web development.',
        'Gained hands-on experience in designing and deploying web apps.',
        'Collaborated with the team to optimize website functionality.',
      ],
    },
    {
      key: 'leadership-roles',
      delayClass: 'delay-200',
      dateClassName: 'text-gray-500',
      date: '2023 - 2024',
      title: 'Leadership Roles',
      org: 'Ignite Society, Hacked, GDSC',
      bullets: [
        'Led initiatives that bridged students with industry professionals.',
        'Actively participated in creative projects and events to foster a collaborative community.',
        'Served as Joint Secretary of the Ignite Society, overseeing strategic direction, event planning, and execution.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRevealRef}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center reveal"
        >
          Experience <span className="text-holoCyan">Timeline</span>
        </h2>

        <div className="space-y-6">
          {timeline.map((item) => {
            const { key, ...rest } = item
            return <ExperienceCard key={key} {...rest} />
          })}
        </div>
      </div>
    </section>
  )
}

