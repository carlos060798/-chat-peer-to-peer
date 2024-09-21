import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth.Controller';
import { handleInputError } from '../middleware/validator';
import { body } from 'express-validator';


const router = Router();
/**
 * @swagger
* /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *       400:
 *         description: Error de validación
 *       500: 
 *        description: Error en el servidor
 */
router.post('/register',
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('El email no es valido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    handleInputError,

    createUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Loguear un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Usuario logueado con éxito
 *       400:
 *         description: Error de validación
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error en el servidor
 */


router.post('/login',
    body('email').notEmpty().withMessage('El email es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    handleInputError,
    loginUser);

export default router;