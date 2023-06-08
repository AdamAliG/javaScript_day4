let circle = document.getElementById('circle');
let message = document.getElementById('message');

circle.addEventListener('mouseover', function() {
    message.innerHTML = "You are in the circle";
});

circle.addEventListener('mouseout', function() {
    message.innerHTML = "You are outside of the circle";
});

circle.addEventListener('click', function() {
    document.body.style.backgroundColor = "gray";
});

circle.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = "blue";
});
