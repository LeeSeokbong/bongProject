var dbRefObject = firebase.database();
var database = firebase.database();
var dbRef = firebase.database().ref('game');
var userName = document.querySelector("#userDisplayName")
var alacrityGameElem = document.querySelector("#alacrityGameElem");
var randomNum = [];
var answerNum = [];
var k = 0;
drawGame()
rankingData()

function rankingData() {
    dbRef.orderByChild("time").once('value').then((snapshot) => {
    if (snapshot.exists()) {
        ranking(snapshot.val())
        console.log(snapshot.val());
    } else {
        console.log("error");
    }
    });
}

function drawGame() {
    for(var i = 0; i < 25; i++) {
        randomNum.push(Math.floor(Math.random()*25)+1); 
        for(var j = 0; j < i; j++) {
            if (randomNum[i] === randomNum[j]) {
                randomNum.pop();
                i--;  
            }
        }
    }

    for (var i = 1; i < 26; i++) {
        answerNum.push(i)
    }


    for(var i = 0; i < 25; i++) {
        var alacrityDiv = document.createElement("div");
        alacrityDiv.classList.add("alacrityDiv");
        alacrityDiv.setAttribute("data-num", randomNum[i]);
        alacrityDiv.setAttribute("value", randomNum[i]);
        alacrityDiv.setAttribute("onclick", 'clickNumDiv(this, +this.dataset.num)')
        alacrityDiv.textContent = randomNum[i];
        alacrityGameElem.appendChild(alacrityDiv);
    }
}

function clickNumDiv(numElem, numDiv){
    if(k === 2) {
        stop();
    }
    for(k; k < 25; k) {
        if(numDiv === answerNum[k]) {
            numElem.style.border = "none";
            numElem.textContent = "";
            return k ++
        } else {
            return k
        }
    }
}

var timeElapsed = 0;
var timerID = -1;
var time = document.querySelector("#time")
time.textContent = 0
function tick() {
    timeElapsed++
    document.getElementById("time").innerHTML = timeElapsed;
}

function start() {
    timeElapsed = -1;
    document.querySelector("#alacrityGameElem").classList.remove("hide")
    document.querySelector("#startTimer").classList.add("hide")
    document.querySelector("#gameRanking").classList.add("hide")
    if(timerID == -1){
        timerID = setInterval(tick, 100);
    }
}

function stop() {
    if(timerID != -1){
        clearInterval(timerID)
        timerID = -1
    }
    document.querySelector("#alacrityGameElem").classList.add("hide")
    document.querySelector("#startTimer").classList.remove("hide")
    document.querySelector("#gameRanking").classList.remove("hide")
    dbRefObject.ref('game/').push({"name": userName.dataset.name, "time": time.textContent});
    alacrityGameElem.innerHTML = ""
    drawGame()
    rankingData()
    k = 0;
}
function reset() {
    stop();
    timeElapsed = -1;
    tick();
}

function ranking(data) {
    console.log(data)
    var gameRankingBox = document.querySelector("#gameRankingBox");
    var gameNameBox = document.querySelector("#gameNameBox");
    var gameTimeBox = document.querySelector("#gameTimeBox");
    var dbTestRef = database.ref('game')
    gameRankingBox.innerHTML = "";
    gameNameBox.innerHTML = "";
    gameTimeBox.innerHTML = "";
    for(var i = 1; i < 11; i++) {
        var rankingDiv = document.createElement("div")
        rankingDiv.textContent = [i]+"등!"
        gameRankingBox.appendChild(rankingDiv)
    }
    dbTestRef.orderByChild("time").limitToFirst(10).on('child_added', function(data){
        var nameData = document.createElement("div");
        nameData.textContent = data.val().name
        gameNameBox.appendChild(nameData)
        var timeData = document.createElement("div");
        timeData.textContent = data.val().time
        gameTimeBox.appendChild(timeData)
    })
}