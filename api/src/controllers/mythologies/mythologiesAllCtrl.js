const { Mythologies } = require('../../db.js');

const mythologiesAllCtrl = async (req, res) => {
    try {
        const mythologies = await Mythologies.findAll();

        if (!mythologies.length) {
            return res.status(404).json({ message: `No hay mitologias en la base de datos` })
        }

        return res.status(200).json(mythologies)

    } catch (error) {
        return res.status(500).json({ message: "Hubo un problema al procesar la solicitud", error: error.message })
    }
}

module.exports = mythologiesAllCtrl;