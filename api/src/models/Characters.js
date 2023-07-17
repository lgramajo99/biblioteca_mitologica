const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('characters', {
        id: {
            type: DataTypes.INTEGER,
            autoIncremet: true,
            primaryKey: true,
        }
    })
}