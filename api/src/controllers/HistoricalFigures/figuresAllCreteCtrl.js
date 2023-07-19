const { HistoricalFigures, Characters } = require('../../db.js');

const figuresAllCreateCtrl = async (req, res) => {
    const { figures } = req.body;
    try {
        const newFigures = await Promise.all(
            figures.map(async (figure) => {
                const createdFigure = await HistoricalFigures.create(figure);
                await Characters.create({
                    idType: createdFigure.id,
                    characterType: 'figure',
                });
                return createdFigure;
            })
        );
        return res.status(201).json({ message: 'Figuras historicas creadas con exito.', Figuras: newFigures, });

    } catch (error) {
        return res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message });
    }
};

module.exports = figuresAllCreateCtrl;
