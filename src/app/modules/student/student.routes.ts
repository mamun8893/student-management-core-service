import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentController } from './student.controller';
import { studentValidation } from './student.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(studentValidation.create),
  studentController.insertIntoDB
);
router.get('/', studentController.getAllFromDB);
router.get('/:id', studentController.getDataById);

export const studentRoutes = router;
