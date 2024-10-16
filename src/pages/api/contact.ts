import { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";
import "dotenv/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, phone, firstName, secondName, subject, message } = req.body;

    // validate if values are provided
    if (
      !email ||
      typeof email !== "string" ||
      !phone ||
      typeof phone !== "string" ||
      !firstName ||
      typeof firstName !== "string" ||
      !secondName ||
      typeof secondName !== "string" ||
      !subject ||
      typeof subject !== "string" ||
      !message ||
      typeof message !== "string"
    ) {
      return res.status(400).json({ message: "Invalid or missing parameters" });
    }

    const templateParams = {
      email,
      phone,
      firstName,
      secondName,
      subject,
      message,
    };

    try {
      // send email using emailjs
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.EMAILJS_USER_ID!
      );
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
