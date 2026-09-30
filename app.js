// RAMDEV SODA - Cold Drinks Shop
// Admin Panel & Customer View

const ADMIN_PASSWORD = "admin123"; // Simple password for demo
const STORAGE_KEY = "ramdev_soda_drinks";

// Default drinks data
const defaultDrinks = [
    { id: 1, name: "Cold Cola", icon: "🥤", price: 20, description: "Refreshing Cold Cola" },
    { id: 2, name: "Lemonade", icon: "🍋", price: 30, description: "Fresh Lemonade" },
    { id: 3, name: "Iced Tea", icon: "🧊", price: 25, description: "Chilled Iced Tea" },
    { id: 4, name: "Mango Shake", icon: "🥭", price: 40, description: "Tasty Mango Shake" },
    { id: 5, name: "Buttermilk", icon: "🥛", price: 15, description: "Cool Buttermilk" },
    { id: 6, name: "Watermelon Juice", icon: "🍉", price: 35, description: "Sweet Watermelon Juice" }
];

// Initialize drinks from localStorage or use defaults
function initializeDrinks() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDrinks));
        return defaultDrinks;
    }
    return JSON.parse(stored);
}

// Get all drinks
function getDrinks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultDrinks;
}

// Save drinks to localStorage
function saveDrinks(drinks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drinks));
}

// Show customer view
function showCustomerView() {
    document.getElementById('customerView').classList.add('active');
    document.getElementById('adminView').classList.remove('active');
    loadCustomerDrinks();
}

// Load drinks in customer view
function loadCustomerDrinks() {
    const drinks = getDrinks();
    const container = document.getElementById('drinksContainer');
    container.innerHTML = '';

    if (drinks.length === 0) {
        container.innerHTML = '<p class="empty-message">No drinks available at the moment</p>';
        return;
    }

    drinks.forEach(drink => {
        const card = document.createElement('div');
        card.className = 'drink-card';
        card.innerHTML = `
            <div class="drink-icon">${drink.icon}</div>
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <div class="drink-price">₹${drink.price}<span>/glass</span></div>
            <button class="btn btn-secondary btn-small" onclick="alert('Order placed for ${drink.name}!')">Order Now</button>
        `;
        container.appendChild(card);
    });
}

// Go to admin panel
function goToAdminPanel() {
    const password = prompt("Enter Admin Password:");
    if (password === ADMIN_PASSWORD) {
        showAdminPanel();
    } else if (password !== null) {
        alert("❌ Wrong Password!");
    }
}

// Show admin panel
function showAdminPanel() {
    // Create admin view if it doesn't exist
    if (!document.getElementById('adminView')) {
        createAdminPanel();
    }
    document.getElementById('customerView').classList.remove('active');
    document.getElementById('adminView').classList.add('active');
    loadAdminDrinks();
}

// Create admin panel HTML
function createAdminPanel() {
    const container = document.querySelector('.container');
    const adminView = document.createElement('div');
    adminView.id = 'adminView';
    adminView.className = 'view-section admin-panel';
    adminView.innerHTML = `
        <div class="admin-header">
            <h2>🔐 Admin Panel - RAMDEV SODA</h2>
            <p>Manage Drinks & Prices</p>
            <button class="btn btn-primary btn-small" onclick="showCustomerView()" style="margin-top: 15px;">← Back to Store</button>
        </div>

        <div class="form-container">
            <h3>➕ Add New Drink</h3>
            <form id="addDrinkForm" onsubmit="handleAddDrink(event)">
                <div class="form-group">
                    <label for="drinkName">Drink Name:</label>
                    <input type="text" id="drinkName" required placeholder="e.g., Sprite">
                </div>
                <div class="form-group">
                    <label for="drinkIcon">Emoji Icon:</label>
                    <input type="text" id="drinkIcon" required placeholder="e.g., 🥤" maxlength="2" value="🥤">
                </div>
                <div class="form-group">
                    <label for="drinkPrice">Price (₹):</label>
                    <input type="number" id="drinkPrice" required placeholder="e.g., 25" min="1">
                </div>
                <div class="form-group">
                    <label for="drinkDesc">Description:</label>
                    <textarea id="drinkDesc" placeholder="e.g., Refreshing cold drink" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-success" style="width: 100%;">✅ Add Drink</button>
            </form>
        </div>

        <h3 style="color: #2C3E50; margin-bottom: 20px;">📋 All Drinks</h3>
        <div id="adminDrinksContainer"></div>
    `;
    container.appendChild(adminView);
}

// Load drinks in admin view
function loadAdminDrinks() {
    const drinks = getDrinks();
    const container = document.getElementById('adminDrinksContainer');
    container.innerHTML = '';

    if (drinks.length === 0) {
        container.innerHTML = '<p class="empty-message">No drinks added yet</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'drinks-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price (₹)</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="drinksTableBody"></tbody>
    `;

    const tbody = table.querySelector('tbody');
    drinks.forEach(drink => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${drink.icon}</td>
            <td>${drink.name}</td>
            <td>${drink.description}</td>
            <td>₹${drink.price}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn edit-btn btn-small" onclick="editDrink(${drink.id})">✏️ Edit</button>
                    <button class="btn delete-btn btn-small" onclick="deleteDrink(${drink.id})">🗑️ Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    container.appendChild(table);
}

// Handle add drink form
function handleAddDrink(event) {
    event.preventDefault();
    const name = document.getElementById('drinkName').value.trim();
    const icon = document.getElementById('drinkIcon').value.trim();
    const price = parseInt(document.getElementById('drinkPrice').value);
    const description = document.getElementById('drinkDesc').value.trim();

    if (!name || !icon || !price) {
        alert('❌ Please fill all fields!');
        return;
    }

    const drinks = getDrinks();
    const newDrink = {
        id: Date.now(),
        name,
        icon,
        price,
        description: description || 'A delicious cold drink'
    };

    drinks.push(newDrink);
    saveDrinks(drinks);

    alert(`✅ ${name} added successfully!`);
    document.getElementById('addDrinkForm').reset();
    loadAdminDrinks();
}

// Edit drink
function editDrink(id) {
    const drinks = getDrinks();
    const drink = drinks.find(d => d.id === id);

    if (!drink) return;

    const newName = prompt("Drink Name:", drink.name);
    if (newName === null) return;

    const newPrice = prompt("Price (₹):", drink.price);
    if (newPrice === null) return;

    const newDesc = prompt("Description:", drink.description);

    drink.name = newName.trim() || drink.name;
    drink.price = parseInt(newPrice) || drink.price;
    drink.description = newDesc ? newDesc.trim() : drink.description;

    saveDrinks(drinks);
    alert('✅ Drink updated successfully!');
    loadAdminDrinks();
}

// Delete drink
function deleteDrink(id) {
    if (confirm('Are you sure you want to delete this drink?')) {
        let drinks = getDrinks();
        drinks = drinks.filter(d => d.id !== id);
        saveDrinks(drinks);
        alert('✅ Drink deleted successfully!');
        loadAdminDrinks();
    }
}

// Initialize app on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeDrinks();
    loadCustomerDrinks();
});