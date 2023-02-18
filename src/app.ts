import express from "express";
import mongoose from "mongoose";
import config from "../config/defaults";
import connectDB from "./utils/connect";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import * as SwaggerDocument from "./swagger.json";

const app = express();
const PORT = config.PORT;

app.listen(PORT, async () => {
  console.log("listening on port " + PORT);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerDocument));

  // establishing db connection
  await connectDB();

  // establishing routing
  routes(app);
});
