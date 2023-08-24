import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export const POST = (req, res) => {
  const message = {
    from: req.body.email,
    to: 'me@bzyhas.com',
    subject: 'Website contact form',
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  const contactEmail = nodemailer.createTransport({
    host: 'smtp.simply.com',
    port: '587',
    auth: {
      user: 'website@bzyhas.com',
      pass: '#5r@u!RPi#R&4tm',
    },
  });

  try {
    console.log(req)
    contactEmail.sendMail(message);
    return NextResponse.json({ message: 'Message sent', success: true, response: res });
  } catch (err) {
    return NextResponse.json({ message: err, success: false, response: res });
  }
};
