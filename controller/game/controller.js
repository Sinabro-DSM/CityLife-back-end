const { User, Food, Lotto, Game } = require("../../models");
const jwt = require("jsonwebtoken");

const game = async (req, res) => {
  const { game } = req.body;
  const token = req.decoded.uesrId;
  //const secret = req.app.get("jwt-secret");
  const user = await User.findOne({
    where: { userId: token },
  });
  await User.increment(
    { money: 300 },
    {
      where: { userId: token },
    }
  );

  try {
    if (id == 1) {
      const ballscore = ball.findOne({
        where: { userId: score },
      });
      if (score) {
        await ballscore.update(
          {
            blalscore: game,
          },
          {
            where: { userId: token },
          }
        );
      } else {
        await ballscore.create({
          score,
        });
      }
    }
    if (id == 2) {
      const wordscore = word.findOne({
        where: { userId: score },
      });
      if (score) {
        await wordscore.update(
          {
            score: game,
          },
          {
            where: { userId: token },
          }
        );
      } else {
        await wordscore.create({
          score,
        });
      }
    }
    if (id == 3) {
      const molescore = mole.findOne({
        where: { userId: score },
      });
      if (score) {
        await molescore.update(
          {
            score: game,
          },
          {
            where: { userId: token },
          }
        );
      } else {
        await molescore.create({
          score,
        });
      }
      res.status(200).json({
        message: "성공",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "유저를 찾을 수 없습니다.",
    });
  }
};

module.exports = {
  game,
};
