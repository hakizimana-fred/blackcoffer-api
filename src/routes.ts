import { Application } from "express";
import Detail from './models/Detail'

export const routes = (app: Application) => {
  app.get("/healthcheck", (_, res) => res.send("welcome"));

  app.get('/api/v1/details', async (_, res) => {
    try {
      const details = await Detail.find({})  
      if (details.length > 0) return res.status(200).json({success: true, details}) 
      return res.status(400).json({success: false, message: "There is no saved data" })
    }catch(err) {
      return res.status(400).json({
        success: false,
        error: err.message
      })
    }
  })

};
