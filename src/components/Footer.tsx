import { NAV_LINKS, CALENDLY_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e2e8f0", padding: "32px 24px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <img src="/logo.png" alt="Orchestriq AI" style={{ height: "40px", width: "auto" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "0.875rem", color: "#94a3b8", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.875rem", color: "#94a3b8", textDecoration: "none" }}
          >
            Book a Call
          </a>
        </div>

        <p style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
          © {new Date().getFullYear()} Vikalp
        </p>
      </div>
    </footer>
  );
}
