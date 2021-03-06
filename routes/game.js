const router = require("express")();
const controller = require("../controller/game/controller");
const middleware = require("../middleware/token");

router.post("/rank/money", middleware, controller.game);
router.get("/rank/:id", middleware, controller.rank);

module.exports = router;
