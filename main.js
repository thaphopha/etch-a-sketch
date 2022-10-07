let mode = 'normal';
let color = 'rgb(0, 0, 0)'
let size = 16;

// STUFF FOR GRID
const btnGridSize = document.querySelector(".button--grid-size");
const btnModeNormal = document.querySelector(".button--normal");
const btnModeRainbow = document.querySelector(".button--rainbow");
const btnReset = document.querySelector(".button--reset");
const container = document.querySelector(".container");
const modeParagraph = document.querySelector(".mode");

function setParagraph() {
    if(mode === 'normal') {
        modeParagraph.textContent = 'Normal Mode';
    } else if(mode === 'rainbow') {
        modeParagraph.textContent = 'Rainbow Mode';
    }
};


function createGrid(size = 16) {
    if(size > 100 || size < 1) {
        return;
    }
    //set the size of the grid
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    setParagraph();
    // fill the grid with n,m=size divs
    for(let i = 0; i < size*size; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.className="grid-item"
    }
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((e) => e.onmouseover = (e) => {
        setColor();
        e.target.style.backgroundColor = color;
        e.target.style.borderColor = color;
    });
}

function getRandomNum() {
    return Math.floor(Math.random() * 255);
}

function getColor() {
    if(mode === 'normal') {
        color = `rgb(0, 0, 0)`;
    } else if(mode === 'rainbow') {
        color = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
    }
}

function getRandomColor() {
    return  `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}

function setColor() {
    switch(mode) {
        case 'rainbow':
            color = getRandomColor();
            break;
        default: color = 'rgb(0, 0, 0)';
    }
}

function getGridSize() {
    size = prompt("Enter the grid size (max: 100):")
    return parseInt(size, 10);
}

btnGridSize.addEventListener("click", () => createGrid(getGridSize()));

// STUFF FOR NORMAL COLOR MODE
btnModeNormal.addEventListener("click", (e) => {mode = "normal"; setParagraph()});


// STUFF FOR RAINBOW MODE
btnModeRainbow.addEventListener("click", () => {mode = "rainbow"; setParagraph();});

btnReset.addEventListener("click", () => {
    createGrid(size);
});

window.onload = () => {
    createGrid(size);
  }