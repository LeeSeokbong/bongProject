    var canvas = document.querySelector("#canvas");
    var canvasSizeSaveBtn = document.querySelector("#canvasSizeSaveBtn");

    canvasSizeSaveBtn.addEventListener("click", function(){
        var canvasWidthValue = document.querySelector("#canvasWidth").value;
        var canvasHeightValue = document.querySelector("#canvasHeight").value;
        canvas.style.width = canvasWidthValue + "px";
        canvas.style.height = canvasHeightValue + "px";
    })
   