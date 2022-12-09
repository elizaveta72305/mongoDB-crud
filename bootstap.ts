import {connect} from "./mongoDB/mongoDB";

export const bootstrap = async(cb: Function) => {
    await connect();
    console.log("mongo connected!");
    cb(); 
};   