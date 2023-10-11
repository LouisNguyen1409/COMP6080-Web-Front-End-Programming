const building = document.getElementById("building");

function addWindow() {
    const element = document.createElement("div");
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.margin = "25px";
    element.style.display = "inline-block";
    element.className = "window";
    building.append(element);
}

for (let i = 0; i < 9; i++) {
    const element = document.createElement("div");
    element.style.width = "50px";
    element.style.height = "50px";
    element.style.margin = "25px";
    element.style.display = "inline-block";
    element.className = "window";
    building.append(element);
}



document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        addWindow();
    } else if (event.key === "ArrowDown") {
        building.removeChild(building.lastChild);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        building.style.left = (building.offsetLeft + 50) + "px";
    } else if (event.key === "ArrowLeft") {
        building.style.left = (building.offsetLeft - 50) + "px";
    }
});

document.addEventListener("mousedown", () => {
    const body = document.body;
    if (body.hasAttribute("night")) {
        body.removeAttribute("night");
    } else {
        body.setAttribute("night", "");
    }
});