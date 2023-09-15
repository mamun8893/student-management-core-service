import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(academicFacultyValidation.create),
  academicFacultyController.insertIntoDB
);
router.get('/', academicFacultyController.getAllFromDB);
router.get('/:id', academicFacultyController.getDataById);

export const academicFacultyRoutes = router;
