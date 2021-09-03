// function stringReverse(string){
//     console.log(string.split("").reverse().join(""))
// }

// stringReverse("You don't know the power of the Dark Side!")

// let shoppingList = [
//     ["apples", "banana", "orange"],
//     ["pizza", "burger", "fish fingers"],
//     ["ice cream", "cake", "chocolate bar"]
// ]

// console.log(shoppingList[1][2])



// function buttonHover() {
//     document.getElementById("aboutMeText").style.display = "block"
//     }
// function buttonHoverOff(){
//     document.getElementById("aboutMeText").style.display = "none" 
// }
// function buttonHover1() {
//     document.getElementById("designText").style.display = "block"
//     }
// function buttonHoverOff1(){
//     document.getElementById("designText").style.display = "none" 
// }
// function buttonHover2() {
//     document.getElementById("modellingText").style.display = "block"
//     }
// function buttonHoverOff2(){
//     document.getElementById("modellingText").style.display = "none" 
// }
// function buttonHover3() {
//     document.getElementById("codingText").style.display = "block"
//     }
// function buttonHoverOff3(){
//     document.getElementById("codingText").style.display = "none" 
// }

//Above is the code used for when I was attempting to make the images and text be revealed while hovering over the button. This didn't work as the images only stayed revealed when hovering, which proved difficult with scrolling down the page, making for a poor user interface

let aboutMeText = document.getElementById("aboutMeText")
let designText = document.getElementById("designText")
let modellingText = document.getElementById("modellingText")
let codingText = document.getElementById("codingText")
function aboutMeButton() {
    if (aboutMeText.style.display == "none") { 
        aboutMeText.style.transition= "2";
        aboutMeText.style.display = "block";
        
    } else {
        aboutMeText.style.display = "none";
    }
}

function designButton() {
    if (designText.style.display == "none") {
        designText.style.display = "block";
    } else {
        designText.style.display = "none";
    }
}

function modellingButton() {
    if (modellingText.style.display == "none") {
        modellingText.style.display = "block";
    } else {
        modellingText.style.display = "none";
    }
}

function codingButton() {
    if (codingText.style.display == "none") {
        codingText.style.display = "block";
    } else {
        codingText.style.display = "none";
    }
}