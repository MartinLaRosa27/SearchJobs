const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Postulacion = dataBase.define("postulacion", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = Postulacion;
