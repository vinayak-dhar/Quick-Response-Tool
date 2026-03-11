import axios from "axios";

const generateSummary = async (data) => {

  const prompt = `
You are a sales analytics assistant.

Analyze the following sales dataset (JSON):

${JSON.stringify(data).slice(0,2000)}

Generate a short executive summary covering:

1. Overall sales trends
2. High performing products or regions
3. Key insights for management

Keep the summary concise and professional.
`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};

export default generateSummary;