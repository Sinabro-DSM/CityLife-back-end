const { User } = require("../../models");

const lotto = async (req, res) => {
  const { lotto } = req.body;
  const token = req.decoded.userId;
  try {
    const user = await User.findOne({
      where: { userId: token },
    });
    if (user.money < 300) {
      throw new Error();
    }
    await user.increment({ money: lotto - 300 });
    res.status(200).json({
      message: "성공",
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({
      message: "잔액이 부족합니다.",
    });
  }
};

module.exports = {
  lotto,
};
