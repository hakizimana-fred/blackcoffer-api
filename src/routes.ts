import { Application } from "express";

export const routes = (app: Application) => {
  app.get("/healthcheck", (_, res) => res.send("welcome"));
};
