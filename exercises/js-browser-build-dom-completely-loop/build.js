const body = document.querySelector('body');

const div = document.createElement('div');

const textList = ["Hello there,", "I am a llama, hear my sirens roar:"]

for (const text of textList) {
    const textTag = document.createElement('p');
    textTag.textContent = text;
    div.appendChild(textTag);
}

const unorderedList = document.createElement('ul');

const items = ["The", "Duck", "Lemonade", "Stand"];

for (const item of items) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    unorderedList.appendChild(listItem);
}

div.appendChild(unorderedList);
body.appendChild(div);