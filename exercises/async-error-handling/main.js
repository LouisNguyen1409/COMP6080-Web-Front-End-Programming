const API_URL = 'https://jsonplaceholder.typicode.com'

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
  .then((res) => {
    if (res.status === 404) {
      throw new Error(`Could not find a user with id ${id}`);
    } else if (res.status !== 200) {
      throw new Error(`Something went wrong when getting user with id ${id}`);
    }
    return res.json();
  })
  .then((user) => {
    if (user.username !== username) {
      throw new Error(`The user with id ${id} does not have username '${username}'`);
    }
    return user;
  });
}
const body = document.querySelector('body');
const resultElement = document.getElementById('result');
body.classList.add('loading');

getUserByIdAndUsername('1', 'Bret')
  .then(user => {
    resultElement.innerHTML = JSON.stringify(user, null, 2);
  })
  .catch(error => alert(error.message))
  .finally(() => {
    body.classList.replace('loading', 'done');
  })


// getUserByIdAndUsername('404', 'This user does not exist')
// .then(user => {
//   resultElement.innerHTML = JSON.stringify(user, null, 2);
// })
// .catch(error => alert(error.message))
// .finally(() => {
//   body.classList.replace('loading', 'done');
// })
// getUserByIdAndUsername('1', 'Bob')
// .then(user => {
//   resultElement.innerHTML = JSON.stringify(user, null, 2);
//   resultElement.style.display = 'block';
// })
// .catch(error => alert(error.message));
