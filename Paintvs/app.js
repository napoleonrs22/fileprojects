const canvas =document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const colors =document.getElementsByClassName("jsColor");
const range =document.getElementById("jsRange");
const mode =document.getElementById('jsMode');



const INITIAL_COLOR ="2c2c2c";
const Canvassize=700;
canvas.heigth = Canvassize;
canvas.width = Canvassize;

ctx.lineWidth =2.0;
ctx.fillStyle=INITIAL_COLOR;
ctx.strokeStyle=INITIAL_COLOR;

//ctx.fillRect(100,100,300,450)

let painting = false;
let filling = false;

function stopPainting(event){
  painting = false;
}

function startPainting(event){
  painting = true;
}
function onMouseMove(event){
  x =event.offsetX;
  y =event.offsetY;
  if (!painting) {
    console.log("создаем линии",x , y);
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    console.log("рисуем  линии",x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
  }


}

function onMouseDown(event){
  painting = true;

}
function HandleColorClick(event){
  const color =event.target.style.backgroundColor;
  ctx.strokeStyle =color;

}
function handleRangeChange(event){
  const rangevalue =event.target.value;
  ctx.lineWidth =rangevalue;
  ctx.fillStyle=color;
}

function handleModeClick(event){
  if (filling=true) {
    filling=false;
    mode.innerText="Заливка";
  }
  else{
    filling = true;
    mode.innerText="Рисование";

  }
}

function handleCanvasClick(){
  ctx.fillRect(0,0,Canvassize,Canvassize)
}

if(canvas){
  canvas.addEventListener('mousemove',onMouseMove);
  canvas.addEventListener('mousedown',onMouseDown);
  canvas.addEventListener('mouseup',stopPainting);
  canvas.addEventListener('mouseleave',stopPainting);
  canvas.addEventListener('click',handleCanvasClick);
}

Array.from(colors).forEach(color=>color.addEventListener("click",HandleColorClick));

if(range){
  range.addEventListener('input',handleRangeChange)
}


if(mode){
  mode.addEventListener('click',handleModeClick)
}