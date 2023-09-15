import { z } from 'zod';

const create = z.object({
  body: z.object({
    studentId: z.string({
      required_error: 'Student Id is required',
    }),
    firstName: z.string({
      required_error: 'First Name is required',
    }),
    lastName: z.string({
      required_error: 'Last Name is required',
    }),
    middleName: z.string({
      required_error: 'Middle Name is required',
    }),
    profileImage: z.string({
      required_error: 'Profile Image is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    contactNo: z.string({
      required_error: 'Contact No is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    academicSemesterId: z.string({
      required_error: 'Academic Semester Id is required',
    }),
    academicDepartmentId: z.string({
      required_error: 'Academic Department Id is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic Faculty Id is required',
    }),
  }),
});

const update = z.object({
  body: z.object({
    studentId: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    middleName: z.string().optional(),
    profileImage: z.string().optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    gender: z.string().optional(),
    academicSemesterId: z.string().optional(),
    academicDepartmentId: z.string().optional(),
    academicFacultyId: z.string().optional(),
  }),
});

export const studentValidation = {
  create,
  update,
};
