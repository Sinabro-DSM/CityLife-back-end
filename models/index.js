const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Food = require("./food")(sequelize, Sequelize);
db.Ball = require("./ball")(sequelize, Sequelize);
db.Word = require("./word")(sequelize, Sequelize);
db.Mole = require("./mole")(sequelize, Sequelize);

db.User.hasMany(db.Food, { foreignKey: "userId", targetKey: "userId" });
db.Food.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasOne(db.Ball, { foreignKey: "userId", targetKey: "userId" });
db.Ball.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasOne(db.Mole, { foreignKey: "userId", targetKey: "userId" });
db.Mole.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasOne(db.Word, { foreignKey: "userId", targetKey: "userId" });
db.Word.belongsTo(db.User, { foreignKey: "userId" });

module.exports = db;
