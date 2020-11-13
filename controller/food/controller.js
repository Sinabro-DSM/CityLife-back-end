const { User, Food } = require("../../models");

const showMoney = async (req, res) => {
  const userId = req.decoded.userId;
  try {
    const user = await User.findOne({ where: { userId } });
    res.status(200).json({ money: user.money });
  } catch (err) {
    res.status(404).json({ message: "유저를 찾을수 없음" });
  }
};

const food = async (req, res) => {
  const { foodid, foodmoney } = req.body;
  const token = req.decoded.userId;
  try {
    const user = await User.findOne({
      where: { userId: token },
    });
    if (user.money < foodmoney) {
      throw new Error();
    }
    for (let i = 0; i < foodid.length; i++) {
      await Food.create({
        food: foodid[i],
        userId: token,
      });
    }
    await user.increment({ money: foodmoney * -1 });
    res.status(200).json({
      message: "결제 완료",
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({
      message: "잔액이 부족합니다",
    });
  }
};

const eatFood = async (req, res) => {
  const token = req.decoded.userId;
  const id = req.params.id;
  try {
    const food = await Food.findOne({
      where: { userId: token, food: id },
    });
    if (!food) throw new Error();
    if (id < 5) {
      await User.increment(
        { weight: 10 },
        {
          where: { userId: token },
        }
      );
    } else {
      await User.increment(
        { weight: -10 },
        {
          where: { userId: token },
        }
      );
    }
    await food.destroy();
    res.status(200).json({
      message: "먹기 성공",
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: "음식이 없음",
    });
  }
};

module.exports = {
  showMoney,
  food,
  eatFood,
};
