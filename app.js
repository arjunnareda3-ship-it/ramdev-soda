<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>RAMDEV SODA | Premium Cold Drinks</title>
    <meta
      name="description"
      content="RAMDEV SODA is a premium cold drinks shop with fresh products, easy ordering, and an admin dashboard."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <nav class="nav container">
        <div class="brand-wrap">
          <div class="brand-icon">🥤</div>
          <div>
            <div class="brand-name">RAMDEV SODA</div>
            <div class="brand-tag">Fresh. Fast. Premium.</div>
          </div>
        </div>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#features">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="nav-actions">
          <button class="secondary-btn" id="adminBtn">Admin</button>
          <button class="primary-btn cart-btn" id="cartToggleBtn">
            Cart <span id="cartCount">0</span>
          </button>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="container hero-grid">
          <div class="hero-copy">
            <span class="eyebrow">Premium Cold Drink Experience</span>
            <h1>Cold drinks that refresh every moment.</h1>
            <p>
              Discover premium sodas, juices, shakes, and chilled favorites prepared
              with quality ingredients and served fresh every time.
            </p>

            <div class="hero-actions">
              <a href="#shop" class="primary-btn">Shop Now</a>
              <button class="secondary-btn" id="exploreBtn">Explore Menu</button>
            </div>

            <div class="hero-stats">
              <div>
                <strong>1500+</strong>
                <span>Happy Customers</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Service Ready</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="drink-spotlight">
              <div class="spotlight-card large">
                <span class="badge">Best Seller</span>
                <div class="drink-icon">🥤</div>
                <h3>Mango Blast</h3>
                <p>Fresh mango shake with chilled delight</p>
                <div class="price-row">
                  <span class="price">₹140</span>
                  <button class="mini-btn" data-product-id="mango-blast">Add</button>
                </div>
              </div>

              <div class="mini-stack">
                <div class="spotlight-card small">
                  <div class="drink-icon">🍋</div>
                  <h4>Lemon Fizz</h4>
                  <span>₹90</span>
                </div>
                <div class="spotlight-card small">
                  <div class="drink-icon">🧊</div>
                  <h4>Cold Cola</h4>
                  <span>₹75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-strip">
        <div class="container trust-grid">
          <div>Fresh ingredients</div>
          <div>Fast delivery</div>
          <div>Premium taste</div>
          <div>Customer first</div>
        </div>
      </section>

      <section class="shop section" id="shop">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Our Menu</span>
            <h2>Choose your favorite chilled drink</h2>
          </div>

          <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="soda">Soda</button>
            <button class="filter-btn" data-filter="juice">Juice</button>
            <button class="filter-btn" data-filter="shake">Shake</button>
            <button class="filter-btn" data-filter="special">Special</button>
          </div>

          <div class="product-grid" id="productGrid"></div>
        </div>
      </section>

      <section class="features section" id="features">
        <div class="container">
          <div class="section-heading centered">
            <span class="eyebrow">Why RAMDEV SODA</span>
            <h2>Built for flavor, comfort and trust</h2>
          </div>

          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon">✨</div>
              <h3>Freshly Made</h3>
              <p>Prepared with fresh ingredients and served chilled to perfection.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🚚</div>
              <h3>Quick Delivery</h3>
              <p>Fast service with smooth order preparation and reliable delivery.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💸</div>
              <h3>Affordable Pricing</h3>
              <p>Premium quality at prices that fit daily cravings and family orders.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🛡️</div>
              <h3>Trusted Service</h3>
              <p>Reliable quality control, hygienic preparation, and consistent taste.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="reviews section" id="reviews">
        <div class="container">
          <div class="section-heading centered">
            <span class="eyebrow">Testimonials</span>
            <h2>What customers say</h2>
          </div>

          <div class="review-grid">
            <article class="review-card">
              <div class="stars">★★★★★</div>
              <p>
                “Best cold drinks in the area. Taste is always fresh and the service is super quick.”
              </p>
              <div class="person">
                <strong>Rohit Sharma</strong>
                <span>Regular Customer</span>
              </div>
            </article>

            <article class="review-card">
              <div class="stars">★★★★★</div>
              <p>
                “The mango shake is amazing and the pricing is very reasonable. Highly recommended.”
              </p>
              <div class="person">
                <strong>Neha Verma</strong>
                <span>Customer</span>
              </div>
            </article>

            <article class="review-card">
              <div class="stars">★★★★★</div>
              <p>
                “Professional setup, great design and a really smooth ordering experience.”
              </p>
              <div class="person">
                <strong>Ajay Singh</strong>
                <span>Business Client</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="contact section" id="contact">
        <div class="container contact-grid">
          <div class="contact-copy">
            <span class="eyebrow">Get in touch</span>
            <h2>Order now or ask us anything.</h2>
            <p>
              Need a custom drink list, bulk order, or a quick business package? We are here to help.
            </p>
            <ul>
              <li>📍 Main Market, Your City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@ramdevsoda.com</li>
            </ul>
          </div>

          <form class="contact-form" id="contactForm">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Your email" required />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us what you need"></textarea>
            </div>
            <button class="primary-btn submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>

    <aside class="cart-panel" id="cartPanel" aria-label="Shopping cart">
      <div class="cart-header">
        <h3>Your Cart</h3>
        <button class="close-cart" id="closeCartBtn">×</button>
      </div>
      <div id="cartItems" class="cart-items"></div>
      <div class="cart-total-row">
        <span>Total</span>
        <strong id="cartTotal">₹0</strong>
      </div>
      <button class="primary-btn checkout-btn" id="checkoutBtn">Place Order</button>
    </aside>

    <div class="modal" id="adminModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3>Admin Panel</h3>
          <button class="close-modal" id="closeAdminBtn">×</button>
        </div>

        <div class="admin-login" id="adminLoginWrap">
          <div class="field">
            <label for="adminPassword">Password</label>
            <input type="password" id="adminPassword" placeholder="Enter admin password" />
          </div>
          <button class="primary-btn" id="adminLoginBtn">Login</button>
        </div>

        <div class="admin-content hidden" id="adminContent">
          <form class="admin-form" id="adminProductForm">
            <div class="field">
              <label>Product Name</label>
              <input type="text" id="productName" required />
            </div>
            <div class="field">
              <label>Category</label>
              <select id="productCategory" required>
                <option value="soda">Soda</option>
                <option value="juice">Juice</option>
                <option value="shake">Shake</option>
                <option value="special">Special</option>
              </select>
            </div>
            <div class="field">
              <label>Emoji</label>
              <input type="text" id="productIcon" value="🥤" maxlength="2" required />
            </div>
            <div class="field">
              <label>Price (₹)</label>
              <input type="number" id="productPrice" min="1" required />
            </div>
            <div class="field">
              <label>Description</label>
              <textarea id="productDescription" rows="3" required></textarea>
            </div>
            <button class="primary-btn" type="submit">Add Product</button>
          </form>

          <div class="admin-list-wrap">
            <h4>Current Products</h4>
            <div id="adminList"></div>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container footer-row">
        <div>
          <div class="brand-name" style="color:#fff;">RAMDEV SODA</div>
          <p>Fresh drinks and cheerful service every day.</p>
        </div>
        <div>© 2026 RAMDEV SODA</div>
      </div>
    </footer>

    <div class="toast" id="toast"></div>

    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
    <script src="firebase-config.js"></script>
    <script src="app.js"></script>
  </body>
</html>


















































































































































