import { Application } from "express";
import { getDetails } from "./controllers/details.controller";

export const routes = (app: Application) => {
  app.get("/healthcheck", (_, res) => res.send("Hi! welcome"));

/**
 * @swagger
 * '/api/v1/details':
 *  get:
 *     tags:
 *     - Details
 *     summary: Get all Details
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  end_year:
 *                    type: string
 *                  intensity:
 *                    type: number
 *                  sector:
 *                    type: string
 *                  topic:
 *                    type: string
 *                  insight:
 *                    type: string
 *                  url:
 *                    type: string
 *                  region:
 *                    type: string
 *                  start_year:
 *                    type: string
 *                  impact:
 *                    type: string
 *                  added:
 *                    type: string
 *                  published:
 *                    type: string
 *                  country:
 *                    type: string
 *                  relevance:
 *                    type: number
 *                  pestle:
 *                    type: string
 *                  source:
 *                    type: string
 *                  title:
 *                    type: string
 *                  likelihood:
 *                    type: number
 *       400:
 *         description: Bad request
 */
  app.get('/api/v1/details', getDetails)

};
