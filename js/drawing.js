var canvas = document.querySelector("#canvas");
var canvasSizeSaveBtn = document.querySelector("#canvasSizeSaveBtn");

canvasSizeSaveBtn.addEventListener("click", function(){
    var canvasWidthValue = document.querySelector("#canvasWidth").value;
    var canvasHeightValue = document.querySelector("#canvasHeight").value;
    canvas.setAttribute("width", canvasWidthValue);
    canvas.setAttribute("height", canvasHeightValue);
})

context = canvas.getContext('2d'); 
context.lineWidth = 2; // 선 굵기를 2로 설정
context.strokeStyle = "black";

canvasPointSaveBtn.addEventListener("click", function(){
    var canvasPoint = document.querySelector("#canvasPoint");
    context.lineWidth = canvasPoint.value;
})

canvasColorSaveBtn.addEventListener("click", function(){
    var canvasColor = document.querySelector("#canvasColor");
    context.strokeStyle = "#" + canvasColor.value;
})

// 마우스 리스너 등록. e는 MouseEvent 객체
canvas.addEventListener("mousemove", function (e) { move(e) }, false);
canvas.addEventListener("mousedown", function (e) { down(e) }, false);
canvas.addEventListener("mouseup", function (e) { up(e) }, false);
canvas.addEventListener("mouseout", function (e) { out(e) }, false);

 // 드래깅동안, 처음 마우스가 눌러진 좌표
var drawing=false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) { drawing = false; }

var canvasDownload = document.querySelector("#canvasDownload");
canvasDownload.addEventListener("click", function(event){
    event.target.href = canvas.toDataURL("image/png")
})


    
