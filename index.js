var database = firebase.database();
var btn = document.querySelector("#test");
btn.onclick = function () {
    console.log("hihi");
    var dbRefObject = firebase.database().ref();
    dbRefObject.child("object").push({"id": "3"});
    database.ref('test/2/').set({"name": "아하하", "intro": "오호호"})
}

// 로그인 버튼
var mainSignInBtn = document.querySelector("#mainSignInBtn");
var mainModal = document.querySelector("#mainModal");
var mainModalBg = document.querySelector("#mainModalBg");
var mainModalElem = document.querySelector("#mainModalElem");
var mainModalCloseBtn = document.querySelector("#mainModalCloseBtn");
mainSignInBtn.addEventListener("click", function () {
    mainModalBg.classList.remove("hide")
    mainModalElem.classList.add("modalOpen")
})

function mainModalClose() {
    mainModalBg.classList.add("hide")
    mainModalElem.classList.remove("modalOpen")
    mainModalElem.classList.add("modalClose")
    setTimeout (function() {
        mainModalElem.classList.remove("modalClose")
    },500);
}

mainModalCloseBtn.addEventListener("click", function() {
    mainModalClose();
})

mainModalBg.addEventListener("click", function() {
    mainModalClose();
})