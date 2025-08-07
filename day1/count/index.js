const increas = document.getElementById("increas");
const decrease = document.getElementById("decrease");
const restart = document.getElementById("restart");
const counts = document.getElementById("count-lable");

let add = 0;

increas.onclick = function() {
    add++;
    counts.textContent = add;
};

decrease.onclick = function() {
    add--;
    counts.textContent = add;
};

restart.onclick = function() {
    add = 0;
    counts.textContent = add;
};






