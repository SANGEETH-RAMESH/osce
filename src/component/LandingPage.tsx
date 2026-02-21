import { useState } from "react";
import logo from "../assets/logo.png";
import CalendarCard from "./CalendarCard";
import nurselogo from '../assets/nurse.jpg'

const MONTHS = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

const generateSessions = (daysInMonth: number) => {
    const sessions = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const posInCycle = ((day - 1) % 10) + 1;
        if (day > 28) {
            sessions.push(null);
            continue;
        }

        let top = "", topLabel = "", bottom = "", bottomLabel = "";
        let singleSession = false;

        if (posInCycle === 1) {
            top = day === 1 ? "" : "Day 10";
            topLabel = day === 1 ? "" : "Self Revision";
            bottom = "Day 1";
            bottomLabel = "Regular Session";
            if (day === 1) singleSession = true;
        } else if (posInCycle >= 2 && posInCycle <= 8) {
            top = `Day ${posInCycle - 1}`;
            topLabel = "Repeated Session";
            bottom = `Day ${posInCycle}`;
            bottomLabel = "Regular Session";
        } else if (posInCycle === 9) {
            top = "Day 8";
            topLabel = "Repeated Session";
            bottom = "Day 9";
            bottomLabel = "Self Revision";
        } else if (posInCycle === 10) {
            top = "Day 9";
            topLabel = "Self Revision";
            bottom = "Day 10";
            bottomLabel = "Self Revision";
        }

        sessions.push({ top, topLabel, bottom, bottomLabel, singleSession });
    }

    return sessions;
};

