
var api_key = 'RGAPI-f2f36398-6d6d-481e-b8f8-ea40cb67334e'
var summonerSearchBtn = document.querySelector("#summonerSearchBtn");
summonerSearchBtn.addEventListener("click", function (){
  var lolId = document.querySelector("#summoner").value
  var url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + lolId
  $.ajax({
    beforeSend : function(xhr){
      xhr.setRequestHeader("X-Riot-Token", api_key);
      xhr.setRequestHeader("Access-Control-Allow-Origin","https://developer.riotgames.com/");
      xhr.setRequestHeader("Access-Control-Allow-Methods","GET");
      xhr.setRequestHeader("Access-Control-Allow-Headers","origin, x-requested-with, content-type, accept");
  },
  type:"GET",
      url: url,
      jsonp:"callback",
      data: {
              "api_key": api_key
          },
      success: function(response) {
        drawLolIdInfo(response)
      }
  });
})

function drawLolIdInfo(response) {
  console.log(response)
  var accountId = response.id
  document.querySelector("#lolLevel").textContent = response.summonerLevel;
  leagueInfo(accountId)
}

function leagueInfo(accountId) {
  var leagueInfoUrl = 'https://kr.api.riotgames.com//lol/league/v4/entries/by-summoner/' + accountId
  $.ajax({
    beforeSend : function(xhr){
      xhr.setRequestHeader("X-Riot-Token", api_key);
      xhr.setRequestHeader("Access-Control-Allow-Origin","https://developer.riotgames.com/");
      xhr.setRequestHeader("Access-Control-Allow-Methods","GET");
      xhr.setRequestHeader("Access-Control-Allow-Headers","origin, x-requested-with, content-type, accept");
  },
  type:"GET",
      url: leagueInfoUrl,
      jsonp:"callback",
      data: {
              "api_key": api_key
          },
      success: function(response) {
        drawleagueInfo(response)
        document.querySelector("#summonerInfo").classList.remove("hide");
      },
      error: function(response) {
        console.log(response)
      }
  });
}
function drawleagueInfo(response) {
  console.log(response)
  if(!response.length) {
    return;
  }
  var lolIcon = document.querySelector("#lolIcon")
  lolIcon.innerHTML = "";
  document.querySelector("#lolTier").textContent = response[0].tier
  if(response[0].tier === "CHALLENGER") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Challenger.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "GRANDMASTER") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Grandmaster.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "MASTER") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Master.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "DIAMOND") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Diamond.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "PLATINUM") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Platinum.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "GOLD") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Gold.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "SILVER") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Silver.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "BRONZE") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Bronze.png")
    lolIcon.appendChild(lolIconImg);
  } else if(response[0].tier === "IRON") {
    var lolIconImg = document.createElement("img");
    lolIconImg.setAttribute("src", "../img/lol/Iron.png")
    lolIcon.appendChild(lolIconImg);
  }
  document.querySelector("#lolRank").textContent = response[0].rank
  document.querySelector("#lolLeaguePoints").textContent = response[0].leaguePoints + "점"
  var lolTotalRateSpan = document.querySelector("#lolTotalRate");
  var lolTotalRate = response[0].wins + response[0].losses
  lolTotalRateSpan.textContent = lolTotalRate + "전"
  document.querySelector("#lolWins").textContent = response[0].wins + "승"
  document.querySelector("#lolLosses").textContent = response[0].losses + "패"
  document.querySelector("#lolWinningRate").textContent = (response[0].wins / lolTotalRate * 100).toFixed(2) + "%"
}