const ADMIN_PASSWORD = "admin123";
const STORAGE_KEYS = {
  products: "ramdevProducts",
  cart: "ramdevCart",
};

const defaultProducts = [
  {
    id: "cold-cola",
    name: "Cold Cola",
    icon: "🥤",
    category: "soda",
    price: 75,
    description: "Crisp, chilled, and perfectly fizzy.",
  },
  {
    id: "lemon-fizz",
    name: "Lemon Fizz",
    icon: "🍋",
    category: "special",
    price: 90,
    description: "Fresh citrus burst with a sparkling finish.",
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    icon: "🧊",
    category: "soda",
    price: 85,
    description: "Smooth tea with cool refreshment and flavor.",
  },
  {
    id: "mango-blast",
    name: "Mango Blast",
    icon: "🥭",
    category: "shake",
    price: 140,
    description: "A rich mango shake with tropical sweetness.",
  },
  {
    id: "watermelon-juice",
    name: "Watermelon Juice",
    icon: "🍉",
    category: "juice",
    price: 110,
    description: "Sweet, juicy, and naturally refreshing.",
  },
  {
    id: "buttermilk-cool",
    name: "Buttermilk Cool",
    icon: "🥛",
    category: "special",
    price: 80,
    description: "A light, cooling classic with creamy taste.",
  },
  {
    id: "grape-splash",
    name: "Grape Splash",
    icon: "🍇",
    category: "juice",
    price: 120,
    description: "Bold fruit flavor with a fresh chilled finish.",
  },
  {
    id: "choco-fizz",
    name: "Choco Fizz",
    icon: "🍫",
    category: "shake",
    price: 150,
    description: "Creamy indulgence made for dessert lovers.",
  },
];

let cart = [];
let firebaseReady = false;
let productFilter = "all";

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartPanel = document.getElementById("cartPanel");
const adminModal = document.getElementById("adminModal");
const adminLoginWrap = document.getElementById("adminLoginWrap");
const adminContent = document.getElementById("adminContent");
const adminList = document.getElementById("adminList");
const toast = document.getElementById("toast");

function initializeProducts() {
  const saved = localStorage.getItem(STORAGE_KEYS.products);
  if (!saved) {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultProducts;
  } catch (error) {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(defaultProducts));
    return defaultProducts;
  }
}

function getProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.products);
    return raw ? JSON.parse(raw) : defaultProducts;
  } catch (error) {
    return defaultProducts;
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function initializeCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.cart);
    cart = saved ? JSON.parse(saved) : [];
  } catch (error) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderProducts() {
  const products = getProducts();
  const filteredProducts =
    productFilter === "all"
      ? products
      : products.filter((product) => product.category === productFilter);

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-top">${product.icon}</div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-meta">
            <span class="product-price">₹${product.price}</span>
            <button class="mini-btn" data-product-id="${product.id}">Add</button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".mini-btn[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.productId));
  });
}

