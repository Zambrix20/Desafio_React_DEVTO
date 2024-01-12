export const validateSchema = (schema) => (req, res, next) => {

    try {
        // Validamos los datos que se envian en el body de la peticion
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json(error.errors.map((err) => err.message));
    }

}