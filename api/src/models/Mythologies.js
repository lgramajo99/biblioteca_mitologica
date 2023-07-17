const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('mythologies', {
        id: {
            type: DataTypes.INTEGER,
            autoIncremet: true,
            primaryKey: true,
        },
        mythologyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}