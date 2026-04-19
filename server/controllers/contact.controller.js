const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  const { name, company, phone, email, address } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Dashify Contact Form" <${process.env.MAIL_USER}>`,
      to: "security@dashifyservices.in",
      replyTo: email,
      subject: `New Contact Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #444; width: 140px;">Name</td>
              <td style="padding: 10px; color: #000;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #444;">Company</td>
              <td style="padding: 10px; color: #000;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #444;">Phone</td>
              <td style="padding: 10px; color: #000;">${phone || "—"}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #444;">Email</td>
              <td style="padding: 10px; color: #000;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #444;">Address</td>
              <td style="padding: 10px; color: #000;">${address || "—"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">Sent via Dashify contact form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email. Please try again." });
  }
};

module.exports = { sendContactEmail };
