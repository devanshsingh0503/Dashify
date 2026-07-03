const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const nodemailer = require("nodemailer");

async function testEmail() {
  console.log("Testing email configuration...");
  console.log("MAIL_USER:", process.env.MAIL_USER);
  console.log("MAIL_PASS:", process.env.MAIL_PASS ? "****" : "MISSING");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection successful!");

    const info = await transporter.sendMail({
      from: `"Test" <${process.env.MAIL_USER}>`,
      to: "security@dashifyservices.in", // Or your own email to test
      subject: "Test Email",
      text: "If you see this, your email configuration is working!",
    });

    console.log("✅ Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("❌ Email test failed:");
    console.error(error);
    if (error.code === 'EAUTH') {
        console.log("\nTIP: If you use Gmail, make sure you're using an 'App Password', not your main account password.");
    }
  }
}

testEmail();
