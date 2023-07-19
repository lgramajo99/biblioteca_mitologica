const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('godDeities', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
}