const adding = document.getElementById("add");
const counting = document.getElementById("count")
const subtract = document.getElementById("sub")
const reset = document.getElementById("reset")

var data = 0;

adding.addEventListener("click", function () {
    data = data + 1;
    counting.innerText = data;
})


subtract.addEventListener("click", function () {
    data = data - 1;
    counting.innerText = data;
})


reset.addEventListener("click", function () {
    data = data - data;
    counting.innerText = data
})