const LandingPage = () => {
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [showPicker, setShowPicker] = useState(false);
    const [pickerYear, setPickerYear] = useState(today.getFullYear());
    const [isDownloading] = useState(false);

    const handleDownloadPDF = () => {
        window.print();
    };

    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const sessions = generateSessions(daysInMonth);

    const goBack = () => {
        if (month === 0) { setMonth(11); setYear(y => y - 1); }
        else setMonth(m => m - 1);
    };

    const goForward = () => {
        if (month === 11) { setMonth(0); setYear(y => y + 1); }
        else setMonth(m => m + 1);
    };

    const selectMonth = (m: number) => {
        setMonth(m);
        setYear(pickerYear);
        setShowPicker(false);
    };

    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    days.forEach(d => cells.push(d));

    return (
        <div className="bg-[#2E817B] w-full min-h-screen print:h-[100vh] relative">
            <img
                src={nurselogo}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
            />

            <div
                id="print-area"
                className="mx-auto min-h-screen print:h-full print:flex print:flex-col print:justify-center relative font-[Poppins,sans-serif]
                px-3 pt-10 pb-6 
                sm:px-6 sm:pt-12 sm:pb-8 
                lg:px-10 lg:pt-14 lg:pb-10 
                max-w-[1400px] 
                print:max-w-none print:px-6 print:pt-6 print:pb-6"
            >

                <div className="relative z-10 flex flex-wrap justify-between items-start gap-3 mb-3 sm:mb-4 lg:mb-5">
                    <img src={logo} alt="MentorMerlin Logo" className="h-[50px] sm:h-13 lg:h-18 flex-shrink-0" />

                    <div className="flex flex-col items-center gap-1 relative ml-auto">
                        <div className="text-white font-extrabold text-xs sm:text-sm lg:text-base tracking-normal sm:tracking-widest text-left sm:text-center uppercase drop-shadow">
                            OSCE LIVE SESSIONS – 10 STATIONS
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-3">

                            <button onClick={goBack} className="bg-white/15 rounded-full text-white text-base w-6 h-6 sm:w-7 sm:h-7 flex justify-center items-center hover:bg-white/[0.28]">
                                ‹
                            </button>

                            <button
                                onClick={() => { setPickerYear(year); setShowPicker(s => !s); }}
                                className="bg-white/[0.12] border-2 border-white/30 rounded-lg text-white px-2 py-1 sm:px-3 sm:py-1 text-center hover:bg-white/[0.22]"
                            >
                                <div className="font-bold text-sm sm:text-base lg:text-lg leading-tight">{MONTHS[month]}</div>
                                <div className="font-normal text-xs opacity-85 leading-tight">{year}</div>
                            </button>

                            <button onClick={goForward} className="bg-white/15 rounded-full text-white text-base w-6 h-6 sm:w-7 sm:h-7 flex justify-center items-center hover:bg-white/[0.28]">
                                ›
                            </button>

                        </div>

                        <button
                            onClick={handleDownloadPDF}
                            disabled={isDownloading}
                            className="flex items-center gap-2 bg-white text-[#2E817B] font-bold text-xs px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md hover:bg-white/90 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isDownloading ? "Generating PDF…" : "Download PDF"}
                        </button>

                        {showPicker && (
                            <div className="absolute top-[120px] sm:top-[138px] lg:top-[155px] left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 bg-white rounded-2xl shadow-lg p-5 z-50 w-[calc(100vw-24px)] sm:w-[260px]">
                                <div className="flex justify-between mb-3.5">
                                    <button onClick={() => setPickerYear(y => y - 1)} className="bg-[#f0f0f0] py-1 px-3 rounded-lg font-bold text-[#2E817B]">‹</button>
                                    <span className="font-bold text-lg text-[#2E817B]">{pickerYear}</span>
                                    <button onClick={() => setPickerYear(y => y + 1)} className="bg-[#f0f0f0] py-1 px-3 rounded-lg font-bold text-[#2E817B]">›</button>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {MONTHS.map((m, idx) => (
                                        <button
                                            key={m}
                                            onClick={() => selectMonth(idx)}
                                            className={`py-2 rounded-lg text-xs transition-colors duration-150 ${idx === month && pickerYear === year
                                                ? "bg-[#2E817B] text-white font-bold"
                                                : "bg-[#f4f4f4] text-[#333] hover:bg-[#d8f0ee]"
                                                }`}
                                        >
                                            {m.slice(0, 3)}
                                        </button>
                                    ))}
                                </div>

                                <button onClick={() => setShowPicker(false)} className="mt-3 w-full py-2 rounded-lg bg-[#f4f4f4] text-[#666] text-sm">
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* <div className="relative z-10 w-full max-w-[1400px] mx-auto print:w-full mx-auto mb-2 overflow-x-auto">
                <div className="min-w-[420px] md:min-w-0 grid grid-cols-7 text-center gap-1 sm:gap-2 lg:gap-4">
                    {DAY_NAMES.map(d => (
                        <div key={d} className="text-white/75 font-semibold text-[10px] sm:text-[10px] lg:text-[12px]">
                            <span className="sm:hidden">{d.slice(0, 1)}</span>
                            <span className="hidden sm:inline">{d.slice(0, 3)}</span>
                        </div>
                    ))}
                </div>
            </div> */}

                <div className="relative z-10 w-full sm:w-[95%] lg:w-[70%] print:w-[85%] mx-auto overflow-x-auto print:overflow-visible">
  <div className="min-w-[560px] md:min-w-0 grid grid-cols-7 gap-1 sm:gap-2 lg:gap-4">
                        {cells.map((day, idx) => {
                            if (day === null) return <div key={`empty-${idx}`} />;

                            const session = sessions[day - 1];

                            const realDate = new Date(year, month, day);
                            const weekdayName = DAY_NAMES[realDate.getDay()];

                            if (!session) {
                                return (
                                    <CalendarCard
                                        key={day}
                                        dayName={weekdayName}
                                        dateNum={day}
                                        singleSession={true}
                                    />
                                );
                            }

                            const { top, topLabel, bottom, bottomLabel, singleSession } = session;

                            return (
                                <CalendarCard
                                    key={day}
                                    dayName={weekdayName}
                                    dateNum={day}
                                    repeatDay={top ? Number(top.replace("Day ", "")) : undefined}
                                    repeatLabel={top ? topLabel : undefined}
                                    regDay={bottom ? Number(bottom.replace("Day ", "")) : undefined}
                                    regLabel={bottom ? bottomLabel : undefined}
                                    singleSession={singleSession || !top}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;