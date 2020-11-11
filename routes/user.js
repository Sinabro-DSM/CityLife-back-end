const router = require("express")();
const controller = require("../controller/user/controller");
const middleware = require("../middleware/token");

router.post("/signup", controller.signup);
router.post("/login", controller.login);
router.post("/info", middleware, controller.info);
router.get("/", middleware, controller.myPage);

module.exports = router;
