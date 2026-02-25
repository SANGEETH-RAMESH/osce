import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LandingPage from './osce/LandingPage';
import LandingPage1 from './mentalhealthosce/LandingPage';
import logo from '../assets/logo.png'
import Page1 from './osce/Page1'
import Page3 from './osce/Page3'

function OsceApp() {
  return (
    <div id="print-area">
      <div className="print-page center-page"><LandingPage /></div>
      <div className="print-page center-page"><Page1 start={0} end={5} /></div>
      <div className="print-page center-page"><Page1 start={5} end={10} /></div>
      <div className="print-page"><Page3 /></div>
    </div>
  )
}

function MentalHealthOsceApp() {
  return (
    <div id="print-area">
      <LandingPage1 />
    </div>
  )
}

function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const cards = [
    {
      to: '/osce',
      icon: '🩺',
      label: 'OSCE',
      description: 'Objective Structured Clinical Examination',
      accent: 'bg-sky-500',
      accentLight: 'bg-sky-50',
      accentText: 'text-sky-500',
    },
    {
      to: '/mental-health-osce',
      icon: '🧠',
      label: 'Mental Health OSCE',
      description: 'Psychiatry & Mental Health Assessment',
      accent: 'bg-violet-500',
      accentLight: 'bg-violet-50',
      accentText: 'text-violet-500',
    },
  ]

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center font-sans p-8"
      style={{
        background: '#f8f9fb',
        backgroundImage:
          'radial-gradient(circle at 20% 20%, #e0f2fe 0%, transparent 45%), radial-gradient(circle at 80% 80%, #ede9fe 0%, transparent 45%)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="absolute top-14 left-25 ">
        <img src={logo} alt="Logo" className="h-12 w-auto object-contain filter grayscale invert h-[50px] sm:h-13 lg:h-18 flex-shrink-0" />
      </div>

      {/* Hero */}
      <div
        className="text-center mb-12 transition-all duration-500"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
        }}
      >
        <h1
          className="text-4xl text-gray-900 mb-2 leading-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          OSCE Dashboard
        </h1>
        <p className="text-xs text-gray-400 font-normal tracking-widest uppercase">
          Select an examination module
        </p>
        <div className="h-0.5 w-10 mx-auto mt-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
      </div>

      {/* Cards */}
      {cards.map((card, i) => (
        <Link
          key={card.to}
          to={card.to}
          className="block w-full max-w-md mb-4 rounded-2xl border border-gray-100 bg-white overflow-hidden no-underline text-inherit shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            transition: `transform 0.55s cubic-bezier(0.23,1,0.32,1) ${0.1 + i * 0.1}s, opacity 0.55s ease ${0.1 + i * 0.1}s, box-shadow 0.2s ease, translate 0.2s ease`,
          }}
        >
          {/* Top accent bar */}
          <div className={`h-1.5 w-full ${card.accent}`} />

          {/* Card body */}
          <div className="flex items-center gap-5 px-7 py-6">
            <div className={`w-13 h-13 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${card.accentLight}`}
              style={{ width: 52, height: 52 }}>
              {card.icon}
            </div>
            <div className="flex-1">
              <div
                className="text-xl text-gray-900 leading-snug mb-0.5"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {card.label}
              </div>
              <div className="text-xs text-gray-500 font-normal tracking-wide">
                {card.description}
              </div>
            </div>
            <div className="text-gray-400 text-lg flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">
              →
            </div>
          </div>
        </Link>
      ))}

      {/* Footer */}
      <p
        className="mt-10 text-xs text-gray-300 transition-opacity duration-500"
        style={{ opacity: mounted ? 1 : 0, transitionDelay: '0.6s' }}
      >
        Clinical Examination Resources
      </p>
    </div>
  )
}

export default function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/osce" element={<OsceApp />} />
        <Route path="/mental-health-osce" element={<MentalHealthOsceApp />} />
      </Routes>
    </Router>
  )
}