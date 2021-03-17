const express = require("express"); 
const router = express.Router();
const messageController = require("../../../controllers/api/v1/messages");

router.get("/",(req, res) => {
    console.log(req.params);
    console.log(req.query.user);//it posts your name here
    if(req.query.user){
        const username = req.query.user;
        res.json({
            "message":`GETTING message for username ${username}`
        });
    }else{

        res.json({
            "message": "GETTIG messages"
        });
    }
  });
router.get("/:id", (req,res) => {
    const id = req.params.id;
    res.json({
        "message": `GETTING message with ID ${id}`
    });
})
router.post("/", (req,res) =>{
    res.json({"message":"POSTING  a new message for user Pikachu"});
})
router.put("/:id", (req,res) =>{
    const id = req.params.id;
    res.json({
        "message":`UPDATING a message with id ${id}`
    });
})
router.delete("/:id",(req,res)=>{
    const id = req.params.id;
    res.json({
        "message":`DELETING a message with id ${id}`
    }); 
})
module.exports= router;
