//cart numbers
let cartNumbers = document.querySelector(".cartNumbers");
//Wishlist items 
let wishnums = document.querySelector(".wishlistNums");
//add btn
let cartoBtn = document.querySelectorAll(".cart-btn");
//cart count
let cartCounter = document.querySelector(".countCartItms");
//whislest counter
//Define Products
let products = productsDB;
// product continar 
let pro1 = document.querySelector(".producto");
let pro2 = document.querySelector(".producto2");
let pro3 = document.querySelector(".producto3");

let cartBag = localStorage.getItem("productsinLocal") ? JSON.parse(localStorage.getItem("productsinLocal")) : [];
let totalPrice = calculateTotalPrice(cartBag);

//update cart count 
function updateCartNumberUI() {
  cartNumbers.style.display = cartBag.length > 0 ? "block" : "none";
  cartNumbers.innerHTML = cartBag.length;
}

// Function to add items to the cart (for products.html)
function addToCart(id) {
    let product = products.find((item) => item.id === id);
    let isProductinCart = cartBag.some((i) => i.id === product.id);

    if (isProductinCart) {
        cartBag = cartBag.map((p) => {
            if (p.id === product.id) {
                p.inCart += 1;
                totalPrice += p.price;
            }
            return p;
        });
    } else {
        cartBag.push({ ...product, inCart: 1 });
        totalPrice += product.price;
    }

    localStorage.setItem("productsinLocal", JSON.stringify(cartBag));
    updateTotalPriceUI(totalPrice);
    updateCartNumberUI();
}

// we have to do the same with add to favourite and we can after that dlt the next func 
function getUniqueArray(arr, filterType){
  let unique = arr.map((item) =>item[filterType]).map((item, i, final)=>final.indexOf(item)===i&&i).filter((item)=>arr[item]).map((item)=>arr[item]);
  console.log(unique);
  return unique
}



//update favourites count 
let favourites = localStorage.getItem("productsFav")? JSON.parse(localStorage.getItem("productsFav")) :[];

function updateWishlistNumberUI() {
    wishnums.style.display = favourites.length > 0 ? "block" : "none";
    wishnums.innerHTML = favourites.length;
}

function addToFav(id) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked = true;
    favourites = [...favourites, chosenItem];
    let uniqueProducts = getUniqueArray(favourites, "id");

    localStorage.setItem("productsFav", JSON.stringify(uniqueProducts));
    products.map((item) => {
        if (item.id === chosenItem.id) {
            item.liked = true;
        }
    });
    localStorage.setItem("products", JSON.stringify(products));
    //initProductsPage(products);
    updateWishlistNumberUI(); // تحديث العدد في الواجهة
}

// Function to remove items from the cart (for cart.html)
function removeFromCart(id) {
    let productIndex = cartBag.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
        let product = cartBag[productIndex];
        totalPrice -= product.price * product.inCart;

        cartBag.splice(productIndex, 1);

        localStorage.setItem("productsinLocal", JSON.stringify(cartBag));
         updateCartUI();
         updateTotalPriceUI(totalPrice);
         updateCartNumberUI();
    }
}

// Function to update the cart UI (for cart.html)
function updateCartUI() {
   
    if (document.querySelector(".davy")) { // Check if on cart.html
    cartCounter.innerText = cartBag.length;
        let cartItemsUI = cartBag.map((item) => {
            return `
              <div class="cart-item">
                 <div id = "${item.id}">
          <div class="cartContainer">
          <div class="item-img">
            <img src= "${item.image}"alt="skirt.jpeg">
          </div>
          <div class="cardTitles">
                <span class="newCartprice"> $${item.price * item.inCart}</span>
                <h3 class="itemTitle">${item.title}</h3>
                <div class="someDetails">
                  <p class="itemColor">Creamy</p>
                  <p class="sprite">|</p>
                  <p class="itemSize">M</p>
                  <p class="sprite">|</p>
                  <i class="fi fi-rr-angle-circle-left lefto"></i>
                  <p class="itemAmount">${item.inCart}</p>
                  <i class="fi fi-rr-angle-circle-right righto"></i>
                </div>
          </div>
          <div class="item-remove">
                <i class="fi fi-rs-trash table-trash"
                onclick="removeFromCart(${item.id})"
                ></i>
          </div>
      
        </div>
        </div>
      
                  </div>  `;

                 
        });

        document.querySelector(".davy").innerHTML = cartItemsUI.join("");
    }
    
    
}

// Function to update the total price UI (for cart.html)
function updateTotalPriceUI(totalPrice) {
    if (document.querySelector(".total-price")) { // Check if on cart.html
        document.querySelector(".total-price").textContent = `Total: $${Math.max(0, totalPrice).toFixed(2)}`;
        
        
    }
}

// Function to calculate total price based on items in the cart
function calculateTotalPrice(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.price * item.inCart, 0);
}

