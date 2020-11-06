const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Food = require("./food")(sequelize, Sequelize);
db.Ball = require("./ball")(sequelize, Sequelize);
db.Word = require("./word")(sequelize, Sequelize);
db.Mole = require("./mole")(sequelize, Sequelize);

db.User.hasMany(db.Food);
db.Food.belongsTo(db.User);

db.User.hasOne(db.Ball);
db.Ball.belongsTo(db.User);

db.User.hasOne(db.Mole);
db.Mole.belongsTo(db.User);

db.User.hasOne(db.Word);
db.Word.belongsTo(db.User);


module.exports = db;