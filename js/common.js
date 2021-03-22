var body = document.querySelector("body")
var toastElem = document.createElement("div");
toastElem.setAttribute("id", "toastElem");
body.appendChild(toastElem)

// 에러 토스트
function errorToast(message) {
    var errorToast = document.createElement("div");
    errorToast.setAttribute("id", "toast")
    errorToast.classList.add("error-toast")
    errorToast.textContent = message;
    toastElem.appendChild(errorToast)
    setTimeout(function(){
        errorToast.classList.add("toastOpen");
        setTimeout(function(){
            errorToast.remove();
        },1000)
    }, 3000)
}
// 성공 토스트
function successToast(message) {
    var successToast = document.createElement("div");
    successToast.setAttribute("id", "toast")
    successToast.classList.add("success-toast")
    successToast.textContent = message;
    toastElem.appendChild(successToast)
    setTimeout(function(){
        successToast.classList.add("toastOpen");
        setTimeout(function(){
            successToast.remove();
        },1000)
    }, 3000)
}