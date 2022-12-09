

import mongoose, {Mongoose} from "mongoose";

const connectionString = process.env.DB_CONNECTIONSTRING as string;
export let db: Mongoose;

export const connect = async () => {
    db = await mongoose.connect(connectionString);
}









// const connectionString = "mongodb://localhost:27017";
// const client = new MongoClient(connectionString);

// export let db: Db;


    // db = client.db("masa");
    // let collections = await db.collections();
    // let collectionStudents = collections.find(
    //     (c) => c.collectionName === "courses"
    // );

    // if(!collectionStudents) {
    //     db.createCollection("courses");
    // }


