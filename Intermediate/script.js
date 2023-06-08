//Ex 2 | Dynamic Background
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
