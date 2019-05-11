const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

/* canvas에는 프레임의 사이즈와, 
그릴 수 있는 pixel의 사이즈를 지정해줘야함 */
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c;";
ctx.lineWidth = 2.5; // 선 두께

let painting = false;

function stopPainting(event) {
  painting = false;
}

function startPainting() {
  painting = true;
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

function onMouseDown(event) {
  // 마우스 클릭을 하면 그리는 것을 true로 시작
  painting = true;
  console.log("mousedown(클릭 시작) : " + event);
}

/* function onMouseUp(event) {
  // 마우스 클릭을 떼면 그리는 것을 false로 멈춤
  stopPainting();
  console.log("mouseup(클릭 해제) : " + event);
} */

function onMouseLeave(event) {
  // 마우스가 canvas에서 벗어나면 그리는것을 false로 멈춤
  stopPainting();
  console.log("마우스 벗어남 : " + event);
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
