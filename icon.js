console.log("log")
let profileIcon = document.querySelector(".profileIconImg");
let log = localStorage.getItem("loged")
if (log === "loggedin") {
  console.log(log)
  profileIcon.style.display = "block";
}
const storedPic = localStorage.getItem("profilePic");
  if (storedPic) {
    profileIcon.src = storedPic;
    
  }