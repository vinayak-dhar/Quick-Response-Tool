import parseFile from "../utils/parseFile.js";
import generateSummary from "../services/aiService.js";
import sendEmail from "../services/emailService.js";

export const analyzeFile = async (req, res) => {
  try {

    const filePath = req.file.path;
    const email = req.body.email;

    const data = await parseFile(filePath);

    const summary = await generateSummary(data);

    await sendEmail(email, summary);

    res.json({
      message: "Analysis completed and email sent"
    });

  } catch (error) {

    res.status(500).json({
      message: "Processing failed",
      error: error.message
    });

  }
};