// Hamburger + Sidebar Menu
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const overlay = document.getElementById("overlay");

menuIcon.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("active"); // show overlay
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active"); // hide overlay
});

// Close sidebar when clicking outside (overlay)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});



// Search Overlay
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Open search
searchIcon.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  searchInput.focus(); // auto-focus input
});

// Close search when clicking background
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove("active");
  }
});

// Handle search action
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    // Redirect to search results page with query
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
});


const loginIcon = document.getElementById("login-icon");

loginIcon.addEventListener("click", () => {
  window.location.href = "login.html";
});


const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});

cartOverlay.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});



const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
  // Option 1: Redirect to checkout page
  window.location.href = "checkout.html";

  // Option 2: Show alert instead
  // alert("Checkout functionality will be added soon!");
});


document.addEventListener("DOMContentLoaded", function() {
  const dropBtns = document.querySelectorAll(".drop-btn");

  dropBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent page jump
      const content = btn.nextElementSibling;

      // Toggle dropdown
      if (content.style.display === "flex") {
        content.style.display = "none";
      } else {
        // Close other dropdowns first
        document.querySelectorAll(".dropdown-content").forEach(dc => {
          dc.style.display = "none";
        });
        content.style.display = "flex";
        content.style.flexDirection = "column";
      }
    });
  });
});



// Stay in Touch search bar
const pageSearchInput = document.getElementById("searchInput"); // Stay in Touch bar input
const pageSearchBtn = document.getElementById("searchBtn");     // Stay in Touch bar button

function handlePageSearch() {
  const query = pageSearchInput.value.trim();
  if (query) {
    // same as overlay wale search kaam karega
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  }
}

// Click on search button
pageSearchBtn.addEventListener("click", handlePageSearch);

// Press Enter key
pageSearchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handlePageSearch();
  }
});
