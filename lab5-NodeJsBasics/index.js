const express = require('express');
const app = express();
const port = 3000;

const routeMessages = require('./routers/api/v1/messages');

app.get("/", (req, res) =>{
    res.send("This is the homepage");
});
app.use("/", routeMessages);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
