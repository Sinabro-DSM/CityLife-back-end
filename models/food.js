module.exports = (sequelize, DataTypes) => {
  return sequelize.define("food", {
    food: {
      type: DataTypes.INTEGER,
    },
  });
};
