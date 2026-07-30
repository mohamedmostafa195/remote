import React, { useState, useEffect } from 'react';

export default function Counter() {
  // Live interactive demo state inside the landing page
  const [metricCount, setMetricCount] = useState(1280);
  const [isAutoBoosting, setIsAutoBoosting] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  useEffect(() => {
    let interval;
    if (isAutoBoosting) {
      interval = setInterval(() => {
        setMetricCount((prev) => prev + Math.floor(Math.random() * 15) + 5);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isAutoBoosting]);

  const skills = [
    { name: 'React 19 & Next.js', level: 'Expert', cat: 'core', icon: '⚛️' },
    { name: 'TypeScript', level: 'Advanced', cat: 'core', icon: '🟦' },
    { name: 'Module Federation & MFE', level: 'Expert', cat: 'architecture', icon: '🧩' },
    { name: 'Tailwind CSS & CSS-in-JS', level: 'Expert', cat: 'ui', icon: '🎨' },
    { name: 'State Management (Zustand/Redux)', level: 'Advanced', cat: 'core', icon: '⚡' },
    { name: 'Web Performance & Lighthouse', level: 'Advanced', cat: 'architecture', icon: '🚀' },
    { name: 'Design Systems & Storybook', level: 'Expert', cat: 'ui', icon: '📐' },
    { name: 'REST & GraphQL APIs', level: 'Advanced', cat: 'core', icon: '🔌' }
  ];

  const projects = [
    {
      title: 'Micro-Frontend Modular Dashboard',
      tech: ['React 19', 'Module Federation', 'TypeScript'],
      desc: 'Scalable enterprise portal dynamically linking remote micro-apps seamlessly.',
      badge: 'Architecture'
    },
    {
      title: 'Next-Gen E-Commerce Interface',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      desc: 'High-conversion, sub-second page loads with glassmorphism UI & instant filtering.',
      badge: 'UI/UX'
    },
    {
      title: 'Real-Time Analytics Suite',
      tech: ['React', 'Chart.js', 'WebSockets'],
      desc: 'Interactive live monitoring dashboard handling high-frequency metrics streams.',
      badge: 'Real-Time'
    }
  ];

  const filteredSkills = activeSkillCategory === 'all'
    ? skills
    : skills.filter(s => s.cat === activeSkillCategory);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#050507",
      color: "#f4f4f5",
      minHeight: "100vh",
      borderRadius: "24px",
      padding: "2.5rem 1.5rem",
      maxWidth: "1100px",
      margin: "1rem auto",
      boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95)",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Monochrome Minimalist Radial Glow Light */}
      <div style={{
        position: "absolute",
        top: "-160px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "700px",
        height: "450px",
        background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(0,0,0,0) 75%)",
        pointerEvents: "none"
      }} />

      {/* NAVBAR */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "1.5rem",
        marginBottom: "3rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justify: "center",
            fontWeight: "900",
            fontSize: "1.2rem",
            color: "#000000",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.25)"
          }}>
            MM
          </div>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "800", letterSpacing: "-0.02em", color: "#ffffff" }}>
              Mohamed Mostafa
            </div>
            <div style={{ fontSize: "0.78rem", color: "#a1a1aa", fontWeight: "600" }}>
              Senior Front-End Engineer
            </div>
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 14px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#ffffff",
          fontSize: "0.8rem",
          fontWeight: "600"
        }}>
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 10px #ffffff"
          }} />
          Available for Hire
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "1rem 0 3.5rem" }}>
        <span style={{
          display: "inline-block",
          padding: "6px 18px",
          borderRadius: "30px",
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#e4e4e7",
          fontSize: "0.85rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase"
        }}>
          ✨ Crafting Next-Gen Web Experiences
        </span>

        <h1 style={{
          fontSize: "3.4rem",
          fontWeight: "900",
          lineHeight: "1.15",
          letterSpacing: "-0.03em",
          margin: "0 0 1.5rem 0",
          background: "linear-gradient(135deg, #ffffff 40%, #a1a1aa 80%, #71717a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Hi, I'm Mohamed Mostafa.<br />
          Senior Front-End Engineer.
        </h1>

        <p style={{
          maxWidth: "680px",
          margin: "0 auto 2.5rem auto",
          fontSize: "1.15rem",
          lineHeight: "1.6",
          color: "#a1a1aa"
        }}>
          I build high-performance, pixel-perfect web applications, modern design systems, and micro-frontend architectures with React, TypeScript & modern UI toolkits.
        </p>

        {/* CTA Buttons - Monochrome Contrast */}
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="mailto:contact@mohamedmostafa.dev"
            style={{
              padding: "12px 30px",
              borderRadius: "14px",
              background: "#ffffff",
              color: "#000000",
              fontWeight: "800",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
              transition: "transform 0.2s ease"
            }}
          >
            ✉️ Get In Touch
          </a>

          <button
            onClick={() => alert('Downloading Mohamed Mostafa Front-End Engineer CV...')}
            style={{
              padding: "12px 26px",
              borderRadius: "14px",
              background: "#18181b",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            📄 Download Resume
          </button>
        </div>
      </section>

      {/* METRICS & QUICK STATS */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px",
        marginBottom: "4rem"
      }}>
        {[
          { label: 'Years Experience', value: '4+ Years' },
          { label: 'Projects Delivered', value: '35+ Web Apps' },
          { label: 'Code Quality Score', value: '99.8%' },
          { label: 'Lighthouse Performance', value: '100 / 100' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            padding: "1.5rem",
            borderRadius: "18px",
            background: "#121215",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "1.8rem", fontWeight: "900", color: "#ffffff" }}>{stat.value}</div>
            <div style={{ fontSize: "0.85rem", color: "#a1a1aa", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURED INTERACTIVE COMPONENT (DEMO) */}
      <section style={{
        padding: "2rem",
        borderRadius: "24px",
        background: "linear-gradient(135deg, #121215 0%, #09090b 100%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        marginBottom: "4rem",
        position: "relative"
      }}>
        <div style={{
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "1.5rem"
        }}>
          <div>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a1a1aa", fontWeight: "700" }}>
              LIVE INTERACTIVE DEMO MODULE
            </span>
            <h2 style={{ margin: "4px 0 0 0", fontSize: "1.5rem", fontWeight: "800", color: "#ffffff" }}>
              High-Frequency Counter Engine
            </h2>
          </div>

          <button
            onClick={() => setIsAutoBoosting(!isAutoBoosting)}
            style={{
              padding: "8px 18px",
              borderRadius: "12px",
              border: isAutoBoosting ? "1px solid rgba(239, 68, 68, 0.4)" : "1px solid rgba(255, 255, 255, 0.2)",
              background: isAutoBoosting ? "rgba(239, 68, 68, 0.2)" : "#ffffff",
              color: isAutoBoosting ? "#f87171" : "#000000",
              fontWeight: "800",
              fontSize: "0.85rem",
              cursor: "pointer"
            }}
          >
            {isAutoBoosting ? '⏸️ Stop Auto Stream' : '⚡ Simulate Live Traffic'}
          </button>
        </div>

        {/* Interactive Engine Display */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "16px",
          alignItems: "center",
          textAlign: "center",
          background: "#050507",
          padding: "1.5rem",
          borderRadius: "18px",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}>
          <button
            onClick={() => setMetricCount(c => c - 10)}
            style={{
              padding: "1rem",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "#18181b",
              color: "#ffffff",
              fontSize: "1.3rem",
              fontWeight: "800",
              cursor: "pointer"
            }}
          >
            − 10
          </button>

          <div>
            <div style={{ fontSize: "0.8rem", color: "#a1a1aa", letterSpacing: "0.05em" }}>ACTIVE METRIC VALUE</div>
            <div style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              color: "#ffffff",
              textShadow: "0 0 25px rgba(255, 255, 255, 0.3)"
            }}>
              {metricCount.toLocaleString()}
            </div>
            <div style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>
              ● Responsive State Synchronized
            </div>
          </div>

          <button
            onClick={() => setMetricCount(c => c + 10)}
            style={{
              padding: "1rem",
              borderRadius: "14px",
              border: "none",
              background: "#ffffff",
              color: "#000000",
              fontSize: "1.3rem",
              fontWeight: "800",
              cursor: "pointer"
            }}
          >
            + 10
          </button>
        </div>
      </section>

      {/* TECH STACK & SKILLS */}
      <section style={{ marginBottom: "4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "800", margin: "0 0 0.5rem 0", color: "#ffffff" }}>
            Technical Expertise & Stack
          </h2>
          <p style={{ color: "#a1a1aa", margin: 0 }}>
            Tools and frameworks I use to craft scalable web experiences
          </p>

          {/* Skill Filters - Monochrome Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "1.2rem" }}>
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'core', label: 'Core Tech' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'ui', label: 'UI & Styling' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillCategory(cat.id)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: activeSkillCategory === cat.id ? "none" : "1px solid rgba(255, 255, 255, 0.12)",
                  background: activeSkillCategory === cat.id ? "#ffffff" : "#18181b",
                  color: activeSkillCategory === cat.id ? "#000000" : "#a1a1aa",
                  fontWeight: "700",
                  fontSize: "0.8rem",
                  cursor: "pointer"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "14px"
        }}>
          {filteredSkills.map((skill, index) => (
            <div key={index} style={{
              padding: "1rem 1.2rem",
              borderRadius: "16px",
              background: "#121215",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justify: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "1.2rem" }}>{skill.icon}</span>
                <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "#ffffff" }}>{skill.name}</span>
              </div>
              <span style={{
                fontSize: "0.72rem",
                padding: "3px 10px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#e4e4e7",
                fontWeight: "700"
              }}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center", color: "#ffffff" }}>
          Featured Architectures & Projects
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{
              padding: "1.8rem",
              borderRadius: "20px",
              background: "#121215",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justify: "space-between"
            }}>
              <div>
                <span style={{
                  fontSize: "0.75rem",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: "800",
                  display: "inline-block",
                  marginBottom: "1rem"
                }}>
                  {proj.badge}
                </span>
                <h3 style={{ margin: "0 0 0.6rem 0", fontSize: "1.25rem", fontWeight: "800", color: "#ffffff" }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#a1a1aa", lineHeight: "1.5", margin: "0 0 1.2rem 0" }}>
                  {proj.desc}
                </p>
              </div>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} style={{
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#d4d4d8"
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTACT SIGNATURE */}
      <footer style={{
        paddingTop: "2rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.5rem", color: "#ffffff" }}>
          Mohamed Mostafa
        </div>
        <p style={{ fontSize: "0.9rem", color: "#a1a1aa", margin: "0 0 1.5rem 0" }}>
          Building clean, scalable & intuitive user interfaces for modern web platforms.
        </p>

        <div style={{
          display: "flex",
          justify: "center",
          gap: "16px",
          fontSize: "0.88rem",
          color: "#e4e4e7",
          fontWeight: "600",
          marginBottom: "1.5rem"
        }}>
          <span>💻 GitHub</span>
          <span>💼 LinkedIn</span>
          <span>🌐 Portfolio</span>
          <span>📧 Email</span>
        </div>

        <div style={{ fontSize: "0.78rem", color: "#71717a" }}>
          © {new Date().getFullYear()} Mohamed Mostafa • All rights reserved.
        </div>
      </footer>
    </div>
  );
}

