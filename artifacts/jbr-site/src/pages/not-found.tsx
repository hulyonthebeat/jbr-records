export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 120, lineHeight: 1, color: "var(--ink)", letterSpacing: "0.02em" }}>
          404
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--muted)", marginTop: 16 }}>
          Page Not Found
        </div>
        <a href="/" style={{ display: "inline-block", marginTop: 32, fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: "0.22em", border: "1px solid var(--ink)", padding: "14px 22px" }}>
          Back to Home
        </a>
      </div>
    </div>
  );
}
