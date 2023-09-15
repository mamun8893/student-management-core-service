import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterController } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(academicSemesterValidation.create),
  academicSemesterController.insertIntoDB
);
router.get('/', academicSemesterController.getAllFromDB);
router.get('/:id', academicSemesterController.getDataById);

export const academicSemesterRoutes = router;
