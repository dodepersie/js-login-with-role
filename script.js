$(document).ready(function() {
    $(".preloader").fadeOut("slow");
});


let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let titleHomePage = document.getElementById('titleHomePage');
let titleAdmin = document.getElementById('titleAdmin');
let headerHomePage = document.getElementById('headerHomePage');
let adminBody = document.getElementById('adminBody');
let premiumBody = document.getElementById('premiumBody');
let userBody = document.getElementById('userBody');
let userNotExist = document.getElementById('userNotExist');
let loginBody = document.getElementById('loginBody');
let usernameRegister = document.getElementById('usernameRegister');
let passwordRegister = document.getElementById('passwordRegister');
let registerButton = document.getElementById('registerButton');
let checkRole = document.getElementById('checkRole');
let checkUsername = document.getElementById('checkUsername');
let moreAboutCard = document.getElementById('moreAboutCard');
let moreAboutCardMore = document.getElementById('moreAboutCardMore');
let loginText = document.getElementById('loginText');
let registerText = document.getElementById('registerText');

adminBody.style.display = "none";
premiumBody.style.display = "none";
userBody.style.display = "none";
userNotExist.style.display = "none";
titleAdmin.style.display = "none";
document.body.style.overflowX = "hidden";

// Auth Login
function onLogin() {
    console.log('Tombol Login di Klik');
    console.log(usernameInput.value);
    console.log(passwordInput.value);

    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("pwd", passwordInput.value);

    if(usernameInput.value == "" && passwordInput.value == "") {
        document.getElementById('logAlert').innerHTML = "Please input username and password bro! >:(";
        return false;
    } else if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
        location.reload();
        loginBody.style.display = "none";
        localStorage.setItem("role", "Admin");
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        titleAdmin.style.display = "block";
        premiumBody.style.display = "none";
        adminBody.style.display = "block";
        userBody.style.display = "none";
        return true;
    } else if (usernameInput.value == "premium" && passwordInput.value == "premium") {
        location.reload();
        loginBody.style.display = "none";
        localStorage.setItem("role", "Premium");
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        adminBody.style.display = "none";
        premiumBody.style.display = "block";
        userBody.style.display = "none";
        return true;
    } else if (usernameInput.value == localStorage.getItem("username") && passwordInput.value == localStorage.getItem("password")){
        location.reload();
        loginBody.style.display = "none";
        localStorage.setItem("role", "Normal");
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        adminBody.style.display = "none";
        premiumBody.style.display = "none";
        userBody.style.display = "block";
        return true;
    } else {
        document.getElementById('logAlert').innerHTML = "Username and Password doesn't exist >:(";
        return false;
    }

    checkUsername.innerHTML = localStorage.getItem('username');
    // checkRole.innerHTML = localStorage.getItem('role');
}

// Register
function onRegister() {
    var usr = document.getElementById("usernameRegister").value;
    var pw1 = document.getElementById("passwordRegister").value;
    var pw2 = document.getElementById("passwordRegister2").value;

    console.log("Tombol Register di Klik");
    console.log(usernameRegister.value);
    console.log(passwordRegister.value);

    localStorage.setItem("username", usernameRegister.value);
    localStorage.setItem("password", passwordRegister.value);

    if(usr == "" && pw1 == "") {
        document.getElementById('regAlert').innerHTML = "Please input username and password bro! >:(";
        return false;
    } else if(usr.length<4 || usr.length>10) {
        document.getElementById('regAlert').innerHTML = "**Username must 4-10 characters";
        return false;
    } else if(pw1.length<=8) {
        document.getElementById('regAlert').innerHTML = "**Password length must above 8 characters >:(";
        return false;
    } else if (pw1 != pw2){
        document.getElementById('regAlert').innerHTML = "**Password didn't match >:(";
        return false;
    }
    else if(usr == pw1) {
        document.getElementById('regAlert').innerHTML = "*Bro? tau keamanan ga? masa iya username dan passwordnya samaan awokawokawok";
        return false;
    }
    else {
        document.getElementById('regAlert').style.display = "none";
        document.getElementById('regSuccess').innerHTML = "Register success :3";
        return true;
    }
}

// Show Password
function showPwd() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

// Dark-Light Mode
function darkLightMode() {
    console.log("Tombol Switch Dark / Light Mode di Klik");
    var element = document.body;
    let card = document.getElementById('card');
    let checkMode = document.getElementById('checkMode');
    let checkModeAdmin = document.getElementById('checkModeAdmin');

    if(!element.classList.toggle("dark"))
    {
        localStorage.setItem("mode", "Light"); // The Mode
        element.style.color = "#4f4f4f";
        titleHomePage.style.color = "#4f4f4f";
        titleAdmin.style.color = "#4f4f4f";
        checkMode.innerHTML = "Dark";
        checkModeAdmin.innerHTML = "Dark";
        
    } else {
        localStorage.setItem("mode", "Dark"); // The Mode
        element.style.color = "#ffffff";
        titleHomePage.style.color = "#ffffff";
        titleAdmin.style.color = "#ffffff";
        loginText.style.color = "#4f4f4f";
        registerText.style.color = "#4f4f4f";
        checkMode.innerHTML = "Light";
        checkModeAdmin.innerHTML = "Light";
    }

    if(card.classList.toggle("dark"))
    {
        card.style.color = "white";
        card.style.boxShadow = "0px 2px 3px white";
    } else {
        card.style.color = "#4f4f4f";
        card.style.boxShadow = "0px 2px 5px rgb(0 0 0 / 11%)";
    }

    if(moreAboutCard.classList.toggle("dark"))
    {
        moreAboutCard.style.color = "white";
        moreAboutCard.style.boxShadow = "0px 2px 3px white";
    } else {
        moreAboutCard.style.color = "#4f4f4f";
        moreAboutCard.style.boxShadow = "0px 2px 5px rgb(0 0 0 / 11%)";
    }

    if(moreAboutCardMore.classList.toggle("dark"))
    {
        moreAboutCardMore.style.color = "white";
    } else {
        moreAboutCardMore.style.color = "#4f4f4f";
    }               
}

if(localStorage.getItem('username')) {
    loginBody.style.display = "none";
    if(localStorage.getItem('role') == "Admin") {
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        titleAdmin.style.display = "block";
        premiumBody.style.display = "none";
        adminBody.style.display = "block";
        userBody.style.display = "none";
        loginBody.style.display = "none";
    } else if(localStorage.getItem('role') == "Premium") {
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        adminBody.style.display = "none";
        premiumBody.style.display = "block";
        userBody.style.display = "none";
        loginBody.style.display = "none";
    } else if(localStorage.getItem('role') == "Normal") {
        titleHomePage.style.display = "none";
        headerHomePage.style.display = "none";
        adminBody.style.display = "none";
        premiumBody.style.display = "none";
        userBody.style.display = "block";
        loginBody.style.display = "none";
    } else {
        loginBody.style.display = "block";
    }

    checkUsername.innerHTML = localStorage.getItem('username');
    // checkRole.innerHTML = localStorage.getItem('role');
    checkMode.innerHTML = "Dark";
    checkModeAdmin.innerHTML = "Dark";
}

function onLogout() {
    localStorage.setItem("username","");     
    localStorage.setItem("pwd","");     
    localStorage.setItem("role","");
    localStorage.setItem("mode", "");
    location.reload();
}