// Initialization for products.html
(function initProductsPage() {
    // Check if on products.html
    if(pro1){
        let productsUI = product1.map((item) => {
            return `
                                <div class="product-item">
                                    <div class="product-banner">
                                        <a onclick = 'saveData(${item.id})' class="product-images">
                                            <img src="${item.image}" alt="" class="product-img default">
                                            <img src="${item.image}" alt="" class="product-img hover">
                                        </a>
                                        <div class="product-actions">
                                            <a href="#" class="action-btn" aria-label="Quick View">
                                                <i class="fi fi-rs-eye"></i>
                                            </a>
                                            <a href="#" class="action-btn" aria-label="Add To Wishlist">
                                                <i class="fi fi-sr-heart heart-full" onclick="addToFav(${item.id})"></i>
                                            </a>
                                            <a href="#" class="action-btn" aria-label="Compare">
                                                <i class="fi fi-rs-shuffle" onclick="compo(${item.id})"></i>
                                            </a>
                                        </div>
                                        <div class="product-badge light-pink">Hot</div>
                                    </div>
                                    <div class="product-content">
                                        <span class="product-category">Clothing</span>
                                        <a onclick = 'saveData(${item.id})' >
                                            <h3 class="product-title">${item.title}</h3>
                                        </a>
                                        <div class="product-rating">
                                            <i class="fi fi-rs-star"></i>
                                            <i class="fi fi-rs-star"></i>
                                            <i class="fi fi-rs-star"></i>
                                            <i class="fi fi-rs-star"></i>
                                            <i class="fi fi-rs-star"></i>
                                        </div>
                                        <div class="product-price flex">
                                            <span class="new-price">$${item.price}</span>
                                            <span class="old-price">$62.25</span>
                                        </div>
                                        <a href="#" class="action-btn cart-btn caro" aria-label="Add To Cart" onclick="addToCart(${item.id})">
                                            <i class="fi fi-rs-shopping-bag-add"></i>
                                        </a>
                                    </div>
                                </div>
                            `;
        });
        pro1.innerHTML = productsUI.join("");
    
}
  if(pro2){
    let productsUI = product2.map((item) => {
      return `
                    <div class="product-item">
                        <div class="product-banner">
                            <a onclick = 'saveData(${item.id})' class="product-images">
                                <img src="${item.image}" alt="" class="product-img default">
                                <img src="${item.image}" alt="" class="product-img hover">
                            </a>
                            <div class="product-actions">
                                <a href="#" class="action-btn" aria-label="Quick View">
                                    <i class="fi fi-rs-eye"></i>
                                </a>
                                <a href="#" class="action-btn" aria-label="Add To Wishlist">
                                    <i class="fi fi-sr-heart heart-full" onclick="addToFav(${item.id})"></i>
                                </a>
                                <a href="#" class="action-btn" aria-label="Compare">
                                    <i class="fi fi-rs-shuffle" onclick="compo(${item.id})"></i>
                                </a>
                            </div>
                            <div class="product-badge light-pink">Hot</div>
                        </div>
                        <div class="product-content">
                            <span class="product-category">Clothing</span>
                            <a onclick = 'saveData(${item.id})'  >
                            
                                <h3 class="product-title">${item.title}</h3>
                            </a>
                            <div class="product-rating">
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                            </div>
                            <div class="product-price flex">
                                <span class="new-price">$${item.price}</span>
                                <span class="old-price">$62.25</span>
                            </div>
                            <a href="#" class="action-btn cart-btn caro" aria-label="Add To Cart" onclick="addToCart(${item.id})">
                                <i class="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>
                `;
    });
    pro2.innerHTML = productsUI.join("");
  }
  if(pro3){
    let productsUI = product3.map((item) => {
      return `
                    <div class="product-item">
                        <div class="product-banner">
                            <a onclick = 'saveData(${item.id})' class="product-images">
                                <img src="${item.image}" alt="" class="product-img default">
                                <img src="${item.image}" alt="" class="product-img hover">
                            </a>
                            <div class="product-actions">
                                <a href="#" class="action-btn" aria-label="Quick View">
                                    <i class="fi fi-rs-eye"></i>
                                </a>
                                <a href="#" class="action-btn" aria-label="Add To Wishlist">
                                    <i class="fi fi-sr-heart heart-full" onclick="addToFav(${item.id})"></i>
                                </a>
                                <a href="#" class="action-btn" aria-label="Compare">
                                    <i class="fi fi-rs-shuffle" onclick="compo(${item.id})"></i>
                                </a>
                            </div>
                            <div class="product-badge light-pink">Hot</div>
                        </div>
                        <div class="product-content">
                            <span class="product-category">Clothing</span>
                            <a onclick = 'saveData(${item.id})' >
                                <h3 class="product-title">${item.title}</h3>
                            </a>
                            <div class="product-rating">
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                            </div>
                            <div class="product-price flex">
                                <span class="new-price">$${item.price}</span>
                                <span class="old-price">$62.25</span>
                            </div>
                            <a href="#" class="action-btn cart-btn caro" aria-label="Add To Cart" onclick="addToCart(${item.id})">
                                <i class="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>
                `;
    });
    pro3.innerHTML = productsUI.join("");
  }
})();
function saveData(id) {
  localStorage.setItem("proItemDetId", id);
  window.location = "details.html";
}

function compo(id) {
  localStorage.setItem("compare", id);
  window.location = "compare.html";
}


    // Initialization for cart.html
(function initCartPage() {
  updateCartUI();
  updateTotalPriceUI(totalPrice);
  updateCartNumberUI(); //update cart nums in the ui
  updateWishlistNumberUI(); // update Wishlist nums in ui
})();