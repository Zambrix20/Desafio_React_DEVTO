import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    // console.log(username, email, password);

    try {

        // Validaciones para saber si el usuario ya existe en la base de datos
        const userFound = await User.findOne({ email });
        if (userFound)
            return res.status(400).json(["The email is already in use"]);

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        // console.log(newUser);

        const userSaved = await newUser.save(); // Guarda el usuario en la base de datos

        const token = await createAccessToken({ id: userSaved._id }); // Genera el token de autenticación con el id del usuario y una clave secreta que solo conoce el servidor

        res.cookie('token', token) // Guarda el token en una cookie en el navegador 
        // res.json({
        //     message: "User created successfully",
        // })
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        }); // Envia los datos del usuario al cliente para que los pueda usar en la aplicación

        // res.send("Registrando...")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

export const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    // console.log(username, email, password);

    try {
        const userFound = await User.findOne({ email: email });
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ id: userFound._id }); // Genera el token de autenticación con el id del usuario y una clave secreta que solo conoce el servidor

        res.cookie('token', token) // Guarda el token en una cookie en el navegador y el sameSite: none es para decir que la cookie no esta en el mismo dominio
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        }); // Envia los datos del usuario al cliente para que los pueda usar en la aplicación

        // res.send("Registrando...")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

export const logout = (req, res) => {
    res.cookie("token", "", { expires: new Date(0) })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    // console.log(req.user);
    const userFound = await User.findById(req.user.id)
    if (!userFound)
        return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })

    // res.send("Profile")
}

// Funcion para verificar el token del usuario que esta logueado
export const verifyToken = async (req, res) => {
    const { token } = req.cookies; // Obtiene el token de la cookie que se envia desde el cliente (navegador)
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Verifica el token con la clave secreta que solo conoce el servidor y si el token es valido, devuelve los datos del usuario
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.status(401).json({ message: "Unauthorized" });

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({ message: "Unauthorized" });

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    })

}