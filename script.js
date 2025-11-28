/* ===== Elijah site - single-index multi-page (hash routing) ===== */

/* ----- Configuration ----- */
const WHATSAPP_NUMBER = '+2349114854561'; // your number for wa.me
const MENU = [
  // --- 🍳RICE/NOODLES  ---
  {id:'fried-egg', name:'Chicken jollof combo + free coke', price:5600, img:'image/img (1).webp', category:'breakfast', description:'Rich, smoky party-style Jollof Rice served with tender grilled chicken and golden fried plantain — paired with a refreshing Free Coca-Cola drink. A classic combo that tastes like home and feels like joy.'},
  {id:'plantain-egg', name:'Steamed White Rice (Full Portion)', price:2800, img:'image/image 2.webp', category:'breakfast',description:'A vibrant, flavor-packed bowl of our signature fried rice, generously loaded with crunchy vegetables, sweetcorn, and tender shredded proteins. Each spoon delivers a savory medley of textures '},
  {id:'naija-noodles-egg', name:'Steamed White Rice (Full Portion)', price:1200, img:'image/image3.webp', category:'breakfast',description:'A vibrant, flavor-packed bowl of our signature fried rice, generously loaded with crunchy vegetables, sweetcorn, and tender shredded proteins. Each spoon delivers a savory medley of textures '},
  

  // --- 🍛PASTA BOWL/PROTEIN ---
  {id:'jollof', name:'Stir-fry pasta ( no protein)', price:3120, img:'image/image4.webp', category:'lunch',description:'A vibrant, flavor-packed bowl of our signature fried rice, generously loaded with crunchy vegetables, sweetcorn, and tender shredded proteins. Each spoon delivers a savory medley of textures '},
  {id:'fried-rice', name:'Spicy naija pasta & full chicken lap', price:7920, img:'image/image5.webp', category:'lunch',description:'A vibrant, flavor-packed bowl of our signature fried rice, generously loaded with crunchy vegetables, sweetcorn, and tender shredded proteins. Each spoon delivers a savory medley of textures '},
  {id:'pepper-turkey', name:'Spicy naija pasta with turkey', price:10000, img:'image/image 6.webp', category:'lunch',description:'Satisfy your cravings with a bold 250g serving of our signature Spicy Naija Pasta — loaded with fire-roasted pepper sauce, stir-fried to perfection with caramelized onions and a hint of smoky heat in every bite, pair it your way either with chicken wings , chicken lap or turkey'},
  

  // --- 🌆 PEPPER SOAP / EWAAGANYIN(BEANS)---
  {id:'noodles-turkey', name:'Chicken Pepper Soup (4pcs)', price:4800, img:'image/image7.webp', category:'dinner',description:'4 big pieces of soft, tender chicken pieces slow-cooked in a spicy, aromatic pepper soup blend of ginger, garlic, scent leaf, and fresh pepper. Light, healthy, and flavorful — a refreshing twist for those who prefer a mild but tasty broth.'},
  {id:'catfish', name:'Full Catfish Pepper Soup ( 4Pcs )', price:9591, img:'image/image 8.webp', category:'dinner',description:'4 Big fresh catfish seasoned and simmered in a spicy, aromatic pepper soup mix with scent leaf and local spices. Each bowl is light, peppery, and bursting with flavor — a true Lagos favorite for fish lovers.'},
  {id:'half-chicken', name:'Half Catfish Pepper Soup (2Pcs)', price:4800, img:'image/image 8.webp', category:'dinner',description:'2 big fresh catfish seasoned and simmered in a spicy, aromatic pepper soup mix with scent leaf and local spices. Each bowl is light, peppery, and bursting with flavor'},
  {id:'fried-rice-egg', name:'Assorted Meat Pepper Soup', price:4800, img:'image/image 9.webp', category:'dinner',description:'Crispy potato chips, fresh salad mix, seasoned chicken, and our signature creamy house sauce , all rolled into a soft tortilla for the perfect crunch-meets-creamy experience.'},
  

  // --- 🍗SHAWARMA / BURRITOS ---
  {id:'chips', name:'Large Suya Beef Shawarma ( 2 Sausage )', price:4800, img:'image/image 10.webp', category:'snacks',description:'Tender spiced suya beef, sausage and strips layered with crunchy veggies and our rich, creamy house sauce, rolled up in a warm tortilla for that perfect smoky bite. Bold, meaty, and irresistibly good'},
  {id:'dodo', name:'Medium Suya Beef Shawarma ( 1 Sausage )', price:4000, img:'image/image 10.webp', category:'snacks',description:'Juicy grilled suya beef, Sausage, fresh veggies, and our signature creamy sauce, all wrapped in a soft tortilla and lightly toasted to perfection. Deliciously saucy, flavorful, and satisfying in every bite.'},
  {id:'suya', name:'Large Chicken Shawarma (2 Sausage )', price:4400, img:'image/image (11).webp', category:'snacks',description:'Tender spiced bee, with sausage and strips layered with crunchy veggies and our rich, creamy house sauce, rolled up in a warm tortilla for that perfect smoky bite. Bold, meaty, and irresistibly good.'},
  {id:'meatpie', name:'Medium chicken shawarma (1 sausage )', price:3840, img:'image/image (11).webp', category:'snacks',description:'Juicy grilled chicken, Sausage, fresh veggies, and our signature creamy sauce, all wrapped in a soft tortilla and lightly toasted to perfection. Deliciously saucy, flavorful, and satisfying in every bite.'},
  {id:'meatpie', name:'Beans & Dodo Burrito', price:3840, img:'image/image (12).webp', category:'snacks',description:'Juicy grilled chicken, Sausage, fresh veggies, and our signature creamy sauce, all wrapped in a soft tortilla and lightly toasted to perfection. Deliciously saucy, flavorful, and satisfying in every bite.'},
  {id:'meatpie', name:'Chips & Salad Burrito', price:3840, img:'image/image (13).webp', category:'snacks',description:'Juicy grilled chicken, Sausage, fresh veggies, and our signature creamy sauce, all wrapped in a soft tortilla and lightly toasted to perfection. Deliciously saucy, flavorful, and satisfying in every bite.'},

  // --- 🥤 SOAPS / SOAP & SWALLOW COMBO ---
  
  
];
/* ----- Simple DOM helpers ----- */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ----- Routing: render pages into #app ----- */
function renderHome(){
  return `
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-text">
        <h2>Fresh Nigerian Meals, Delivered Hot</h2>
        <p>Enjoy delicious, homemade dishes prepared with love — straight from our kitchen to your doorstep. Fast delivery, affordable meals, unforgettable taste.</p>

        <div style="margin:12px 0; display:flex; gap:14px; align-items:center;">
          <span style="font-size:20px; color:#f5b300;">⭐⭐⭐⭐⭐</span>
          <span style="color:var(--muted)">Rated #1 by our happy customers</span>
        </div>

        <div style="margin-top:12px">
          <a class="btn" href="#menu" data-link>Explore Menu</a>
          <a class="btn btn-outline" href="#contact" data-link style="margin-left:8px">Order on WhatsApp</a>
        </div>

        <div style="margin-top:18px; display:flex; gap:10px;">
          <div class="badge">🚚 Fast Delivery</div>
          <div class="badge">🔥 Fresh Daily</div>
          <div class="badge">🔥 Fresh Tast</div>
        </div>
      </div>

      <img class="hero-image" src="image/IMG_0136.jpg" alt="Delicious food">
    </section>

    <!-- WHY CHOOSE US -->
    <section style="margin-top:40px">
      <h3 style="text-align:center">Why Choose GrubNmore?</h3>
      <div class="cards" style="margin-top:20px">
        <div class="card">
          <h4>🍽 Authentic Taste</h4>
          <p>We cook real Nigerian meals using the freshest locally sourced ingredients.</p>
        </div>
        <div class="card">
          <h4>⚡ Fast Delivery</h4>
          <p>Your meals arrive hot and on time — always.</p>
        </div>
        <div class="card">
          <h4>💰 Affordable Prices</h4>
          <p>Top-quality meals at pocket-friendly prices.</p>
        </div>
      </div>
    </section>
<!-- TODAY'S SPECIALS -->
<section id="specials-section" style="margin-top:50px; text-align:center;">
  <h3>Today's Specials</h3>
  <p style="color:var(--muted); margin-bottom:20px;">Freshly prepared for you</p>

  <div id="special-box" class="special-box">
    <img id="special-img" src="" alt="Special Meal">
    <h4 id="special-name"></h4>
    <p id="special-price"></p>
  </div>
</section>

    <!-- POPULAR PICKS -->
    <section style="margin-top:50px">
      <h3 style="text-align:center">Popular Picks</h3>
      <p style="text-align:center; color:var(--muted); font-size:14px;">Our customers' all-time favorites</p>

      <div class="cards" style="margin-top:14px">
        <div class="card">
          <img src="image/IMG_0155.jpg" alt="" style="width:100%;border-radius:10px">
          <h4>Fried Egg — ₦2,500</h4>
        </div>
        <div class="card">
          <img src="image/IMG_8486.JPG" alt="" style="width:100%;border-radius:10px">
          <h4>Spicy Naija Noodles — ₦2,400</h4>
        </div>
        <div class="card">
          <img src="image/IMAG7072.JPG" alt="" style="width:100%;border-radius:10px">
          <h4>DODO — ₦1,800</h4>
        </div>
      </div>
    </section>

  <!-- COUNTERS SECTION -->
<section style="margin-top:50px; text-align:center">
  <h3>Our Achievements</h3>
  <p style="color:var(--muted); margin-bottom:25px;">Proud moments from our kitchen</p>

  <div class="counter-box">
    <div class="counter-item">
      <h2 class="counter" data-target="300">0</h2>
      <p>Orders Served</p>
    </div>

    <div class="counter-item">
      <h2 class="counter" data-target="150">0</h2>
      <p>Happy Customers</p>
    </div>

    <div class="counter-item">
      <h2 class="counter" data-target="45">0</h2>
      <p>Menu Items</p>
    </div>
  </div>
</section>
`;
}
  
