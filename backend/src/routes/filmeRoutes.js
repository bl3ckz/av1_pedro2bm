import express from "express";
import * as FilmeController from "../controllers/filmeController.js";

const router = express.Router();

// CRUD básico
router.get("/movies", FilmeController.listar);
router.get("/movies/:id", FilmeController.buscarPorId);
router.post("/movies", FilmeController.criar);
router.put("/movies/:id", FilmeController.atualizar);
router.delete("/movies/:id", FilmeController.excluir);

// Buscas específicas
router.get("/movies/search/:titulo", FilmeController.buscarPorTitulo);
router.get("/movies/genre/:genero", FilmeController.buscarPorGenero);

export default router;