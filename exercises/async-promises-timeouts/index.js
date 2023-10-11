const fetchData = async () => {
    const data = await fetch("http://www.cse.unsw.edu.au/~cs6080/raw/data/doggo.txt")
    .then((response) => response.text())
    document.getElementById("dogname").innerText = data;
};

fetchData();
