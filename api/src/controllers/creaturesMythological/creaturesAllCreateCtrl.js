// const { CreaturesMythological, Characters } = require('../../db.js');

// const creaturesAllCreateCtrl = async (req, res) => {
//     const { creatures } = req.body;
//     try {
//         const newCreatures = await Promise.all(
//             creatures.map(async (creature) => {
//                 const createdCreature = await CreaturesMythological.create(creature);
//                 await Characters.create({
//                     idType: createdCreature.id,
//                     characterType: 'creature',
//                 });
//                 return createdCreature;
//             })
//         );
//         return res.status(201).json({ message: 'Criaturas creadas con éxito.', criaturas: newCreatures });

//     } catch (error) {
//         return res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message });
//     }
// };

// module.exports = creaturesAllCreateCtrl;
