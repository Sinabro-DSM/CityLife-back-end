const { User, Ball, Mole, Word } = require("../../models");
const jwt = require("jsonwebtoken");

const game = async (req, res) => {
  const { score, id } = req.body;
  const token = req.decoded.userId;
  const user = await User.findOne({
    where: { userId: token },
  });
  try {
    await user.increment({ money: 300 });
    if (id == 1) {
      const ballscore = await Ball.findOne({
        where: { userId: token },
      });
      if (ballscore) {
        ballscore.score = score;
        await ballscore.save();
      } else {
        await Ball.create({
          score,
          userId: token,
        });
      }
    }
    if (id == 2) {
      const wordscore = await Word.findOne({
        where: { userId: token },
      });
      if (wordscore) {
        wordscore.score = score;
        await wordscore.save();
      } else {
        await Word.create({
          score,
          userId: token,
        });
      }
    }
    if (id == 3) {
      const molescore = await Mole.findOne({
        where: { userId: token },
      });
      if (molescore) {
        molescore.score = score;
        await molescore.save();
      } else {
        await Mole.create({
          score,
          userId: token,
        });
      }
    }
    res.status(200).json({
      message: "성공",
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      message: "유저를 찾을 수 없습니다.",
    });
  }
};

const rank = async (req, res) => {
  const id = req.params.id;
  let gameRank;
  try {
    if (id == 1) {
      gameRank = await Ball.findAll({
        order: [["score", "DESC"]],
        attributes: ["userId"],
        limit: 3,
      });
    }
    if (id == 2) {
      gameRank = await Word.findAll({
        order: [["score", "DESC"]],
        attributes: ["userId"],
        limit: 3,
      });
    }
    if (id == 3) {
      gameRank = await Mole.findAll({
        order: [["score", "DESC"]],
        attributes: ["userId"],
        limit: 3,
      });
    }
    res.status(200).json(gameRank);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({ message: "잘못된 게임" });
  }
};

module.exports = {
  game,
  rank,
};
