module.exports = (sequelize, DataTypes) => {
    return sequelize.define("word", {
        score: {
            type: DataTypes.INTEGER,
        },
    })
}