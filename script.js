let currentUser = null;
let cart = [];
let currentProducts = [
  { id:41, name:"Jugo Verde Energético", price:6.90, description:"Espinaca, pepino, manzana y limón", image:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600", category:"jugo", nutrition:"110 kcal | Vitaminas A y C" },

  { id:42, name:"Jugo Tropical Fresh", price:4.90, description:"Piña, mango y naranja", image:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600", category:"jugo", nutrition:"140 kcal | Vitamina C" },

  { id:43, name:"Jugo Antioxidante", price:8.90, description:"Fresa, arándanos y manzana", image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600", category:"jugo", nutrition:"130 kcal | Antioxidantes naturales" },

  { id:44, name:"Jugo Sunrise", price:6.50, description:"Naranja, zanahoria y jengibre", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgM2cJdYMPLFb14muTtSBtJCJ63JIiohH7-sKWMNtB584XRov_pZLWMkY&s=10", category:"jugo", nutrition:"120 kcal | Vitamina A y C" },

  { id:45, name:"Jugo Detox Premium", price:5.50, description:"Apio, pepino, limón y menta", image:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600", category:"jugo", nutrition:"90 kcal | Hidratación natural" },

  { id:46, name:"Jugo Red Power", price:8.90, description:"Betarraga, manzana y zanahoria", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5BLhCMrz8DIrwSwUTtyLA3JNqADwbMHywIq6VNdRrJnQg-tJ3M13e0I&s=10", category:"jugo", nutrition:"125 kcal | Hierro y antioxidantes" },

  { id:47, name:"Jugo Citrus Boost", price:8.90, description:"Naranja, mandarina y limón", image:"https://images.unsplash.com/photo-1546173159-315724a31696?w=600", category:"jugo", nutrition:"115 kcal | Vitamina C" },

  { id:48, name:"Jugo Kiwi Fresh", price:11.50, description:"Kiwi, piña y manzana verde", image:"https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600", category:"jugo", nutrition:"135 kcal | Fibra y vitamina C" },

  { id:49, name:"Jugo Maracuyá Fit", price:7.50, description:"Maracuyá, naranja y chía", image:"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600", category:"jugo", nutrition:"145 kcal | Omega 3 y vitamina C" },

  { id:50, name:"Jugo Purple Energy", price:11.90, description:"Uva, arándanos y mora", image:"https://i.pinimg.com/474x/4c/8d/3c/4c8d3c2c0d90ff2826e5b38e00ad4be8.jpg", category:"jugo", nutrition:"150 kcal | Antioxidantes y vitaminas" },
  { id:16, name:"Chicken Teriyaki Bowl", price:23.90, description:"Pollo teriyaki, arroz integral y verduras", image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600", category:"bowl", nutrition:"560 kcal | Proteínas 36g | Grasas 14g" },
  { id:17, name:"Poke de Atún", price:24.90, description:"Atún fresco, arroz, palta y pepino", image:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600", category:"bowl", nutrition:"540 kcal | Proteínas 34g | Grasas 18g" },

  { id:18, name:"Wrap Mediterráneo", price:17.90, description:"Pollo, queso fresco, tomate y aceitunas", image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600", category:"wrap", nutrition:"450 kcal | Proteínas 28g | Grasas 12g" },

  { id:19, name:"Sándwich Integral de Pavo", price:16.90, description:"Pavo, lechuga, tomate y queso light", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600", category:"sandwich", nutrition:"420 kcal | Proteínas 30g | Grasas 9g" },

  { id:20, name:"Bowl de Garbanzos", price:18.90, description:"Garbanzos, quinoa, espinaca y palta", image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600", category:"bowl", nutrition:"490 kcal | Proteínas 18g | Grasas 16g" },

  { id:21, name:"Ensalada César Fit", price:19.90, description:"Pollo grillado, lechuga y aderezo ligero", image:"https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600", category:"salad", nutrition:"460 kcal | Proteínas 32g | Grasas 14g" },

  { id:22, name:"Panqueques de Avena", price:13.90, description:"Avena, plátano y miel", image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600", category:"breakfast", nutrition:"370 kcal | Proteínas 14g | Grasas 8g" },

  { id:23, name:"Yogurt Protein Mix", price:12.90, description:"Yogurt griego, granola y frutos rojos", image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600", category:"breakfast", nutrition:"310 kcal | Proteínas 22g | Grasas 5g" },

  { id:24, name:"Smoothie Verde", price:10.90, description:"Espinaca, kiwi, manzana y chía", image:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600", category:"drink", nutrition:"220 kcal | Proteínas 8g | Grasas 3g" },

  { id:25, name:"Smoothie Protein Chocolate", price:13.90, description:"Leche, cacao y proteína", image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600", category:"drink", nutrition:"330 kcal | Proteínas 27g | Grasas 6g" },

  { id:26, name:"Pasta Primavera", price:21.90, description:"Pasta integral con verduras salteadas", image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600", category:"pasta", nutrition:"510 kcal | Proteínas 20g | Grasas 11g" },

  { id:27, name:"Arroz Chaufa Fit", price:22.90, description:"Arroz integral, pollo y verduras", image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600", category:"rice", nutrition:"580 kcal | Proteínas 35g | Grasas 13g" },

  { id:28, name:"Tostadas Energéticas", price:12.90, description:"Pan integral, mantequilla de maní y plátano", image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600", category:"breakfast", nutrition:"390 kcal | Proteínas 15g | Grasas 12g" },

  { id:29, name:"Burrito Saludable", price:18.90, description:"Tortilla integral, pollo, frejoles y vegetales", image:"https://tse3.mm.bing.net/th/id/OIP.FmWRyRl3Ei_2vpQcKLcY6AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", category:"wrap", nutrition:"530 kcal | Proteínas 33g | Grasas 11g" },

  { id:30, name:"Ensalada de Atún", price:17.90, description:"Atún, lechuga, tomate y huevo", image:"https://tse3.mm.bing.net/th/id/OIP.Fq5LfFgLBhzSJRbTD3_DVAHaFl?r=0&w=1232&h=928&rs=1&pid=ImgDetMain&o=7&rm=3", category:"salad", nutrition:"410 kcal | Proteínas 31g | Grasas 10g" },

  { id:31, name:"Pizza Integral Veggie", price:24.90, description:"Masa integral, verduras y queso ligero", image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600", category:"pizza", nutrition:"620 kcal | Proteínas 24g | Grasas 15g" },

  { id:32, name:"Cheesecake Fit", price:11.90, description:"Postre de yogurt griego y frutos rojos", image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600", category:"postre", nutrition:"260 kcal | Proteínas 14g | Grasas 7g" },

  { id:33, name:"Brownie Saludable", price:9.90, description:"Cacao, avena y plátano", image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600", category:"postre", nutrition:"240 kcal | Proteínas 9g | Grasas 6g" },

  { id:34, name:"Limonada Detox", price:8.90, description:"Limón, menta y chía", image:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600", category:"drink", nutrition:"90 kcal | Vitamina C" },

  { id:35, name:"Fruit Power Bowl", price:14.90, description:"Fresas, mango, kiwi, granola y yogurt", image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600", category:"bowl", nutrition:"340 kcal | Proteínas 12g | Grasas 5g" },

  { id:36, name:"Omelette Fitness", price:15.90, description:"Omelette de claras, espinaca y queso light", image:"https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600", category:"breakfast", nutrition:"320 kcal | Proteínas 26g | Grasas 9g" },

  { id:37, name:"Chicken Avocado Sandwich", price:17.90, description:"Pollo a la plancha, palta y pan integral", image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600", category:"sandwich", nutrition:"470 kcal | Proteínas 34g | Grasas 13g" },

  { id:38, name:"Bowl Mexicano Fit", price:23.90, description:"Arroz integral, pollo, frejoles, maíz y palta", image:"https://storage.googleapis.com/avena-recipes-v2/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAgICa8YQKDA/15-06-2024/Tmr7r0smSRhGZBvs4lpN1718495112559.jpeg", category:"bowl", nutrition:"590 kcal | Proteínas 38g | Grasas 16g" },

  { id:39, name:"Galletas de Avena Fit", price:7.90, description:"Avena, plátano y chips de cacao", image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600", category:"snack", nutrition:"180 kcal | Proteínas 7g | Grasas 4g" },

  { id:40, name:"Frappé de Café Protein", price:12.90, description:"Café, leche descremada y proteína de vainilla", image:"https://tse1.mm.bing.net/th/id/OIP.2IzmPKMkdTLYTFFwFy6SzwHaE8?r=0&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3", category:"drink", nutrition:"210 kcal | Proteínas 20g | Grasas 3g" },
  {
  id:3,
  name:"Salmon Fresh Bowl",
  price:24.90,
  description:"Salmón, arroz integral, palta y edamame",
  image:"https://www.lunarecipe.com/wp-content/uploads/2024/11/3.3-21.jpg",
  category:"bowl",
  nutrition:"580 kcal | Proteínas 35g | Grasas 22g"
},
{
  id:4,
  name:"Protein Burger",
  price:21.90,
  description:"Hamburguesa de pollo, pan integral y vegetales",
  image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  category:"burger",
  nutrition:"610 kcal | Proteínas 40g | Grasas 16g"
},
{
  id:5,
  name:"Avocado Toast",
  price:14.90,
  description:"Pan integral, palta, huevo y semillas",
  image:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
  category:"breakfast",
  nutrition:"390 kcal | Proteínas 18g | Grasas 15g"
},
{
  id:6,
  name:"Berry Smoothie",
  price:11.90,
  description:"Fresas, arándanos, yogurt griego y avena",
  image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600",
  category:"drink",
  nutrition:"280 kcal | Proteínas 14g | Grasas 4g"
},
{
  id:7,
  name:"Mediterranean Salad",
  price:18.90,
  description:"Lechuga, queso fresco, aceitunas y pollo",
  image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
  category:"salad",
  nutrition:"450 kcal | Proteínas 30g | Grasas 17g"
},
{
  id:8,
  name:"Power Oatmeal",
  price:12.90,
  description:"Avena, plátano, mantequilla de maní y miel",
  image:"https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600",
  category:"breakfast",
  nutrition:"410 kcal | Proteínas 16g | Grasas 11g"
},
{
  id:9,
  name:"Healthy Pasta",
  price:22.90,
  description:"Pasta integral con pollo y salsa de tomate natural",
  image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
  category:"pasta",
  nutrition:"540 kcal | Proteínas 34g | Grasas 12g" },
  { id:10, name:"Tropical Smoothie",  price:10.90, description:"Mango, piña, yogurt natural y chía", image:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600", category:"drink", nutrition:"250 kcal | Proteínas 10g | Grasas 3g" },
  { id:2, name:"Chicken Fit Wrap", price:16.90, description:"Tortilla integral, pollo grillado, lechuga y tomate", image:"https://masonfit.com/wp-content/uploads/2024/05/healthy-buffalo-chicken-wraps-recipe.jpg", category:"wrap", nutrition:"430 kcal | Proteínas 32g | Grasas 10g" },
  { id:1, name:"Green Power Bowl", price:19.90, description:"Quinoa, kale, palta, pollo grill", image:"https://tse3.mm.bing.net/th/id/OIP.-jP6okjduv3o79b4NG5QTQHaJQ?r=0&w=768&h=960&rs=1&pid=ImgDetMain&o=7&rm=3", category:"bowl", nutrition:"520 kcal | Proteínas 28g | Grasas 18g" },
  { id:2, name:"Avocado Rainbow", price:21.50, description:"Mix de vegetales, proteína", image:"https://data.thefeedfeed.com/recommended/post_3207372.jpeg", category:"bowl", nutrition:"480 kcal | Proteínas 22g | Grasas 22g" },
  { id:3, name:"Fit Wrap", price:15.90, description:"Tortilla integral, espinaca, pollo", image:"https://tse4.mm.bing.net/th/id/OIP.l_LhTzNt5XiX8RbIEbB0GAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", category:"wrap", nutrition:"390 kcal | Proteínas 25g | Grasas 12g" },
  { id:4, name:"Ensalada Tropical", price:13.90, description:"Frutas, granola y yogur", image:"https://www.goya.com/wp-content/uploads/2023/10/tropical-coleslaw.jpg", category:"bowl", nutrition:"350 kcal | Proteínas 8g | Grasas 9g" },
  { id:5, name:"Jugo Detox", price:9.90, description:"Jengibre, espinaca, manzana", image:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600", category:"jugo", nutrition:"120 kcal | Vitaminas A, C" },
  { id:6, name:"Mousse de Cacao", price:12.50, description:"Postre vegano sin azúcar", image:"https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600", category:"postre", nutrition:"210 kcal | Grasas saludables" }
];
let offersProducts = [{ id:101, name:"Wrap + Jugo", price:18.90, original:24.90, image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600", description:"Combo promocional" }];
let ratings = JSON.parse(localStorage.getItem('avora_ratings') || '{}');
let ordersHistory = JSON.parse(localStorage.getItem('avora_orders') || '[]');

// Helper
function showToast(msg, isErr=false) {
  let t=document.createElement('div');
  t.className='toast-msg';
  t.textContent=msg;
  t.style.background=isErr?'#aa5e3b':'#4f793e';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),2500);
}

function escapeHtml(str) {
  if(!str) return '';
  return str.replace(/[&<>]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;'})[m]);
}

// User system
function getUsers() { return JSON.parse(localStorage.getItem('avora_users') || '[]'); }
function saveUsers(users) { localStorage.setItem('avora_users', JSON.stringify(users)); }

function saveCurrentUser(u) {
  localStorage.setItem('avora_currentUser', JSON.stringify(u));
  currentUser = u;
  updateUserMenu();
  updatePointsUI();
  loadCartForUser();
  renderRecommended();
  renderOrderHistory();
}

function loadCurrentUser() {
  let u = localStorage.getItem('Qhali Life_currentUser');
  if(u) {
    currentUser = JSON.parse(u);
    updateUserMenu();
    updatePointsUI();
    loadCartForUser();
    renderRecommended();
    renderOrderHistory();
  } else {
    currentUser=null;
    updateUserMenu();
  }
}

function addPointsToCurrentUser(amount) {
  if(!currentUser) return false;
  currentUser.points += amount;
  let users = getUsers();
  let idx = users.findIndex(u=>u.email===currentUser.email);
  if(idx!==-1) users[idx].points = currentUser.points;
  saveUsers(users);
  saveCurrentUser(currentUser);
  updatePointsUI();
  return true;
}

function updatePointsUI() {
  document.getElementById('userPoints').innerText = currentUser ? currentUser.points : 0;
}

// Cart functions
function saveCart() {
  if(currentUser) localStorage.setItem(`avora_cart_${currentUser.email}`, JSON.stringify(cart));
}

function loadCartForUser() {
  if(currentUser) {
    let saved = localStorage.getItem(`avora_cart_${currentUser.email}`);
    cart = saved ? JSON.parse(saved) : [];
    updateCartUI();
  } else {
    cart=[];
    updateCartUI();
  }
}

function updateCartUI() {
  const container = document.getElementById('cartItemsList');
  if(!container) return;
  const countSpan = document.getElementById('cartCount');
  let total=0, itemCount=0, html='';
  cart.forEach((item,idx)=>{
    total+=item.price*item.quantity;
    itemCount+=item.quantity;
    html+=`<div class="cart-item">
      <div><strong>${escapeHtml(item.name)}</strong><br>S/ ${item.price.toFixed(2)}</div>
      <div class="item-quantity">
        <button class="qty-minus" data-idx="${idx}">-</button>
        <span>${item.quantity}</span>
        <button class="qty-plus" data-idx="${idx}">+</button>
        <button class="remove-item" data-idx="${idx}"><i class="fas fa-trash"></i></button>
      </div>
    </div>`;
  });
  container.innerHTML = html || '<p style="text-align:center;">Carrito vacío 🌱</p>';
  document.getElementById('cartTotalPrice').innerText = `S/ ${total.toFixed(2)}`;
  if(countSpan) countSpan.innerText = itemCount;
  attachCartEvents();
  saveCart();
}

function attachCartEvents() {
  document.querySelectorAll('.qty-plus').forEach(btn=>btn.addEventListener('click',()=>{
    let idx=btn.getAttribute('data-idx');
    if(cart[idx]) { cart[idx].quantity++; updateCartUI(); }
  }));
  document.querySelectorAll('.qty-minus').forEach(btn=>btn.addEventListener('click',()=>{
    let idx=btn.getAttribute('data-idx');
    if(cart[idx]) { if(cart[idx].quantity>1) cart[idx].quantity--; else cart.splice(idx,1); updateCartUI(); }
  }));
  document.querySelectorAll('.remove-item').forEach(btn=>btn.addEventListener('click',()=>{
    let idx=btn.getAttribute('data-idx');
    cart.splice(idx,1);
    updateCartUI();
  }));
}

function addToCart(product) {
  if(!currentUser) { showToast('Inicia sesión para agregar', true); return; }
  let existing = cart.find(i=>i.name===product.name);
  if(existing) existing.quantity++;
  else cart.push({...product, quantity:1});
  updateCartUI();
  showToast(`🍏 ${product.name} agregado`);
}

// Render products with stars fixed
function renderFoodGrid(products) {
  const grid = document.getElementById('foodGrid');
  if(!grid) return;
  grid.innerHTML = '';
  products.forEach(p => {
    let productRatings = ratings[p.id] || [];
    let avg = productRatings.length ? (productRatings.reduce((a,b)=>a+b,0)/productRatings.length).toFixed(1) : 0;
    let starsHtml = `<div class="stars" data-id="${p.id}">`;
    for(let i=1; i<=5; i++) {
      if(i <= avg) starsHtml += `<i class="fas fa-star" style="color:#f5b042;"></i>`;
      else starsHtml += `<i class="far fa-star" style="color:#f5b042;"></i>`;
    }
    starsHtml += ` (${productRatings.length})</div>`;
    const card = document.createElement('div'); card.className='food-card';
    card.innerHTML = `<img src="${p.image}" alt="${p.name}"><div class="card-info"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p>${starsHtml}<div class="price-order"><span class="price">S/ ${p.price.toFixed(2)}</span><button class="btn-order" data-id="${p.id}">Agregar</button></div><div class="share-buttons"><i class="fab fa-whatsapp share-wa" data-name="${p.name}" data-price="${p.price}"></i><i class="fab fa-twitter share-tw" data-name="${p.name}"></i><i class="fas fa-info-circle nutrition-info" data-nutrition="${p.nutrition}" data-name="${p.name}"></i></div></div>`;
    grid.appendChild(card);
    card.querySelector('.btn-order').addEventListener('click',()=>addToCart({id:p.id,name:p.name,price:p.price}));
    card.querySelector('.stars')?.addEventListener('click',(e)=>{
      e.stopPropagation();
      let rating = prompt('Califica del 1 al 5', '5');
      if(rating && rating>=1 && rating<=5) {
        if(!ratings[p.id]) ratings[p.id]=[];
        ratings[p.id].push(parseInt(rating));
        localStorage.setItem('avora_ratings', JSON.stringify(ratings));
        renderFoodGrid(products);
        showToast('Gracias por calificar');
      }
    });
    card.querySelector('.share-wa')?.addEventListener('click',()=>window.open(`https://wa.me/?text=¡Mira este producto ${p.name} en AVORA! S/${p.price}`, '_blank'));
    card.querySelector('.share-tw')?.addEventListener('click',()=>window.open(`https://twitter.com/intent/tweet?text=¡Me encanta ${p.name} de AVORA!`, '_blank'));
    card.querySelector('.nutrition-info')?.addEventListener('click',()=>{
      document.getElementById('nutritionTitle').innerText=p.name;
      document.getElementById('nutritionText').innerText=p.nutrition;
      document.getElementById('nutritionModal').classList.add('open');
    });
  });
}

function renderOffers() {
  const offGrid = document.getElementById('offersGrid');
  if(!offGrid) return;
  offGrid.innerHTML = offersProducts.map(o=>`<div class="food-card"><img src="${o.image}"><div class="card-info"><h3>${o.name}</h3><p>${o.description}</p><strike>S/ ${o.original}</strike> <strong>S/ ${o.price}</strong><button class="btn-order offer-btn" data-offer="${o.id}">Aprovechar</button></div></div>`).join('');
  document.querySelectorAll('.offer-btn').forEach(btn=>btn.addEventListener('click',()=>addToCart({id:999,name:"Combo oferta",price:offersProducts[0].price})));
}

// Recomendados
function renderRecommended() {
  if(!currentUser) return;
  let lastCategory = localStorage.getItem(`avora_lastCategory_${currentUser.email}`);
  let recommended = lastCategory ? currentProducts.filter(p=>p.category===lastCategory).slice(0,2) : currentProducts.slice(0,2);
  const grid = document.getElementById('recommendedGrid');
  if(!grid) return;
  grid.innerHTML = '';
  recommended.forEach(p=>{
    let card=document.createElement('div'); card.className='food-card';
    card.innerHTML=`<img src="${p.image}"><div class="card-info"><h3>${p.name}</h3><p>${p.description}</p><div class="price-order"><span class="price">S/ ${p.price}</span><button class="btn-order rec-btn">Agregar</button></div></div>`;
    grid.appendChild(card);
    card.querySelector('.rec-btn').addEventListener('click',()=>addToCart(p));
  });
}

// Historial
function renderOrderHistory() {
  const container = document.getElementById('historyList');
  if(!container) return;
  if(!currentUser || ordersHistory.filter(o=>o.userEmail===currentUser.email).length===0) {
    container.innerHTML='<p style="text-align:center;">No has realizado pedidos aún.</p>';
    return;
  }
  let userOrders = ordersHistory.filter(o=>o.userEmail===currentUser.email);
  let html = '<ul style="list-style:none;">';
  userOrders.forEach(order=>{
    html+=`<li style="background:white; border-radius:28px; padding:15px; margin-bottom:15px;"><strong>${order.date}</strong> - Total S/${order.total}<br>Items: ${order.items.map(i=>i.name).join(', ')}</li>`;
  });
  html+='</ul>';
  container.innerHTML=html;
}

// Checkout
document.getElementById('checkoutBtn')?.addEventListener('click',()=>{
  if(!currentUser) { showToast('Inicia sesión para comprar', true); return; }
  if(cart.length===0) return showToast('Carrito vacío', true);
  let total = cart.reduce((a,i)=>a+i.price*i.quantity,0);
  let earned = Math.floor(total);
  addPointsToCurrentUser(earned);
  let order = { userEmail: currentUser.email, date: new Date().toLocaleString(), total: total, items: cart.map(i=>({name:i.name,quantity:i.quantity,price:i.price})) };
  ordersHistory.push(order);
  localStorage.setItem('avora_orders', JSON.stringify(ordersHistory));
  let lastCat = cart[0]?.category;
  if(lastCat) localStorage.setItem(`avora_lastCategory_${currentUser.email}`, lastCat);
  cart = [];
  updateCartUI();
  showToast(`¡Compra realizada! Ganaste ${earned} puntos`);
  document.getElementById('cartDrawer')?.classList.remove('open');
  renderOrderHistory();
  renderRecommended();
});

// User dropdown con logout funcionando correctamente
function updateUserMenu() {
  const container = document.getElementById('userMenuContainer');
  if(!container) return;
  if(currentUser) {
    container.innerHTML = `<div class="user-dropdown"><span>👋 ${currentUser.name.split(' ')[0]}</span><i class="fas fa-chevron-down"></i><div class="dropdown-content"><a id="logoutBtn">Cerrar sesión</a></div></div>`;
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('avora_currentUser');
        currentUser = null;
        updateUserMenu();
        updatePointsUI();
        cart = [];
        updateCartUI();
        showToast('Sesión cerrada correctamente');
        renderRecommended();
        renderOrderHistory();
      });
    }
  } else {
    container.innerHTML = `<button class="login-btn" id="loginBtn">Iniciar sesión</button>`;
    const loginBtn = document.getElementById('loginBtn');
    if(loginBtn) loginBtn.addEventListener('click', () => document.getElementById('loginModal').classList.add('open'));
  }
}

// Registro
document.getElementById('registerForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  let name=document.getElementById('regName').value.trim(),
      email=document.getElementById('regEmail').value.trim(),
      pass=document.getElementById('regPassword').value,
      uni=document.getElementById('regUniversity').value;
  if(!name||!email||!pass) return showToast('Complete campos', true);
  let users=getUsers();
  if(users.find(u=>u.email===email)) return showToast('Email ya registrado', true);
  let newUser={name,email,password:pass,university:uni,points:50};
  users.push(newUser);
  saveUsers(users);
  saveCurrentUser(newUser);
  showToast(`✅ Registro exitoso, ${name}! +50 puntos`);
  document.getElementById('registerForm').reset();
});

// Login modal
const modal = document.getElementById('loginModal');
const closeModalBtn = document.getElementById('closeModalBtn');
document.getElementById('loginFormModal')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  let email=document.getElementById('loginEmail').value.trim(),
      pass=document.getElementById('loginPassword').value;
  let users=getUsers();
  let user=users.find(u=>u.email===email && u.password===pass);
  if(user) {
    saveCurrentUser({email:user.email,name:user.name,points:user.points});
    modal.classList.remove('open');
    showToast(`Bienvenido ${user.name}`);
  } else showToast('Credenciales incorrectas', true);
});
closeModalBtn?.addEventListener('click',()=>modal.classList.remove('open'));
document.getElementById('goToRegistro')?.addEventListener('click',()=>{
  modal.classList.remove('open');
  document.getElementById('registro').scrollIntoView({behavior:'smooth'});
});

// Emprendedor
document.getElementById('productForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  let name=document.getElementById('prodName').value.trim(),
      price=parseFloat(document.getElementById('prodPrice').value),
      desc=document.getElementById('prodDesc').value.trim()||"Producto saludable",
      img=document.getElementById('prodImage').value.trim()||"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600";
  if(!name||isNaN(price)) return showToast('Completa nombre y precio', true);
  currentProducts.push({ id:Date.now(), name, price, description:desc, image:img, category:"bowl", nutrition:"Información nutricional pendiente" });
  renderFoodGrid(currentProducts);
  showToast(`✨ "${name}" agregado al menú`);
  e.target.reset();
});

// Filtros y búsqueda
let activeCategory = 'all';
function filterAndSearch() {
  let term = document.getElementById('searchInput')?.value.toLowerCase() || '';
  let filtered = currentProducts.filter(p=>(activeCategory==='all'||p.category===activeCategory) && p.name.toLowerCase().includes(term));
  renderFoodGrid(filtered);
}
document.getElementById('searchInput')?.addEventListener('input', filterAndSearch);
document.querySelectorAll('.category-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.category-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory=btn.getAttribute('data-cat');
    filterAndSearch();
  });
});

// Carrusel
let slides = document.querySelectorAll('.carousel-slide');
let dotsContainer = document.getElementById('carouselDots');
let currentSlide=0, slideInterval;
function buildDots() {
  if(dotsContainer) {
    dotsContainer.innerHTML='';
    slides.forEach((_,idx)=>{
      let dot=document.createElement('div');
      dot.classList.add('dot');
      if(idx===currentSlide) dot.classList.add('active');
      dot.addEventListener('click',()=>goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }
}
function goToSlide(idx) {
  slides.forEach((s,i)=>s.classList.toggle('active',i===idx));
  currentSlide=idx;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  resetInterval();
}
function nextSlide() { goToSlide((currentSlide+1)%slides.length); }
function resetInterval() {
  if(slideInterval) clearInterval(slideInterval);
  slideInterval=setInterval(nextSlide,6000);
}
if(slides.length) { buildDots(); resetInterval(); }

// Temporizador ofertas
let endTime = new Date(); endTime.setHours(endTime.getHours()+5);
function updateTimer() {
  let diff = endTime-new Date();
  if(diff<=0) document.getElementById('timerDisplay').innerText="Ofertas terminadas";
  else {
    let h=Math.floor(diff/3600000), m=Math.floor((diff%3600000)/60000), s=Math.floor((diff%60000)/1000);
    document.getElementById('timerDisplay').innerText=`${h}h ${m}m ${s}s`;
  }
}
setInterval(updateTimer,1000);

// Canjear puntos
document.getElementById('redeemPointsBtn')?.addEventListener('click',()=>{
  if(!currentUser) { showToast('Inicia sesión', true); return; }
  if(currentUser.points>=50) {
    addPointsToCurrentUser(-50);
    showToast('Canjeaste 50 puntos por S/ 3 de descuento');
  } else showToast('Necesitas 50 puntos', true);
});

// Drawer
const cartIcon = document.getElementById('cartIcon'),
      cartDrawer = document.getElementById('cartDrawer'),
      closeCart = document.getElementById('closeCart');
cartIcon?.addEventListener('click',()=>cartDrawer.classList.add('open'));
closeCart?.addEventListener('click',()=>cartDrawer.classList.remove('open'));

// Chat
const chatBubble = document.getElementById('chatBubble'),
      chatWindow = document.getElementById('chatWindow');
chatBubble?.addEventListener('click',()=>chatWindow.classList.toggle('open'));
document.getElementById('sendChat')?.addEventListener('click',()=>{
  let input=document.getElementById('chatInput');
  if(input.value.trim()) {
    document.getElementById('chatBody').innerHTML+=`<p><strong>Tú:</strong> ${input.value}</p>`;
    setTimeout(()=>{
      document.getElementById('chatBody').innerHTML+=`<p><strong>Asistente:</strong> Gracias, en breve un asesor te contactará.</p>`;
    },500);
    input.value='';
  }
});

// Newsletter
document.getElementById('subscribeBtn')?.addEventListener('click',()=>{
  let email=document.getElementById('newsletterEmail').value;
  if(email) {
    let subs=JSON.parse(localStorage.getItem('avora_newsletter')||'[]');
    if(!subs.includes(email)) subs.push(email);
    localStorage.setItem('avora_newsletter',JSON.stringify(subs));
    showToast('¡Suscrito al newsletter!');
  } else showToast('Ingresa un email', true);
});

// Modal nutricional cerrar
document.getElementById('closeNutritionModal')?.addEventListener('click',()=>document.getElementById('nutritionModal').classList.remove('open'));

// Inicializar
window.addEventListener('load',()=>{
  loadCurrentUser();
  renderFoodGrid(currentProducts);
  renderOffers();
  filterAndSearch();
  renderRecommended();
  renderOrderHistory();
  if(currentUser) loadCartForUser();
});