:root {
  --bg: #fff9f3;
  --bg-soft: #fff2df;
  --surface: #ffffff;
  --surface-soft: #f5f7fb;
  --primary: #ff7b2c;
  --primary-dark: #e86416;
  --secondary: #ffd166;
  --accent: #ff5d8f;
  --text: #1d2433;
  --text-soft: #58657a;
  --line: #e8edf3;
  --success: #1bb36a;
  --shadow: 0 18px 45px rgba(29, 36, 51, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #fffdfb 0%, #fff2df 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.eyebrow {
  display: inline-block;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.72rem;
  color: var(--primary-dark);
  background: rgba(255, 123, 44, 0.1);
  padding: 9px 14px;
  border-radius: 999px;
  margin-bottom: 18px;
}

.section-heading {
  margin-bottom: 42px;
}

.section-heading.centered {
  text-align: center;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  color: var(--text);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(10px);
  background: rgba(255, 249, 243, 0.8);
  border-bottom: 1px solid rgba(29, 36, 51, 0.04);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 86px;
  gap: 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #ff9b62);
  font-size: 1.6rem;
  box-shadow: var(--shadow);
}

.brand-name {
  font-weight: 900;
  letter-spacing: 0.08em;
  font-size: 1.02rem;
  color: var(--text);
}

.brand-tag {
  color: var(--text-soft);
  font-size: 0.72rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--text-soft);
  font-weight: 600;
}

.nav-links a:hover {
  color: var(--primary-dark);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.primary-btn,
.secondary-btn,
.mini-btn,
.filter-btn,
.close-cart,
.close-modal {
  border: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  border-radius: 12px;
  padding: 14px 20px;
  font-weight: 700;
  box-shadow: 0 16px 28px rgba(255, 123, 44, 0.22);
}

.primary-btn:hover {
  transform: translateY(-2px);
}

.secondary-btn {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 12px;
  padding: 13px 18px;
  font-weight: 700;
}

.secondary-btn:hover {
  border-color: rgba(255, 123, 44, 0.4);
  color: var(--primary-dark);
}

.cart-btn {
  position: relative;
}

.cart-btn span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  border-radius: 999px;
  background: #fff;
  color: var(--text);
  margin-left: 10px;
  font-size: 0.75rem;
  font-weight: 800;
}

.hero {
  padding-top: 52px;
  padding-bottom: 72px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
}

.hero-copy p {
  max-width: 620px;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--text-soft);
  margin-top: 24px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 18px;
  margin-top: 40px;
}

.hero-stats div {
  padding: 20px 18px;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(232, 237, 243, 0.8);
  border-radius: 18px;
}

.hero-stats strong {
  display: block;
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 6px;
}

.hero-stats span {
  color: var(--text-soft);
  font-size: 0.82rem;
}

.hero-visual {
  position: relative;
}

.drink-spotlight {
  position: relative;
  padding: 18px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(255, 123, 44, 0.1), rgba(255, 209, 102, 0.2));
  border: 1px solid rgba(255, 123, 44, 0.12);
}

