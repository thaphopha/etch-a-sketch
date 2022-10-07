const container = document.querySelector(".container");

// STUFF FOR GRID
function createGrid(size = 16) {
    if(size > 100 || size < 1) {
        return;
    }

    //set the size of the grid
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;

    // fill the grid with n,m=size divs
    for(let i = 0; i < size*size; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.className="grid-item"
    }
}

const btnGridSize = document.querySelector(".button--grid-size");
const gridItems = document.querySelectorAll(".grid-item");

function getGridSize() {
    const size = prompt("Enter the grid size (max: 100):")
    return parseInt(size, 10);
}

btnGridSize.addEventListener("click", () => createGrid(getGridSize()));

window.onload = () => {
    createGrid();
};
