import { Application } from "express";
import { getDetails } from "./controllers/details.controller";

export const routes = (app: Application) => {
  app.get("/healthcheck", (_, res) => res.send("welcome"));
  app.get('/api/v1/details', getDetails)

};
