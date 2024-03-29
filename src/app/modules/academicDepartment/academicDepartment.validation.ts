import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    academicFacultyId: z.string({
      required_error: 'Academic Faculty Id is required',
    }),
  }),
});

export const academicDepartmentValidation = {
  create,
};
