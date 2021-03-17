const express = require("express"); 
const router = express.Router();
const messageController = require("../../../controllers/api/v1/messages");

router.get("/", messageController.getAll);

router.get("/:id", messageController.getId);

router.post("/", messageController.post);
router.put("/:id", messageController.update);
router.delete("/:id",messageController.remove);
//here do we export our file
module.exports= router;
