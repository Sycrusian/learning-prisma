import { prisma } from "../database/prisma";
import { TCreateStudentInfo, TUpdateStudentInfo } from "../interfaces/studentInfo.interface";

export class StudentInfoServices {
  async create(studentInfo: TCreateStudentInfo) {
    return await prisma.studentInfo.create({data: studentInfo});
  }

  async createMany(studentInfos: TCreateStudentInfo[]) {
    return await prisma.studentInfo.createMany({data: studentInfos});
  }

  async update(studentId: number, data: TUpdateStudentInfo) {
    return await prisma.studentInfo.update({
      where: { studentId: studentId },
      data
    });
  }

  async delete(studentId: number) {
    return await prisma.studentInfo.delete({ where: { studentId } });
  }
}