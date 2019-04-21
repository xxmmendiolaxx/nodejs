import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})
);

const routes = new Routes(app);
routes.setRoutes()

const port = 4444;

const server = app.listen(port,()=>{
    console.log("Listening at PORT: ", port)
});

