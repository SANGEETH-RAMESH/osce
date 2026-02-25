

const SESSION_COLORS = {
  1: {
    accent: "#7C3AED",
    accentLight: "#EDE9FE",
    badge: "#7C3AED",
    text: "#5B21B6",
  },
  2: {
    accent: "#0EA5E9",
    accentLight: "#E0F2FE",
    badge: "#0EA5E9",
    text: "#0369A1",
  },
} as const;  



type SessionType = keyof typeof SESSION_COLORS;

interface CalendarCardProps {
  dayName: string;
  dayShort: string;
  dateNum: number;
  session?: SessionType;
  time?: string;
  topic?: string;
}


export default function CalendarCard({ dayName, dayShort, dateNum, session, time, topic }:CalendarCardProps) {
  const hasEvent = !!session;
  const isSelfRevision = topic === "Self Revision";
  const c = hasEvent ? SESSION_COLORS[session] : null;

  return (
    <div
      style={{
        aspectRatio: "1",
        borderRadius: "14px",
        border: hasEvent ? `2px solid ${c!.accent}` : "2px solid #334155",
        background: hasEvent ? "#fff" : "#1e293b",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: hasEvent ? `0 4px 14px ${c!.accent}33` : "none",
        transition: "transform 0.15s",
        cursor: hasEvent ? "pointer" : "default",
        fontFamily: "'Nunito', 'Poppins', sans-serif",
      }}
      onMouseEnter={e => hasEvent && (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          background: hasEvent ? c!.accent : "#334155",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 8px",
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(7px, 1.4vw, 11px)" }}>
          {dayShort || dayName?.slice(0, 3)}
        </span>
        <span style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(8px, 1.6vw, 13px)" }}>
          {dateNum}
        </span>
      </div>

      {hasEvent && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "5px 6px 6px", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span
              style={{
                background: c!.accent,
                color: "#fff",
                borderRadius: "99px",
                fontWeight: 800,
                padding: "1px 6px",
                fontSize: "clamp(5px, 1vw, 9px)",
                letterSpacing: "0.05em",
                flexShrink: 0,
              }}
            >
              S{session}
            </span>
            <span
              style={{
                color: "black",
                fontSize: "clamp(5px, 0.9vw, 8px)",
                fontWeight: 600,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {time}
            </span>
          </div>

          <div
            style={{
              flex: 1,
              background: c!.accentLight,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
              textAlign: "center",
            }}
          >
            {isSelfRevision ? (
              <>
                <span style={{ fontSize: "clamp(14px, 3vw, 22px)" }}>📖</span>
                <span style={{ color: c!.text, fontWeight: 800, fontSize: "clamp(5px, 1vw, 8px)", marginTop: 2 }}>
                  Self Revision
                </span>
              </>
            ) : (
              <p
                style={{
                  color: c!.text,
                  fontWeight: 800,
                  fontSize: "clamp(5px, 1.05vw, 9px)",
                  lineHeight: 1.25,
                  wordBreak: "break-word",
                  hyphens: "auto",
                  margin: 0,
                }}
              >
                {topic}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}