const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('characters', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        idType: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        characterType: {
            type: DataTypes.ENUM('god', 'creature', 'figure'),
            allowNull: false
        }

    }, { timestamps: false, });
};
