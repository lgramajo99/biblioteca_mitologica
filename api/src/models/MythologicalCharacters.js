const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('mythologicalCharacters', {
        id: {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primarykey: true
        },
        idGodsDeities: {
            type: DataTypes.INTEGER,
            references: {
                model: 'godsDeities',
                key: 'id',
            },
        },
        idMythologicalCreatures: {
            type: DataTypes.INTEGER,
            references: {
                model: 'mythologicalCreatures',
                key: 'id',
            },
        },
    })
}