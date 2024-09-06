// تحديد العناصر في الواجهة
let favItem = document.querySelector(".listo");
let noFav = document.querySelector(".noFav");
let counter = document.querySelector("#counto");
let wishnumss = document.querySelector(".wishlistNums");
// دالة لتحديث عدد العناصر في المفضلة في الواجهة
function updateFavCounter() {
    let favourites = localStorage.getItem("productsFav") ? JSON.parse(localStorage.getItem("productsFav")) : [];
    wishnumss.style.display = favourites.length > 0 ? "block" : "none";
    wishnumss.innerHTML = favourites.length;
}

// دالة لعرض العناصر في المفضلة
function displayFavs(productss) {
    counter.innerText = productss.length;
    favItem.innerHTML = '';
    productss.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('itemSS');
        newItem.innerHTML = `
            <div class="cartContainer">
                <div class="item-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="cardTitles">
                    <span class="newCartprice">$${item.price}</span>
                    <h3 class="itemTitle">${item.title}</h3>
                    <div class="someDetails">
                        <p class="itemColor">${item.color}</p>
                        <p class="sprite">|</p>
                        <p class="itemSize">${item.size}</p>
                    </div>
                    <div>
                        <button class="btn btn-md">Add To Cart</button>
                    </div>
                </div>
                <div class="item-remove">
                    <i class="fi fi-rs-trash table-trash" onclick="removeItemFromFav(${item.id})"></i>
                </div>
            </div>
        `;
        favItem.appendChild(newItem);
    });
}

// دالة لإزالة عنصر من المفضلة
function removeItemFromFav(id) {
    let filteredFavs = JSON.parse(localStorage.getItem("productsFav")) || [];
    filteredFavs = filteredFavs.filter((item) => item.id !== id);
    localStorage.setItem("productsFav", JSON.stringify(filteredFavs));
    displayFavs(filteredFavs);
    updateFavCounter(); // تحديث العداد مباشرة بعد الإزالة
}

// دالة التشغيل الذاتي (IIFE) لتحديث الواجهة عند تحميل الصفحة
(function initFavPage() {
    let productss = JSON.parse(localStorage.getItem("productsFav")) || [];
    displayFavs(productss);  // عرض المنتجات في المفضلة
    updateFavCounter();      // تحديث عداد المفضلة
})();
