let primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });
primus.on("data",(data)=>{ 
  let team = data.team;
  let score = data.score;
  let krakens = document.querySelector(`.${team}`).innerText = score;
});