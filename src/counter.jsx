import React, { useState } from 'react';

export default function RemoteNavbar({
  cartItemCount = 0,
  onOpenCart = () => {},
  activeCategory = 'all',
  onSelectCategory = () => {},
  searchQuery = '',
  onSearchChange = () => {}
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      backgroundColor: "rgba(5, 5, 7, 0.92)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      padding: "1.2rem 2rem",
      fontFamily: "'Outfit', 'Inter', -apple-system, sans-serif"
    }}>
      <div style={{
        maxWidth: "1250px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Brand Logo (Served directly from Remote MFE!) */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "#ffffff",
            color: "#000000",
            fontWeight: "900",
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-0.05em",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
          }}>
            SO
          </div>
          <div>
            <span style={{ fontSize: "1.4rem", fontWeight: "900", letterSpacing: "0.05em", color: "#ffffff" }}>
              SOLDOUT
            </span>
            <span style={{ fontSize: "0.65rem", display: "block", color: "#38bdf8", letterSpacing: "0.15em", fontWeight: "700" }}>
              REMOTE MICRO-FRONTEND NAVBAR
            </span>
          </div>
        </div>

        {/* Navigation Links - Controlled from Remote */}
        <nav style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
          fontSize: "0.9rem",
          fontWeight: "700"
        }}>
          {[
            { id: 'all', label: 'New Drops' },
            { id: 'hoodies', label: 'Hoodies' },
            { id: 'footwear', label: 'Footwear' },
            { id: 'outerwear', label: 'Outerwear' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              style={{
                background: "none",
                border: "none",
                color: activeCategory === item.id ? "#38bdf8" : "#a1a1aa",
                cursor: "pointer",
                fontWeight: "800",
                fontSize: "0.9rem",
                transition: "color 0.2s"
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Search & Shopping Cart Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Search Input */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search SoldOut..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                padding: "8px 14px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                fontSize: "0.85rem",
                outline: "none",
                width: "160px"
              }}
            />
          </div>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            style={{
              position: "relative",
              padding: "10px 18px",
              borderRadius: "14px",
              backgroundColor: "#ffffff",
              color: "#000000",
              border: "none",
              fontWeight: "900",
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)"
            }}
          >
            <span>🛒 Cart</span>
            <span style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "2px 8px",
              fontSize: "0.75rem",
              fontWeight: "900"
            }}>
              {cartItemCount}
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "36px",
              height: "36px",
              padding: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            <span style={{ width: "100%", height: "2px", backgroundColor: "#ffffff" }} />
            <span style={{ width: "100%", height: "2px", backgroundColor: "#ffffff" }} />
            <span style={{ width: "100%", height: "2px", backgroundColor: "#ffffff" }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div style={{
          maxWidth: "1250px",
          margin: "1rem auto 0 auto",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          fontSize: "1rem",
          fontWeight: "700"
        }}>
          {[
            { id: 'all', label: '🔥 All New Drops' },
            { id: 'hoodies', label: '👕 Hoodies & Sweats' },
            { id: 'footwear', label: '👟 Cyber Footwear' },
            { id: 'outerwear', label: '🧥 Outerwear & Jackets' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { onSelectCategory(item.id); setIsMobileMenuOpen(false); }}
              style={{ background: "none", border: "none", color: "#ffffff", textAlign: "left", padding: "8px 0", cursor: "pointer", fontWeight: "700" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}


