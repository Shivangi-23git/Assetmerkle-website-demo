
'use client'

import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Handshake,
  LogIn,
  Menu,
  Users,
  X,
} from 'lucide-react'

import { useEffect, useRef, useState } from 'react'

const exploreCards = [
  {
    icon: 'terminal',
    title: 'AM Hacks 2.0',
    description: 'Our annual flagship Web3 hackathon with massive prizes and custom dev tracks.',
  },
  {
    icon: 'book',
    title: 'Web3 Learning Docs',
    description: 'Curated, beginner-to-expert guides for mastering Solidity, Rust, and dApps.',
  },
  {
    icon: 'users',
    title: 'Meet The Builders',
    description: 'Meet the core team directing the society initiatives and supporting innovators.',
  },
]

const events = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creating%20impact%20through%20events-pDKf1Zzm3Fqu1JTGjqmDEyCjOzmqCZ.png',
    title: 'BFF Hackathon',
    description: 'Unleashing the digital creativity at the ultimate hackathon showdown💥 We dived into the world where tech meets enthusiasm: BFF Hackathon organised by Assetmerkle IGDTUW and AUV-DTU🕸️',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creating%20impact%20through%20events-pDKf1Zzm3Fqu1JTGjqmDEyCjOzmqCZ.png',
    title: 'FastN Session',
    description: 'Assetmerkle IGDTUW collaborated with FastN and conducted a Roadshow. The roadshow consisted of enhancing the coding skills using fastN stack to build',
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Creating%20impact%20through%20events-pDKf1Zzm3Fqu1JTGjqmDEyCjOzmqCZ.png',
    title: 'Web3 Cohort',
    description: 'AssetMerkle IGDTUW has an ongoing mentorship cohort on web3 - we had started from scratch - right from the beginning of with Javascript, frontend development with ReactJs',
  },
]

function Icon({ name }: { name: string }) {
  if (name === 'book') return <BookOpen aria-hidden="true" />
  if (name === 'users') return <Users aria-hidden="true" />
  return <span className="terminal-icon" aria-hidden="true">›_</span>
}

/* Animated robot component */

function RobotMascot() {
  const headRef = useRef<HTMLImageElement>(null)
  const bodyRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const target = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const current = { ...target }

    const handlePointerMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    window.addEventListener('pointermove', handlePointerMove)

    let animationId: number

    const animate = () => {
      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08

      const dx = current.x - window.innerWidth / 2
      const dy = current.y - (window.innerHeight / 2 - 125)

      const direction = Math.max(-1, Math.min(1, dx / 250))

      if (headRef.current) {
        const moveX = direction * 13
        const moveY = Math.max(-6, Math.min(6, dy * 0.015))
        const turn = direction * 9

        headRef.current.style.transform =
          `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px) rotateZ(${turn}deg)`
      }

      if (bodyRef.current) {
        const bodyMove = direction * 3
        const bodyTilt = direction * 2

        bodyRef.current.style.transform =
          `translateX(calc(-50% + ${bodyMove}px)) rotateZ(${bodyTilt}deg)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="robot-stage">
      <div className="robot-container">
        <img
          ref={headRef}
          src="/robot-head.png"
          alt="Animated robot head"
          draggable={false}
          className="robot-head"
        />

        <img
          ref={bodyRef}
          src="/robot-body.png"
          alt="Animated robot body"
          draggable={false}
          className="robot-body"
        />
      </div>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [eventIndex, setEventIndex] = useState(0)

  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="AssetMerkle home">
          <span className="brand-mark">A</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a className="active" href="#about">ABOUT</a>
          <a href="#events">EVENTS</a>
          <a href="#team">TEAM</a>
          <a href="#faq">FAQ</a>
          <a href="#docs">DOCS</a>
          <a href="#community">WEB3 COMMUNITY</a>
          <span className="nav-spacer" />
          <a className="shevibes" href="#community">SHEVIBES</a>
        </div>
      </nav>

      <section id="top" className="hero dotted-section">

        <div className="hero-artwork">
          <RobotMascot />
        </div>

        <div className="hero-copy" id="about">
          <h1>
            Empowering <em>Students</em> to shape a trustworthy <em>World</em> with Web3
          </h1>

          <p>
            We are AssetMerkle, the premier student-led Web3 and Blockchain
            community of IGDTUW. We design next-gen dApps, launch national
            hackathons, and shape the builders of tomorrow.
          </p>

          <div className="hero-actions">
            <a className="gold-button" href="#community">
              <LogIn /> LOGIN / SIGN UP
            </a>
            <a className="outline-button" href="#community">
              JOIN COMMUNITY
            </a>
          </div>
        </div>
      </section>

      <section id="docs" className="section explore-section">
        <h2>Explore AssetMerkle</h2>

        <div className="explore-grid">
          {exploreCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <div className="icon-box">
                <Icon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href="#events">
                EXPLORE <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="section team-section">
        <h2>Our Team</h2>
        <div className="team-frame">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20team-MD555YHDvI3dwlWQlyLgkwD84hBVNj.png"
            alt="AssetMerkle team gathered in an auditorium"
          />
        </div>
      </section>

      <section id="events" className="section events-section">
        <h2>Creating Impact Through Events</h2>

        <div className="event-grid">
          {events.map((event, index) => (
            <article
              className={`event-card ${index === eventIndex ? 'selected' : ''}`}
              key={event.title}
            >
              <img src={event.image} alt="AssetMerkle event" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <a href="#events">
                Read More <ArrowRight />
              </a>
            </article>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            onClick={() => setEventIndex(Math.max(0, eventIndex - 1))}
            aria-label="Previous event"
          >
            <ArrowLeft />
          </button>

          <div className="dots">
            {events.map((_, i) => (
              <button
                key={i}
                onClick={() => setEventIndex(i)}
                className={i === eventIndex ? 'current' : ''}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setEventIndex(Math.min(events.length - 1, eventIndex + 1))}
            aria-label="Next event"
          >
            <ArrowRight />
          </button>
        </div>
      </section>

      <section id="community" className="section partner-section dotted-section">
        <h2>Partner With Us</h2>

        <p className="section-intro">
          Whether you're looking to collaborate or sponsor, your journey with our Web3
          <br className="desktop-only" /> community starts here.
        </p>

        <div className="partner-grid">
          <article className="partner-card">
            <div className="icon-box">
              <Handshake />
            </div>
            <h3>COLLABORATE</h3>
            <p>
              Unlock the power of collaboration and knowledge-sharing in
              blockchain and web3 technology with our vibrant community.
            </p>
            <a href="#community" aria-label="Collaborate">
              <ArrowDownRight />
            </a>
          </article>

          <article className="partner-card">
            <div className="icon-box">
              <span className="diamond">◇</span>
            </div>
            <h3>SPONSOR</h3>
            <p>
              Boost your brand and empower innovation in blockchain and web3
              technology as a valued community sponsor.
            </p>
            <a href="#community" aria-label="Sponsor">
              <ArrowDownRight />
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}
