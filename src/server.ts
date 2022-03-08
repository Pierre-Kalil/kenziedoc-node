import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

const PORT = process.env.PORT || 4000;

createConnection()
  .then(() => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`App started!`);
    });
  })
  .catch((error) => console.log(error));
