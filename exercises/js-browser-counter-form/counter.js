const counter = document.getElementById('counter');
counter.innerHTML = 0;

document.addEventListener('click', (event) => {
    if (event.target.id === 'increment') {
        if (counter.innerHTML == 10) {
            alert('Maximum value is 10');
        } else {
            counter.innerHTML++;
        }
    } else if (event.target.id === 'decrement') {
        if (counter.innerHTML == 0) {
            alert('Minimum value is 0');
        } else {
            counter.innerHTML--;
        }
    }
});