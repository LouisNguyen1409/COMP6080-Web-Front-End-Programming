const body = document.querySelector('body');

const div = document.createElement('div');
div.style.backgroundColor = "#cccccc";
body.appendChild(div);

const link = document.createElement('a');
link.href = "https://www.google.com";
link.target = "_blank";
const picture = document.createElement('img');
picture.src = "https://i.ytimg.com/vi/yJiVZUKAS84/maxresdefault.jpg";
picture.alt = "Me and my sibling";
link.appendChild(picture);
div.appendChild(link);
div.appendChild(document.createElement('hr'));

const table = document.createElement('table');

const data = [
    ["Name", "Age", "Height"],
    ["Sarah", "22", "188"],
    ["Lin", "42", "134"],
    ["Samir", "21", "155"],
    ["Wayne", "29", "162"],
    ["Eckhart", "112", "144"],
]

for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < data[i].length; j++) {
        const cell = document.createElement('td');
        cell.textContent = data[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}
div.appendChild(table);