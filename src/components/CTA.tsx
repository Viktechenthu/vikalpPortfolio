"use client";

import { motion } from "framer-motion";
import { CTA_SECTION, CALENDLY_URL } from "@/lib/data";

export default function CTA() {
  return (
    <section
      style={{ padding: "100px 24px", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "#7c3aed",
            borderRadius: "20px",
            padding: "80px 48px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            {CTA_SECTION.headline}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#ddd6fe",
              maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            {CTA_SECTION.sub}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#7c3aed",
              backgroundColor: "#ffffff",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#f5f3ff")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff")
            }
          >
            {CTA_SECTION.button}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
