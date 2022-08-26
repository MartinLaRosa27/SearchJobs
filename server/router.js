const express = require("express");
const router = express.Router();
const Trabajos = require("./models/Trabajos.js");
const Postulaciones = require("./models/Postulacion.js");

module.exports = () => {
  router.get("/get-trabajos", async (req, res) => {
    const trabajos = await Trabajos.findAll();
    res.send(trabajos);
  });

  router.get("/get-postulaciones", async (req, res) => {
    const trabajos = await Trabajos.findAll({
      include: [
        {
          model: Postulaciones,
          where: {
            usuarioId: 1,
          },
        },
      ],
    });
    res.send(trabajos);
  });

  router.delete("/delete-postulaciones/:id", async (req, res) => {
    try {
      await Postulaciones.destroy({ where: { trabajoId: req.params.id } });
      res.send("Postulación eliminada");
    } catch (e) {
      res.send("No se pudo eliminar la postulacion");
    }
  });

  router.post("/post-postulaciones/:id", async (req, res) => {
    try {
      const postulacionEx = await Postulaciones.findAll({
        where: {
          trabajoId: req.params.id,
          usuarioId: 1,
        },
      });
      if (postulacionEx.length <= 0) {
        await Postulaciones.create({ trabajoId: req.params.id, usuarioId: 1 });
        res.send("Postulación creada");
      }
      res.send("La postulación ya existe");
    } catch (e) {
      res.send("No se pudo crear la postulacion");
    }
  });

  return router;
};
