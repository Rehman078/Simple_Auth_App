import express from 'express';
import { userCreate,userLogin } from '../controllers/authcontroller.js';

const router = express.Router();

router.post('/signup', userCreate);
router.post('/login', userLogin);

export const authRoutes = router;