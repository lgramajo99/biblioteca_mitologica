require("dotenv").config({ path: '../.env' });

const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`, {
  logging: false,
  native: false,
  define: {
    freezeTableName: true
  }
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    const model = require(path.join(__dirname, "/models", file))(sequelize);
    if (model) { sequelize.models[model.name] = model; }
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1],]);

sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Characters, CreaturesMythological, GodDeities,
  HistoricalFigures, Mythologies, Users, } = sequelize.models;
// Aca vendrian las relaciones

// Relación entre Characters y CreaturesMythological
// Characters.hasOne(CreaturesMythological, { foreignKey: 'idType' });
// CreaturesMythological.belongsTo(Characters, { foreignKey: 'idType' });
CreaturesMythological.hasMany(Characters, { foreignKey: 'characterType' });
Characters.belongsTo(CreaturesMythological, { foreignKey: 'characterType' });


// Relación entre Characters y GodDeities
// Characters.hasOne(GodDeities, { foreignKey: 'idType' });
// GodDeities.belongsTo(Characters, { foreignKey: 'idType' });

// Relación entre Characters y HistoricalFigures
// Characters.hasOne(HistoricalFigures, { foreignKey: 'idType' });
// HistoricalFigures.belongsTo(Characters, { foreignKey: 'idType' });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
