"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let shapes = [];
let confettis = [];
canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    for (let i = 0; i < 100; i++) {
        confettis.push({
            x: mouseX,
            y: mouseY,
            color: getRandomColor(),
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1
        });
    }
    const shapeType = Math.random() < 0.5 ? "circle" : "square";
    shapes.push({ x: mouseX, y: mouseY, type: shapeType });
    drawShapes();
    drawConfetti();
});
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes.forEach((shape) => {
        if (shape.y < canvas.height - 40) {
            shape.y += 0.5; // Bewegung nach unten anpassen (hier um 1 Pixel)
        }
        if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
        }
        else if (shape.type === "square") {
            ctx.fillStyle = "red";
            ctx.fillRect(shape.x - 20, shape.y - 20, 40, 40);
        }
    });
    requestAnimationFrame(drawShapes); // Animationsschleife für kontinuierliche Bewegung
}
function drawConfetti() {
    confettis.forEach((confetti, index) => {
        confetti.x += Math.cos(confetti.angle) * confetti.speed;
        confetti.y += Math.sin(confetti.angle) * confetti.speed;
        ctx.beginPath();
        ctx.arc(confetti.x, confetti.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = confetti.color;
        ctx.fill();
        if (confetti.y > canvas.height) {
            confettis.splice(index, 1);
        }
        else if (confetti.y < canvas.height) {
            confettis.splice(index, 1);
        }
        if (confetti.x > canvas.width) {
            confettis.splice(index, 1);
        }
        else if (confetti.x < canvas.width) {
            confettis.splice(index, 1);
        }
    });
    requestAnimationFrame(drawConfetti);
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
drawShapes(); // Starten der Shape-Animation
drawConfetti(); // Starten der Konfetti-Animation
