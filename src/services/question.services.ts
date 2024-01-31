import { prisma } from "../database/prisma";
import { TCreateQuestion, TUpdateQuestion } from "../interfaces/question.interface";

export class QuestionServices {
  async create(question: TCreateQuestion) {
    return await prisma.question.create({ data: question });
  }

  async createMany(questions: TCreateQuestion[]) {
    return await prisma.question.createMany({ data: questions });
  }

  async getQuestion(questionId: number) {
    return await prisma.question.findFirst({ where: { id: questionId } });
  }

  async getStudentQuestions(studentId: number) {
    return await prisma.question.findMany({ where: { studentId }});
  }

  async update(questionId: number, data: TUpdateQuestion) {
    return await prisma.question.update({ where: { id: questionId }, data });
  }

  async updateStudentQuestions(studentId: number, data: TUpdateQuestion) {
    return await prisma.question.updateMany({ where: { studentId }, data });
  }

  async delete(questionId: number) {
    return await prisma.question.delete({ where: { id: questionId } });
  }

  async deleteStudentQuestions(studentId: number) {
    return await prisma.question.deleteMany({ where: { studentId } });
  }
}