const Primus = require('primus');

function go(server){
   let primus = new Primus(server, {/* options */});
   primus.on('connection', (spark)=> {
    console.log("we have a spark");

    spark.on('data',(data)=>{
        console.log(data);
        primus.write(data);
    });
  });
}
module.exports.go = go;