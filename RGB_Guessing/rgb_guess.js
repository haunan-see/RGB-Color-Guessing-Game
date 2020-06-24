let numofSquares = 6;
let colors = generateRandomColors(numofSquares);
let pickedColor = randomColor();
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let rgbDisplay = document.querySelector("#rgb_display");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

initialize();

// easy button config
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numofSquares = 3;
    colors = generateRandomColors(numofSquares);
    pickedColor = randomColor();
    rgbDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

// hard button config
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numofSquares = 6;
    colors = generateRandomColors(numofSquares);
    pickedColor = randomColor();
    rgbDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

// Play Again button config
resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numofSquares);

    //change colors of squares
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };

    // pick a new random color from array
    pickedColor = randomColor();

    //change rgbDisplay to match picked color
    rgbDisplay.textContent = pickedColor;

    // reset h1 background color
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Game";
})

function initialize(){
    // default mode set to hard
    hardBtn.classList.add("selected");
    // display the rgb in h1
    rgbDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++){
        // add colors[] to squares[]
        squares[i].style.backgroundColor = colors[i];

        // add event when click to square
        squares[i].addEventListener("click", function(){
            // comparing the color clicked with the color picked
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again"
            }
            else {
                // fade out the incorrect square
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Wrong, Try Again!";
            }
        });
    }
}

// change all squares to "color"
function changeColors(color){
    for (let i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// randomly pick a number from the array
function randomColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generate a "numofcolors" array and return it
function generateRandomColors(numofcolors){
    let arr = []
    for (let i = 0; i < numofcolors; i++){
        arr.push(randomRGB());
    }
    return arr;
}

// generate random RGB color and return it
function randomRGB(){
    // pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);

    // pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}