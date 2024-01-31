export interface IStudent {
  id: number;
  name: string;
  email?: string;
}

export type TCreateStudent = Omit<IStudent, "id">;