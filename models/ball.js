module.exports = (sequelize, DataTypes) => {
    return sequelize.define("ball", {
        score: {
            type: DataTypes.INTEGER,
        },
    })
}