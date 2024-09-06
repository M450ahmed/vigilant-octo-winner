let product1 = [{
   id:1,
   title: "Colorful Blazers",
   image: 'Imgs/blazer.jpeg"',
   price: 57,
   inCart: 1, 
   color: "multi-color", 
   size: "large",
   type: "balzers"
  },
  {
    id: 2,
    title: "Denim jeans",
    image: 'Imgs/jeans.jpeg',
    price: 57,
    inCart: 1,
    color: "black",
    size: "medium",
    type: "jeans"
  },
  {
    id: 3,
    title: "Mini skirt",
    image: 'Imgs/skirt.jpeg', 
    price: 57,
    inCart: 1,
    color: "creamy",
    size: "small",
    type: "skirts"
  },
  {
    id: 4,
    title: "Shoes - New Edition",
    image: 'Imgs/shoes.jpeg', 
    price: 57,
    inCart: 1,
    color: "black",
    size: "large",
    type: "shoes"
  },
  {
    id: 5,
    title: "Colorful Blazers 2",
    image: 'Imgs/blazer.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "medium",
    type: "balzers"
  },
  {
    id: 6,
    title: "jeans",
    image: 'Imgs/jeans.jpeg',
    price: 57,
    inCart: 1,
    color: "black",
    size: "large",
    type: "jeans"
  },
  {
    id: 7,
    title: "Tops - Exclusive Edition",
    image: 'Imgs/tops.jpeg',
    price: 57,
    inCart: 1,
    color: "black",
    size: "small",
    type: "tops"
  }
 ];
 console.log(product1);
let product2 = [
  {
    id: 8,
    title: "Jumpsuit",
    image: 'Imgs/jumpsuit.jpeg',
    price: 57,
    inCart: 1,
    color: "white",
    size: "large",
    type: "jumpsuits"
  },
  {
    id: 9,
    title: "Shirt - Limited Edition",
    image: 'Imgs/shirts.jpeg',
    price: 57,
    inCart: 1,
    color: "white",
    size: "large",
    type: "Shirt"
  },
  {
    id: 10,
    title: "Colorful Blazers 3",
    image: 'Imgs/blazer2.jpeg',
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "balzers"
  },
  {
    id: 11,
    title: "Black Jeans",
    image: 'Imgs/jeans.jpeg', 
    price: 57,
    inCart: 1,
    color: "black",
    size: "large",
    type: "jeans"
  },
  {
    id: 12,
    title: "Skirt3",
    image: 'Imgs/skirt.jpeg', 
    price: 57,
    inCart: 1,
    color: "creamy",
    size: "large",
    type: "skirts"
  },
  {
    id: 13,
    title: "Tops2",
    image: 'Imgs/tops.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "tops"
  },
  {
    id: 14,
    title: "Colorful Blazers 4",
    image: 'Imgs/blazer2.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "balzers"
  },
  {
    id: 15,
    title: "Tops - on sale",
    image: 'Imgs/tops.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "tops"
  },
  {
    id: 16,
    title: "Jeans 4",
    image: 'Imgs/jeans.jpeg',
    price: 57,
    inCart: 1,
    color: "black",
    size: "large",
    type: "jeans"
  }
 ];
 console.log(product2);
let product3 = [
  {
    id: 17,
    title: "Shoes3",
    image: 'Imgs/shoes.jpeg',
    price: 57,
    inCart: 1,
    color: "black",
    size: 37,
    type: "shoes"
  },
  {
    id: 18,
    title: "blouse",
    image: 'Imgs/blouse.jpeg', 
    price: 57,
    inCart: 1,
    color: "black",
    size: "medium",
    type: "Blouse"
  },
  {
    id: 19,
    title: "Blouse",
    image: 'Imgs/blouse2.jpeg', 
    price: 57,
    inCart: 1,
    color: "black",
    size: "large",
    type: "Blouse"
  },
  {
    id: 20,
    title: "Skirts 4",
    image: 'Imgs/skirt.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "skirts"
  },
  {
    id: 21,
    title: "Shoes4",
    image: 'Imgs/shoes.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "shoes"
  },
  {
    id: 22,
    title: "Colorful Blazers7",
    image: 'Imgs/blazer2.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "balzers"
  },
  {
    id: 23,
    title: "Tops 5",
    image: 'Imgs/tops.jpeg', 
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "tops"
  },
  {
    id: 24,
    title: "Ripped jeans",
    image: 'Imgs/jeans.jpeg',
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "jeans"
  },
  {
    id: 25,
    title: "Shoes2",
    image: 'Imgs/shoes2.jpeg',
    price: 57,
    inCart: 1,
    color: "multi-color",
    size: "large",
    type: "shoes"
  }
 ];
 console.log(product3);
let productsDB = [...product1,...product2,...product3] ;

console.log(productsDB);
let productos = localStorage.setItem("products", JSON.stringify(productsDB) );


/*  <div >
     <form class="filtor">
       <div class="item">
         <label for="">Category</label>
         <select name="category">
           <option value="">All</option>
           <option value="Tops">Tops</option>
           <option value="Skirts">Skirts</option>
           <option value="Jeans">Jeans</option>
           <option value="Shoes">Shoes</option>
         </select>
       </div>
       <div class="item">
         <label for="">Color</label>
         <select name="color">
           <option value="">All</option>
           <option value="white">white</option>
           <option value="black">black</option>
           <option value="creamy">creamy</option>
         </select>
       </div>
       <div class="item">
        <label for="">Size</label>
        <select name="size">
          <option value="">All</option>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
        </select> 
       </div>
       <div class="item submit">
         <button>Search</button>
       </div>
     </form>
  </div>
  */