function renderAbout(){
  return `
    <section style="margin-bottom:40px">
      <h2>About GrubNmore</h2>
      <p>At <strong>GrubNmore</strong>, we believe food should taste like home. We serve authentic Nigerian dishes inspired by family recipes passed down through generations.</p>
    </section>

    <!-- STORY SECTION -->
    <section class="hero" style="margin-bottom:50px">
      <img class="hero-image" src="image/IMG_0181.jpg" alt="Kitchen">
      <div class="hero-text">
        <h3>Our Story</h3>
        <p>What started as a small kitchen experiment has grown into a trusted food spot loved by many. Every meal is cooked with passion, hygiene, and the freshest ingredients.</p>
      </div>
    </section>

    <!-- MISSION + VALUES -->
    <section>
      <h3>Our Mission</h3>
      <p>To deliver delicious, affordable, homemade meals that bring joy to every customer.</p>

      <h3 style="margin-top:30px">Our Values</h3>
      <ul style="list-style:none; padding:0;">
        <li>• Quality Ingredients</li>
        <li>• Hygiene & Care</li>
        <li>• Fast & Reliable Delivery</li>
        <li>• Excellent Customer Service</li>
      </ul>
    </section>

    <!-- MEET THE CHEF -->
    <section style="margin-top:40px">
      <h3>Meet Our Chef</h3>
      <div class="card" style="padding:20px; text-align:center;">
        <img src="image/IMG_9274_2_-removebg-preview.png" style="width:120px; height:120px; border-radius:100%; object-fit:cover; margin-bottom:12px;" alt="">
        <h4>Chef Elijah</h4>
        <p style="color:var(--muted)">Head Chef & Founder</p>
        <p>Specialist in Nigerian comfort food — from smoky jollof to the crispiest fried chicken.</p>
      </div>
    </section>

    <!-- HOW WE COOK -->
    <section style="margin-top:50px">
      <h3 style="text-align:center">How We Cook</h3>
      <div class="cards" style="margin-top:20px">
        <div class="card">
          <h4>🛒 Step 1 — Fresh Ingredients</h4>
          <p>We source everything fresh daily.</p>
        </div>
        <div class="card">
          <h4>🍳 Step 2 — Home-style Cooking</h4>
          <p>Every meal is cooked with care, just like at home.</p>
        </div>
        <div class="card">
          <h4>🔥 Step 3 — Quick Delivery</h4>
          <p>Your meal arrives hot and delicious.</p>
        </div>
      </div>
    </section>
  `;
}

