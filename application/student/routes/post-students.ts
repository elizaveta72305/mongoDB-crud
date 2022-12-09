
import { Router, Request, Response } from "express";
import { IStudent } from "../interface/student.interface";
import { AddStudent } from "../service";

const route = Router();

route.post('/', async (req: Request, res: Response) => {
    let student: IStudent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,

    }
    let result = await AddStudent(student);
    res.send(result);
});

export { route as postStudentsRoute };