const express = require("express"); 
const router = express.Router();

router.get("/api/v1/messages",(req, res) => {
    res.send('Hello World!');
  });

module.exports= router;