function renderMenu(){
  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'snacks', 'drinks'];

const categoryNames = {
  all: 'All',
  breakfast: 'Rice boal',
  lunch: 'Pasta / Protein',
  dinner: 'Pepper Soup / Swallow',
  snacks: 'Shawarma / Burritos / Snacks',
  drinks: 'Drinks'
};
  return `
    <section class="menu-section">
      <h2>Our Menu</h2>

      <!-- FILTER BUTTONS -->
      <div class="menu-filters">
        ${categories.map(cat => `
          <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${categoryNames[cat]}
          </button>
        `).join('')}
      </div>

      <!-- ITEMS GO HERE -->
      <div id="menu-grid" class="menu-grid"></div>
    </section>
  `;
}
function showMenuItems(category){
  const grid = $('#menu-grid');
  grid.innerHTML = '';

  const items = category === 'all'
    ? MENU
    : MENU.filter(i => i.category === category);

 grid.innerHTML = items.map(i => `
  <div class="menu-item">
    <img src="${i.img}" alt="${i.name}">
    <h3>${i.name}</h3>
    <p class="menu-desc">${i.description || ''}</p>
    <div class="price">₦${i.price.toLocaleString()}</div>
    <button class="add-btn" data-id="${i.id}">Add to Cart</button>
  </div>
`).join('');

  // re-wire add-to-cart buttons
  $$('.add-btn').forEach(b =>
    b.addEventListener('click', () => addToCart(b.dataset.id))
  );
}
  

