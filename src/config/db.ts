import { connect, set } from "mongoose";
set("strictQuery", true);

export const connectDB = async (dbUrl: string) => {
  try {
    await connect(dbUrl);
    console.log("DB successfully connected");
  } catch (err) {
    process.exit(1);
  }
};
