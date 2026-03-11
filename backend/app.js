import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import analyzeRoutes from "./routes/analyzeRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";



const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50
});

app.use(limiter);

app.use("/api", analyzeRoutes);


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});