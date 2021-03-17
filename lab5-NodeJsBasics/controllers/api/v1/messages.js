
const getAll = (req, res) => {
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
  }

  const getId =( req,res) => {
    const id = req.params.id;
    res.json({
        "message": `GETTING message with ID ${id}`
    });
  }

  const post = (req,res) =>{
    res.json({"message":"POSTING  a new message for user Pikachu"});
}
    const update = (req,res) =>{
        const id = req.params.id;
        res.json({
            "message":`UPDATING a message with id ${id}`
        });
    }
const remove = (req,res)=>{
    const id = req.params.id;
    res.json({
        "message":`DELETING a message with id ${id}`
    }); 
}
  module.exports.getAll = getAll;
  module.exports.getId = getId;
  module.exports.post = post;
  module.exports.update = update;
  module.exports.remove = remove;