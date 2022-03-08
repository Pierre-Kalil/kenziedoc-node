import express from "express";
import router from "./routes";
import { handleError } from "./middlewares/errors.middlewares";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.js";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());

if (!path.join(__dirname, "utils/tmp")) {
  fs.mkdir(path.join(__dirname, "utils/tmp"), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });
}

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use(router);

app.use(handleError);

export default app;
