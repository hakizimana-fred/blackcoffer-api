import express from "express";
import helmet from "helmet";
import { connectDB } from "./config/db";
import { routes } from "./routes";
import { config as dotenv } from "dotenv";

dotenv();

const app = express();

const main = async () => {
  try {
    // Database connection
    await connectDB(process.env.MONGO_URI as string);
    // app middlewares
    app.use(express.json());
    app.use(helmet());
    // app routes
    routes(app);

    app.listen(process.env.PORT, () =>
      console.log(`server started on port ${process.env.PORT}`)
    );
  } catch (err) {
    process.exit(1);
  }
};

main();
