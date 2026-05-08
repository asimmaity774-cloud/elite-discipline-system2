import { useState, useEffect } from "react";

export default function App() {
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [message, setMessage] = useState("⚡ Stay consistent.");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const g = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 4000);
    return () => clearInterval(g);
  }, []);

  const getAIMessage = () => {
    if (streak >= 5) return "🔥 You're on fire. Increase difficulty.";
    if (streak === 0) return "⚠️ Restart now. Don't wait.";
    if (xp > 500) return "💪 Strong growth. Push harder.";
    return "⚡ Stay consistent.";
  };

  const completeHabit = () => {
    setStreak(s => s + 1);
    setXp(x => x + 50);
    setMessage(getAIMessage());
  };

  const resetStreak = () => {
    setStreak(0);
    setMessage("⚠️ Restart now. Don't wait.");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060609",
      color: "#fff",
      fontFamily: "'Courier New', monospace",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
    }}>

      {/* Grid background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,170,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,170,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "400px" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            fontSize: "11px", letterSpacing: "6px",
            color: "#00aaff", marginBottom: "8px"
          }}>⚔️ SYSTEM V9.0</div>
          <h1 style={{
            fontSize: "36px",
            fontFamily: "Impact, sans-serif",
            letterSpacing: "6px",
            margin: "0 0 4px 0",
            filter: glitch
              ? "drop-shadow(2px 0 #ff0040) drop-shadow(-2px 0 #00aaff)"
              : "none",
            transition: "filter 0.1s",
          }}>ELITE</h1>
          <h2 style={{
            fontSize: "18px",
            fontFamily: "Impact, sans-serif",
            letterSpacing: "8px",
            color: "#00ff88",
            margin: 0, fontWeight: 400,
          }}>DISCIPLINE</h2>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "12px", marginBottom: "20px"
        }}>
          {[
            { label: "STREAK", value: streak, unit: "days", color: "#ff4466" },
            { label: "XP", value: xp, unit: "points", color: "#00ff88" },
          ].map(stat => (
            <div key={stat.label} style={{
              background: "rgba(10,10,15,0.9)",
              border: `1px solid ${stat.color}33`,
              borderLeft: `3px solid ${stat.color}`,
              borderRadius: "2px",
              padding: "16px",
              textAlign: "center",
            }}>
              <div style={{
                fontSize: "9px", letterSpacing: "3px",
                color: stat.color, marginBottom: "6px"
              }}>{stat.label}</div>
              <div style={{
                fontSize: "40px",
                fontFamily: "Impact, sans-serif",
                color: "#fff", lineHeight: 1
              }}>{stat.value}</div>
              <div style={{
                fontSize: "9px", color: "#556",
                letterSpacing: "2px", marginTop: "4px"
              }}>{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* AI Message */}
        <div style={{
          background: "rgba(0,170,255,0.06)",
          border: "1px solid rgba(0,170,255,0.2)",
          borderLeft: "3px solid #00aaff",
          borderRadius: "2px",
          padding: "14px 16px",
          marginBottom: "20px",
          fontSize: "13px",
          letterSpacing: "1px",
          color: "#c0d0e0",
          lineHeight: 1.6,
        }}>
          <span style={{ color: "#00aaff", fontSize: "9px", letterSpacing: "3px" }}>
            AI COACH &nbsp;▸&nbsp;
          </span>
          {message}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={completeHabit} style={{
            background: "linear-gradient(135deg, #00aaff22, #0055ff22)",
            border: "1px solid #00aaff66",
            color: "#00aaff",
            padding: "16px",
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "2px",
            fontFamily: "Impact, sans-serif",
            transition: "all 0.2s",
          }}>
            ✓ &nbsp; COMPLETE HABIT
          </button>

          <button onClick={resetStreak} style={{
            background: "transparent",
            border: "1px solid #ff446633",
            color: "#ff4466",
            padding: "12px",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "2px",
            fontFamily: "Impact, sans-serif",
          }}>
            ↺ &nbsp; RESET
          </button>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: "32px",
          fontSize: "9px", letterSpacing: "3px", color: "#334"
        }}>
          ELITE DISCIPLINE SYSTEM — V9.0
        </div>
      </div>
    </div>
  );
}
