export interface IQuestion {
  id: number;
  title: string;
  content?: string;
  studentId: number;
}

export type TCreateQuestion = Omit<IQuestion, "id">;

export type TUpdateQuestion = Partial<TCreateQuestion>;