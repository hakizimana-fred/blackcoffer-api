import * as fs from "fs";
import * as path from "path";
import mongoose from "mongoose";
import Detail from "../models/Detail";
import { connectDB } from "../config/db";

const runSeed = async () => {
  // first connect to DB
  await connectDB("mongodb://localhost/blackcoffer");
  const data = path.join(__dirname, "data.json");
  // read data from json file
  const details = JSON.parse(fs.readFileSync(data, "utf-8"));
  try {
    await Detail.deleteMany({});
    await Detail.insertMany(details);
  } catch (err) {
    console.error(err);
  }
};

runSeed().then(() => mongoose.connection.close());
