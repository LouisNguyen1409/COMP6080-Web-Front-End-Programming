import { v4 as uuidv4 } from 'uuid';
const uuids = [];
for (let i = 0; i < 30; i++) {
    const id = uuidv4();
    uuids.push(id);
    console.log(id);
}

let frequency = {};

for (const id of uuids) {
    for (const char of id) {
        if (char !== '-') {
            if (Object.keys(frequency).indexOf(char) === -1) {
                frequency[char] = 1;
            } else {
                frequency[char]++;
            }
        }
    }
}

frequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

for (let i = 0; i < 5; i++) {
    console.log(frequency[i][0])
}