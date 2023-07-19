const { HistoricalFigures, Characters } = require('../../db.js');

const figuresAllCtrl = async (req, res) => {
    try {
        const figures = await HistoricalFigures.findAll({ include: Characters });

        if (!figures.length) {
            return res.status(404).json({ message: 'No hay figuras historicas creadas en la base de datos.' });
        }
        return res.status(200).json(figures);

    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message });
    }
};

module.exports = figuresAllCtrl;
