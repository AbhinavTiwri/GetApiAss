import express from 'express';
import StudentController from '../controllers/ShudentController.js';
const router = express.Router();

router.get('/student', StudentController.getStudent);

export default router;