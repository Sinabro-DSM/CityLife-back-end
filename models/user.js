module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    userId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    character: {
      type: DataTypes.INTEGER,
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
  });
};
