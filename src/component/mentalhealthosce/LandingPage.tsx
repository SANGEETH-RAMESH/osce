import { useState } from "react";
import CalendarCard from "./CalendarCard";
import logo from '../../assets/logo.png';
import nurselogo from '../../assets/nurse.jpg';

const mockEvents = [
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
};

const SESSION_META = [
    { n: 1, label: "Session 1 · 10:00 AM – 12:00 PM" },
    { n: 2, label: "Session 2 · 08:30 PM – 10:30 PM" },
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function LandingPage() {
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

    const eventMap = Object.fromEntries(mockEvents.map(e => [e.date, e]));
    const [isDownloading] = useState(false);

    const handleDownloadPDF = () => { window.print(); };

    const goBack = () => {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
    };
    const goForward = () => {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
    };

    return (
        <div className="bg-[#2E817B] w-full min-h-screen print:h-[100vh] relative">
            <img
                src={nurselogo}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
            />

            <div
                id="print-area"
                className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 py-6 font-[Nunito,Poppins,sans-serif]"
            >
                <div className="w-full flex items-center justify-between mb-5 px-6 box-border">
                    <img
                        src={logo}
                        alt="MentorMerlin Logo"
                        className="h-[50px] sm:h-13 lg:h-18 flex-shrink-0 ml-[60px] mt-[31px]"
                    />

                    <div className="text-center flex-1">
                        <div className="text-[#7C3AED] font-black text-[clamp(11px,2vw,15px)] tracking-[0.12em] uppercase">
                            Mental Health OSCE
                        </div>
                        <div className="text-[#f8fafc] font-extrabold text-[clamp(18px,4vw,28px)] leading-tight">
                            Session Calendar
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2.5">
                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={goBack}
                                className="bg-[#334155] border-none text-white rounded-full w-8 h-8 cursor-pointer text-lg flex items-center justify-center"
                            >
                                ‹
                            </button>

                            <div className="bg-[#1e293b] border-2 border-[#334155] rounded-xl px-[18px] py-1.5 text-center">
                                <div className="text-white font-extrabold text-base">{MONTHS[month]}</div>
                                <div className="text-[#94a3b8] text-xs">{year}</div>
                            </div>

                            <button
                                onClick={goForward}
                                className="bg-[#334155] border-none text-white rounded-full w-8 h-8 cursor-pointer text-lg flex items-center justify-center"
                            >
                                ›
                            </button>
                        </div>

                        <button
                            onClick={handleDownloadPDF}
                            disabled={isDownloading}
                            className="flex items-center gap-2 bg-white text-[#0EA5E9] font-bold text-xs px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md hover:bg-white/90 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isDownloading ? "Generating PDF…" : "Download PDF"}
                        </button>
                    </div>
                </div>

                <div className="max-w-[900px] mx-auto mb-3.5 flex gap-4 flex-wrap justify-center">
                    {SESSION_META.map(s => (
                        <div key={s.n} className="flex items-center gap-1.5">
                            <span
                                className={`w-3 h-3 rounded-full inline-block ${SESSION_COLORS[s.n as keyof typeof SESSION_COLORS].dot}`}
                            />
                            <span className="text-[#94a3b8] text-xs font-semibold">{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="max-w-[900px] mx-auto mb-1.5 grid grid-cols-7 gap-1.5">
                    {DAY_NAMES.map(d => (
                        <div
                            key={d}
                            className="text-[#64748b] font-bold text-[clamp(7px,1.3vw,11px)] text-center uppercase tracking-[0.07em]"
                        >
                            {d.slice(0, 3)}
                        </div>
                    ))}
                </div>

                <div className="max-w-[900px] mx-auto grid grid-cols-7 gap-1.5">
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