const buttons = document.getElementsByClassName("img")
const imgDiv = document.getElementById("images")
const startBtn = document.getElementById("startGame")
const cardArray = [
    `<input type="image" src="images/card-back.PNG"  class="img" value="rock"/>`,
    `<input type="image" src="images/card-back.PNG"  class="img" value="paper"/>`,
    `<input type="image" src="images/card-back.PNG"  class="img" value="scissors"/>`,
    `<input type="image" src="images/card-back.PNG"  class="img" value="rock"/>`,
    `<input type="image" src="images/card-back.PNG"  class="img" value="paper"/>`,
    `<input type="image" src="images/card-back.PNG"  class="img" value="scissors"/>`
]
let checkArray = []

startBtn.addEventListener("click", function () {
    shuffle(cardArray)
    renderCards()
})


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function renderCards() {
    imgDiv.innerHTML = ""
    for (let i = 0; i < cardArray.length; i++) {
        imgDiv.innerHTML += cardArray[i]

        Array.from(buttons).forEach(button => button.addEventListener("click", cardFlip))

        function cardFlip(event) {
            if (event.target.value === "rock") {
                event.target.setAttribute('src', "images/rock.png")
                checkArray.push(event.target.value)
                compare(event.target.value)
            }
            if (event.target.value === "paper") {
                event.target.setAttribute('src', "images/paper.png")
                checkArray.push(event.target.value)
                compare(event.target.value)
            }
            if (event.target.value === "scissors") {
                event.target.setAttribute('src', "images/scissors.png")
                checkArray.push(event.target.value)
                compare(event.target.value)
            }
        }

    }
}

function compare(value){
    if (checkArray.length === 2){
        if (checkArray[0] === checkArray[1]){
            console.log("hello")
        } else {
            checkArray = []
            console.log("nope")
        }
    }
}

