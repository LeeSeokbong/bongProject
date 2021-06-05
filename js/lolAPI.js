
var api_key = 'RGAPI-86039d0b-9734-40ca-8457-8171006e3ded'
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
  document.querySelector("#lolId").textContent = response.name;
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
      }
  });
}
function drawleagueInfo(response) {
  console.log(response)
  document.querySelector("#lolTier").textContent = response[0].tier
  document.querySelector("#lolLank").textContent = response[0].lank
  document.querySelector("#lolLeaguePoints").textContent = response[0].leaguePoints + "점"
  var lolTotalRateSpan = document.querySelector("#lolTotalRate");
  var lolTotalRate = response[0].wins + response[0].losses
  lolTotalRateSpan.textContent = lolTotalRate + "전"
  document.querySelector("#lolWins").textContent = response[0].wins + "승"
  document.querySelector("#lolLosses").textContent = response[0].losses + "패"
  document.querySelector("#lolWinningRate").textContent = (response[0].wins / lolTotalRate * 100).toFixed(2) + "%"
}