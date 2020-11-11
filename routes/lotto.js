const router = require("express")();
const controller = require("../controller/lotto/controller");
const middleware = require("../middleware/token");

router.post("/", middleware, controller.lotto);

module.exports = router;
