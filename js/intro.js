var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
        // 이름 저장이 없을 때
        if(user.displayName === null){
            var whatName = document.querySelector("#whatName");
            var signNameInput = document.querySelector("#signNameInput");
            var nameSave = document.querySelector("#nameSave")
            // 최초 진입 시 페이드 인
            whatName.classList.add("open");
            nameSave.addEventListener("click", function(){
                // 이름 저장 후 페이드 아웃
                whatName.classList.add("close");
                // 이름 저장 후 div 삭제
                setTimeout(function(){
                    whatName.remove();
                }, 3000)
            user.updateProfile({
                displayName: signNameInput.value
            })
        // 이름 저장 후 인사 한 번
        var welcomeName = document.querySelector("#welcomeName");
        welcomeName.classList.add("open");
        var welcomeHello = document.querySelector("#welcomeHello");
        welcomeHello.textContent = signNameInput.value;
        //인사 끝
        setTimeout(function(){
            welcomeName.classList.add("close");
            // 인사 div 삭제
            setTimeout(function(){
                welcomeName.remove();
                location.replace("../html/home.html");
            },3000)
        },3000)
    })
        } else {
            // 이름 있으면 그냥 들여보내~
            location.replace("../html/home.html");
        }
        var test = document.querySelector("#test");
        test.textContent = user.displayName
        console.log(user)
    } else {
    alert("다시 로그인하세요.")
    location.replace("../index.html");
    }
});