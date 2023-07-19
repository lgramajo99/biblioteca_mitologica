const { Op } = require('sequelize');
const { Users } = require('../../db.js');

const userByNameCtrl = async (req, res) => {
    const { name } = req.query;
    try {
        const users = await Users.findAll({
            where: { model: { [Op.iLike]: `%${name}%` } }
        })

        if (!users.lentgh) {
            return res.status(404).json({ message: `Usuarios con el nombre ${name} no identificado.` })
        }

    } catch (error) {

        return res.status(500).json({ message: "Hubo un problema al procesar la solicitud", error: error.message })
    }
}

module.exports = userByNameCtrl;