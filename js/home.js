// 로그아웃
var mainLogout = document.querySelector("#mainLogout");
// 회원가입 버튼 클릭
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



var signNameInput = document.querySelector("#signNameInput");
var user = firebase.auth().currentUser;
var nameSave = document.querySelector("#nameSave")
nameSave.addEventListener("click", function(){
    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: signNameInput.value
}).then(function() {
    console.log("성공")
  console.log(user.displayName)
  console.log(user.email)
}).catch(function(error) {
    console.log("실패")
    console.log(user.displayName)
    console.log(user.email)
});
})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
                             var test = document.querySelector("#test");
                             console.log(user)
          }
    } else {
      console.log("없음")
    }
  });


