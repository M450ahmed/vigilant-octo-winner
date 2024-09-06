// تحديث واجهة المستخدم لعدد العناصر في السلة
function updateCartNumberUI() {
    cartNumbers.style.display = cartBag.length > 0 ? "block" : "none";
    cartNumbers.innerHTML = cartBag.length;
}

// تحديث واجهة المستخدم لعدد العناصر في المفضلة
function updateWishlistNumberUI() {
    wishnums.style.display = favourites.length > 0 ? "block" : "none";
    wishnums.innerHTML = favourites.length;
}

// تحديث السلة بعد إضافة عنصر
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
    updateCartNumberUI(); // تحديث العدد في الواجهة
}

// تحديث المفضلة بعد إضافة عنصر
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
    initProductsPage(products);
    updateWishlistNumberUI(); // تحديث العدد في الواجهة
}

// إزالة عنصر من السلة وتحديث واجهة المستخدم
function removeFromCart(id) {
    let productIndex = cartBag.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
        let product = cartBag[productIndex];
        totalPrice -= product.price * product.inCart;

        cartBag.splice(productIndex, 1);

        localStorage.setItem("productsinLocal", JSON.stringify(cartBag));
        updateCartUI();
        updateTotalPriceUI(totalPrice);
        updateCartNumberUI(); // تحديث العدد في الواجهة
    }
}

// تهيئة الصفحة عند تحميلها
(function initCartPage() {
    updateCartUI();
    updateTotalPriceUI(totalPrice);
    updateCartNumberUI(); // تحديث العدد في الواجهة
    updateWishlistNumberUI(); // تحديث العدد في الواجهة
})();
