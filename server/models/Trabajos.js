const Sequelize = require("sequelize");
const dataBase = require("../database.js");
const Postulacion = require("./Postulacion.js");

const Trabajos = dataBase.define("trabajos", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  puesto: {
    type: Sequelize.STRING(40),
    allowNull: false,
    validate: {
      len: {
        args: [1, 40],
        msg: "El nombre del puesto puede tener hasta 40 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El nombre del puesto no puede ir vacio",
      },
    },
  },

  empresa: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "El nombre de la empresa puede tener hasta 90 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El nombre de la empresa no puede ir vacia",
      },
    },
  },

  descripcion: {
    type: Sequelize.STRING(140),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "La descripcion del trabajo puede tener hasta 140 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "La descripcion del trabajo no puede ir vacia",
      },
    },
  },
});

Trabajos.hasMany(Postulacion);
module.exports = Trabajos;
