import * as dotenv from "dotenv";
dotenv.config();

import {bootstrap} from "./bootstap";

bootstrap(startUp);

function startUp(){
    console.log("app is started");

    const {app} = require("./app");
    app.listen(3000, () => {
        console.log("app listening on port 3000");
    });
}




// import express from "express";


// bootstrap(startUp);

// function startUp(){
//     console.log("app started");
// } 