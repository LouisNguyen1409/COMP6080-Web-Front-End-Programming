const container = document.createElement("div");
container.setAttribute("id", "container");
container.innerText = "Loading, Please wait";
document.body.appendChild(container);
const createElement = (text) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerText = text;
    container.appendChild(box);
};

fetch("http://www.cse.unsw.edu.au/~cs6080/raw/data/package.json")
    .then((res) => res.json())
    .then((res) => {
        localStorage.setItem("comp6080", JSON.stringify(res));
        container.innerText = "";
        renderItems(res);
    })
    .catch((e) => {
        container.innerText = "";
        let jsonData = localStorage.getItem("comp6080");
        if (!jsonData) {
            displayMessage(
                "No cached data. Please check your network"
            );
            return;
        }
        renderItems(JSON.parse(jsonData));
        displayMessage("This data is not live");
    });

const renderItems = (res) => {
    createElement("name");
    createElement(res.name);
    createElement("reindeers");
    createElement(res.reindeers);
    createElement("primary");
    createElement(res.primary);
};

const displayMessage = (msg) => {
    const p = document.createElement("p");
    p.innerText = msg;
    document.body.appendChild(p);
};