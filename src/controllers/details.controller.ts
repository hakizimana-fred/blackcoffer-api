import {Request, Response } from "express";
import { fetchDetails } from "../service/details.service";

export const getDetails = async (_: Request, res: Response) => {
  try {
    const details = await fetchDetails()
    if (details.length > 0)
      return res.status(200).json({ success: true, details });
    return res
      .status(400)
      .json({ success: false, message: "There is no saved data" });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
