// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to Tasty Restaurant!");
};

// Order button function
function showMessage() {
    alert("🍽️ Thank you for choosing Tasty Restaurant! Your order request has been received.");
}

// Change header color while scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "#ff6600";
    } else {
        header.style.backgroundColor = "#333";
    }
});

// Menu item click event
const menuItems = document.querySelectorAll(".item");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        const foodName = this.querySelector("h3").textContent;
        alert(foodName + " added to cart!");
    });
});

// Dynamic greeting based on time
const heroSection = document.querySelector(".hero");
const greeting = document.createElement("h3");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "☀️ Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "🌤️ Good Afternoon!";
} else {
    greeting.textContent = "🌙 Good Evening!";
}

heroSection.appendChild(greeting);

// Live clock
const clock = document.createElement("p");
clock.style.fontSize = "20px";
clock.style.marginTop = "10px";

heroSection.appendChild(clock);

function updateClock() {
    const now = new Date();
    clock.textContent = "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Random food recommendation
const foods = [
    "Pizza 🍕",
    "Burger 🍔",
    "Pasta 🍝",
    "Fried Chicken 🍗",
    "Sandwich 🥪",
    "Ice Cream 🍨"
];

function recommendFood() {
    const randomIndex = Math.floor(Math.random() * foods.length);
    alert("Today's Special Recommendation: " + foods[randomIndex]);
}

// Create recommendation button dynamically
const recommendBtn = document.createElement("button");
recommendBtn.textContent = "Recommend Food";
recommendBtn.style.padding = "10px 20px";
recommendBtn.style.margin = "10px";
recommendBtn.style.cursor = "pointer";

recommendBtn.addEventListener("click", recommendFood);

heroSection.appendChild(recommendBtn);

// Visitor counter (session only)
let visitors = sessionStorage.getItem("visitors");

if (!visitors) {
    visitors = 1;
} else {
    visitors = Number(visitors) + 1;
}

sessionStorage.setItem("visitors", visitors);

const visitorText = document.createElement("p");
visitorText.textContent = "Visitors this session: " + visitors;
visitorText.style.marginTop = "10px";

heroSection.appendChild(visitorText);

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Footer year update automatically
const footer = document.querySelector("footer p");
footer.textContent = `© ${new Date().getFullYear()} Tasty Restaurant. All Rights Reserved.`;
