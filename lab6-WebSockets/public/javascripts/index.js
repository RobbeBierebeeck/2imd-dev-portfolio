let primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

const submit = document.querySelector(".submit");

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const dropdown = document.querySelector("#teams").value;
    const score = document.querySelector("#score").value;
    console.log(score);
    console.log(dropdown);
    primus.write({
            score: score,
            team: dropdown
    });
   
})