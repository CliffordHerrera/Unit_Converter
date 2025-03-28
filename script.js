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

function rnd() {

}


let n;
function funk2() {
    n = document.getElementById("given").value;
    //n = 16;
    //let ds = document.getElementById("disssum");
    //ds.innerText = n;
    return n;
}

function diss(n) {
    let ds = document.getElementById("disssum");
    let dr = document.getElementById("dissres");
    while(n >= 10) {
        n = n.toString().split('');
        if (n.length === 2) {
            ds.innerText = `${n[0]} + ${n[1]}`;
        }
        if (n.length === 3) {
            ds.innerText = `${n[0]} + ${n[1]} + ${n[2]}`;
        }
        if (n.length === 4) {
            ds.innerText = `${n[0]} + ${n[1]} + ${n[2]} + ${n[3]}`;
        }
        //ds.innerText = `${n[0]} + ${n[1]} + ${n[2]}`;
        n = n.map(Number).reduce((a,b) => a + b);
        dr.innerText = n;
    }
    return n;
}