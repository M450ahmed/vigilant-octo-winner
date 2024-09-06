console.log("compare");
let campo = localStorage.getItem("compare");
console.log(campo);
let comparedItem = document.querySelector(".compare-table");
let productsCompare = products.find((item) => item.id == campo);
(function showCompare(productsCompare){
  comparedItem.innerHTML = `<tr>
       <th>Item</th>
       <td>
         <img src="${productsCompare.image}" alt="" class="compare-img">
       </td>
       <td>
         <img src="Imgs/jumpsuit.jpeg" alt="" class="compare-img">
       </td>
       
       <td>
         <img src="Imgs/blazer.jpeg" alt="" class="compare-img">
       </td>
       
     </tr>
     <tr>
       <th>Brand</th>
       <td><h3 class="table-title">${productsCompare.title} </h3></td>
       
       <td><h3 class="table-title">Milky jumpsuit</h3></td>
       
       <td><h3 class="table-title">Black short blazer</h3></td>
     </tr>
     <tr>
       <th>Price</th>
       <td><span class="table-price">$27.5</span></td>
       
       <td><span class="table-price">$45.5</span></td>
       <td><span class="table-price">$52.99</span></td>
     </tr>
     <tr>
       <th class="footer-description">Description</th>
       <td>
         <p>${productsCompare.title}- ${productsCompare.color} coloured bla bal bla bla bla bal bla bla bal blahhhhhhhhhhhhh</p>
       </td>
       <td>
         <p>Milky jumpsuit-bal bla bal bla bla bla bla bla bla bla bla balhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
       </td>
       <td>
         <p>Short blzer- black coloured damnnn dying on black bla bla bla bla bla bla bla blahhhhhhhhhhhhh</p>
       </td>
     </tr>
     <tr>
       <th>Colors</th>
       <td><ul class="color-list compare-colors">
         
         <li>
            <a href="#" 
            class="color-link" 
            style="background-color: hsl(37, 100%, 65%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(353, 100%, 67%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(49, 100%, 60%)"></a>
          </li>
         
       </ul></td>
       
       <td><ul class="color-list compare-colors">
         
         <li>
            <a href="#" 
            class="color-link" 
            style="background-color: hsl(37, 100%, 65%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(353, 100%, 67%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(49, 100%, 60%)"></a>
          </li>
         
       </ul></td>
       
       <td><ul class="color-list compare-colors">
         
         <li>
            <a href="#" 
            class="color-link" 
            style="background-color: hsl(37, 100%, 65%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(353, 100%, 67%)"></a>
          </li>
          
          <li>
            <a href="#" 
            class="color-link"
            style="background-color: hsl(49, 100%, 60%)"></a>
          </li>
         
       </ul></td>
       
     </tr>
     
     <tr>
       <th>Stock</th>
       <td><span class="table-stock">Out of stuck</span></td>
       <td><span class="table-stock">2 items</span></td>
       <td><span class="table-stock">7 items</span></td>
     </tr>
     
     <tr>
       <th>Weight</th>
       <td><span class="table-weight">250g</span></td>
       <td><span class="table-weight">1.5 lbs</span></td>
       <td><span class="table-weight">350g</span></td>
     </tr>
     
     <tr>
       <th>Dimensions</th>
       <td><span class="table-dimensions">N/A</span></td>
       
       <td><span class="table-dimensions">N/A</span></td>
       
       <td><span class="table-dimensions">N/A</span></td>
     </tr>
     <tr>
       <th>Buy</th>
       <td><a href="" class="btn btn-sm" onclick="addToCart(${productsCompare.id})">Add to cart</a></td>
        <td><a href="" class="btn btn-sm">Add to cart</a></td>
       <td><a href="" class="btn btn-sm">Add to cart</a></td>
     </tr>
    `;
    
})(productsCompare);