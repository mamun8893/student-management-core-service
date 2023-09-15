import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(academicDepartmentValidation.create),
  academicDepartmentController.insertIntoDB
);
router.get('/', academicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartmentController.getDataById);

export const academicDepartmentRoutes = router;
