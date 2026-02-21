import { useEffect, useState } from "react";

const days = [
  {
    day: "06",
    regularSession: "8:30 PM",
    repeatSession: "10:00 AM (Next Day)",
    topics: [
      "Removal of Catheter",
      "Catheter Sample of Urine",
      "Oral Care Plan",
      "Mid-stream Urine Analysis",
      "Pre-operative Assessment",
    ],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "07",
    regularSession: "8:30 PM",
    repeatSession: "10:00 AM (Next Day)",
    topics: [
      "Fluid Balance",
      "Pressure Area Assessment",
      "Bowel Assessment",
      "Nutritional Assessment",
    ],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "08",
    regularSession: "8:30 PM",
    repeatSession: "10:00 AM (Next Day)",
    topics: [
      "Administration of Suppository",
      "Oxygen Therapy",
      "Administration of Inhaled Medication",
      "Peak Expiratory Flow Rate",
    ],
    mode: "Online",
    isRevision: false,
  },
  {
    day: "09",
    regularSession: "10:00 AM – 6:00 PM",
    repeatSession: "—",
    topics: [],
    mode: "Self-Revision",
    isRevision: true,
  },
  {
    day: "10",
    regularSession: "10:00 AM – 6:00 PM",
    repeatSession: "—",
    topics: [],
    mode: "Self-Revision",
    isRevision: true,
  },
];

const Page2 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(145deg, #1a5c58 0%, #2E817B 40%, #4db8b2 75%, #64C7C5 100%)",
      minHeight: "100vh",
      padding: "48px 24px 60px",
      fontFamily: "'Nunito', 'Poppins', sans-serif",
      boxSizing: "border-box",
    }}>

      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}>
            

            <tbody>
              {days.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: index < days.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                    background: item.isRevision
                      ? "rgba(255,217,81,0.08)"
                      : index % 2 === 0
                      ? "rgba(255,255,255,0.04)"
                      : "transparent",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={e =>
                    e.currentTarget.style.background = item.isRevision
                      ? "rgba(255,217,81,0.16)"
                      : "rgba(255,255,255,0.12)"
                  }
                  onMouseLeave={e =>
                    e.currentTarget.style.background = item.isRevision
                      ? "rgba(255,217,81,0.08)"
                      : index % 2 === 0
                      ? "rgba(255,255,255,0.04)"
                      : "transparent"
                  }
                >
                  <td style={{ padding: "18px 20px", whiteSpace: "nowrap" }}>
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: item.isRevision
                        ? "linear-gradient(135deg, #FFD951, #ffb700)"
                        : "rgba(255,255,255,0.95)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: item.isRevision
                        ? "0 4px 16px rgba(255,185,0,0.35), 0 0 0 4px rgba(255,217,81,0.25)"
                        : "0 4px 14px rgba(0,0,0,0.15)",
                    }}>
                      <span style={{
                        fontSize: "9px",
                        color: item.isRevision ? "rgba(0,0,0,0.55)" : "#2E817B",
                        fontWeight: 800,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        lineHeight: 1,
                      }}>Day</span>
                      <span style={{
                        fontSize: "18px",
                        color: item.isRevision ? "#1a3a00" : "#1a5c58",
                        fontWeight: 900,
                        lineHeight: 1.1,
                      }}>{item.day}</span>
                    </div>
                  </td>

                  <td style={{ padding: "18px 20px", whiteSpace: "nowrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "16px" }}>{item.isRevision ? "📅" : "🕗"}</span>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>{item.regularSession}</span>
                    </div>
                  </td>

                  <td style={{ padding: "18px 20px", whiteSpace: "nowrap" }}>
                    {item.isRevision ? (
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "18px" }}>—</span>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "16px" }}>🔄</span>
                          <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>10:00 AM</span>
                        </div>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", paddingLeft: "24px" }}>Next Day</span>
                      </div>
                    )}
                  </td>

                  <td style={{ padding: "18px 20px" }}>
                    {item.isRevision ? (
                      <span style={{
                        color: "rgba(255,217,81,0.8)",
                        fontSize: "13px",
                        fontWeight: 600,
                        fontStyle: "italic",
                      }}>
                        Personal study &amp; review
                      </span>
                    ) : (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {item.topics.map((topic, idx) => (
                          <span key={idx} style={{
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.22)",
                            color: "#fff",
                            padding: "4px 12px",
                            borderRadius: "50px",
                            fontSize: "12px",
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                          }}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>

                  <td style={{ padding: "18px 20px", whiteSpace: "nowrap" }}>
                    <span style={{
                      backgroundColor: item.isRevision ? "#FFD951" : "#FFD951",
                      color: "#1a3a38",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      fontWeight: 800,
                      fontSize: "11px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}>
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

export default Page2;