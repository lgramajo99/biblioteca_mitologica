const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('creaturesMythological', {
        id: {
            type: DataTypes.INTEGER,
            autoIncremet: true,
            primaryKey: true,
        },
        creature: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    })
}