import express from "express";
import router from "./routes";
import { handleError } from "./middlewares/errors.middlewares";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use(router);

app.use(handleError);

export default app;
