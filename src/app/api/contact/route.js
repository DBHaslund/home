import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export const POST = async (req, res) => {
  let body = await req.json();
  
  const composedMessage = {
    from: process.env.EMAIL_SEND,
    to: process.env.EMAIL_RECIEVE,
    subject: `Website contact form - ${body.name}`,
    text: body.message,
    html: `<p>From: ${body.name}</p> <br> <p>Email: ${body.email}</p> <br> <p>${body.message}</p>`,
  };

  const contactEmail = nodemailer.createTransport({
    host: 'smtp.simply.com',
    port: '587',
    auth: {
      user: process.env.EMAIL_SEND,
      pass: process.env.EMAIL_PW,
    },
  });

  try {
    contactEmail.sendMail(composedMessage);
    return NextResponse.json({ message: 'Message sent', success: true, response: res });
  } catch (err) {
    return NextResponse.json({ message: err, success: false, response: res });
  }
};
