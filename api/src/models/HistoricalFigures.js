const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('historicalFigures', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primarykey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}