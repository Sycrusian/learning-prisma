import { prisma } from "../database/prisma";
import { TCreateStudent, TUpdateStudent } from "../interfaces/student.interface";

export class StudentServices {
  async create(student: TCreateStudent) {
    return await prisma.student.create({ data: student });
  }

  async createMany(students: TCreateStudent[]) {
    return await prisma.student.createMany({ data: students });
  }

  async getStudent(studentId: number) {
    return await prisma.student.findFirst({
      where: { id: studentId },
      include: { studentInfo: true }
    });
  }

  async searchStudents(search: string) {
    return await prisma.student.findMany({
      where: { name: { contains: search, mode: "insensitive" } },
      include: { studentInfo: true }
    });
  }

  async getStudents() {
    return await prisma.student.findMany({ include: { studentInfo: true } });
  }

  async update(studentId: number, data: TUpdateStudent) {
    return await prisma.student.update({
      where: { id: studentId },
      data
    });
  }

  async delete(studentId: number) {
    return await prisma.student.delete({ where: { id: studentId }});
  }
}