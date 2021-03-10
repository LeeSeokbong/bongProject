var database = firebase.database();
var btn = document.querySelector("#test");
btn.onclick = function () {
    console.log("hihi");
    var dbRefObject = firebase.database().ref();
    dbRefObject.child("object").push({"id": "1"});
    database.ref('test/1/').set({"name": "aaa", "intro": "bbb"})
}
console.log("asdf")