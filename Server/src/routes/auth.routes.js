import { Router } from "express";

import {
    register,
    login,
    logout,
    profile,
    verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router(); // Inicializa el router de express para poder agregar rutas y enviarlas al servidor

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

// Para verificar el token, se hace una petición al servidor con el token en la cookie
router.get("/verify", verifyToken);

router.get("/profile", authRequired, profile);

export default router;
