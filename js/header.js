var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
        var userDisplayName = document.querySelector("#userDisplayName");
        userDisplayName.textContent = user.displayName + "님 환영합니다 : )";
        userDisplayName.setAttribute("data-name", user.displayName)
    } else {
        //정보가 없으면 강제 로그아웃
        firebase.auth().signOut()
            .then(function() {
                alert("로그아웃");
                location.replace("../index.html");
        })
    }
})

var mainLogout = document.querySelector("#mainLogout");
// 로그아웃 버튼 클릭
mainLogout.addEventListener("click", function () {
    firebase.auth().signOut()
        .then(function() {
            alert("로그아웃");
            location.replace("../index.html");
        })
        .catch(function(e) {
            alert("에러");
            console.log(e)
            return;
        });
})