const ul = document.createElement("ul");
document.body.appendChild(ul);

const li = document.createElement("li");
ul.appendChild(li);
li.innerText = "hayden";

const loop = () => {
    fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((ids) => {
            for (let idex of ids) {
                getName(ids[idex]);
            }
        });
};

const getName = (id) => {
    fetch(`http://localhost:3000/user/${id}`)
        .then((res) => res.json())
        .then((user) => {
            const li = document.createElement("li");
            li.innerText = user.name;
            ul.appendChild(li);
        });
};
loop();


/**
 * Using `Promise.all` is much preferred than calling `fetch` in a loop.
 */
const promiseAll = () => {
	fetch('http://localhost:3000/users')
		.then((res) => res.json())
		.then((users) => {
			Promise.all(users.map((user) => fetch(`http://localhost:3000/user/${user}`).then((res) => res.json())))
				.then((users) => {
					for (const user of users) {
						const li = document.createElement('li');
						li.innerText = user.name;
						ul.append(li);
					}
				});
		});
};
// fetch('http://localhost:3000/user/0');
