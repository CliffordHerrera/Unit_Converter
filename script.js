function funk() {
    let inputValue = document.getElementById("inputValue").value;
    let unitType = document.getElementById("unitSelect").value;
    let resultElem = document.getElementById("result");


let result;
if (unitType === "mtokm") {
    result = inputValue * 1.60934;
    resultElem.innerText = `${inputValue} miles = ${result.toFixed(4)} kilometers`;
    } else if (unitType === "kmtom") {
    result = inputValue / 1.60934;
    resultElem.innerText = `${inputValue} km = ${result.toFixed(4)} miles`;
    }
}