.spotlight-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(232, 237, 243, 0.9);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.spotlight-card.large {
  padding: 28px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badge {
  display: inline-block;
  align-self: flex-start;
  background: rgba(27, 179, 106, 0.1);
  color: var(--success);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
}

.drink-icon {
  font-size: 4rem;
}

.spotlight-card h3,
.spotlight-card h4 {
  margin: 0;
  margin-top: 22px;
  font-size: 1.8rem;
}

.spotlight-card p {
  color: var(--text-soft);
  line-height: 1.7;
  margin: 14px 0 18px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.price {
  color: var(--text);
  font-size: 1.8rem;
  font-weight: 800;
}

.mini-btn {
  background: var(--primary);
  color: white;
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 700;
}

.mini-stack {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.spotlight-card.small {
  padding: 22px 18px;
}

.spotlight-card.small h4 {
  margin-top: 10px;
  font-size: 1.12rem;
}

.spotlight-card.small span {
  display: inline-block;
  margin-top: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
}

.trust-strip {
  padding: 18px 0 0;
}

.trust-grid {
  background: linear-gradient(135deg, var(--text), #2c374a);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 22px;
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 16px;
  padding: 26px 24px;
  box-shadow: var(--shadow);
}

.trust-grid > div {
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 36px;
}

.filter-btn {
  background: white;
  border: 1px solid var(--line);
  color: var(--text);
  padding: 11px 17px;
  border-radius: 999px;
  font-weight: 700;
}

.filter-btn.active,
.filter-btn:hover {
  background: rgba(255, 123, 44, 0.1);
  color: var(--primary-dark);
  border-color: rgba(255, 123, 44, 0.25);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(230px, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 10px 25px rgba(29, 36, 51, 0.04);
  transition: 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.product-top {
  background: linear-gradient(135deg, rgba(255, 123, 44, 0.08), rgba(255, 209, 102, 0.16));
  border-radius: 18px;
  min-height: 110px;
  display: grid;
  place-items: center;
  font-size: 3.5rem;
}

.product-card h3 {
  margin: 18px 0 10px;
  font-size: 1.35rem;
}

.product-card p {
  margin: 0;
  color: var(--text-soft);
  line-height: 1.7;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 22px;
}

.product-price {
  font-size: 1.44rem;
  font-weight: 800;
}

.product-card .mini-btn {
  padding: 10px 14px;
}

.feature-grid,
.review-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 22px;
}

.feature-card,
.review-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px 24px;
  box-shadow: 0 12px 24px rgba(29, 36, 51, 0.04);
}

.feature-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 123, 44, 0.08);
  font-size: 1.7rem;
}

.feature-card h3 {
  margin: 18px 0 12px;
  font-size: 1.2rem;
}

.feature-card p,
.review-card p {
  margin: 0;
  line-height: 1.8;
  color: var(--text-soft);
}

.review-grid {
  grid-template-columns: repeat(3, minmax(220px, 1fr));
}

.stars {
  color: #ffb000;
  letter-spacing: 0.18em;
  margin-bottom: 16px;
  font-size: 1rem;
}

.person {
  margin-top: 18px;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.person strong {
  font-size: 0.98rem;
}

.person span {
  color: var(--text-soft);
  font-size: 0.8rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: center;
}

.contact-copy h2 {
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3rem);
}

.contact-copy p {
  max-width: 560px;
  color: var(--text-soft);
  line-height: 1.9;
  margin: 22px 0 18px;
}

.contact-copy ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  color: var(--text);
  font-weight: 600;
}

.contact-form {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 12px 24px rgba(29, 36, 51, 0.04);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}

.field label {
  font-weight: 700;
  color: var(--text);
}

.field input,
.field textarea,
.field select {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--surface-soft);
  padding: 14px 16px;
  border-radius: 14px;
  color: var(--text);
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  outline: 2px solid rgba(255, 123, 44, 0.15);
  border-color: rgba(255, 123, 44, 0.35);
}

.submit-btn {
  width: 100%;
  margin-top: 8px;
}

.site-footer {
  background: #1d2433;
  color: rgba(255, 255, 255, 0.8);
  padding: 28px 0;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-row p {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.7);
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(420px, 92vw);
  height: 100vh;
  background: white;
  box-shadow: -8px 0 30px rgba(29, 36, 51, 0.18);
  transform: translateX(102%);
  transition: transform 0.25s ease;
  z-index: 60;
  display: flex;
  flex-direction: column;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header,
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 18px;
  border-bottom: 1px solid var(--line);
}

.cart-header h3,
.modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.close-cart,
.close-modal {
  background: transparent;
  font-size: 2rem;
  line-height: 1;
  color: var(--text-soft);
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 18px 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.cart-item-name {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
}

.cart-item-qty {
  font-size: 0.88rem;
  color: var(--text-soft);
}

.cart-item-price {
  font-weight: 800;
}

.cart-total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-top: 1px solid var(--line);
  font-size: 1.1rem;
}

.checkout-btn {
  margin: 0 20px 20px;
  width: calc(100% - 40px);
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(13, 19, 29, 0.55);
  display: grid;
  place-items: center;
  z-index: 70;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.modal.open {
  opacity: 1;
  pointer-events: auto;
}

.modal-dialog {
  width: min(760px, 92vw);
  max-height: 88vh;
  overflow: auto;
  background: white;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.admin-login,
.admin-content {
  padding: 20px;
}

.hidden {
  display: none !important;
}

.admin-form {
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
}

.admin-list-wrap {
  margin-top: 26px;
}

.admin-list-wrap h4 {
  margin: 0 0 14px;
}

.admin-product-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 12px;
}

.admin-product-row strong {
  display: block;
}

.admin-product-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.admin-product-actions button {
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 10px;
  color: white;
  font-weight: 700;
}

.admin-product-actions .edit-btn {
  background: #2d7ff9;
}

.admin-product-actions .delete-btn {
  background: #f04e4e;
}

.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: rgba(29, 36, 51, 0.96);
  color: white;
  padding: 12px 18px;
  border-radius: 14px;
  box-shadow: var(--shadow);
  opacity: 0;
  pointer-events: none;
  transition: all 0.26s ease;
  z-index: 90;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .hero-grid,
  .contact-grid,
  .feature-grid,
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}

@media (max-width: 720px) {
  .hero-grid,
  .contact-grid,
  .feature-grid,
  .review-grid,
  .product-grid,
  .trust-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .nav-actions {
    flex-wrap: wrap;
  }

  .footer-row {
    flex-direction: column;
    text-align: center;
  }

  .section {
    padding: 80px 0;
  }
}

@media (max-width: 520px) {
  .nav {
    flex-wrap: wrap;
    padding: 14px 0;
  }

  .nav-actions {
    width: 100%;
    justify-content: space-between;
  }

  .nav-actions > * {
    flex: 1;
  }

  .brand-name {
    letter-spacing: 0.02em;
  }
}












































































































