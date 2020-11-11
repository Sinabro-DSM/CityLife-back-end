const { User, Food, Lotto } = require("../../models");
const jwt = require("jsonwebtoken");

const lotto = async (req, res) => {
  const { lotto } = req.body;
  const token = req.decoded.uesrId;
  //const secret = req.app.get("jwt-secret");
  try {
    const user = await User.findOne({
      where: { userId: token },
    });
    //로또 가격 확인후 고치기
    if (user.money < 300) {
      throw new Error();
    }
    await User.increment(
      { money: lotto },
      {
        where: { userId: token },
      }
    );
    res.status(200).json({
      message: "성공",
    });
  } catch (err) {
    res.status(409).json({
      message: "잔액이 부족합니다.",
    });
  }
};

module.exports = {
  lotto,
};
