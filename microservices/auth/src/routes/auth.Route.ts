import { Router } from 'express';
import { createUser, loginUser } from '../controllers/auth.Controller';
import { handleInputError } from '../middleware/validator';
import { body } from 'express-validator';


const router = Router();
router.post('/register',
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('El email no es valido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    handleInputError,

    createUser);
router.post('/login',
    body('email').notEmpty().withMessage('El email es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    handleInputError,
    loginUser);

export default router;