// script.js
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  const menuData = [
    { name: "Margherita Pizza", description: "Classic delight with 100% real mozzarella cheese", price: "$12" },
    { name: "Tandoori Paneer", description: "Spicy paneer with onions and capsicum", price: "$15" },
    { name: "Spaghetti Bolognese", description: "Traditional Italian pasta with meat sauce", price: "$14" },
    { name: "Caesar Salad", description: "Crisp lettuce with creamy Caesar dressing", price: "$10" }
  ];
  
  function renderMenu(items) {
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";
    items.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("menu-item");
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
      `;
      container.appendChild(div);
    });
  }
  
  renderMenu(menuData);
  
  document.getElementById("searchInput").addEventListener("input", e => {
    const filtered = menuData.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderMenu(filtered);
  });
  
  document.getElementById("bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("bookingMessage").textContent =
      "Thank you! Your reservation has been received.";
    e.target.reset();
  });

