export interface IStudentInfo {
  id: number;
  phone: string;
  address: string;
  studentId: number;
}

export type TCreateStudentInfo = Omit<IStudentInfo, "id">;

export type TUpdateStudentInfo = Partial<TCreateStudentInfo>;