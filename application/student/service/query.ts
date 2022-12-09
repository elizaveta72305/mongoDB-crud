
import { StudentModel } from "../models/student.models";
import {IStudent} from "./../interface/student.interface";

export const getStudents = async(): Promise<IStudent[]> => {
    let res = await StudentModel.find().lean();
    return res;
}

export const getStudentByName = () => {};

