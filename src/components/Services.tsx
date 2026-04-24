"use client";

import { motion } from "framer-motion";
import {
  Phone, Zap, GitBranch, Bot, LayoutDashboard, Code2,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Phone, Zap, GitBranch, Bot, LayoutDashboard, Code2,
};

export default function Services() {
  return (
    <section
      id="services"
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
            What I Do
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
            Services
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "48px 64px",
          }}
        >
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {Icon && (
                  <div style={{ marginBottom: "16px" }}>
                    <Icon size={20} color="#7c3aed" />
                  </div>
                )}
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#64748b" }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
