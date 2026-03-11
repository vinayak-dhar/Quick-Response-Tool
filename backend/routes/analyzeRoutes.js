import express from "express";
import multer from "multer";
import { analyzeFile } from "../controllers/analyzeController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Upload sales file and generate AI insights
 *     description: Parses CSV/XLSX file, generates AI summary, and emails it.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Analysis completed and email sent
 */

router.post("/analyze", upload.single("file"), analyzeFile);

export default router;