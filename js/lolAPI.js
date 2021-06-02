
var api_key = 'RGAPI-39c81960-071d-4d9c-a9c8-4ef8be116037'
var lolId = 'ndbg'
console.log(api_key)
var sohwan = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + lolId 
console.log(sohwan)
console.log(sohwan.id)


// function ajax() {
//   fetch("https://yts.mx/api/v2/list_movies.json").then(function(response) {
//     console.log(response)
//   })
// }
// ajax();
// $.ajax({
//   url: sohwan,
//   type: 'GET',
//   dataType: 'json',
//   data: {
//       "api_key": api_key,
//   },
//   success: function(res){
//       console.log(res);
//   },
//   error: function(req, stat, err){
//       console.log(err);
//   },
// });
$.ajax({
  headers: {
    "Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
"Access-Control-Max-Age": 3600,
"Access-Control-Allow-Headers": "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
    "X-Riot-Token": api_key,
    "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers" : "Content-Type, Authorization",
  "Access-Control-Max-Age": "3600",
  "Access-Control-Allow-Headers": "x-requested-with"},
    type:"GET",
    url:sohwan,
    dataType: 'json',
    data: {
            "api_key": api_key,
        },
    success: function(data) {
      console.log(data)
    }
});

// fetch(sohwan + "?api_key=" + api_key, {
//     headers: { 
//           "X-Riot-Token": api_key,
//     "Access-Control-Allow-Origin" : "*",
//   "Access-Control-Allow-Headers" : "Content-Type, Authorization",
//   "Access-Control-Max-Age": "3600",
//   "Access-Control-Allow-Headers": "x-requested-with"},
//      }
// )
// .then(res => res.json())
// .then(data => console.log(JSON.stringify(data, null, '\t')));


// $.ajax({
//     type: 'GET',
//     crossDomain: true,
//     dataType: 'jsonp',
//     url: sohwan,
//     success: function(jsondata){
//         console.log(jsondata)
//     }
//  })
    
// fetch(sohwan)
// .then(res => res.json())
// .then(data => console.log(data));
