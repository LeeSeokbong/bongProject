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
var mainModalBg = document.querySelector("#mainModalBg");
var mainModalElem = document.querySelector("#mainModalElem");
// 로그인 버튼 클릭
mainSignInBtn.addEventListener("click", function () {
    var mainModalType = "signIn"
    mainModalBg.classList.remove("hide")
    mainModalElem.classList.add("modalOpen")
    mainModalSign(mainModalType)
})

// 회원가입 버튼
var mainSignUpBtn = document.querySelector("#mainSignUpBtn");
var mainModalBg = document.querySelector("#mainModalBg");
var mainModalElem = document.querySelector("#mainModalElem");
// 회원가입 버튼 클릭
mainSignUpBtn.addEventListener("click", function () {
    var mainModalType = "signUp"
    mainModalBg.classList.remove("hide")
    mainModalElem.classList.add("modalOpen")
    mainModalSign(mainModalType)
})

// 회원가입 & 로그인 모달
function mainModalSign(mainModalType) {
    var mainModalContent = document.querySelector("#mainModalContent");
    mainModalContent.innerHTML = "";
    // 공통 이메일 Elem 생성
    var signEmailElem = document.createElement("div");
    signEmailElem.setAttribute("id", "signNameElem");
    mainModalContent.appendChild(signEmailElem);

    var signEmailText = document.createElement("span");
    signEmailText.textContent = "이메일"
    signEmailElem.appendChild(signEmailText);
    var signEmailInput = document.createElement("input");
    signEmailElem.appendChild(signEmailInput);

    // 공통 패스워드 Elem 생성
    var signPasswordElem = document.createElement("div");
    signPasswordElem.setAttribute("id", "signPasswordElem");
    mainModalContent.appendChild(signPasswordElem);

    var signPasswordText = document.createElement("span");
    signPasswordText.textContent = "비밀번호"
    signPasswordElem.appendChild(signPasswordText);
    var signPasswordInput = document.createElement("input");
    signPasswordElem.appendChild(signPasswordInput);
    //로그인 상황
    if(mainModalType === "signIn") {
        var mainModalBtn = document.querySelector("#mainModalBtn")
        var signInBtn = document.createElement("button");
        signInBtn.textContent = "로그인"
        mainModalBtn.appendChild(signInBtn);
        signInBtn.addEventListener ("click", function () {
            var signEmailValue = signEmailInput.value;
            var signPasswordValue = signPasswordInput.value;
            // 간단한 유효성검사
            if(signEmailValue === "") {
                alert("이메일을 입력해주세요.");
            } else if(signPasswordValue === "") {
                alert("비밀번호를 입력해주세요.");
            } else {
                firebase.auth().signInWithEmailAndPassword(signEmailValue, signPasswordValue)
                .then(function() {
                    alert("로그인 성공!");
                    location.replace("html/home.html");
                })
                .catch(function(e) {
                    alert("에러 :" + e + "라고합니다.");
                    console.log(e)
                    return;
                });
            }
        })
        //회원가입 상황
    } else if (mainModalType === "signUp") {
        // 회원가입때만 패스워드 Elem 생성
        var mainModalBtn = document.querySelector("#mainModalBtn")
        var signUpBtn = document.createElement("button");
        signUpBtn.textContent = "회원가입"
        mainModalBtn.appendChild(signUpBtn);
        signUpBtn.addEventListener ("click", function () {
            var signEmailValue = signEmailInput.value;
            var signPasswordValue = signPasswordInput.value;
            // 간단한 유효성검사
            if(signEmailValue === "") {
                alert("이메일을 입력해주세요.");
            } else if(signPasswordValue === "") {
                alert("비밀번호를 입력해주세요.");
            } else {
                firebase.auth().createUserWithEmailAndPassword(signEmailValue, signPasswordValue)
                .then(function() {
                alert("회원가입 성공!");
                mainModalClose();
                })
                .catch(function(e) {
                    alert("에러");
                    console.log(e)
                    return;
                });
            }
        });
    }
}

// 모달창 닫기
function mainModalClose() {
    mainModalBg.classList.add("hide")
    mainModalElem.classList.remove("modalOpen")
    mainModalElem.classList.add("modalClose")
    mainModalBtn.innerHTML = ""
    setTimeout (function() {
        mainModalElem.classList.remove("modalClose")
    },500);
}

// 모달 X 버튼 클릭 시 클로즈
var mainModalCloseBtn = document.querySelector("#mainModalCloseBtn");
mainModalCloseBtn.addEventListener("click", function() {
    mainModalClose();
})

// 모달 밖 백그라운드 클릭 시 클로즈
mainModalBg.addEventListener("click", function() {
    mainModalClose();
})