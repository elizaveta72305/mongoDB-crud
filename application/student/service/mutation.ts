import { StudentModel } from "../models/student.models";
import { IStudent } from "../utils";

export const AddStudent = async (student: IStudent) => {
  console.log(student);

  let nStudent = new StudentModel(student);
  let result = await nStudent.save();
  return result
};
