let cartBag = localStorage.getItem("productsinLocal") ? JSON.parse(localStorage.getItem("productsinLocal")) : [];
let totalPrice = calculateTotalPrice(cartBag);


//let theFinalList = document.querySelector(".theFinalList");
/*function updateCheck() {

        listt.innerHTML = ` <h3 class="section-title">Cart Totals</h3>
         <table class="order-table">
           <tr>
             <th>Items</th>
             <th>Total</th>
           </tr>
           <tr>
             <td>
               <h3 class="table-title">${cartBag.title}</h3>
               <img src="${cartBag.image}" alt="" class="order-img">
               <p class="table-quantity">x ${cartBag.inCart}</p>
             </td>
      
             <td><span class="table-price">${cartBag.price}</span></td>
           </tr>
             <tr>
             <td><span class="order-subtitle">Subtotal</span></td>
             <td><span class="table-price checkoutSup">$</span></td>
           </tr>
      
           <tr>
             <td><span class="order-subtitle">Shipping</span></td>
             <td colspan="2"><span class="table-price">$10.00</span></td>
           </tr>
      
           <tr>
             <td><span class="order-subtitle">Total</span></td>
             <td colspan="2"><span class="order-grand-total">$184.00</span></td>
           </tr>
      
         </table>
         <div class="payment-methods">
           <h3 class="checkout-title payment-title">Payment</h3>
           <div class="payment-option flex">
             <input type="radio" name="radio" checked class="payment-input">
             <label for="" class="payment-label">Debt cards</label>
           </div>
           <div class="payment-option flex">
             <input type="radio" name="radio" class="payment-input">
             <label for="" class="payment-label">Paypal</label>
           </div>
           <div class="payment-option flex">
             <input type="radio" name="radio" class="payment-input">
             <label for="" class="payment-label">On delivery</label>
           </div>
      
         </div>
         <button class="btn btn-md">Place order</button>`;
  theFinalList.appendChild(listt);
}
updateCheck(cartBag);
*/
function updateCartUI() {
    if (document.querySelector(".theFinalList")) { // Check if on cart.html
        let cartItemsUI = cartBag.map((item) => {
            return `
            <h3 class="section-title">Cart Totals</h3>
         <table class="order-table">
           <tr>
             <th>Items</th>
             <th>Total</th>
           </tr>
           <tr>
             <td>
               <h3 class="table-title">${item.title}</h3>
               <img src="${item.image}" alt="" class="order-img">
               <p class="table-quantity">x ${item.inCart}</p>
             </td>
      
             <td><span class="table-price">$${item.price}</span></td>
           </tr>
             <tr>
             <td><span class="order-subtitle">Subtotal</span></td>
             <td><span class="table-price checkoutSup">$</span></td>
           </tr>
      
           <tr>
             <td><span class="order-subtitle">Shipping</span></td>
             <td colspan="2"><span class="table-price">$10.00</span></td>
           </tr>
      
           <tr>
             <td><span class="order-subtitle">Total</span></td>
             <td colspan="2"><span class="order-grand-total">$</span></td>
           </tr>
      
         </table>
         <div class="payment-methods">
           <h3 class="checkout-title payment-title">Payment</h3>
           <div class="payment-option flex">
             <input type="radio" name="radio" checked class="payment-input">
             <label for="" class="payment-label">Debt cards</label>
           </div>
           <div class="payment-option flex">
             <input type="radio" name="radio" class="payment-input">
             <label for="" class="payment-label">Paypal</label>
           </div>
           <div class="payment-option flex">
             <input type="radio" name="radio" class="payment-input">
             <label for="" class="payment-label">On delivery</label>
           </div>
      
         </div>
         <button class="btn btn-md" onclick="placeOrder()">Place order</button>
`;

                 
        });

        document.querySelector(".theFinalList").innerHTML = cartItemsUI.join("");
    }
   // counto.innerText = cartBag.length;
    
}

// Function to update the total price UI (for cart.html)
function updateTotalPriceUI(totalPrice) {
    if (document.querySelector(".checkoutSup")) { // Check if on cart.html
        document.querySelector(".checkoutSup").textContent = ` $${Math.max(0, totalPrice).toFixed(2)}`;
        
        document.querySelector(".order-grand-total").textContent =`Total $${Math.max(0,totalPrice + 10).toFixed(2)}` 
    }
    
}

// Function to calculate total price based on items in the cart
function calculateTotalPrice(cartItems) {
    return cartItems.reduce((acc, item) => acc + item.price * item.inCart, 0);
}

(function initCartPage() {
    updateCartUI();
    updateTotalPriceUI(totalPrice);
    //showDetails(productDetails);
})();
//set bill address farv
let billName = document.querySelector(".billName");
let billAddress = document.querySelector(".billAddress");
let billEmail = document.querySelector(".billEmail");
let billNumber = document.querySelector(".billNumber");
let billZip = document.querySelector(".billZip");
let billCountry = document.querySelector(".billCountry");
let billCity = document.querySelector(".billCity");
let zip = localStorage.getItem("zip");
let fullAdress = JSON.parse(localStorage.getItem("fullAdress"));
let countryAdress = JSON.parse(localStorage.getItem("countryAdress"));
let cityAdress = JSON.parse(localStorage.getItem("cityAdress"));

let loginD = JSON.parse(localStorage.getItem("register"));
console.log(loginD[0].email);
let email = loginD[0].email;
if(email){
  billEmail.value = email;
}
if(zip){
  billZip.value = zip;
}
if(cityAdress){
  billCity.value = cityAdress;
}
if(countryAdress){
  billCountry.value = countryAdress;
}
if(fullAdress){
  billAddress.value = `${countryAdress}, ${cityAdress},${fullAdress}, ${zip}`;
}
function placeOrder(){
  if(billName.value.trim() != "" && billAddress.value.trim() != "" && billEmail.value.trim() != "" && billNumber.value.trim() != "" && billZip.value.trim() != "" && billCity.value.trim() != "" && billCountry.value.trim() != ""){
  setTimeout(() => {
    window.location = "pro.html";
  
  }, 1500);
}}