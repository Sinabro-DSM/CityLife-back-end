const { User } = require("../../models");

const signup = async (req, res) => {
  // const userId = req.body.userId;
  // const password = req.body.password;
  // const nickname = req.body.nickname;

  const { userId, password, nickname } = req.body;
  try {
    const user = await User.findOne({
      where: {
        nickname,
      },
    });
    if (user) {
      res.status(410).json({
        message: "닉네임 중복",
      });
    }
    await User.create({
      userId,
      password,
      nickname,
    });
    res.status(200).json({
      message: "성공",
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({
      message: "아이디 중복",
    });
  }
};

const login = async (req, res) => {
  const { userId, password } = req.body;
};

module.exports = {
  signup,
};
