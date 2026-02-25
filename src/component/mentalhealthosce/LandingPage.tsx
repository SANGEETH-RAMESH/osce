import { useState } from "react";
import CalendarCard from "./CalendarCard";
import logo from "../../assets/logo.png";
import nurselogo from "../../assets/nurse.jpg";


type SessionType = 1 | 2;

interface EventItem {
  date: number;
  session: SessionType;
  time: string;
  topic: string;
}


const mockEvents: EventItem[] = [
  { date: 1, session: 1, time: "10:00 AM – 12:00 PM", topic: "Assessment" },
  { date: 2, session: 1, time: "10:00 AM – 12:00 PM", topic: "Planning" },
  { date: 3, session: 1, time: "10:00 AM – 12:00 PM", topic: "Implementation & Evaluation" },
  { date: 4, session: 1, time: "10:00 AM – 12:00 PM", topic: "PV & EBP" },
  { date: 5, session: 1, time: "10:00 AM – 12:00 PM", topic: "Talking Therapy & De-escalation" },
  { date: 6, session: 1, time: "10:00 AM – 12:00 PM", topic: "Nutritional Assessment & Physiological Observation" },
  { date: 7, session: 1, time: "10:00 AM – 12:00 PM", topic: "IM Injection & Reminiscence Therapy" },
  { date: 8, session: 1, time: "10:00 AM – 12:00 PM", topic: "Self Revision" },
  { date: 9, session: 1, time: "10:00 AM – 12:00 PM", topic: "Self Revision" },
  { date: 10, session: 1, time: "10:00 AM – 12:00 PM", topic: "Self Revision" },

  { date: 20, session: 2, time: "08:30 PM – 10:30 PM", topic: "Assessment" },
  { date: 21, session: 2, time: "08:30 PM – 10:30 PM", topic: "Planning" },
  { date: 22, session: 2, time: "08:30 PM – 10:30 PM", topic: "Implementation & Evaluation" },
  { date: 23, session: 2, time: "08:30 PM – 10:30 PM", topic: "PV & EBP" },
  { date: 24, session: 2, time: "08:30 PM – 10:30 PM", topic: "Talking Therapy & De-escalation" },
  { date: 25, session: 2, time: "08:30 PM – 10:30 PM", topic: "Nutritional Assessment & Physiological Observation" },
  { date: 26, session: 2, time: "08:30 PM – 10:30 PM", topic: "IM Injection & Reminiscence Therapy" },
  { date: 27, session: 2, time: "08:30 PM – 10:30 PM", topic: "Self Revision" },
  { date: 28, session: 2, time: "08:30 PM – 10:30 PM", topic: "Self Revision" },
];


const SESSION_COLORS = {
  1: { dot: "bg-[#7C3AED]", label: "text-[#94a3b8]" },
  2: { dot: "bg-[#0EA5E9]", label: "text-[#94a3b8]" },
} as const;

const SESSION_META = [
  { n: 1 as SessionType, label: "Session 1 · 10:00 AM – 12:00 PM" },
  { n: 2 as SessionType, label: "Session 2 · 08:30 PM – 10:30 PM" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export default function LandingPage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [isDownloading] = useState(false);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const eventMap: Record<number, EventItem> = {};
  mockEvents.forEach((e) => {
    eventMap[e.date] = e;
  });

  const handleDownloadPDF = () => {
    window.print();
  };

  const goBack = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  };

  const goForward = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  };

  return (
    <div className="bg-[#2E817B] w-full min-h-screen relative">
      <img
        src={nurselogo}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
      />

      <div className="min-h-screen px-4 py-6 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />

          <div className="text-center">
            <div className="text-purple-600 font-bold text-sm uppercase">
              Mental Health OSCE
            </div>
            <div className="text-white text-xl font-extrabold">
              Session Calendar
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button onClick={goBack}>‹</button>
              <div className="text-white font-bold">
                {MONTHS[month]} {year}
              </div>
              <button onClick={goForward}>›</button>
            </div>

            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-white text-blue-500 text-xs px-3 py-1 rounded"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          {SESSION_META.map((s) => (
            <div key={s.n} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${SESSION_COLORS[s.n].dot}`}
              />
              <span className="text-gray-300 text-xs">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {DAY_NAMES.map((d) => (
            <div key={d} className="text-center text-gray-400 text-xs font-bold">
              {d.slice(0, 3)}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {cells.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} />;

            const ev = eventMap[day];
            const wdIdx = new Date(year, month, day).getDay();

            return (
              <CalendarCard
                key={`${year}-${month}-${day}`}
                dayName={DAY_NAMES[wdIdx]}
                dayShort={DAY_SHORT[wdIdx]}
                dateNum={day}
                session={ev?.session}
                time={ev?.time}
                topic={ev?.topic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}