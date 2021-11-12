const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c;";
ctx.lineWidth = 2.5;

canvas.width = 500;
canvas.height = 500;

let painting = false;

const colors = document.querySelectorAll(".controls_color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", (e) => {
    ctx.strokeStyle = e.target.style.backgroundColor;
  });
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});

function onChangeRange(val) {
  const range = val;
  ctx.lineWidth = range;
}

function stopPainting(event) {
  painting = false;
}

function startPainting() {
  painting = true;
}

function fillPainting() {
  painting = true;
  ctx.fill();
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // path : 선

    // path를 만들면 x,y좌표로 path를 옮긴다.
    // 즉 마우스를 움직일 때마다 path를 생성한다.
    ctx.beginPath();

    ctx.moveTo(x, y); // 시작점
  } else {
    // x부터 y까지 line을 만들기
    ctx.lineTo(x, y); // 목표지점 설정
    ctx.stroke(); // 선 그리기
  }
}

function onMouseDown() {
  painting = true;
}

function onMouseLeave() {
  stopPainting();
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
