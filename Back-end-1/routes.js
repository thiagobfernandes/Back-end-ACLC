import express from "express";
import autoresroutes from "./models/autor/routes.js";

const routes = express.Router();



routes.get('/', (req, res) => {
    res.send("Hello World")
});

routes.use(autoresroutes)


export { routes as default }