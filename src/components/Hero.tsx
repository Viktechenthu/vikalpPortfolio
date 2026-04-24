"use client";

import { motion } from "framer-motion";
import { HERO, CALENDLY_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section style={{ padding: "80px 24px 100px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "24px",
            }}
          >
            {HERO.headline}
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#64748b",
              maxWidth: "600px",
              marginBottom: "40px",
            }}
          >
            {HERO.sub}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#ffffff",
                backgroundColor: "#7c3aed",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#6d28d9")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#7c3aed")
              }
            >
              {HERO.cta1}
            </a>
            <a
              href="#projects"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#475569",
                backgroundColor: "#f1f5f9",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#e2e8f0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#f1f5f9")
              }
            >
              {HERO.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
