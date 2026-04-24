"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }}
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
            Real Results
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
            Projects
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              {/* Video */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#f1f5f9",
                }}
              >
                <iframe
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Text */}
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed", marginBottom: "10px" }}>
                  {project.tagline}
                </p>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "#64748b", marginBottom: "24px" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#6d28d9",
                        backgroundColor: "#f5f3ff",
                        border: "1px solid #ede9fe",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
