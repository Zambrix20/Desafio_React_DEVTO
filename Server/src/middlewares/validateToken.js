import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    // console.log(req.headers);
    const { token } = req.cookies;
    // const cookie = req.cookies;
    // console.log(cookie);

    if (!token)
        return res.status(401).json({ message: "No token found, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(401).json({ message: "Token not valid" });

        // console.log(user);
        req.user = user;

        next();
    })
}