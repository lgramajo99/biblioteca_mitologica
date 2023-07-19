const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('mythologicalCharacters', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    })
}