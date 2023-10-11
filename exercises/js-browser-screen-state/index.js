const body = document.body;

const main = document.createElement('div');
main.classList.add('main');
body.appendChild(main);

const tags = ["Home", "About", "News", "Article"];
for (let i = 0; i < tags.length; i++) {
    const tag = document.createElement('a');
    tag.href = '#';
    tag.innerText = tags[i];
    tag.style.display = 'inline-block';
    if (i !== tags.length - 1) {
        tag.style.borderRight = '1px solid black';
    }
    tag.style.padding = '0 10px';
    main.appendChild(tag);
}

const messages = ["homepage", "about us page", "news page", "article page"]
for (let i = 0; i < messages.length; i++) {
    const message = document.createElement('p');
    message.innerText = `This is the ${messages[i]}!`;
    message.classList.add(tags[i].toLowerCase());
    message.style.padding = '0 10px';
    if (i !== 0) {
        message.style.display = 'none';
    }
    main.appendChild(message);
}

document.addEventListener('click', (event) => {
    if (event.target.innerText === 'Home') {
        document.querySelector('.home').style.display = 'block';
        document.querySelector('.about').style.display = 'none';
        document.querySelector('.news').style.display = 'none';
        document.querySelector('.article').style.display = 'none';
    } else if (event.target.innerText === 'About') {
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.about').style.display = 'block';
        document.querySelector('.news').style.display = 'none';
        document.querySelector('.article').style.display = 'none';
    } else if (event.target.innerText === 'News') {
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.about').style.display = 'none';
        document.querySelector('.news').style.display = 'block';
        document.querySelector('.article').style.display = 'none';
    } else if (event.target.innerText === 'Article') {
        document.querySelector('.home').style.display = 'none';
        document.querySelector('.about').style.display = 'none';
        document.querySelector('.news').style.display = 'none';
        document.querySelector('.article').style.display = 'block';
    }
});

const contact = document.createElement('a');
contact.href = '#';
contact.innerText = 'Contact Us';
contact.style.padding = '0 10px';
main.appendChild(contact);

const form = document.createElement('div');
form.classList.add('form');
form.style.display = 'none';
body.appendChild(form);

form.innerHTML += "Email: ";
const emailinput = document.createElement('input');
emailinput.type = 'email';
emailinput.placeholder = 'abcd@gmail.com';
form.appendChild(emailinput);

form.innerHTML += "<br>";

form.innerHTML += "Name: ";
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
form.appendChild(nameInput);

form.innerHTML += "<br>";

const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.style.margin = '10px 0px';
closeButton.style.marginRight = '10px';
form.appendChild(closeButton);

const submitButton = document.createElement('button');
submitButton.innerText = 'Submit';
submitButton.style.margin = '10px 0px';
form.appendChild(submitButton);

document.addEventListener('click', (event) => {
    if (event.target.innerText === 'Contact Us') {
        document.querySelector('.form').style.display = 'block';
        document.querySelector('.main').style.display = 'none';
    } else if (event.target.innerText === 'Close' || event.target.innerText === 'Submit') {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.main').style.display = 'block';
    }
});