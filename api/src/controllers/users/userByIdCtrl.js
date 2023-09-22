const { Users } = require('../../db.js');

const userByIdCtrl = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await Users.findOne({ where: { id } })

        if (!user) {
            return res.status(404).json({ message: "Usuario no identificado" })
        }
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: "Hubo un problema al procesar la solicitud", error: error.message })
    }
}

module.exports = userByIdCtrl;