function renderContact(){
  return `
    <section class="contact-section">
      <h2>Contact & Find Us</h2>
      <p>Message us on WhatsApp or use the form below.</p>
      <div class="contact-grid">
        <div class="contact-form">
          <input id="name" type="text" placeholder="Your name" required>
          <input id="email" type="email" placeholder="Email (optional)">
          <textarea id="message" rows="4" placeholder="Your message"></textarea>
          <button class="btn" id="contact-send">Send via WhatsApp</button>
        </div>

        <div>
          <h3>Find Us</h3>
          <div class="map-container" style="height:320px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.290350948391!2d3.379205874089225!3d6.524379523260881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bcd1234567%3A0xabcd1234ef567890!2sElijah!5e0!3m2!1sen!2sng!4v1695832698105!5m2!1sen!2sng"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div style="margin-top:12px">
            <a class="btn btn-directions" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=6.5244,3.3792">📍 Get Directions</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function router(){
  const hash = location.hash.replace('#','') || 'home';
  let html = '';
  if(hash === 'home') html = renderHome();
  else if(hash === 'about') html = renderAbout();
  else if(hash === 'menu') html = renderMenu();
  else if(hash === 'contact') html = renderContact();
  else html = renderHome();

  $('#app').innerHTML = html;
  // after injecting, wire page-specific handlers:
  wirePage();
  // update nav active state
  $$('.nav-list a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + hash));
}

/* ----- Cart (persisted) ----- */
const STORAGE_KEY = 'GrubNmore_cart_v1';
let cart = {};
function loadCart(){ try{ cart = JSON.parse(localStorage.getItem(STORAGE_KEY))||{}; }catch(e){ cart = {}; } }
function saveCart(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
function addToCart(id, qty=1){
  const item = MENU.find(m=>m.id===id);
  if(!item) return;
  if(!cart[id]) cart[id] = {...item, qty:0};
  cart[id].qty += qty;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateCartUI();
}
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateCartUI();
}
function cartCount(){ return Object.values(cart).reduce((s,i)=>s+(i.qty||0),0); }
function cartTotal(){ return Object.values(cart).reduce((s,i)=>s + (i.qty||0)* (i.price||0),0); }

function updateCartUI(){
  $$('#cart-count').forEach(el => el.textContent = cartCount());
  // fill each drawer's cart-items area
  $$('#cart-items').forEach(container=>{
    container.innerHTML = '';
    if(Object.keys(cart).length === 0){
      container.innerHTML = '<div class="small">Your cart is empty.</div>';
      $$('#cart-total').forEach(t=> t.textContent = '₦0');
      return;
    }
    Object.values(cart).forEach(i=>{
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${i.img}" alt="${i.name}">
        <div style="flex:1">
          <strong>${i.name}</strong><br>
          ₦${i.price.toLocaleString()} × ${i.qty}
          <div style="margin-top:6px">
            <button class="tiny" data-id="${i.id}" data-delta="-1">-</button>
            <button class="tiny" data-id="${i.id}" data-delta="1">+</button>
          </div>
        </div>
      `;
      container.appendChild(row);
    });
    $$('.tiny', container).forEach(b => b.addEventListener('click', ()=> changeQty(b.dataset.id, Number(b.dataset.delta))));
    $$('#cart-total').forEach(t=> t.textContent = '₦' + cartTotal().toLocaleString());
  });
}

