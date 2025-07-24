// Efecto typing
const name = "Carlos Daniel Arce Camacho";
let i = 0;

function typingEffect() {
  if (i < name.length) {
    document.getElementById("typed-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
window.onload = typingEffect;

// Canvas con puntos en matriz ordenada
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
let width, height;
let points = [];
const spacing = 40; // Espacio entre puntos
const radius = 80;  // Distancia de iluminación

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  generateGrid();
}
window.addEventListener("resize", resize);
resize();

function generateGrid() {
  points = [];
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      points.push({ x, y });
    }
  }
}

let mouse = { x: null, y: null };
document.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function draw() {
  ctx.clearRect(0, 0, width, height);
  points.forEach(p => {
    const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
    const opacity = dist < radius ? 1 - dist / radius : 0.1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();