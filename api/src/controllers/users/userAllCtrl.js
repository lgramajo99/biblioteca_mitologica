const { Users } = require('../../db.js');

const userAllCtrl = async (req, res) => {
    try {
        const users = await Users.findAll();
        if (!users.length) { return res.status(404).json({ error: 'No hay usuarios en la base de datos.' }) }
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: 'Hubo un problema en el servidor.', error: error.message })
    }
}

module.exports = userAllCtrl;   