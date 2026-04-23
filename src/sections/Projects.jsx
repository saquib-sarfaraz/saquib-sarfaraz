import ProjectCard from '../components/ProjectCard'
import amazonCloneImg from '../assets/amazon-clone.png'
import graphicThumbnailImg from '../assets/graphic-thumbnail.png'
import ticTacToeImg from '../assets/tic-tac-toe.png'
import { useReveal } from '../hooks/useReveal'

export default function Projects() {
  const titleRevealRef = useReveal()

  const projects = [
    {
      key: 'incampus',
      variant: 'detailed',
      header: {
        type: 'gradient',
        gradientClassName: 'bg-gradient-to-br from-holoCyan/20 via-void to-gray-900',
        overlayClassName: 'bg-holoCyan/10',
        blobClassName:
          'absolute -top-10 -right-10 w-40 h-40 bg-holoCyan/20 blur-3xl rounded-full',
        eyebrowClassName: 'text-holoCyan/80',
        eyebrow: 'Full Stack SaaS',
        name: 'InCampus',
        subtitle: 'Private Campus Social Network',
        statusLabel: 'Live',
        statusClassName:
          'text-[10px] px-2 py-1 rounded-full border border-holoCyan/30 text-holoCyan',
      },
      title: 'InCampus',
      action: {
        type: 'link',
        href: 'https://incampus.online',
        ariaLabel: 'Visit InCampus',
        hoverClassName: 'hover:bg-holoCyan hover:text-void',
      },
      description:
        'A university-exclusive social platform with real-time communication, campus-based feeds, and moderation built for trusted community interaction.',
      features: [
        'Google OAuth + JWT authentication',
        'College-based dynamic feeds with Universal/My College modes',
        'Real-time 1–1 messaging with Socket.io',
        'Report + temporary hide moderation system',
      ],
      techStack: [
        'React',
        'Node.js',
        'Express',
        'MongoDB Atlas',
        'Socket.io',
        'Cloudinary',
        'Vercel',
        'Render',
      ],
      impact: [
        'Designed scalable feed architecture and engagement-weighted ranking',
        'Implemented real-time messaging and moderation burst logic',
      ],
    },
    {
      key: 'incampus-help',
      variant: 'detailed',
      delayClass: 'delay-100',
      header: {
        type: 'gradient',
        gradientClassName: 'bg-gradient-to-br from-white/10 via-void to-gray-900',
        overlayClassName: 'bg-white/5',
        blobClassName:
          'absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 blur-3xl rounded-full',
        eyebrowClassName: 'text-gray-300',
        eyebrow: 'SaaS Support',
        name: 'InCampus Help',
        subtitle: 'Verification & Support Portal',
        statusLabel: 'Live',
        statusClassName:
          'text-[10px] px-2 py-1 rounded-full border border-white/20 text-gray-300',
      },
      title: 'InCampus Help',
      action: {
        type: 'link',
        href: 'https://incampus-help.online',
        ariaLabel: 'Visit InCampus Help',
        hoverClassName: 'hover:bg-white hover:text-void',
      },
      description:
        'A dedicated SaaS-style support and verification portal that centralizes help, feedback, blue tick requests, and transparency resources.',
      features: [
        'Contact support and feedback submission workflows',
        'Blue Tick verification via Google Forms integration',
        'FAQ, featured topics, and legal documentation',
        'Moderation transparency and developer contribution sections',
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Google Forms', 'Netlify'],
      impact: [
        'Structured verification review process and trust transparency',
        'Centralized communication for platform users',
      ],
    },
    {
      key: 'college-search-api',
      variant: 'detailed',
      delayClass: 'delay-200',
      header: {
        type: 'gradient',
        gradientClassName:
          'bg-gradient-to-br from-emerald-400/10 via-void to-gray-900',
        overlayClassName: 'bg-emerald-400/10',
        blobClassName:
          'absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/10 blur-3xl rounded-full',
        eyebrowClassName: 'text-emerald-300',
        eyebrow: 'Backend Service',
        name: 'College Search API',
        subtitle: 'University Lookup Microservice',
        statusLabel: 'Private',
        statusClassName:
          'text-[10px] px-2 py-1 rounded-full border border-white/10 text-gray-400',
      },
      title: 'College Search API',
      action: { type: 'tag', text: 'Backend' },
      description:
        'A RESTful microservice powering dynamic college search and autocomplete during onboarding and filtering.',
      descriptionClassName: 'text-gray-400 text-sm mb-2',
      note: 'Private API, tested through the InCampus frontend.',
      features: [
        'Prefix-based search with indexed queries',
        'Country-based filtering and fallback input support',
        'Auto college-group integration for onboarding',
        'Optimized for low-latency lookup at scale',
      ],
      techStack: ['Node.js', 'Express', 'MongoDB'],
      impact: [
        'Reduced registration friction with autocomplete',
        'Enabled dynamic campus-based grouping',
      ],
    },
    {
      key: 'campus-chat-engine',
      variant: 'detailed',
      delayClass: 'delay-300',
      header: {
        type: 'gradient',
        gradientClassName:
          'bg-gradient-to-br from-neonViolet/20 via-void to-gray-900',
        overlayClassName: 'bg-neonViolet/10',
        blobClassName:
          'absolute -bottom-12 -right-12 w-40 h-40 bg-neonViolet/20 blur-3xl rounded-full',
        eyebrowClassName: 'text-neonViolet',
        eyebrow: 'Real-Time Engine',
        name: 'Campus Chat Engine',
        subtitle: 'Messaging Architecture',
        statusLabel: 'Private',
        statusClassName:
          'text-[10px] px-2 py-1 rounded-full border border-white/10 text-gray-400',
      },
      title: 'Real-Time Campus Chat Engine',
      action: { type: 'tag', text: 'Backend' },
      description:
        'A scalable real-time messaging system with presence, unread tracking, and auto-clean storage for campus communities.',
      descriptionClassName: 'text-gray-400 text-sm mb-2',
      note: 'Private backend, demonstrated through InCampus chat.',
      features: [
        '1–1 chat with friend-request unlock flow',
        'College group + global group messaging',
        'Online presence, unread counts, and notifications',
        'Auto-delete messages after 24 hours',
      ],
      techStack: ['Socket.io', 'Node.js', 'MongoDB', 'React'],
      impact: [
        'Event-driven architecture with optimized message storage',
        'WhatsApp-like UX performance on mobile',
      ],
    },
    {
      key: 'xyxo',
      variant: 'detailed',
      delayClass: 'delay-400',
      header: {
        type: 'gradient',
        gradientClassName:
          'bg-gradient-to-br from-electricBlue/20 via-void to-gray-900',
        overlayClassName: 'bg-electricBlue/10',
        blobClassName:
          'absolute -top-10 -left-10 w-40 h-40 bg-electricBlue/20 blur-3xl rounded-full',
        eyebrowClassName: 'text-electricBlue/80',
        eyebrow: 'Real-Time Multiplayer',
        name: 'XYXO',
        subtitle: 'Multiplayer Tic-Tac-Toe',
        statusLabel: 'Live',
        statusClassName:
          'text-[10px] px-2 py-1 rounded-full border border-electricBlue/30 text-electricBlue',
      },
      title: 'XYXO',
      action: {
        type: 'link',
        href: 'https://xyxo.vercel.app/',
        ariaLabel: 'Visit XYXO',
        hoverClassName: 'hover:bg-electricBlue hover:text-void',
      },
      description:
        'XYXO is a real-time multiplayer web-based game that reimagines Tic-Tac-Toe with socket-based synchronization, room-based matchmaking, and robust session handling.',
      features: [
        'Socket-based real-time move synchronization',
        'Room-based matchmaking and session management',
        'Accurate turn handling with win/draw detection',
        'Automatic match restart',
        'Basic AI mode for solo play',
        'Gameplay statistics for replayability',
      ],
      impact: [
        'Responsive and mobile-friendly UI across devices',
        'Lightweight multiplayer architecture designed for low-latency gameplay',
      ],
    },
    {
      key: 'amazon-clone',
      variant: 'compact',
      delayClass: 'delay-500',
      header: {
        type: 'image',
        overlayClassName: 'bg-holoCyan/10',
        imageSrc: amazonCloneImg,
        imageAlt: 'view wmy work',
      },
      title: 'Amazon Clone',
      action: {
        type: 'link',
        href: 'https://amazon-clone-five-drab.vercel.app/',
        ariaLabel: 'Visit Amazon Clone',
        hoverClassName: 'hover:bg-holoCyan hover:text-void',
      },
      description:
        'A pixel-accurate, responsive Amazon-style storefront built with semantic HTML and modern CSS layouts.',
      tags: ['HTML', 'CSS'],
    },
    {
      key: 'tic-tac-toe',
      variant: 'compact',
      delayClass: 'delay-600',
      header: {
        type: 'image',
        overlayClassName: 'bg-neonViolet/10',
        imageSrc: ticTacToeImg,
        imageAlt: 'view wmy work',
      },
      title: 'Tic Tac Toe',
      action: {
        type: 'link',
        href: 'https://tic-tac-toe-game-bay-two.vercel.app/',
        ariaLabel: 'Visit Tic Tac Toe',
        hoverClassName: 'hover:bg-neonViolet hover:text-void',
      },
      description:
        'A clean, interactive Tic Tac Toe game with win detection and smooth UI feedback powered by vanilla JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      key: 'graphic-portfolio',
      variant: 'compact',
      delayClass: 'delay-700',
      header: {
        type: 'image',
        overlayClassName: 'bg-pink-500/10',
        imageSrc: graphicThumbnailImg,
        imageAlt: 'view wmy work',
      },
      title: 'Graphic Portfolio',
      action: {
        type: 'link',
        href: '/graphic-poster.pdf',
        ariaLabel: 'View Graphic Portfolio PDF',
        hoverClassName: 'hover:bg-pink-400 hover:text-void',
      },
      description: 'A showcase of brand identity and social media typography designs.',
      tags: ['Design', 'Branding'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRevealRef}
          className="font-display text-3xl md:text-4xl font-bold mb-12 text-center reveal"
        >
          Selected <span className="text-holoCyan">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const { key, ...rest } = project
            return <ProjectCard key={key} {...rest} />
          })}
        </div>
      </div>
    </section>
  )
}
