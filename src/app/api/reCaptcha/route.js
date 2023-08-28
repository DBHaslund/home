import { NextResponse } from 'next/server';

export const POST = async (req, res) => {
  const { recaptchaResponse } = await req.json();
  const secretKey = process.env.RECAPTCHA_SECRET;

  try {
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`,
      {
        method: 'POST',
      }
    );
    return NextResponse.json({
      message: 'ReCAPTCHA validated',
      success: true,
      response: res,
    });
  } catch (err) {
    return NextResponse.json({ message: err, success: false, response: res });
  }
};
