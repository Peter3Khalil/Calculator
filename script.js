function showNumber(c) {

    document.getElementById("out").value += c;
}

function sol() {
    let x = document.getElementById("out").value;
    let y = eval(x);
    document.getElementById("out").value = y;
}

function clr() {
    document.getElementById("out").value = "";
}
