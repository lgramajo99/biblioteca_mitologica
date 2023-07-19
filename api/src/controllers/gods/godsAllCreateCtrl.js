const { GodDeities, Characters } = require('../../db.js');

const godsAllCreateCtrl = async (req, res) => {
    const { gods } = req.body;
    try {
        const createdGods = await GodDeities.bulkCreate(gods);
        const characterData = createdGods.map((god) => ({
            idType: god.id,
            characterType: 'god',
        }));
        await Characters.bulkCreate(characterData);

        return res.status(201).json({
            message: 'Dioses y/o deidades creados exitosamente.',
            dioses: createdGods,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un problema en el servidor.',
            error: error.message,
        });
    }
};

module.exports = godsAllCreateCtrl;
