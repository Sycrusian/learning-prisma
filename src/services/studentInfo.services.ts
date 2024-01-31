import { prisma } from "../database/prisma";
import { TCreateStudentInfo } from "../interfaces/studentInfo.interface";

export class StudentInfoServices {
  async create(studentInfo: TCreateStudentInfo) {
    return await prisma.studentInfo.create({data: studentInfo});
  }

  async createMany(studentInfos: TCreateStudentInfo[]) {
    return await prisma.studentInfo.createMany({data: studentInfos});
  }
}