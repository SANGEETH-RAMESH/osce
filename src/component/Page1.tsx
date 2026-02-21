import { useEffect, useState } from "react";
import nurselogo from '../assets/nurse.jpg';

interface Page1Props {
  start?: number;
  end?: number;
}

const days = [
  {
    day: "01",
    regularSession: "8:30 PM",
    topics: ["Introduction", "Assessment"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "02",
    regularSession: "8:30 PM",
    topics: ["Planning", "Implementation", "Evaluation"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "03",
    regularSession: "8:30 PM",
    topics: ["Professional values and behaviors", "Evidence-based practice"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "04",
    regularSession: "8:30 PM",
    topics: ["IM Injection", "Subcutaneous Injection", "VIP Scoring & IV Flush", "Blood Glucose Monitoring"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "05",
    regularSession: "8:30 PM",
    topics: ["Fine-bore Nasogastric Tube", "Pain Assessment", "Wound Assessment", "ANTT", "Anti-embolic Stockings"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "06",
    regularSession: "8:30 PM",
    topics: ["Removal of Catheter", "Catheter Sample of Urine", "Oral Care Plan", "Mid-stream Urine Analysis", "Pre-operative Assessment"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "07",
    regularSession: "8:30 PM",
    topics: ["Fluid Balance", "Pressure Area Assessment", "Bowel Assessment", "Nutritional Assessment"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "08",
    regularSession: "8:30 PM",
    topics: ["Administration of Suppository", "Oxygen Therapy", "Administration of Inhaled Medication", "Peak Expiratory Flow Rate"],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "09",
    regularSession: "10:00 AM – 6:00 PM",
    topics: [],
    mode: "Self-Revision",
    isRevision: true,
  },
  {
    day: "10",
    regularSession: "10:00 AM – 6:00 PM",
    topics: [],
    mode: "Self-Revision",
    isRevision: true,
  },
];

const Page1 = ({ start , end }: Page1Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative px-6 pt-8 pb-6 print:pt-4 print:pb-4 font-[Nunito,Poppins,sans-serif] print:min-h-[270mm]"
      style={{ background: "linear-gradient(145deg, #1a5c58 0%, #2E817B 40%, #4db8b2 75%, #64C7C5 100%)" }}
    >
      <img
        src={nurselogo}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      {start! <= 5&&end!<=5 && <div className="text-center mb-10">
        <p className="text-white/70 text-[11px] font-bold tracking-[4px] uppercase m-0 mb-2.5">
          Nursing Skills Programme
        </p>
        <h1 className="text-white font-extrabold m-0 tracking-tight leading-[1.15] text-[clamp(24px,5vw,40px)]">
          Online Training Schedule
        </h1>
        <p className="text-white/65 text-sm mt-2.5">
          10-day structured clinical skills programme · Live &amp; repeat sessions available
        </p>
      </div>}


      <div
        className={`max-w-[960px] mx-auto rounded-[20px] overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
      >
        <div className="overflow-x-auto">
          <table
            className="print:bg-white"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.18)" }}>
                {["Day", "Regular Session", "Repeat Session", "Topics", "Mode"].map((header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-5 py-4 text-left text-white text-[11px] font-extrabold tracking-[2px] uppercase whitespace-nowrap border-b border-white/20"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.slice(start, end).map((item, index) => (
                <tr
                  key={index}
                  className="transition-all duration-200"
                  style={{
                    borderBottom: index < days.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    background: item.isRevision
                      ? "rgba(255,217,81,0.08)"
                      : index % 2 === 0
                        ? "rgba(255,255,255,0.04)"
                        : "transparent",
                  }}
                  onMouseEnter={e =>
                  (e.currentTarget.style.background = item.isRevision
                    ? "rgba(255,217,81,0.16)"
                    : "rgba(255,255,255,0.12)")
                  }
                  onMouseLeave={e =>
                  (e.currentTarget.style.background = item.isRevision
                    ? "rgba(255,217,81,0.08)"
                    : index % 2 === 0
                      ? "rgba(255,255,255,0.04)"
                      : "transparent")
                  }
                >
                  <td className="px-4 sm:px-5 py-4 print:py-3 whitespace-nowrap">
                    <div
                      className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full flex flex-col items-center justify-center"
                      style={{
                        background: item.isRevision
                          ? "linear-gradient(135deg, #FFD951, #ffb700)"
                          : "rgba(255,255,255,0.95)",
                        boxShadow: item.isRevision
                          ? "0 4px 16px rgba(255,185,0,0.35), 0 0 0 4px rgba(255,217,81,0.25)"
                          : "0 4px 14px rgba(0,0,0,0.15)",
                      }}
                    >
                      <span className={`text-[9px] font-extrabold tracking-[1px] uppercase leading-none ${item.isRevision ? "text-black/55" : "text-[#2E817B]"}`}>
                        Day
                      </span>
                      <span className={`text-lg font-black leading-[1.1] ${item.isRevision ? "text-[#1a3a00]" : "text-[#1a5c58]"}`}>
                        {item.day}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 sm:px-5 py-[18px] whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.isRevision ? "📅" : "🕗"}</span>
                      <span className="text-white font-bold text-sm sm:text-[15px]">{item.regularSession}</span>
                    </div>
                  </td>

                  <td className="px-4 sm:px-5 py-[18px] whitespace-nowrap">
                    {item.isRevision ? (
                      <span className="text-white/35 text-lg">—</span>
                    ) : (
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🔄</span>
                          <span className="text-white font-bold text-sm sm:text-[15px]">10:00 AM</span>
                        </div>
                        <span className="text-white/50 text-[11px] pl-6">Next Day</span>
                      </div>
                    )}
                  </td>

                  <td className="px-4 sm:px-5 py-[18px]">
                    {item.isRevision ? (
                      <span className="text-[#FFD951]/80 text-[13px] font-semibold italic">
                        Personal study &amp; review
                      </span>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {item.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>

                  <td className="px-4 sm:px-5 py-[18px] whitespace-nowrap">
                    <span className="bg-[#FFD951] text-[#1a3a38] px-3.5 py-[5px] rounded-[20px] font-extrabold text-[11px] tracking-[0.5px] uppercase inline-flex items-center gap-1">
                      {item.isRevision ? "✏️ " : ""}{item.mode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page1;