//your JS code here. If required.
let container = document.querySelector(".container");

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan"
];

for (let i = 0; i < 800; i++) {

    let square = document.createElement("div");

    square.classList.add("square");

    square.addEventListener("mouseover", function() {

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        square.style.backgroundColor = randomColor;

    });

    square.addEventListener("mouseout", function() {

        setTimeout(function() {
            square.style.backgroundColor = "#1d1d1d";
        }, 1000);

    });

    container.appendChild(square);
}