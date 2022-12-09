import { Collection } from "mongodb";
import { IStudent } from "../interface/student.interface";
import {db} from "../../../mongoDB/mongoDB";
import { studentSchema } from "../../../mongoDB/schema/student-schema";

export let StudentModel = db.model<IStudent>("masa", studentSchema, "students");



    