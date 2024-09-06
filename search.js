let searchInput = document.querySelector(".header-search input");
let jjj = JSON.parse(localStorage.getItem("products"));
let searchBtn = document.querySelector(".search-btn");
let confirmBtn = document.querySelector(".formFltr");
searchInput.addEventListener('keyup', function(e){
  search(e.target.value.trim(),jjj);
  
  
});
function search(title, myray){
  let arr = myray.filter((item)=>
        item.title.toLowerCase().indexOf(title.toLowerCase())!==-1);
   console.log("i love her");
   console.log(arr);
   let jojo= localStorage.setItem("productsSrh", JSON.stringify(arr));
   console.log(JSON.stringify(arr));
   //search(jojo);
   
};

searchBtn.addEventListener("click", function(e){
  if(searchInput.value.trim() !==""){
  console.log(111);
  setTimeout(()=>{
    window.location = "search.html";
    console.log("loaded");
  }, 2000)
  
}});
searchInput.addEventListener("keyup", function(e) {
  if (e.keyCode === 13&&searchInput.value.trim() !== "") {
    console.log(111);
    setTimeout(() => {
      window.location = "search.html";
      console.log("loaded");
    }, 2000)

  }
});



let list = document.querySelector("#list");
let countSrch = document.querySelector("#countSerch");
let nothing = document.querySelector(".noItemfound");
let listProducts = JSON.parse(localStorage.getItem("productsSrh"));

let filtration = document.querySelector(".filtration");
let filterFiled = document.querySelector(".fltf");

let alproducts = [];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    countSrch.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('itemSs');

         newItem.innerHTML = `   <div class="cartContainer">
   
      <div class="item-img">
        <img src="${item.image}"alt="">
      </div>
      <div class="cardTitles">
        <span class="newCartprice">$${item.price} </span>
        <h3 class="itemTitle">${item.title}</h3>
        <div class="someDetails">
          <p class="itemColor">${item.color}</p>
          <p class="sprite">|</p>
          <p class="itemSize">${item.size}</p>
          
        </div>
        <div class="addbtnn">
          <button class="btn btn-md">Add To Cart</button>
        </div>
      </div>

`;    
        list.appendChild(newItem);
    });
    document.addEventListener('click', function(event) {
      // Check if the clicked element is an <a> (link)
      if (event.target.tagName === 'A') {
        localStorage.setItem("productsSrh", JSON.stringify(alproducts));
      }
    });
}
let filterS = document.querySelector(".filterF");
let cancelShowBtn = document.querySelectorAll(".canc");
filterS.addEventListener("click", function(e) {
  filterFiled.style.display = "block";
  console.log("fltr");
  filterS.style.display = "none";
//  hhh.style.filter = "blur(1px)";
if(JSON.parse(localStorage.getItem("productsSrh"))){
  list.style.filter = "blur(1px)";
}
});

cancelShowBtn.forEach((e) => {
  e.addEventListener("click", function(l) {

    console.log("canceled");
    filterFiled.style.display = "none";
   filterS.style.display = "block";
    if(JSON.parse(localStorage.getItem("productsSrh"))) {
      list.style.filter = "blur(0)";
    }
   // hhh.style.filter = "blur(0)";
  })
});

let filtor = document.querySelector(".filtor");
filtor.addEventListener('submit', function(event) {
  event.preventDefault();
  let valueFilter = event.target.elements;
  productFilter = listProducts.filter(item => {
    // check category
    if (valueFilter.category.value != '') {
      if (item.type != valueFilter.category.value) {
        return false;
      }
    }
    // check color
    if (valueFilter.color.value != '') {
      if (!item.color.includes(valueFilter.color.value)) {
        return false;
      }
    }
    
    // check name
    if (valueFilter.size.value != '') {
      if (!item.size.includes(valueFilter.size.value)) {
        return false;
      }
    }
    

    return true;

  });
 showProduct(productFilter);
  console.log(productFilter);
 filterS.style.display = "block";
 filterFiled.style.display = "none";
 list.style.filter = "blur(0)";
});


