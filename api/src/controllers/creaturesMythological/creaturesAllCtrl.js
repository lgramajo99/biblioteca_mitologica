// const { CreaturesMythological, Characters } = require('../../db.js');

// const creaturesAllCtrl = async (req, res) => {
//   try {
//     const creatures = await CreaturesMythological.findAll({ include: Characters });

//     if (creatures.length === 0) {
//       return res.status(404).json({ message: 'No hay criaturas mitológicas en la base de datos.' });
//     }

//     return res.status(200).json(creatures);
//   } catch (error) {
//     return res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message });
//   }
// };

// module.exports = creaturesAllCtrl;
