import { TType } from "./types";

export interface ITodo {
  id: string | number;
  title: string;
  type: TType;
  startDate: Date;
  timerLength: number;
}
