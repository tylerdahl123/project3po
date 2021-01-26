const router = require("express").Router();
const eventController = require("../../controllers/eventController");


router.route("/")

.post(eventController.create);


router.route("/:userName")
.get(eventController.findAll)


module.exports=router; 