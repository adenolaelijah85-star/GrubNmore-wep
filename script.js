/* ===== Elijah site - single-index multi-page (hash routing) ===== */

/* ----- Configuration ----- */
const WHATSAPP_NUMBER = '+2349114854561'; // your number for wa.me
const MENU = [
  {id:'jollof',name:'Half Chicken Cut',price:2500,img:'image/Half Chicken Cut/IMAG7109.JPG'},
  {id:'fried',name:'Fried Rice',price:2400,img:'image/Naija Noodles and Egg/IMG_0123.jpg'},
  {id:'suya',name:'Chicken Suya',price:1800,img:'image/Plantain & Egg Sauce/IMG_8480.JPG'},
  {id:'plantain',name:'Fried Plantain',price:800,img:'image/Sandwiches/IMAG7026.JPG'},
  {id:'pounded-yam',name:'Pounded Yam & Egusi',price:2800,img:'image/Spicy Naija Noodles with Turkey/IMG_0134.jpg'},
  {id:'eba',name:'Eba & Okra Soup',price:2500,img:'image/Yam Royale Combo/IMG_8492.JPG'},
  {id:'amala',name:'Amala & Ewedu',price:2600,img:'image/BBQ Chicken Wings/IMAG7091.JPG'},
  {id:'beans',name:'Beans & Plantain',price:2000,img:'image/Chicken Schnitzel/IMAG7083.JPG'},
  {id:'ofada',name:'Ofada Rice & Sauce',price:3000,img:'image/Chicken Wings/IMAG7098.JPG'},
  {id:'moimoi',name:'Moi Moi',price:900,img:'image/Chicken Wrap/IMAG7066.JPG'},
  {id:'pepper-soup',name:'Goat Meat Pepper Soup',price:2200,img:'image/Creamy Alfredo Pasta/IMAG7078.JPG'},
  {id:'yam-porridge',name:'Yam Porridge',price:1800,img:'image/Crisp Chicken Only/IMG_0192.jpg'},
  {id:'fish',name:'Fried Fish',price:2000,img:'image/Crispy Chicken & Chips/IMG_0169.jpg'},
  {id:'stew',name:'Beef Stew',price:2300,img:'image/DODO GANG/IMG_8483.JPG'},
  {id:'okra2',name:'Seafood Okra Soup',price:2700,img:'image/Fried Paper Chicken/IMG_0106.jpg'},
  {id:'white-rice',name:'White Rice & Stew',price:2100,img:'image/Fried Pepper Turkey/IMG_0111.jpg'},
  {id:'catfish',name:'Catfish Pepper Soup',price:2400,img:'image/Half Chicken Cut/IMAG7109.JPG'},
  {id:'egusi',name:'Egusi Soup (with Beef)',price:2600,img:'image/Yam Royale Combo/IMG_8494.JPG'},
  {id:'snail',name:'Grilled Snail',price:3000,img:'image/Plantain & Egg Sauce/IMG_8480.JPG'},
  {id:'salad',name:'Nigerian Salad',price:1500,img:'image/Stir-Fry Noodles with Turkey/IMG_0151.jpg'}
];

/* ----- Simple DOM helpers ----- */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ----- Routing: render pages into #app ----- */
function renderHome(){
  return `
    <section class="hero">
      <div class="hero-text">
        <h2>Welcome to GrubNmore</h2>
        <p>Delicious, home-cooked Nigerian meals prepared fresh every day. Explore our menu, add to cart, and send your order via WhatsApp.</p>
        <div style="margin-top:12px">
          <a class="btn" href="#menu" data-link>View Menu</a>
          <a class="btn btn-outline" href="#contact" data-link style="margin-left:8px">Contact Us</a>
        </div>
      </div>
      <img class="hero-image" src="image/IMAG7130.JPG" alt="Delicious food">
    </section>

    <section>
      <h3 style="text-align:center">Popular Picks</h3>
      <div class="cards" style="margin-top:14px">
        <div class="card"><img src="image/Fried Egg/IMG_0155.jpg" alt="" style="width:100%;border-radius:10px"><h4>Fried Egg— ₦2,500</h4></div>
        <div class="card"><img src="image/Spicy Naija Noodles and Chicken/IMG_0129.jpg" alt="" style="width:100%;border-radius:10px"><h4>Spicy Naija Noodles and Chicke — ₦2,400</h4></div>
        <div class="card"><img src="image/Naija Noodles and Egg/IMG_0121.jpg" alt="" style="width:100%;border-radius:10px"><h4>Naija Noodles and Egg — ₦1,800</h4></div>
      </div>
    </section>
  `;
}

function renderAbout(){
  return `
    <section>
      <h2>About GrubNmore</h2>
      <p><strong>GrubNmore</strong> began with a love for authentic Nigerian dishes — family recipes, fresh ingredients, and a promise to serve every plate with care.</p>
      <h3>Our Services</h3>
      <ul style="list-style:none;padding:0">
        <li>• Dine-In & Takeaway</li>
        <li>• Home Delivery</li>
        <li>• Event Catering</li>
        <li>• Custom Menus</li>
      </ul>
    </section>
  `;
}

function renderMenu(){
  // build grid with menu items (20)
  const items = MENU.map(i => `
    <div class="menu-item">
      <img src="${i.img}" alt="${i.name}">
      <h3>${i.name}</h3>
      <div class="price">₦${i.price.toLocaleString()}</div>
      <button class="add-btn" data-id="${i.id}">Add to Cart</button>
    </div>
  `).join('');
  return `
    <section class="menu-section">
      <h2>Our Menu</h2>
      <div id="menu-grid" class="menu-grid">${items}</div>
    </section>
  `;
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
const STORAGE_KEY = 'elijah_cart_v1';
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

/* ----- WhatsApp integration ----- */
function buildOrderMessage(){
  if(Object.keys(cart).length === 0) return null;
  const lines = ['New order for Elijah', ''];
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
  const text = `Hello Elijah, my name is ${name}. ${message}`;
  const num = WHATSAPP_NUMBER.replace(/\D/g,'');
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(text)}`, '_blank');
}

/* ----- theme (dark mode) ----- */
function initTheme(){
  const saved = localStorage.getItem('elijah_theme');
  if(saved === 'dark') document.body.classList.add('dark');
  $$('#theme-toggle').forEach(t => t.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙');
}
function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('elijah_theme', document.body.classList.contains('dark') ? 'dark':'light');
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
  // menu page add buttons
  $$('#menu-grid .add-btn').forEach(b => b.addEventListener('click', ()=> {
    addToCart(b.dataset.id);
  }));
  // cart control buttons (tiny + -)
  $$('.tiny').forEach(b => b.addEventListener('click', ()=> changeQty(b.dataset.id, Number(b.dataset.delta))));
  // cart drawer buttons
  $$('#open-cart').forEach(b => b.addEventListener('click', showCartDrawer));
  $$('#close-cart').forEach(b => b.addEventListener('click', hideCartDrawer));
  $$('#send-wa').forEach(b => b.addEventListener('click', sendWhatsAppOrder));
  // contact send
  const contactSend = document.getElementById('contact-send');
  if(contactSend) contactSend.addEventListener('click', sendContactForm);
  // theme toggle
  $$('#theme-toggle').forEach(b => b.addEventListener('click', toggleTheme));
  // small buttons with data-link should update hash automatically (anchor does)
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