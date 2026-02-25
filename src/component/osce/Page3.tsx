import hospital from '../../assets/hospital.png';
import nurselogo from '../../assets/nurse.jpg'

const rows = [
  {
    day: "Day 1",
    time: "9:30 AM to 6:30 PM",
    badge: "On-site",
    content: "Skills Revision & Practice",
    subtext: null,
  },
  {
    day: "Day 2",
    time: "9:30 AM to 6:30 PM",
    badge: "On-site",
    content: "Skills Revision & Practice",
    subtext: null,
  },
  {
    day: "Day 3",
    time: "9:30 AM to 6:30 PM",
    badge: "On-site",
    content: "APIE Revision & Practice",
    subtext: null,
  },
  {
    day: "Day 4",
    time: "9:45 AM to 6:30 PM",
    badge: "On-site",
    content: "APIE Mock Test, Skills Revision & Practice, Day 5 Mock Test Preparation",
    subtext: null,
  },
  {
    day: "Day 5",
    time: "9:45 AM to 6:30 PM",
    badge: "On-site",
    content: "Skills Mock Test, PV & EBP",
    subtext: null,
  },
  {
    day: "Day 6",
    time: null,
    badge: "On-site",
    content: "Result Booster Examination",
    subtext: "One day before the exam date",
  },
];

const Page3 = () => {
  return (
    <div
      className="px-6 pt-8 pb-6 print:pt-4 print:pb-4 print:px-4 font-[Nunito,Poppins,sans-serif] box-border relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #1a5c58 0%, #2E817B 40%, #4db8b2 75%, #64C7C5 100%)" }}
    >
      <img
        src={nurselogo}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0"
      />

      <div className="relative z-10 flex items-center justify-between mb-11 print:mb-6 flex-wrap gap-3">
        <div className="flex-1 text-center">
          <h1 className="text-white font-extrabold m-0 tracking-tight leading-[1.15] text-[clamp(24px,5vw,40px)]">
            On-site Training
          </h1>
          <p className="text-white/65 text-sm mt-2.5">
            Leeds, London &amp; Northampton
          </p>
        </div>
        <div className="w-[50px] sm:w-16 lg:w-20" />
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3.5 print:border-spacing-y-1">
          <thead>
            <tr>
              <th className="py-3.5 px-6 text-left text-xs font-extrabold tracking-[1.8px] uppercase text-white/75 w-[130px]">
                Day
              </th>
              <th className="py-3.5 px-6 text-left text-xs font-extrabold tracking-[1.8px] uppercase text-white/75 w-[220px]">
                Session Time
              </th>
              <th className="py-3.5 px-6 text-left text-xs font-extrabold tracking-[1.8px] uppercase text-white/75">
                Training Content
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="group">
                <td className="bg-white group-hover:bg-[#f5fffd] transition-colors duration-200 py-4 print:py-3 px-6 rounded-l-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.13)] align-middle">
                  <span className="inline-flex items-center justify-center bg-gradient-to-br from-[#1a5c58] to-[#2E817B] text-white font-black text-[15px] px-[22px] py-2.5 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(26,92,88,0.3)]">
                    {row.day}
                  </span>
                </td>

                <td className="bg-white group-hover:bg-[#f5fffd] transition-colors duration-200 py-4 print:py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.13)] align-middle">
                  {row.time ? (
                    <>
                      <span className="block text-[15px] font-extrabold text-[#1a5c58] mb-1">{row.time}</span>
                      <span className="block text-[11px] text-[#9bb8b6] italic font-medium">(Time may vary)</span>
                    </>
                  ) : (
                    <>
                      <span className="block text-sm text-[#1a5c58] font-semibold mb-1">📅 One day before exam</span>
                      <span className="block text-[11px] text-[#9bb8b6] italic font-medium">Time to be confirmed</span>
                    </>
                  )}
                </td>

                <td className="bg-white group-hover:bg-[#f5fffd] transition-colors duration-200 py-[22px] px-6 rounded-r-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.13)] align-middle">
                  <span className="inline-block bg-[#FFD700] text-[#7a5800] text-[10px] font-extrabold px-3 py-[3px] rounded-[20px] tracking-[1px] uppercase mb-2 shadow-[0_2px_8px_rgba(255,215,0,0.35)]">
                    {row.badge}
                  </span>
                  <p className="text-sm font-bold text-[#1a5c58] leading-[1.5] m-0">
                    {row.content}
                  </p>
                  {row.subtext && (
                    <p className="mt-1.5 text-xs text-[#4db8b2] font-semibold m-0">
                      {row.subtext}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto mt-8 print:mt-4 flex items-end gap-5 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-white text-base sm:text-lg lg:text-xl m-0">
              For more training dates and exam booking contact:
            </p>
            <p className="text-white font-bold text-base sm:text-lg lg:text-xl m-0">
              +44 2045 205 731
            </p>
          </div>
        </div>
        <div className="shrink-0">
          <img src={hospital} alt="Hospital" className="h-32 sm:h-44 lg:h-[200px] print:h-24" />
        </div>
      </div>
    </div>
  );
};

export default Page3;