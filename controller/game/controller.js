const { User, Ball, Mole, Word } = require("../../models");
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
      const ballscore = Ball.findOne({
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
        await Ball.create({
          score,
        });
      }
    }
    if (id == 2) {
      const wordscore = Word.findOne({
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
        await Word.create({
          score,
        });
      }
    }
    if (id == 3) {
      const molescore = Mole.findOne({
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
        await Mole.create({
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

const rank = async (req, res) => {
  const id = req.params.id;
  try {
    if (id === 1) {
      const gameRank = await Ball.findAll({
        attributes: ["userId"],
        limit: 3,
        orderby: ["score"],
      });
    }
    if (id === 2) {
      const gameRank = await Word.findAll({
        attributes: ["userId"],
        limit: 3,
        orderby: ["score"],
      });
    }
    if (id === 3) {
      const gameRank = await Mole.findAll({
        attributes: ["userId"],
        limit: 3,
        orderby: ["score"],
      });
    }
    res.status(200).json(gameRank);
  } catch (err) {
    res.status(404).json({ message: "잘못된 게임" });
  }
};

module.exports = {
  game,
  rank,
};