function showCartDrawer(){ $$('#cart-drawer').forEach(d=> d.classList.remove('hidden')); }
function hideCartDrawer(){ $$('#cart-drawer').forEach(d=> d.classList.add('hidden')); }

function animateCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    counter.innerText = '0';
    const target = +counter.getAttribute('data-target');
    const speed = 200;

    const updateCounter = () => {
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });
}

// SCROLL TRIGGER
function setupCounterObserver() {
  const counterSection = document.querySelector('.counter-box');
  if (!counterSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      obs.disconnect(); // run once only
    }
  }, {
    threshold: 0.4 // triggers when 40% of the section is visible
  });

  observer.observe(counterSection);
}

// When home loads or reloads
window.addEventListener('hashchange', () => {
  if (location.hash === "#home" || location.hash === "") {
    setTimeout(setupCounterObserver, 300);
  }
});

// On first load
document.addEventListener('DOMContentLoaded', () => {
  if (location.hash === "#home" || location.hash === "") {
    setTimeout(setupCounterObserver, 300);
  }
});

// Run counters animation when Home loads
window.addEventListener('hashchange', () => {
  if (location.hash === "#home" || location.hash === "") {
    setTimeout(animateCounters, 300);
  }
});

// ========== TODAY'S SPECIALS ROTATION ==========
const specials = [
  {
    name: "Spicy Noodles & Egg",
    price: "₦2,800",
    image: "image/IMG_8486.JPG"
  },
  {
    name: "Crispy Dodo & Sauce",
    price: "₦1,800",
    image: "image/IMAG7072.JPG"
  },
  {
    name: "Fried Egg (Loaded)",
    price: "₦2,500",
    image: "image/IMG_0155.jpg"
  }
];

let currentSpecial = 0;

function updateSpecial(){
  const box = document.getElementById("special-box");
  const img = document.getElementById("special-img");
  const name = document.getElementById("special-name");
  const price = document.getElementById("special-price");

  if(!box || !img) return;

  // fade out
  box.style.opacity = 0;

  setTimeout(() => {
    const item = specials[currentSpecial];
    img.src = item.image;
    name.textContent = item.name;
    price.textContent = item.price;

    // fade in
    box.style.opacity = 1;

    currentSpecial = (currentSpecial + 1) % specials.length;
  }, 500);
}

