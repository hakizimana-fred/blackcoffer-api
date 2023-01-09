import express from "express";
import helmet from "helmet";
import { connectDB } from "./config/db";
import { routes } from "./routes";
import { config as dotenv } from "dotenv";
import morgan from 'morgan'
import swaggerDocs from "./swagger";

dotenv();

const app = express();

const main = async () => {
  try {
    // Database connection
    await connectDB(process.env.MONGO_URI as string);
    // app middlewares
    app.use(express.json());
    app.use(helmet());
    process.env.NODE_ENV === "development" && app.use(morgan('dev'))

    // app routes
    routes(app);

    app.listen(typeof process.env.PORT === "string" && parseInt(process.env.PORT), () => {
        console.log(`server has started on port ${process.env.PORT}`)
        swaggerDocs(app, Number(process.env.PORT))
    });
  } catch (err) {
    process.exit(1);
  }
};

main();
