const canvas =document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const colors =document.getElementsByClassName("jsColor");
const range =document.getElementById("jsRange");

canvas.heigth = 500;
canvas.width = 500;

ctx.lineWidth =2.0;
ctx.strokeStyle='#2c2c2c';


let painting = false;

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
}


if(canvas){
  canvas.addEventListener('mousemove',onMouseMove);
  canvas.addEventListener('mousedown',onMouseDown);
  canvas.addEventListener('mouseup',stopPainting);
  canvas.addEventListener('mouseleave',stopPainting);

}

Array.from(colors).forEach(color=>color.addEventListener("click",HandleColorClick));

if(range){
  range.addEventListener('input',handleRangeChange)
}