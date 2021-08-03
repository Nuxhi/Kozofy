const text = ["Kozofy, The Freedom Platform \n starting now."];
let letter = "";
let index = 0;
let count = 0;
let currentText = "";

(function type() {
    currentText = text[count];
    letter = currentText.slice(0,++index);

document.querySelector(".type").textContent = letter;

if(letter.length === currentText.length) {
    count++;
    index = 0;
    }
    setTimeout(type, 100);
})();