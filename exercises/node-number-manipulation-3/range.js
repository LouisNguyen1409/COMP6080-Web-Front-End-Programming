fs = require("fs");
const data = fs.readFileSync("data1.txt", "utf8");

// TODO Work below here
const lines = data.split("\n");

let min = 99999999999;
let max = -99999999999;

for (const line of lines) {
    if (line != "") {
        const number = parseInt(line);
        if (min > number) {
            min = number;
        }
        if (max < number) {
            max = number;
        }
    }
}
console.log('The range is ' + (max - min));