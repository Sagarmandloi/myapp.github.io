const inputBox = document.getElementById("input-box");
const listCantainer = document.getElementById("list-cantainer");
function addTask() {
    if (inputBox.value === '') {
        alert("add text hear");// nathing type any text then alert
    }
    else {
        // add text in the list
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listCantainer.appendChild(li);
        //add cross mark in the list
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";//after oprestion perform textfild remainse empty
    saveData();
}
listCantainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("chacked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }


}, false);

function saveData() {
    localStorage.setItem("data", listCantainer);
}
function showTask() {
    listCantainer.innerHTML = localStorage.getItem("data");
}
showTask();