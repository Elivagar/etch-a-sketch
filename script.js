const container = document.querySelector("#container");

function createSquares(num) {
    num = num * num;
    console.log(num);

    for (let i = 0; i < num; i++) {
        const square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "rgb(80, 80, 80)";
        });
    }
}

createSquares(16);