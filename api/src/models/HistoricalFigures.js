const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('historicalFigures', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primarykey: true
        }
    })
}