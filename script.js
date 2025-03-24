// Counter functionality
let counter = 0;
document.getElementById("plus").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").innerText = counter;
});
document.getElementById("minus").addEventListener("click", function() {
    counter--;
    document.getElementById("counter").innerText = counter;
});

// Copy text functionality
document.getElementById("copy").addEventListener("click", function() {
    let text = document.getElementById("textInput").value;
    document.getElementById("output").innerText = text;
});
