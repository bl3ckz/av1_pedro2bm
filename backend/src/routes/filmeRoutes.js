import express from "express";
import * as FilmeController from "../controllers/filmeController.js";

const router = express.Router();

router.get("/filmes", FilmeController.listar);
router.get("/filmes/:id", FilmeController.buscarPorId);
router.post("/filmes", FilmeController.criar);
router.put("/filmes/:id", FilmeController.atualizar);
router.delete("/filmes/:id", FilmeController.excluir);

export default router;