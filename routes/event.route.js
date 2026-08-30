import express from "express";
import {
  createEvent,
  getAllEvents,
  deleteEvent,
  getEventById,
  updateEvent,
  exportEvents,
} from "../controllers/event.controller.js";

import {
  protectRoute,
  adminRoute,
  optionalAuth,
} from "../middleware/auth.middleware.js";

const router = express.Router();

// Rota de exportação tem de vir antes de "/:id" para não ser interpretada como um ID.
// Exporta os dados de eventos de um jogo, incluindo o tipo "oportunidade de golo" —
// por isso é restrita a staff autenticado (gameMaster ou admin), não a visitantes.
// Exemplos:
//   GET /api/events/export?game=<gameId>&format=csv   -> todos os eventos desse jogo (uso recomendado)
//   GET /api/events/export?type=oportunidade de golo  -> só as oportunidades de golo
//   GET /api/events/export?format=json                -> todos os eventos, todos os jogos
router.get("/export", protectRoute, exportEvents);

router.get("/", optionalAuth, getAllEvents);
router.post("/", protectRoute, createEvent);
router.get("/:id", optionalAuth, getEventById);
router.put("/:id", protectRoute, updateEvent);
router.delete("/:id", protectRoute, adminRoute, deleteEvent);

export default router;