function startSpecialRotation(){
  updateSpecial();
  setInterval(updateSpecial, 4000); // changes every 4 seconds
}

// Run when Home page loads
window.addEventListener("hashchange", () => {
  if(location.hash === "#home" || location.hash === ""){
    setTimeout(startSpecialRotation, 200);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if(location.hash === "#home" || location.hash === ""){
    setTimeout(startSpecialRotation, 200);
  }
});

/* ----- WhatsApp integration ----- */
function buildOrderMessage(){
  if(Object.keys(cart).length === 0) return null;
  const lines = ['New order for GrubNmore', ''];
  Object.values(cart).forEach(i => lines.push(`${i.qty} x ${i.name} — ₦${i.price.toLocaleString()}`));
  lines.push('', `Total: ₦${cartTotal().toLocaleString()}`, '', 'Please confirm pickup/delivery time. Thanks!');
  return lines.join('\n');
}
function sendWhatsAppOrder(){
  if(Object.keys(cart).length === 0) { alert('Cart is empty'); return; }
  const msg = buildOrderMessage();
  const num = WHATSAPP_NUMBER.replace(/\D/g,'');
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ----- contact form send ----- */
function sendContactForm(){
  const name = (document.getElementById('name')||{}).value || '';
  const message = (document.getElementById('message')||{}).value || '';
  const text = `Hello GrubNmore, my name is ${name}. ${message}`;
  const num = WHATSAPP_NUMBER.replace(/\D/g,'');
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, '_blank');
}

/* ----- theme (dark mode) ----- */
function initTheme(){
  const saved = localStorage.getItem('GrubNmore_theme');
  if(saved === 'dark') document.body.classList.add('dark');
  $$('#theme-toggle').forEach(t => t.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙');
}
function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('GrubNmore+_theme', document.body.classList.contains('dark') ? 'dark':'light');
  $$('#theme-toggle').forEach(t => t.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙');
}

/* ----- nav toggle for mobile ----- */
function initNavToggle(){
  $$('#nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => $$('.nav-list').forEach(list => list.classList.toggle('show')));
  });
  // close after clicking link
  $$('.nav-list a').forEach(a => a.addEventListener('click', ()=> $$('.nav-list').forEach(list => list.classList.remove('show'))));
}

/* ----- wire events & page-specific handlers after render ----- */
function wirePage(){
  // ----- menu filter buttons -----
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;

      // active state
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // show items
      showMenuItems(cat);
    });
  });

  // Show ALL items by default when menu page loads
  if($('#menu-grid')) showMenuItems('all');

  // add-to-cart inside other pages
  $$('.add-btn').forEach(b =>
    b.addEventListener('click', ()=> addToCart(b.dataset.id))
  );

  // cart controls
  $$('.tiny').forEach(b => b.addEventListener('click', ()=> changeQty(b.dataset.id, Number(b.dataset.delta))));
  $$('#open-cart').forEach(b => b.addEventListener('click', showCartDrawer));
  $$('#close-cart').forEach(b => b.addEventListener('click', hideCartDrawer));
  $$('#send-wa').forEach(b => b.addEventListener('click', sendWhatsAppOrder));

  // contact form
  const contactSend = document.getElementById('contact-send');
  if(contactSend) contactSend.addEventListener('click', sendContactForm);

  // theme toggle
  $$('#theme-toggle').forEach(b => b.addEventListener('click', toggleTheme));
}

/* ----- init app ----- */
function init(){
  // set initial year
  $$('#year').forEach(el => el.textContent = new Date().getFullYear());

  loadCart();
  updateCartUI();
  initNavToggle();
  initTheme();

  // react to hash changes
  window.addEventListener('hashchange', router);
  // initial route
  if(!location.hash) location.hash = '#home';
  router();

  // expose some functions globally for console/debug if needed
  window.addToCart = addToCart;
  window.sendWhatsApp = sendWhatsAppOrder;
  window.sendContactForm = sendContactForm;
}

document.addEventListener('DOMContentLoaded', init);