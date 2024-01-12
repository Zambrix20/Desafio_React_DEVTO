import { Router } from "express";

import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, deleteTask, updateTask } from "../controllers/tasks.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router(); // Inicializa el router de express para poder agregar rutas y enviarlas al servidor

router.get('/tasks', authRequired, getTasks)

router.get('/tasks/:id', authRequired, getTask)

router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask)

router.delete('/tasks/:id', authRequired, deleteTask)

router.put('/tasks/:id', authRequired, updateTask)


export default router;