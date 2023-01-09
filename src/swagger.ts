import { Application } from 'express-serve-static-core';
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BlackCoffer Data Visualizer Api",
      version: "1.0.0",
    }, 
    swagger: "3.0",
  },
  apis: ["./routes.ts"],
};

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocs = (app: Application, port: number) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  app.get("/docs.json", (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`View API docs at http://localhost:${port}/api-docs`)

};

export default swaggerDocs