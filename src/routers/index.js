"use strict";

const express = require("express");
const api = express.Router();
const { entradaSalida, enTurno, autorizarExtras } = require("../controllers/EntraSalidaController");
const {
  getEmployes,
  saveEmployes,
} = require("../controllers/EmployesController");
const {
  getDeparments,
  saveDeparments,
} = require("../controllers/DeparmentsContoller");
const { login, users, saveUsers } = require("../controllers/Auth");
const {reporteDiasTrabajados} = require("../controllers/ReportsController");

api.post("/entrada-salida", entradaSalida);
api.get("/enturno", enTurno);
api.post("/autorizar-extras", autorizarExtras);

api.get("/employes", getEmployes);
api.post("/employes", saveEmployes);

api.get("/departments", getDeparments);
api.post("/departments", saveDeparments);

api.post("/login", login);

api.get("/users", users);
api.post("/users", saveUsers);

api.post("/reports", reporteDiasTrabajados);

module.exports = api;
