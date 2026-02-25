export default function CalendarCard({
  dayName,
  dateNum,
  repeatDay,
  repeatLabel,
  regDay,
  regLabel,
  singleSession,
}: {
  dayName: string;
  dateNum: number;
  repeatDay?: number;
  repeatLabel?: string;
  regDay?: number;
  regLabel?: string;
  singleSession: boolean;
}) {
  return (
    <div className="w-full">
      <div className="aspect-square bg-white rounded-2xl p-2 flex flex-col shadow-md overflow-hidden justify-between">

        <div className="bg-[#ffde58] text-[#1e293b] font-bold py-0.5 px-1.5 md:py-1 md:px-2 rounded-full flex justify-between items-center text-[7px] md:text-[10px] lg:text-[11px] print:text-[11px]">
            <span>
              <span className="hidden md:inline">{dayName}</span>
            <span className="md:hidden">{dayName.slice(0, 3)}</span>
          </span>
          <span className="ml-1 shrink-0">{dateNum}</span>
        </div>

        {!singleSession && repeatDay !== undefined && (
          <div className="border-b-2 border-[#508bbb] pb-0.5 mb-0.5 md:pb-1.5 md:mb-1.5">
            <p className="font-extrabold text-[8px] md:text-xs lg:text-base text-[#004aac] leading-tight print:text-base">
              Day {repeatDay}
            </p>
            <p className="text-[6px] md:text-[7px] lg:text-[9px] font-extrabold text-[#004aac] leading-tight overflow-hidden whitespace-normal lg:whitespace-nowrap lg:truncate print:text-[11px]">
              {repeatLabel}
            </p>
          </div>
        )}

        {regDay !== undefined && (
          <div>
            <p className="font-extrabold text-[8px] md:text-xs lg:text-base text-[#252829] leading-tight print:text-base">
              Day {regDay}
            </p>
            <p className="text-[6px] md:text-[7px] lg:text-[9px] font-extrabold text-[#252829] leading-tight overflow-hidden whitespace-normal lg:whitespace-nowrap lg:truncate print:text-[11px]">
              {regLabel}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}