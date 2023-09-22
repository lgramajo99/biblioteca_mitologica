const { Characters } = require('../../db.js');

const charactersAllCtrl = async (req, res) => {
    try {
        const characters = findAll()

        if (characters.length) {
            return res.status(404).json({ message: `No hay characters registrados en la base de datos.` })
        }
        return res.status(200).json(characters)

    } catch (error) {
        return res.status(500).json({ message: "Hubo un problema al procesar la solicitud", error: error.message })
    }
}
module.exports = charactersAllCtrl;