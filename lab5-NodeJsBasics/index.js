const express = require('express');
const app = express();
const port = 3000;//port for server

const routeMessages = require('./routers/api/v1/messages');
const pug = require('pug');


app.set('view engine', 'pug'); //here do we specify that we use the view template engine template called pug 
app.get("/", (req, res) =>{ //https://blog.bitsrc.io/how-to-build-a-node-application-using-a-pug-template-7319ab1bba69 (I just post here a link that helped me)
    res.render('index');
});
app.use("/api/v1/messages", routeMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
