const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('mythologicalCharacters', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primarykey: true
        }
    })
}