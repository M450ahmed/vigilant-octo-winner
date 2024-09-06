console.log("test");
//login div
const login = document.querySelector(".login");
//lgn eml
let loginEmail = document.querySelector(".loginEmail");
//lgn pw
let loginPass = document.querySelector(".loginPass");
//pass wrong 
let passWrong = document.querySelector(".passWrong");

//register div
const register = document.querySelector(".register");
//regstr usr
let rgstrUSR = document.querySelector(".rgstrUSR");
//regstr mal
let rgstrEML = document.querySelector(".rgstrEML");
//regstr pw
let rgstrPW = document.querySelector(".rgstrPW");
//regstr cnfrm pw
let rgstrCNPW = document.querySelector(".rgstrCNPW");

//dont have account btn
let dntHvAcc = document.querySelector(".goToCreate");
//have account btn
let hvAcc = document.querySelector(".goTologin");
// edit address 
let address = document.querySelector(".address");

let city = document.querySelector(".city");

let confirmAdress = document.querySelector(".confirmAdress");
//click on doesn't have so gonna crt ac
dntHvAcc.addEventListener("click", function(e){
  console.log("red");
  login.style.display = "none";
  register.style.display = "block";
});
// if he has so sent him to login
hvAcc.addEventListener("click", function(e) {
  console.log("blue");
  register.style.display = "none";
  login.style.display = "block";
});
let rgstBOX = [];
let lgnBOX = [];
//let emailTsT= /(https?:\/\/)?(www.)?\w+.org(:\d*\/\w+.\w+\?\w+\=\d*\&\w+\=\w+)?/ig;

/*register.addEventListener("submit", function(e){
  e.preventDefault();
  if(rgstrUSR.value.trim() != "" ) {
    console.log(rgstrUSR.value);
    
  }
})
*/
//email validation 
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
rgstrEML.addEventListener("blur", function(e){
  if(emailRegex.test(rgstrEML.value)){
    rgstrEML.classList.add('greenB');
  }else{
    rgstrEML.classList.add('redB');
  }
});
//username validation 
let usernameRegex = /^(?=.*\d)[A-Za-z\d]{4,12}$/;
rgstrUSR.addEventListener("blur", function(e){
  if(usernameRegex.test(rgstrUSR.value)){
    rgstrUSR.classList.add('greenB');
  }else{
    rgstrUSR.classList.add('redB');
  }
});
//pass validation 
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
rgstrPW.addEventListener("blur", function(e){
  if(passwordRegex.test(rgstrPW.value) ){
    rgstrPW.classList.add('greenB');
  }else{
    rgstrPW.classList.add('redB');
  }
});
//pass confirmations 
rgstrCNPW.addEventListener("blur", function(e){
  if(rgstrCNPW.value !== "" && rgstrPW.value === rgstrCNPW.value){
    rgstrCNPW.classList.add("greenB");
  }else{
    rgstrCNPW.classList.add("redB");
  }
})




register.addEventListener("submit", function(e){
  e.preventDefault();

  // Email Validation Regex (unchanged)
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Username Validation Regex:
  // - Alphanumeric (letters and numbers)
  // - Must contain at least 1 number
  // - Length: 4 to 12 characters
  let usernameRegex = /^(?=.*\d)[A-Za-z\d]{4,12}$/;

  // Password Validation Regex:
  // - Must contain at least 1 letter
  // - Must contain at least 1 number
  // - Must contain at least 1 special character
  // - Length: 8 to 16 characters
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,16}$/;

  // Email validation
  if (!emailRegex.test(rgstrEML.value)) {
    console.log("Please enter a valid email address.");
    return;
  }

  // Username validation
  if (!usernameRegex.test(rgstrUSR.value)) {
    console.log("Username must be 4-12 characters long, contain at least one number, and can include letters.");
    return;
  }

  // Password validation
  if (!passwordRegex.test(rgstrPW.value)) {
    alert("Password must be 8-16 characters long, and include at least one letter, one number, and one special character.");
    return;
  }

  // Confirm Password validation
  if (rgstrPW.value !== rgstrCNPW.value) {
    alert("Passwords do not match.");
    return;
  }

  // If validation passes, store the user data
  const newUser = {
    username: rgstrUSR.value,
    email: rgstrEML.value,
    password: rgstrPW.value
  };

  rgstBOX.push(newUser);
  console.log("Registration successful!");
  console.log(rgstBOX);
  localStorage.setItem("register",JSON.stringify(rgstBOX))
  setTimeout(() => {
    window.location = "login-register.html";
  
  }, 1500);
  // Optionally, reset the form or redirect the user
  // register.reset();
  // window.location.href = "login.html"; // Redirect to login page
});

let loginD= JSON.parse(localStorage.getItem("register"));
console.log(loginD[0].email)
//let loginP = JSON.parse(localStorage.getItem("registerPs"));

login.addEventListener("submit", function(e){
  e.preventDefault();
  if(loginD[0].email.trim() === loginEmail.value.trim() && loginD[0].password.trim() === loginPass.value.trim()){
    
   console.log(loginEmail.value);
   console.log(loginPass.value);
   loginPass.classList.add("greenB");
   loginEmail.classList.add("greenB");
   localStorage.setItem("loged", "loggedin");
   setTimeout(() => {
        window.location = "login-register.html";
        
      }, 1500);
  }else{
    passWrong.style.display = "block";
    loginPass.classList.add("redB");
   loginEmail.classList.add("redB");
  }
});
let logout = document.querySelector(".logout");
logout.addEventListener("click", function(e){
  localStorage.setItem("loged", "loggedout");
  setTimeout(() => {
    window.location = "login-register.html";
  
  }, 1500);
});
let userWelcome = document.querySelector(".tabUs");
userWelcome.innerHTML = `Hello ${loginD[0].username}`;
let log = localStorage.getItem("loged");
if(log === "loggedin"){
  console.log("trie");
  document.querySelector(".login-register").style.display = "none";
  document.querySelector(".accounts").style.display = "block";
}if(log === "loggedout"){
  document.querySelector(".login-register").style.display = "block";
  document.querySelector(".accounts").style.display = "none";
}

/***------------product tabs-------*/
if(localStorage.getItem("loged")){
  console.log("log");
}
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

//address update 
let fullAdress = JSON.parse(localStorage.getItem("fullAdress"));
let cityAdress = JSON.parse(localStorage.getItem("cityAdress"));
let countryAdress = JSON.parse(localStorage.getItem("countryAdress"));
let zip = localStorage.getItem("zip");
if(cityAdress){
  city.innerHTML = `${cityAdress}`;
}
if(fullAdress && zip && countryAdress){
  address.innerHTML = `${countryAdress} <br> ${fullAdress} <br> 
               
               ${zip}`;
}

//profile 
let profilePic = document.querySelector("#profilePic");
let upload = document.querySelector("#uploadPic");
let profileUser = document.querySelector(".profileUser");
if(loginD){
  profileUser.textContent = `@${loginD[0].username}`;
}
// Load the saved image from localStorage when the page loads
window.addEventListener("load", function () {
  const storedPic = localStorage.getItem("profilePic");
  if (storedPic) {
    profilePic.src = storedPic;
  }
});

// Save the new image to localStorage when a file is selected
upload.addEventListener("change", function () {
  const file = upload.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    const dataURL = reader.result;
    localStorage.setItem("profilePic", dataURL);
    profilePic.src = dataURL;
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});
