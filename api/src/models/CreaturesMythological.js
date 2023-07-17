const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('creaturesMythological', {
        id: {
            type: DataTypes.INTEGER,
            autoIncremet: true,
            primaryKey: true,
        }
    })
}