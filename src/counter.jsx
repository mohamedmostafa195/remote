import React, { useState } from 'react';

export default function SoldOutStore() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Initial Shopping Cart State
  const [cart, setCart] = useState([
    {
      id: 1,
      title: 'SoldOut Heavyweight Hoodie v1',
      price: 185,
      size: 'L',
      color: 'Obsidian Black',
      image: '/soldout_hoodie.png',
      qty: 1
    }
  ]);

  // Product Catalog Data
  const products = [
    {
      id: 1,
      title: 'SoldOut Heavyweight Hoodie v1',
      category: 'hoodies',
      categoryLabel: 'Hoodies',
      price: 185,
      originalPrice: 220,
      badge: '🔥 HOT SELLER',
      image: '/soldout_hoodie.png',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 4,
      rating: 4.9,
      reviews: 128,
      desc: '480 GSM organic french terry cotton, relaxed drop-shoulder cut with silver metallic logo hardware.'
    },
    {
      id: 2,
      title: 'CyberRunner Sneakers 01',
      category: 'footwear',
      categoryLabel: 'Footwear',
      price: 295,
      originalPrice: 340,
      badge: '⚡ 3 LEFT IN STOCK',
      image: '/soldout_sneakers.png',
      sizes: ['40', '41', '42', '43', '44'],
      stock: 3,
      rating: 5.0,
      reviews: 94,
      desc: 'Architectural high-top sneakers with cushioned neon midsole and premium matte leather upper.'
    },
    {
      id: 3,
      title: 'Monochrome Tactical Anorak',
      category: 'outerwear',
      categoryLabel: 'Outerwear',
      price: 240,
      originalPrice: 280,
      badge: 'NEW DROP',
      image: '/soldout_hero.png',
      sizes: ['M', 'L', 'XL'],
      stock: 7,
      rating: 4.8,
      reviews: 62,
      desc: 'Water-resistant nylon ripstop, concealed magnetic pockets, and adjustable oversized hood.'
    },
    {
      id: 4,
      title: 'Architectural Cargo Trousers',
      category: 'pants',
      categoryLabel: 'Pants',
      price: 165,
      originalPrice: 190,
      badge: 'LIMITED',
      image: '/soldout_hoodie.png',
      sizes: ['30', '32', '34', '36'],
      stock: 5,
      rating: 4.7,
      reviews: 81,
      desc: 'Tapered modular cargos with detachable utility straps and reinforced knee panelling.'
    }
  ];

  // Helper Functions
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          size: product.sizes[0],
          color: 'Black',
          image: product.image,
          qty: 1
        }
      ];
    });
    showToast(`Added "${product.title}" to your cart! 🛍️`);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const filteredProducts = products.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{
      fontFamily: "'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: "#050507",
      color: "#f4f4f5",
      minHeight: "100vh",
      position: "relative"
    }}>
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100,
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "12px 24px",
          borderRadius: "14px",
          fontWeight: "800",
          fontSize: "0.9rem",
          boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT TICKER MARQUEE */}
      <div style={{
        backgroundColor: "#18181b",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "8px 16px",
        fontSize: "0.75rem",
        fontWeight: "700",
        letterSpacing: "0.08em",
        color: "#a1a1aa",
        textAlign: "center",
        textTransform: "uppercase"
      }}>
        🔥 DROP 01 LIVE NOW &bull; FREE EXPRESS WORLDWIDE SHIPPING ON ORDERS OVER $200 &bull; LIMITED EDITION STREETWEAR
      </div>

      {/* RESPONSIVE NAVBAR */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: "rgba(5, 5, 7, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "1.2rem 2rem"
      }}>
        <div style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Logo */}
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
              <span style={{ fontSize: "0.65rem", display: "block", color: "#a1a1aa", letterSpacing: "0.15em", fontWeight: "700" }}>
                LUXURY STREETWEAR
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <nav style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            fontSize: "0.9rem",
            fontWeight: "700"
          }}>
            {['all', 'hoodies', 'footwear', 'outerwear'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: "none",
                  border: "none",
                  color: activeCategory === cat ? "#ffffff" : "#a1a1aa",
                  cursor: "pointer",
                  fontWeight: "700",
                  textTransform: "capitalize"
                }}
              >
                {cat === 'all' ? 'New Drops' : cat}
              </button>
            ))}
          </nav>

          {/* Search & Shopping Cart Drawer Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Search Input */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search SoldOut..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              onClick={() => setIsCartOpen(true)}
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

        {/* Mobile Dropdown Drawer */}
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
            <button onClick={() => { setActiveCategory('all'); setIsMobileMenuOpen(false); }} style={{ background: "none", border: "none", color: "#ffffff", textAlign: "left", padding: "8px 0", cursor: "pointer" }}>
              🔥 All New Drops
            </button>
            <button onClick={() => { setActiveCategory('hoodies'); setIsMobileMenuOpen(false); }} style={{ background: "none", border: "none", color: "#a1a1aa", textAlign: "left", padding: "8px 0", cursor: "pointer" }}>
              👕 Hoodies & Sweats
            </button>
            <button onClick={() => { setActiveCategory('footwear'); setIsMobileMenuOpen(false); }} style={{ background: "none", border: "none", color: "#a1a1aa", textAlign: "left", padding: "8px 0", cursor: "pointer" }}>
              👟 Cyber Footwear
            </button>
            <button onClick={() => { setActiveCategory('outerwear'); setIsMobileMenuOpen(false); }} style={{ background: "none", border: "none", color: "#a1a1aa", textAlign: "left", padding: "8px 0", cursor: "pointer" }}>
              🧥 Outerwear & Jackets
            </button>
          </div>
        )}
      </header>

      {/* HERO BANNER SECTION */}
      <section style={{
        position: "relative",
        padding: "4rem 2rem 5rem 2rem",
        maxWidth: "1250px",
        margin: "0 auto"
      }}>
        <div style={{
          borderRadius: "28px",
          overflow: "hidden",
          position: "relative",
          minHeight: "440px",
          display: "flex",
          alignItems: "center",
          padding: "3rem",
          backgroundImage: "url('/soldout_hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.15)"
        }}>
          {/* Dark Overlay Gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(5, 5, 7, 0.95) 0%, rgba(5, 5, 7, 0.6) 60%, rgba(5, 5, 7, 0.2) 100%)"
          }} />

          {/* Hero Content */}
          <div style={{ position: "relative", zIndex: 10, maxWidth: "620px" }}>
            <span style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "900",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              marginBottom: "1.2rem",
              textTransform: "uppercase"
            }}>
              ⚡ LIMITED EDITION // DROP 01
            </span>

            <h1 style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              margin: "0 0 1.2rem 0",
              color: "#ffffff"
            }}>
              LUXURY STREETWEAR.<br />DEFINED.
            </h1>

            <p style={{
              fontSize: "1.1rem",
              color: "#d4d4d8",
              lineHeight: "1.6",
              margin: "0 0 2rem 0"
            }}>
              Heavyweight GSM fabrics, architectural drop-shoulder fits, and custom hardware. Designed in Tokyo, crafted for the global vanguard. In Egypt
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  const catalog = document.getElementById('catalog');
                  if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: "14px 32px",
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  fontWeight: "900",
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                }}
              >
                Shop New Collection ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOG GRID */}
      <section id="catalog" style={{
        maxWidth: "1250px",
        margin: "0 auto",
        padding: "0 2rem 6rem 2rem"
      }}>
        {/* Header & Filter Controls */}
        <div style={{
          display: "flex",
          justify: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "2.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: "1.5rem"
        }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: "900", margin: "0 0 6px 0", color: "#ffffff" }}>
              Featured Drop 01 Catalog
            </h2>
            <p style={{ color: "#a1a1aa", margin: 0, fontSize: "0.95rem" }}>
              Strictly limited quantities. Once sold out, items will never be re-stocked.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'hoodies', label: 'Hoodies' },
              { id: 'footwear', label: 'Footwear' },
              { id: 'outerwear', label: 'Outerwear' },
              { id: 'pants', label: 'Pants' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "12px",
                  border: activeCategory === cat.id ? "none" : "1px solid rgba(255, 255, 255, 0.15)",
                  backgroundColor: activeCategory === cat.id ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                  color: activeCategory === cat.id ? "#000000" : "#a1a1aa",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                  cursor: "pointer"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: "#121215",
                borderRadius: "22px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justify: "space-between"
              }}
            >
              {/* Product Image */}
              <div style={{
                position: "relative",
                height: "280px",
                backgroundColor: "#09090b",
                overflow: "hidden"
              }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />

                <span style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  fontSize: "0.72rem",
                  fontWeight: "900"
                }}>
                  {p.badge}
                </span>
              </div>

              {/* Product Info */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  display: "flex",
                  justify: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px"
                }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: "900", margin: 0, color: "#ffffff" }}>
                    {p.title}
                  </h3>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: "900", color: "#ffffff" }}>
                      ${p.price}
                    </div>
                    {p.originalPrice && (
                      <div style={{ fontSize: "0.78rem", color: "#71717a", textDecoration: "line-through" }}>
                        ${p.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                <p style={{ fontSize: "0.85rem", color: "#a1a1aa", lineHeight: "1.4", margin: "0 0 1.2rem 0" }}>
                  {p.desc}
                </p>

                {/* Size Pills */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.2rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "#71717a", fontWeight: "700" }}>Sizes:</span>
                  {p.sizes.map((s, idx) => (
                    <span key={idx} style={{
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      color: "#ffffff",
                      fontWeight: "700"
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(p)}
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: "14px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: "900",
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  <span>Add To Cart</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOPPING CART DRAWER MODAL */}
      {isCartOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justify: "flex-end"
        }}>
          <div style={{
            width: "100%",
            maxWidth: "440px",
            backgroundColor: "#09090b",
            borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2rem"
          }}>
            {/* Cart Header */}
            <div>
              <div style={{
                display: "flex",
                justify: "space-between",
                alignItems: "center",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "900", margin: 0, color: "#ffffff" }}>
                  Your Shopping Cart ({cartItemCount})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    cursor: "pointer"
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div style={{ margin: "1.5rem 0", backgroundColor: "#18181b", padding: "1rem", borderRadius: "14px" }}>
                <div style={{ fontSize: "0.82rem", color: "#a1a1aa", marginBottom: "6px", fontWeight: "700" }}>
                  {cartTotal >= 200 ? '🎉 You unlocked FREE WORLDWIDE SHIPPING!' : `Add $${200 - cartTotal} more for FREE Shipping`}
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${Math.min(100, (cartTotal / 200) * 100)}%`,
                    backgroundColor: "#ffffff"
                  }} />
                </div>
              </div>

              {/* Items List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxHeight: "350px", overflowY: "auto" }}>
                {cart.length === 0 ? (
                  <div style={{ textAlign: "center", color: "#71717a", padding: "3rem 0" }}>
                    Your cart is currently empty.
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      backgroundColor: "#121215",
                      padding: "1rem",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}>
                      <img src={item.image} alt={item.title} style={{ width: "64px", height: "64px", borderRadius: "10px", objectFit: "cover" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: "800", color: "#ffffff" }}>{item.title}</div>
                        <div style={{ fontSize: "0.8rem", color: "#a1a1aa" }}>Size: {item.size} &bull; ${item.price}</div>

                        {/* Quantity Control */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ padding: "2px 8px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "none", color: "#fff", cursor: "pointer" }}>-</button>
                          <span style={{ fontSize: "0.85rem", fontWeight: "800" }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ padding: "2px 8px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)", background: "none", color: "#fff", cursor: "pointer" }}>+</button>
                        </div>
                      </div>
                      <div style={{ fontSize: "1rem", fontWeight: "900", color: "#ffffff" }}>
                        ${item.price * item.qty}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Cart Footer Checkout */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: "900", color: "#ffffff", marginBottom: "1rem" }}>
                <span>Subtotal:</span>
                <span>${cartTotal}</span>
              </div>

              <button
                onClick={() => {
                  alert('Thank you for testing SoldOut! Simulated checkout complete. 🎉');
                  setCart([]);
                  setIsCartOpen(false);
                }}
                disabled={cart.length === 0}
                style={{
                  width: "100%",
                  padding: "16px 0",
                  borderRadius: "16px",
                  backgroundColor: cart.length > 0 ? "#ffffff" : "#3f3f46",
                  color: "#000000",
                  fontWeight: "900",
                  fontSize: "1rem",
                  border: "none",
                  cursor: cart.length > 0 ? "pointer" : "not-allowed",
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
              >
                Checkout Now &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BRAND FOOTER */}
      <footer style={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "4rem 2rem 2rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ fontSize: "2rem", fontWeight: "900", letterSpacing: "0.1em", color: "#ffffff", marginBottom: "1rem" }}>
            SOLDOUT
          </div>
          <p style={{ color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 2rem auto", fontSize: "0.95rem" }}>
            Architectural luxury apparel designed for individual statement. All rights reserved &copy; {new Date().getFullYear()} SoldOut Co.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "0.85rem", color: "#71717a", fontWeight: "700" }}>
            <span>INSTAGRAM</span>
            <span>TIKTOK</span>
            <span>DISCORD</span>
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


