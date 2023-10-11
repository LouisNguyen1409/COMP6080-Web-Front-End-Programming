const streetName = document.getElementById('street-name');
const suburb = document.getElementById('suburb');
const postcode = document.getElementById('postcode');
const dob = document.getElementById('dob');
const buildingType = document.getElementById('building-type');
const features = document.getElementsByName('features');
const selectAllBtn = document.getElementById('select-all-btn');
const resetBtn = document.getElementById('reset-form');
const textArea = document.getElementById('form-result');

const checkStreetName = () => {
    const streetLength = streetName.value.length;
    if (streetLength < 3 || streetLength > 50) {
        return "Please input a valid street name";
    }
    return true;
}

const checkSuburb = () => {
    const suburbLength = suburb.value.length;
    if (suburbLength < 3 || suburbLength > 50) {
        return "Please input a valid suburb";
    }
    return true;
}

const checkPostcode = () => {
    if (postcode.value.length !== 4) {
        return "Please input a valid postcode";
    }
    return true;
}

const checkDob = () => {
    const dobValue = dob.value;
    // check if dob is in the format of dd/mm/yyyy
    const dateFormat = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if (!dateFormat.test(dobValue)) {
        return "Please enter a valid date of birth";
    }

    // check if dob is a valid date
    const date = dobValue.split("/");
    const checkDate = Date.parse(date[1] + "/" + date[0] + "/" + date[2]);
    const checkDate2 = new Date(date[2], date[1] - 1, date[0]);
    let availableDate = false;
    if (checkDate2.getDate() === parseInt(date[0])
        && checkDate2.getMonth() === parseInt(date[1] - 1)
        && checkDate2.getFullYear() === parseInt(date[2])) {
        availableDate = true;
    }
    if (isNaN(checkDate) || checkDate > Date.now() || !availableDate) {
        return "Please enter a valid date of birth";
    }
    return true;
}

const ageCalculator = () => {
    const date = dob.value.split("/");
    const checkDate = Date.parse(date[1] + "/" + date[0] + "/" + date[2]);
    let age = new Date(Date.now() - checkDate);
    return Math.abs(age.getUTCFullYear() - 1970);
}

const articles = () => {
    const buildingTypeValue = buildingType.value;
    if (buildingTypeValue === "apartment") {
        return "an";
    } else {
        return "a";
    }
}

const featuresString = () => {
    const featuresList = [];
    for (const feature of features) {
        if (feature.checked) {
            featuresList.push(feature.value);
        }
    }
    if (featuresList.length === 0) {
        return "no features";
    } else if (featuresList.length === 1) {
        return featuresList[0];
    } else {
        let returnString = "";
        for (const feature of featuresList) {
            if (feature === featuresList[0]) {
                returnString += feature;
            } else if (feature === featuresList[featuresList.length - 1]) {
                returnString += " and " + feature;
            } else {
                returnString += ", " + feature;
            }
        }
        return returnString;
    }
}

const selectAll = () => {
    for (const feature of features) {
        feature.checked = true;
    }
    selectAllBtn.value = "Deselect all";
}

const deselectAll = () => {
    for (const feature of features) {
        feature.checked = false;
    }
    selectAllBtn.value = "Select All";
}

const checkSelectAllBtn = () => {
    for (const feature of features) {
        if (!feature.checked) {
            selectAllBtn.value = "Select All";
            return;
        }
    }
    selectAllBtn.value = "Deselect all";
}
const render = () => {
    const checkList = [checkStreetName, checkSuburb, checkPostcode, checkDob];
    let i = 0;
    textArea.value = "";
    while (textArea.value.length === 0 && i < checkList.length) {
        if (checkList[i]() !== true) {
            textArea.value = checkList[i]();
        }
        i++;
    }

    if (textArea.value.length === 0) {
        textArea.value = `You are ${ageCalculator()} years old, and your address is ${streetName.value} St, ${suburb.value}, ${postcode.value}, Australia. Your building is ${articles()} ${buildingType.value.charAt(0).toUpperCase() + buildingType.value.slice(1)}, and it has ${featuresString()}`;
    }
}

streetName.addEventListener('blur', () => render());
suburb.addEventListener('blur', () => render());
postcode.addEventListener('blur', () => render());
dob.addEventListener('blur', () => render());
buildingType.addEventListener('change', () => render());
features.forEach(feature => feature.addEventListener('change', () => {
    checkSelectAllBtn();
    render()
}));
selectAllBtn.addEventListener('click', () => {
    if (selectAllBtn.value === "Select All") {
        selectAll();
        render();
    } else {
        deselectAll();
        render();
    }
});
resetBtn.addEventListener('click', () => {
    streetName.value = "";
    suburb.value = "";
    postcode.value = "";
    dob.value = "";
    buildingType.value = "apartment";
    deselectAll();
    textArea.value = "";
});