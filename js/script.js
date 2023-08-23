
let usernameInput = document.getElementById("usernameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let signin = document.getElementById("signin")
let alertMsg = document.getElementById("MsgAlert")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginBtn = document.getElementById("loginBtn")
let loginMessage = document.getElementById("WelcomeMsg")
let list = [];




if (localStorage.getItem("usersData") != null) {
    list = JSON.parse(localStorage.getItem("usersData"));
}







function signup() {
    let validEmail = userEmailValidation()
let validPass = userPasswordValidation()

    let user =
    {
        name: usernameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value
    }

    if (isEmpty() == true) {

        getMessage("All inputs Required", "red")
        return true
    }
    else {
        if (isExist() == true) {

            getMessage("Email is Exist", "red")
        }
        else
         {
           if(usernameInput!="" && validEmail== true && validPass==true){
            list.push(user)
            localStorage.setItem('usersData', JSON.stringify(list))
            getMessage("Sucsses", "green")
            clearform()
        
           }else{
             getMessage("you must write correct email and password", "red")
           }
        }
    }
}






function isEmpty() {

    if (usernameInput.value == "" || userEmailInput.value == "" || userPasswordInput.value == "") {
        return true
    }
}




function isExist() {

    for (let i = 0; i < list.length; i++) {

        if (list[i].email == userEmailInput.value)
            return true

    }
}



function clearform() {
    usernameInput.value = ""
    userEmailInput.value = ""
    userPasswordInput.value = ""
}



function getMessage(text, color) {
    alertMsg.classList.replace("d-none", "d-block")
    alertMsg.innerHTML = text
    alertMsg.style.color = color

}







function userPasswordValidation() {
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (regex.test(userPasswordInput.value) == true) {
        return true
    }
}

function userEmailValidation() {
    let regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmailInput.value) == true) {
        return true
    }
}





//---------------------------------------------- -----------------------------
//---------------------------------------------- -----------------------------
//---------------------------------------------- -----------------------------
//---------------------------------------------- -----------------------------
//------------------------ LOOOOGGGGGG IIIINNNN-------------------------------
//---------------------------------------------- -----------------------------
//---------------------------------------------- -----------------------------
//---------------------------------------------- -----------------------------



function login() {

    if (checkInputsEmpty() == true) {
        getMessage(" All inputs Required ", " red ")
        return true
    }
    else {
        if (checktheInputs() == true) {

            window.location.href = " welcome.html ";
        }
        else {

            getMessage(" incorrect Email or Password ", " red ")
        }
    }
}

function checkInputsEmpty() {
    if (loginEmail.value == "" || loginPassword.value == "") {
        return true
    }
}
function checktheInputs() {
    for (let i = 0; i < list.length; i++) {
        if (list[i].email == loginEmail.value && list[i].password == loginPassword.value)
            localStorage.setItem('userName', list[i].name)
        return true
    }
    console.log(loginEmail.value);
    console.log(loginPassword.value);
}





if (localStorage.getItem("userName") != null) {
    loginMessage.innerHTML = `welcome ${localStorage.getItem("userName")}`
}





function logOut() {

    localStorage.removeItem('userName')
}










  