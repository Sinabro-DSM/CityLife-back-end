const router = require("express")();
const user = require("./user");
const food = require("./food");
const lotto = require("./lotto");
const game = require("./game");

router.use("/user", user);
router.use("/food", food);
router.use("/lotto", lotto);
router.use("/game", game);

module.exports = router;
