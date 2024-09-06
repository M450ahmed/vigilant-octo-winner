console.log("n");
// edit address 
//static address 
let address = document.querySelector(".address");

let city = document.querySelector(".city");
let cancelAdd = document.querySelector(".cncn");
let confirmAdress = document.querySelector(".confirmAdress");

//flexible address 
let fullAdress = document.querySelector(".fullAdress");
let cityAdress = document.querySelector(".cityAdress");
let countryAdress = document.querySelector(".countryAdress");
let zip = document.querySelector(".zip");
//edit addresses
confirmAdress.addEventListener("click", function(e){
  e.preventDefault();
  if(zip.value.trim() != "" && fullAdress.value.trim() != "" && countryAdress.value.trim() != "" && cityAdress.value.trim() != ""){
    console.log(zip.value);
    console.log(fullAdress.value);
    console.log(cityAdress.value);
    console.log(countryAdress.value);
    localStorage.setItem("zip", zip.value);
    localStorage.setItem("fullAdress", JSON.stringify(fullAdress.value));
    localStorage.setItem("cityAdress", JSON.stringify(cityAdress.value));
    localStorage.setItem("countryAdress", JSON.stringify(countryAdress.value));
    setTimeout(() => {
    window.location = "login-register.html";
  
  }, 1000);
  }
  
});
cancelAdd.addEventListener("click", function(e){
  
  setTimeout(() => {
    window.location = "pro.html";
  
 }, 1500);
});