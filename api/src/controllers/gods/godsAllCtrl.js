const { GodDeities, Characters } = require('../../db.js');

const godsAllCtrl = async (req, res) => {
    try {
        const gods = await GodDeities.findAll({ include: Characters });

        if (!gods.length) {
            return res.status(404).json({ message: 'No hay dioses o deidades en la base de datos.' });
        }

        return res.status(200).json(gods);
    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message });
    }
};

module.exports = godsAllCtrl;
