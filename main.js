const buttons = document.getElementsByClassName("img")

Array.from(buttons).forEach(button => button.addEventListener("click", cardFlip))

function cardFlip(event){
    event.target.setAttribute('src', "images/card-back.png")
}