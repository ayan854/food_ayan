// Order button animation
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


/*alerts*/
function home() {
    alert("Welcome to our website");
}


function func() {
    alert("Your order is placed");

}


/*desceription*/
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const nav = document.querySelector('.nav');

let currentIndex = 0;

// Create navigation dots dynamically
for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    nav.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, 4000);

document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(autoSlide));
document.querySelector('.slider').addEventListener('mouseout', () => autoSlide = setInterval(nextSlide, 4000));



function toggleDescription() {
    const box = document.getElementById('descriptionBox');
    const button = document.querySelector('button');

    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        button.textContent = 'Hide Description';
    } else {
        box.style.display = 'none';
        button.textContent = 'Show Description';
    }
}



function toggleDescription_right() {
    const box = document.getElementById('descriptionBox2');
    const button = document.querySelector('btn');

    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        button.textContent = 'Hide Description';
    } else {
        box.style.display = 'none';
        button.textContent = 'Show Description';
    }
}




const testimonials = document.querySelectorAll(".testimonial-box");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[i].classList.add("active");
}

// Next button
next.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
});

// Prev button
prev.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
});

// Auto-slide every 6 seconds
setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}, 6000);


function addToCart(itemName, price) {
    const existingItem = cart.find((item) => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }
    total += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = " ";

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <span>${item.name} (${item.quantity} × ₹${item.price})</span>
          <button class="remove-btn" onclick="removeItem(${index}) ">✖</button>
        `;
        cartContainer.appendChild(div);
    });

    document.getElementById("total").innerText = "Total: ₹ " + total;
}

function removeItem(index) {
    const item = cart[index];
    total -= item.price * item.quantity;
    cart.splice(index, 1);
    updateCartDisplay();
}

// Toggle cart visibility
document.getElementById("toggleCart").addEventListener("click", () => {
    const cartBox = document.getElementById("cart");
    cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
});