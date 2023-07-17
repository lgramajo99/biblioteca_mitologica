const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 50],
            },
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "El campo usuario no puede estar vacío",
                },
            },
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        urlVerify: {
            type: DataTypes.VIRTUAL(DataTypes.UUID),
        },
    });
};
