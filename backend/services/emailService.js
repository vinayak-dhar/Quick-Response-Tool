import { Resend } from "resend";
console.log("Resend API Key:", process.env.RESEND_API_KEY); // Debugging line

// if (!process.env.RESEND_API_KEY) {
//   throw new Error("RESEND_API_KEY missing in environment variables");
// }

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_AuncMMRV_BWrjV1Y2c3Qx3NKaUbsxRzaA");

const sendEmail = async (to, summary) => {
  try {

    const response = await resend.emails.send({
      from: "Sales Insight Automator Hello World <onboarding@resend.dev>",
      to: [to],
      subject: "Sales Insight Summary",
      text: summary
    });

    console.log("Email sent:", response);

  } catch (error) {
    console.error("Resend Error:", error);
    throw error;
  }
};

export default sendEmail;