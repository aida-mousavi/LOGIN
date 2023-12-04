let circle = document.getElementById('circle'),
newHere = document.getElementById('newHere'),
img1 = document.getElementById('img1'),
img2 = document.getElementById('img2'),
sign = document.getElementById('sign'),
oneOfUs = document.getElementById('oneOfUs'),
log = document.getElementById('log'),
allInputs=document.querySelectorAll('input')
console.log(allInputs);




function reset(){
allInputs.forEach((val)=>{
console.log(val)
val.value=""
})
}
function logIn() {
circle.style.right = '-80%'
newHere.style.left = '-600px'
img1.style.left = '-600px'
oneOfUs.style.right = "100px"
img2.style.opacity = '1'
img2.style.visibility = 'visible'
img2.style.right = "20px"
reset()
}

function signUp() {
circle.style.right = '48%'
newHere.style.left = '100px'
img1.style.left = '20px'
oneOfUs.style.right = "-600px"
img2.style.right = "-600px"
reset()
}
let flagUser = true
let flagPass = true
let notEmpty = false
function welcome(info) {
let choose = info.getAttribute("data-id")
if (choose == 'sign') {
    choose = document.getElementById('sign')
}
else {
    choose = document.getElementById('log')

}
let inputLog = choose.querySelectorAll('input'),
    warningForm = choose.querySelector('#warningForm'),
    warningUser = choose.querySelector(".warningUser"),
    warningPass = choose.querySelector(".warningPass")

for (i = 0; i < inputLog.length; i++) {
    if (inputLog[i].value != "") {
        notEmpty = true

    }
    else {
        warningForm.innerText = "Please fill form"
        warningForm.style.color = "red"
        notEmpty = false

    }
}
if (notEmpty) {

    if (inputLog[0].value.length < 8) {
        warningUser.innerHTML = 'Your UserName is short'
        warningUser.style.color = "red"

        flagUser = false

    } else {
        warningUser.innerHTML = null
        flagUser = true


    }

    if (inputLog[1].value.length < 8) {
        warningPass.innerHTML = 'Your Password is short'
        warningPass.style.color = "red"

        flagPass = false


    }
    else {
        warningPass.innerHTML = null
        flagPass = true

    }
    console.log(flagPass, flagUser)
    if (flagPass && flagUser) {
        warningForm.style.color = "green"
        warningForm.innerText = "Welcome my friend :) "
    }
    else {
        warningForm.innerText = null

    }

}
}