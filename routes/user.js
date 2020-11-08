const router = require("express")();
const controller = require("../controller/user/controller");

router.post("/signup", controller.signup);

module.exports = router;