function addToCart(productId) {
  const product = getProducts().find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, name: product.name, icon: product.icon, price: product.price, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function updateCartUI() {
  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));

  if (!cart.length) {
    cartItems.innerHTML = '<p style="color: var(--text-soft); margin-top: 12px;">Cart is empty.</p>';
    cartTotal.textContent = "₹0";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  cartTotal.textContent = `₹${total}`;

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-name">
            <span>${item.icon}</span>
            <div>
              <div>${item.name}</div>
              <div class="cart-item-qty">Qty: ${item.quantity}</div>
            </div>
          </div>
          <div class="cart-item-price">₹${item.quantity * item.price}</div>
        </div>
      `
    )
    .join("");
}

function toggleCart(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !cartPanel.classList.contains("open");
  cartPanel.classList.toggle("open", shouldOpen);
}

function placeOrder() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  showToast(`Order placed successfully for ₹${total}`);
  cart = [];
  saveCart();
  updateCartUI();
  toggleCart(false);
}

function setupFilterButtons() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      productFilter = button.dataset.filter || "all";
      renderProducts();
    });
  });
}

function handleContactSubmit(event) {
  event.preventDefault();
  showToast("Message sent successfully");
  event.target.reset();
}

function openAdminModal() {
  adminModal.classList.add("open");
  adminModal.setAttribute("aria-hidden", "false");
  adminLoginWrap.classList.remove("hidden");
  adminContent.classList.add("hidden");
  document.getElementById("adminPassword").value = "";
}

function closeAdminModal() {
  adminModal.classList.remove("open");
  adminModal.setAttribute("aria-hidden", "true");
}

function loginAdmin() {
  const password = document.getElementById("adminPassword").value.trim();
  if (password === ADMIN_PASSWORD) {
    adminLoginWrap.classList.add("hidden");
    adminContent.classList.remove("hidden");
    renderAdminProducts();
    showToast("Admin login successful");
    return;
  }

  showToast("Incorrect admin password");
}

function renderAdminProducts() {
  const products = getProducts();
  if (!products.length) {
    adminList.innerHTML = "<p style='color: var(--text-soft);'>No products available.</p>";
    return;
  }

  adminList.innerHTML = products
    .map(
      (product) => `
        <div class="admin-product-row">
          <div>
            <strong>${product.icon} ${product.name}</strong>
            <span>₹${product.price}</span>
          </div>
          <div class="admin-product-actions">
            <button class="edit-btn" data-product-edit="${product.id}">Edit</button>
            <button class="delete-btn" data-product-delete="${product.id}">Delete</button>
          </div>
        </div>
      `
    )
    .join("");

  document.querySelectorAll("[data-product-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteProduct(button.dataset.productDelete));
  });

  document.querySelectorAll("[data-product-edit]").forEach((button) => {
    button.addEventListener("click", () => editProduct(button.dataset.productEdit));
  });
}

function deleteProduct(productId) {
  const products = getProducts();
  const updated = products.filter((product) => product.id !== productId);
  saveProducts(updated);
  renderProducts();
  renderAdminProducts();
  showToast("Product removed");
}

function editProduct(productId) {
  const products = getProducts();
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  document.getElementById("productName").value = product.name;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productIcon").value = product.icon;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productDescription").value = product.description;

  const form = document.getElementById("adminProductForm");
  form.dataset.editId = productId;
  const submitButton = form.querySelector("button[type='submit']");
  submitButton.textContent = "Update Product";
}

function handleAdminSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const name = document.getElementById("productName").value.trim();
  const category = document.getElementById("productCategory").value;
  const icon = document.getElementById("productIcon").value.trim() || "🥤";
  const price = Number(document.getElementById("productPrice").value);
  const description = document.getElementById("productDescription").value.trim();

  if (!name || !description || !price) {
    showToast("Please fill all product fields");
    return;
  }

  const products = getProducts();
  const id = form.dataset.editId || createSlug(name);

  const updatedProduct = {
    id,
    name,
    category,
    icon,
    price,
    description,
  };

  if (form.dataset.editId) {
    const index = products.findIndex((product) => product.id === form.dataset.editId);
    if (index >= 0) products[index] = updatedProduct;
  } else {
    products.push(updatedProduct);
  }

  saveProducts(products);
  renderProducts();
  renderAdminProducts();
  form.reset();
  form.removeAttribute("data-edit-id");
  form.querySelector("button[type='submit']").textContent = "Add Product";
  showToast(form.dataset.editId ? "Product updated" : "Product added");
}

function createSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `product-${Date.now()}`;
}

function initFirebaseIfAvailable() {
  if (!window.firebaseConfig || !window.firebase) {
    return;
  }

  const requiredKeys = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const isConfigured = requiredKeys.every((key) => {
    const value = window.firebaseConfig[key];
    return value && !value.includes("YOUR_");
  });

  if (!isConfigured) {
    return;
  }

  try {
    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(window.firebaseConfig);
    const db = firebase.firestore(app);
    firebaseReady = true;

    db.collection("products")
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const firebaseProducts = [];
          snapshot.forEach((doc) => {
            firebaseProducts.push({ id: doc.id, ...doc.data() });
          });
          saveProducts(firebaseProducts);
          renderProducts();
          renderAdminProducts();
        }
      })
      .catch(() => {
        console.log("Firebase products sync not active yet. Using local data.");
      });
  } catch (error) {
    console.warn("Firebase initialization skipped:", error);
  }
}

function bindEvents() {
  document.getElementById("cartToggleBtn").addEventListener("click", () => toggleCart());
  document.getElementById("closeCartBtn").addEventListener("click", () => toggleCart(false));
  document.getElementById("checkoutBtn").addEventListener("click", placeOrder);
  document.getElementById("adminBtn").addEventListener("click", openAdminModal);
  document.getElementById("closeAdminBtn").addEventListener("click", closeAdminModal);
  document.getElementById("adminLoginBtn").addEventListener("click", loginAdmin);
  document.getElementById("adminProductForm").addEventListener("submit", handleAdminSubmit);
  document.getElementById("contactForm").addEventListener("submit", handleContactSubmit);
  document.getElementById("exploreBtn").addEventListener("click", () => {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll(".mini-btn[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.productId));
  });

  document.addEventListener("click", (event) => {
    if (event.target === adminModal) {
      closeAdminModal();
    }
  });
}

function bootstrap() {
  initializeProducts();
  initializeCart();
  bindEvents();
  setupFilterButtons();
  updateCartUI();
  renderProducts();
  initFirebaseIfAvailable();
}

bootstrap();





























































































































































































