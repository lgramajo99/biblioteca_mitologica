const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('godDeities', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primarykey: true
        }
    })
}