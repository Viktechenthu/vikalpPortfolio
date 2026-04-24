"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Orchestriq AI" style={{ height: "44px", width: "auto" }} />
        </a>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "0.875rem", color: "#64748b", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
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
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          style={{ display: "none", padding: "8px", color: "#64748b", background: "none", border: "none", cursor: "pointer" }}
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            padding: "16px 24px 24px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "0.9rem", color: "#64748b", textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#7c3aed",
              textDecoration: "none",
              textAlign: "center",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </motion.nav>
  );
}
