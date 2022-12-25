import { createTransport } from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_APP_PASS,
        },
  });

  await transport.sendMail({
    from: process.env.SMPT_MAIL,
    to: email,
    subject,
    text,
  });
};


