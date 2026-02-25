import { useEffect, useState } from 'react';
import hospital from '../assets/hospital.png'



const useWindowWidth = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};


const Page4 = () => {
  const rows = [
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

  const width = useWindowWidth();

    const isMobile = width < 480;
    const isTablet = width >= 480 && width < 900;


   const logoHeight = isMobile ? "50px" : isTablet ? "64px" : "80px";

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg, #1a5c58 0%, #2E817B 40%, #4db8b2 75%, #64C7C5 100%)",
        minHeight: "100vh",
        padding: "48px 32px 60px",
        fontFamily: "'Nunito', 'Poppins', sans-serif",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        .schedule-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 14px;
        }

        .schedule-table thead th {
          padding: 14px 24px;
          text-align: left;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
        }

        .schedule-table tbody tr td {
          background: #fff;
          padding: 22px 24px;
          vertical-align: middle;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          transition: background 0.2s ease;
        }

        .schedule-table tbody tr:hover td {
          background: #f5fffd;
        }

        .schedule-table tbody tr td:first-child {
          border-radius: 18px 0 0 18px;
        }

        .schedule-table tbody tr td:last-child {
          border-radius: 0 18px 18px 0;
        }

        .day-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a5c58, #2E817B);
          color: #fff;
          font-weight: 900;
          font-size: 15px;
          padding: 10px 22px;
          border-radius: 50px;
          letter-spacing: 0.3px;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(26,92,88,0.3);
        }

        .time-main {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: #1a5c58;
          margin-bottom: 4px;
        }

        .time-note {
          display: block;
          font-size: 11px;
          color: #9bb8b6;
          font-style: italic;
          font-weight: 500;
        }

        .time-subtext {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #4db8b2;
          margin-bottom: 4px;
        }

        .badge {
          display: inline-block;
          background: #FFD700;
          color: #7a5800;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 12px;
          border-radius: 20px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
          box-shadow: 0 2px 8px rgba(255,215,0,0.35);
        }

        .content-text {
          font-size: 14px;
          font-weight: 700;
          color: #1a5c58;
          line-height: 1.5;
          margin: 0;
        }

        .contact-bar {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 18px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-label {
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .contact-number {
          font-size: 20px;
          font-weight: 900;
          color: #FFD700;
          letter-spacing: 1px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .building-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 3px solid rgba(255,255,255,0.3);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .building-icon {
          font-size: 38px;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
        }
      `}</style>


      

      <div style={{ maxWidth: "960px", margin: "0 auto", overflowX: "auto" }}>
        <table className="schedule-table">
         
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td>
                  <span className="day-pill">{row.day}</span>
                </td>

                <td>
                  {row.time ? (
                    <>
                      <span className="time-main">{row.time}</span>
                      <span className="time-note">(Time may vary)</span>
                    </>
                  ) : (
                    <>
                      <span className="time-subtext">📅 One day before exam</span>
                      <span className="time-note">Time to be confirmed</span>
                    </>
                  )}
                </td>

                <td>
                  <span className="badge">{row.badge}</span>
                  <p className="content-text">{row.content}</p>
                  {row.subtext && (
                    <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#4db8b2", fontWeight: 600 }}>
                      {row.subtext}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ maxWidth: "960px", margin: "32px auto 0", display: "flex", alignItems: "center", gap: "20px" }}>
        <div className="contact-bar" style={{ flex: 1, margin: 0 }}>
          <div>
            <p className="contact-label">For more training dates and exam booking contact:</p>
            <p style={{ margin: "6px 0 0" }} className="contact-number">+44 2045 205 731</p>
          </div>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "2px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, flexShrink: 0,
          }}>
            📞
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          <img src={hospital} alt="MentorMerlin Logo" style={{ height: logoHeight }} />
        </div>
      </div>
    </div>
  );
};

export default Page4;