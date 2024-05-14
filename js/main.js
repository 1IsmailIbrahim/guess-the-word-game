// Setting Game Name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By ELIMR`;

// Manage Words
let wordToGuess = "";
const words = [
    "legend",
    "silver",
    "golden",
    "wisdom",
    "beauty",
    "rocket",
    "planet",
    "jungle",
    "shadow",
    "spirit",
    "castle",
    "dancer",
    "forest",
    "wizard",
    "prince",
    "famous",
    "ballet",
    "sunset",
    "winner",
    "bright",
    "energy",
    "marble",
    "castle",
    "museum",
    "global",
    "soccer",
    "matrix",
    "legacy",
    "dragon",
    "heroic",
    "summer",
    "poetry",
    "island",
    "nature",
    "harbor",
    "safari",
    "silent",
    "silver",
    "matrix",
    "golden",
    "vision",
    "honest",
    "golden",
    "silent",
    "rocket",
    "beauty",
    "forest"
];

// Setting Game Options
let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry = 1;
let numberOfHints = 2;

wordToGuess = words[Math.trunc(Math.random() * words.length)].toLowerCase();
let messageArea = document.querySelector(".message");

function generateInput() {
    const inputsContainer = document.querySelector(".inputs");
    // Create Main Try Div
    for (let i = 1; i <= numbersOfTries; i++) {
        const tryDiv = document.createElement("div")
        tryDiv.classList.add(`try-${i}`)
        tryDiv.innerHTML = `<span>Try ${i}</span>`;
        if (i !== 1) tryDiv.classList.add("disabled-inputs")
        // Create Inputes
        for (let j = 1; j <= numbersOfLetters; j++) {
            const input = document.createElement("input")
            input.type = "text"
            input.id = `guess-${i}-letter-${j}`
            input.setAttribute("maxlength", "1")
            tryDiv.appendChild(input)
        }
        inputsContainer.appendChild(tryDiv)
    }
    // Focus On First Input In First Try Element
    inputsContainer.children[0].children[1].focus();
    // Disable All Inputs Except First One
    const inputsInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledDiv.forEach((input) => (input.disabled = true));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        // Convert Input To Uppercase
        input.addEventListener("input", function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });
        input.addEventListener("keydown", function (e) {
            const currentIndex = Array.from(inputs).indexOf(e.target)
            if (e.key === "ArrowRight") {
                const nextInputIndex = currentIndex + 1;
                if (nextInputIndex < inputs.length) inputs[nextInputIndex].focus();
            } else if (e.key === "ArrowLeft") {
                const prevInputIndex = currentIndex - 1;
                if (prevInputIndex >= 0) inputs[prevInputIndex].focus();
            }
        })
    });
}
console.log(wordToGuess)

const guessButton = document.querySelector(".check");
guessButton.addEventListener("click", handleGuesses);

function handleGuesses() {
    let successGuess = true;

}


window.addEventListener("load", generateInput)