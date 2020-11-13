const router = require("express")();
const controller = require("../controller/food/controller");
const middleware = require("../middleware/token");

router.get("/", middleware, controller.showMoney);
router.post("/", middleware, controller.food);
router.get("/:id", middleware, controller.eatFood);

module.exports = router;
