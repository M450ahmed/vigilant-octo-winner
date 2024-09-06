console.log('salam');
/* - - - - - show menu--------------*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/* - - - - - - menu show------------*/
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    document.body.classList.add('no-scroll');
  });
}
/* - - - hide show-----------------*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    document.body.classList.remove('no-scroll');
  });
}
/* - - - - - - - - - countdown-------*/

let countDownDate = new Date("September 27, 2024 :00:00").getTime();
let x = setInterval(function(){
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
  
  if(distance < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML = 00;
    document.getElementById("hours").innerHTML = 00;
    document.getElementById("minutes").innerHTML = 00;
    document.getElementById("seconds").innerHTML = 00;
  }
  document.querySelector("#days-1").innerHTML = days;
  document.querySelector("#hours-1").innerHTML = hours;
  document.querySelector("#minutes-1").innerHTML = minutes;
  document.querySelector("#seconds-1").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days-1").innerHTML = 00;
    document.querySelector("#hours-1").innerHTML = 00;
    document.querySelector("#hours-1").innerHTML = 00;
    document.querySelector("#seconds-1").innerHTML = 00;
  }
  
},1000);
/* - - - - - image gallery-------*/
function imgGallery() {
  const mainImg = document.querySelector('.details-img'),
  smallImg = document.querySelectorAll('.details-small-img');
  
  smallImg.forEach((img) => {
    img.addEventListener('click', function() {
      mainImg.src = this.src;
    })
  })
}

imgGallery();

/* - - - - - - swiper category*/
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  loop: true, 
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/***------------product tabs-------*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
    
    target.classList.add('active-tab');
    
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
    
  });
});
/*       - - - - - - swiper products*/
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  loop: true, 
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

//add to cart

/*let main_container = document.querySelector('.the_place_to_putin');
//الكونتينر الفوق نستخدمه تا نخزن بيه الملف الراح ننشأه
let quantityFields = document.querySelectorAll('[quantity]');
//quantity Fields ضفناها تا نخلي السعر يتغير تبعاً للكمية.

*/
//rmv btn
//نضيفها تا نحذف عنصر
//the main continar


/*removeBtn.forEach((e)=>{
  e.addEventListener("click", (e)=>{
    console.log("click");
  });
});
*/
//removeBtn.addEventListener("click", removeItem);
//function removeItem(e){
//console.log(this)
//}

/*
for(let i = 0; i < delete_buttons.length; i++){
        delete_buttons[i].addEventListener('click', removeItem)
    }
    grandTotal()

   
}


cartoBtn.forEach((li)=>{
  li.addEventListener("click", (e)=>{
     //remove active class 
     
       console.log(price);
       console.log(typeof price);
       console.log(typeof parseInt(price))
     });
})
let cartBag = [];
*/
//إضافة عنصر للسلة
/*
function addToCart(event){
  let btn = event.target;
  let btn_parent = btn.parentElement;
  let btn_grandparent = btn.parentElement.parentElement;
  let itemName = btn_parent.children[1].innerText;
  let itemPrize = btn_parent.children[3].innerText;
  let itemImage = btnGrandParent.children[0].src;
  //بهاي النقطة نجلب بيانات كل كارد مال معلومات المنتج 
  console.log(typeof itemPrice);
  let itemContainer = document.createElement('tr');
  itemContainer.innerHTML = `<td><img src="${itemImage}" alt="" class="table-img"></td> <
  td >
    <h3 class="table-title">${itemName}</h3> <
    p class = "table-description" >
    bla bla bla bla bla bla bla bla blahhhhhh <
    /p> <
    /td> <
    td > <span class="table-price">${itemPrize}</span> < /td> <
    td > <input type="number" value="3" class="quantity"></td>
           <td><span class="table-subtotal">${itemPrize}</span></td>
           <td><i class="fi fi-rs-trash table-trash"></i></td>`
  main_container.append(itemContainer)

  //Accessing individual quantity fields
  
    for (let i = 0; i < quantityFields.length; i++) {
      quantityFields[i].value = 1
      quantityFields[i].addEventListener('change', updateTotal)
  }
  
  //remove item from the cart
    for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', removeItem)
  }


  grandTotal()
  
}
//هي الدالة اللي تسمح النا نضرب كمية المنتج بسعره
function updateTotal(event){
  let numberOfItems = event.target;
  numberOfItems_parent = numberOfItems.parentElement.parentElement;
  priceField = numberOfItems_parent.getElementsByClassName('itemprice')[0]
  totalField = numberOfItems_parent.getElementsByClassName('Thefinalpriceofitem')[0]
  priceFieldContent = priceField.innerText.replace('$', '');
  totalField.children[0].innerText = '$' + Number(numberOfItems.value) * priceFieldContent;
  if(isNaN(numberOfItems.value) || numberOfItems.value <= 0){
    numberOfItems.value = 1
  }
  //grandTotal()
}
//grand total السعر النهائي للكمية في سعرها 
function grandTotal(){
  let total = 0;
  let grandtotal = document.getElementsByClassName('theCollection')[0]
   let totalPrice = document.querySelectorAll('[theFullPrice]')
   for (let i = 0; i < totalPrice.length; i++) {
     totalPriceContent = Number (totalPrice[i].innerText.replace('$', ''))
     total += totalPriceContent
   }
   grandtotal.children[0].innerText = '$' + total;
   grandtotal.children[0].style.fontWeight = 'bold';
   console.log(total);
}

function removeItem(event){
  removebtn = event.target;
  removebtn_grandparent = removebtn.parentElement.parentElement;
  removebtn_grandparent.remove();
  grandTotal();
}
*/
/*Top up btn */

let upo = document.querySelector(".topup");
window.onscroll = function() {
  if (window.scrollY >= 1500) {
    upo.style.cssText = "visibility:visible;opacity:0.8";
  } else {
    upo.style.cssText= "visibility:hidden;opacity:0";
  }
};
upo.addEventListener("click", function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});


/*      pre loader      */
let loader = document.querySelector(".load");
window.addEventListener("load",function (){
  setTimeout(()=>{
    loader.style.display = "none";
    console.log("loaded");
  }, 2000)
})
