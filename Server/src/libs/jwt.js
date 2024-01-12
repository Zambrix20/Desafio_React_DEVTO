import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {

    return new Promise((resolve, reject) => {
        // Genera el token de autenticación con el id del usuario y una clave secreta que solo conoce el servidor
        jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    })

}

