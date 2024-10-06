const container = document.querySelector("#container");

function createSquares(num) {
    let percentage = (100 / num) + "%";
    num = num * num;

    for (let i = 0; i < num; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.flex = `0 0 ${percentage}`;
        container.appendChild(square);

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#8E8E93";
        });
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