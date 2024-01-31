import { prisma } from "../database/prisma";
import { TCreateStudent } from "../interfaces/student.interface";

export class StudentServices {
  async create(student: TCreateStudent) {
    return await prisma.student.create({ data: student });
  }

  async createMany(students: TCreateStudent[]) {
    return await prisma.student.createMany({ data: students });
  }
}