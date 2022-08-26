const Sequelize = require("sequelize");
const dataBase = require("../database.js");
const Postulacion = require("./Postulacion.js");

const Usuarios = dataBase.define("usuarios", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "El nombre puede tener hasta 90 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El nombre no puede ir vacio",
      },
    },
  },

  apellido: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "El apellido puede tener hasta 90 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El apellido no puede ir vacio",
      },
    },
  },

  descripcion: {
    type: Sequelize.STRING(140),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "La descripcion del usuario puede tener hasta 140 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "La descripcion del usuario no puede ir vacia",
      },
    },
  },
});

Usuarios.hasMany(Postulacion);
module.exports = Usuarios;
