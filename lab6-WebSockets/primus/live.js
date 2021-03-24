const Primus = require('primus');

function go(server){
   let primus = new Primus(server, {/* options */});
   primus.on('connection', (spark)=> {
    console.log("we have a spark");
  });
}
module.exports.go = go;