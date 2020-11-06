module.exports = (sequelize, DataTypes) => {
    return sequelize.define("mole", {
        score: {
            type: DataTypes.INTEGER,
        },
    })
}