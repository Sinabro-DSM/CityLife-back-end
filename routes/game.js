const router = require("express")();
const controller = require("../controller/game/controller");
const middleware = require("../middleware/token");

router.post("/rank/money", middleware, controller.game);

module.exports = router;
