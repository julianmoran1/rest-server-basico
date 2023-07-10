import { Router } from "express";
import { deleteUsuarios, getUsuarios, postUsuarios, putUsuarios } from "../controllers/user.controllers.js";

export const router = Router()

router.get('/', getUsuarios)
router.post('/', postUsuarios)
router.put('/:id', putUsuarios)
router.delete('/', deleteUsuarios)