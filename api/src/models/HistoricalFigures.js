const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('historicalFigures', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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