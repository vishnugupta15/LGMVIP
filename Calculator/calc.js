
function calculate() {
    calculateform.screen.value = eval(calculateform.screen.value);
}
function valuebutton(numb) {
    calculateform.screen.value += numb.value;
}
function clear1() {
    calculateform.screen.value = null;
}
