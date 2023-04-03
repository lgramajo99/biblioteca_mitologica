const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('historia', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        historia: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
};
