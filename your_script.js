document.addEventListener("DOMContentLoaded", function() {
    // Show text
    function showtext() {
        document.getElementById("text").style.display = "block";
    }

    // Toggle About section
    document.getElementById("toggleLink").addEventListener("click", function(e) {
        e.preventDefault();
        const about = document.getElementById("aboutContain");
        about.style.display = about.style.display === "block" ? "none" : "block";
    });
    /*contact*/
    document.getElementById("toggleContact").addEventListener("click", function(e) {
        e.preventDefault();
        const number = document.getElementById("contactNumber");
        number.style.display = number.style.display === "block" ? "none" : "block";
    });


    const toggleBtn = document.getElementById("toggleMapBtn");
    const mapFrame = document.getElementById("mapFrame");

    toggleBtn.addEventListener("click", () => {
        if (mapFrame.style.display === "none" || mapFrame.style.display === " ") {
            mapFrame.style.display = "block";
            toggleBtn.textContent = "Hide Location";
        } else {
            mapFrame.style.display = "none";
            toggleBtn.textContent = "Show Location";
        }
    });

});
// Navigation buttons


document.addEventListener("DOMContentLoaded", function() {
    const navigateButton = document.getElementById("navigateButton");
    const food_galary = document.getElementById("food_galary");
    const aboutus = document.getElementById("aboutus");
    const contact = document.getElementById("contact");

    if (navigateButton) {
        navigateButton.onclick = function() {
            window.location.href = "pp.html";
        };
    }

    if (food_galary) {
        food_galary.onclick = function() {
            window.location.href = "gallary.html";
        };
    }

    if (aboutus) {
        aboutus.onclick = function() {
            window.location.href = "aboutus.html";
        };
    }
    if (menu) {
        menu.onclick = function() {
            window.location.href = "menu.html";
        }
    }

    if (contact) {
        contact.onclick = function() {
            window.location.href = "contactus.html";
        };
    }
});


//Order button animation
const orderBtn = document.querySelector(".order-btn");
if (orderBtn) {
    orderBtn.addEventListener("click", () => {
        orderBtn.classList.add("clicked");
        orderBtn.innerHTML = "<span>✅ Ordered!</span>";
        setTimeout(() => {
            orderBtn.classList.remove("clicked");
            orderBtn.innerHTML = "<span>🍕 Order Now</span>";
        }, 2000);
    });
}



//alerts

function home() {
    alert("Welcome to our website");
}


function func() {
    alert("Your order is placed");

}



/*desceription*/
function toggleDescription() {
    const descBox = document.getElementById("descriptionBox");
    if (descBox.style.display === "none" || descBox.style.display === "") {
        descBox.style.display = "block"; // Show
    } else {
        descBox.style.display = "none"; // Hide
    }
}

// Function to toggle the second description
function toggleDescription_right() {
    const descBox2 = document.getElementById("descriptionBox2");
    if (descBox2.style.display === "none" || descBox2.style.display === "") {
        descBox2.style.display = "block"; // Show
    } else {
        descBox2.style.display = "none"; // Hide
    }
}

// Optional: hide descriptions initially
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("descriptionBox").style.display = "none";
    document.getElementById("descriptionBox2").style.display = "none";
});
// =====================
// Testimonial Slider JS
// =====================
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-box');
    const nextBtn = document.querySelector('.arrow.next');
    const prevBtn = document.querySelector('.arrow.prev');
    let current = 0;
    let interval;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    }

    function prevTestimonial() {
        current = (current - 1 + testimonials.length) % testimonials.length;
        showTestimonial(current);
    }

    // Button Events
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetInterval();
    });

    // Auto Slide every 6s
    function startAutoSlide() {
        interval = setInterval(nextTestimonial, 6000);
    }

    function resetInterval() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Pause on hover
    const container = document.querySelector('.testimonial-box-wrapper');
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', startAutoSlide);

    // Initialize
    showTestimonial(current);
    startAutoSlide();
});


// =====================
// Video Slider JS
// =====================
const slides = document.querySelectorAll('.slide');
const nav = document.querySelector('.nav');
let currentSlide = 0;

// Create navigation dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    nav.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 8 seconds
setInterval(nextSlide, 8000);

// Initialize
showSlide(currentSlide);






document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const navContainer = document.querySelector('.nav');
    let currentSlide = 0;
    let autoPlay;

    // ===== Create navigation dots dynamically =====
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetAutoPlay();
        });
        navContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // ===== Show a specific slide =====
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // ===== Move to next slide =====
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // ===== Go to a specific slide =====
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // ===== Auto-play every 6 seconds =====
    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, 6000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    // ===== Pause when user hovers =====
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
    slider.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    showSlide(currentSlide);
    startAutoPlay();
});



document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartContainer = document.getElementById("cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const toggleCartBtn = document.getElementById("toggleCart");

    // ===== Function to Add Item to Cart =====
    window.addToCart = function(name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    };

    // ===== Function to Update Cart Display =====
    function updateCart() {
        cartItemsContainer.innerHTML = "";

        let total = 0;
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
        <span>${item.name}</span>
        <span>₹${item.price} × ${item.quantity}</span>
        <div class="cart-actions">
          <button class="increase" onclick="changeQuantity(${index}, 1)">+</button>
          <button class="decrease" onclick="changeQuantity(${index}, -1)">-</button>
          <button class="remove" onclick="removeItem(${index})">🗑️</button>
        </div>
      `;
            cartItemsContainer.appendChild(itemDiv);
            total += item.price * item.quantity;
        });

        totalDisplay.textContent = `Total: ₹${total}`;
    }

    // ===== Change Quantity =====
    window.changeQuantity = function(index, change) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCart();
    };

    // ===== Remove Item =====
    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    // ===== Toggle Cart Visibility =====
    toggleCartBtn.addEventListener("click", () => {
        cartContainer.classList.toggle("active");
    });
});