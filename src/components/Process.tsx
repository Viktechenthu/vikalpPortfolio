"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      style={{ padding: "100px 24px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed", marginBottom: "12px" }}>
            The Process
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
            How I Work
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
          }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p style={{ fontSize: "3rem", fontWeight: 900, color: "#e2e8f0", lineHeight: 1, marginBottom: "20px", fontVariantNumeric: "tabular-nums" }}>
                {step.number}
              </p>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
                {step.title}
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#64748b" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
