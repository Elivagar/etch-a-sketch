const container = document.querySelector("#container");

function getRandomRGB() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 255);
    }
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function createSquares(num) {
    let percentage = (100 / num) + "%";
    num = num * num;

    for (let i = 0; i < num; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.flex = `0 0 ${percentage}`;
        container.appendChild(square);

        let hoverCount = 0;
    
        square.addEventListener("mouseenter", () => {
            hoverCount++
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = getRandomRGB();
                square.style.opacity = 0.1;
            }
        });

        if (hoverCount < 10) {
            square.addEventListener("mouseenter", () => {
                square.style.opacity = hoverCount / 10;
            });
        }
    }
}
createSquares(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let amount = prompt("Create a new grid, choose the number of squares per side (Maximum 100) :");
    if (amount === null) return;

    console.log(amount);

    while (amount > 100 || isNaN(amount)) {
        amount = prompt("Invalid number, please choose one up to and including 100:");
        console.log(amount);
    }

    container.innerHTML = "";
    createSquares(amount);
});