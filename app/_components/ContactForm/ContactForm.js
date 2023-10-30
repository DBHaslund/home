'use client';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import sendMail from '../../_utils/sendMail';
import validateRecaptcha from '../../_utils/validateRecaptcha';
import Captcha from 'react-google-recaptcha';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  });

  const recaptchaRef = useRef();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const recaptchaResponse = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    const response = await validateRecaptcha(recaptchaResponse);
    console.log(response);
    if (response.status === 200) {
      // reCAPTCHA validation passed
      try {
        const req = await sendMail(data.email, data.name, data.message);
        if (req.status === 250) {
          setResponseMessage({
            isSuccessful: true,
            message: `Thank you for your message ${data.name}.`,
          });
        }
      } catch (e) {
        setResponseMessage({
          isSuccessful: false,
          message: 'Oops something went wrong. Please try again.',
        });
      }
    } else {
      // reCAPTCHA validation failed
      setResponseMessage({
        isSuccessful: false,
        message: 'ReCAPTCHA failed. Please try again.',
      });
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  });

  const onError = (errors) => console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className='mx-auto my-8 text-xl p-2 bg-gray rounded-lg flex-col'
    >
      <div className='w-4/5 max-w-md mx-auto py-4'>
        <label htmlFor='name' className=''>{errors.name?.message || 'Name'}</label>
        <input
          type='text'
          id='name'
          {...register('name', { required: 'Please enter your name.' })}
          autoComplete='name'
          placeholder='Name'
          className='w-full px-4 py-2 mb-2 mt-1 rounded drop-shadow bg-dgray placeholder:opacity-40'
        />
        <label htmlFor='email' className=''>{errors.email?.message || 'Email'}</label>
        <input
          type='email'
          id='email'
          {...register('email', { required: 'Please enter a valid email.' })}
          autoComplete='email'
          placeholder='Email address'
          className='w-full px-4 py-2 mb-2 mt-1 rounded drop-shadow bg-dgray placeholder:opacity-40'
        />
        <label htmlFor='message' className=''>{errors.message?.message || 'Message'}</label>
        <textarea
          rows='5'
          id='message'
          {...register('message', { required: 'Please include a message.' })}
          placeholder='Write your message...'
          className='w-full px-4 py-2 mb-2 mt-1 rounded drop-shadow bg-dgray placeholder:opacity-40'
        />
        <div className='flex'>
          <p className='w-62 text-xs w-2/3'>
            This site is protected by reCAPTCHA and the Google
            <a className='underline hover:text-white m-1' href='https://policies.google.com/privacy'>Privacy Policy</a> and
            <a className='underline hover:text-white m-1' href='https://policies.google.com/terms'>
              Terms of Service
            </a>{' '}
            apply.
          </p>
          <button
            type='submit'
            className='rounded drop-shadow py-2 px-4 bg-dgray block ml-auto hover:text-white'
          >
            Send
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
        <Captcha
          ref={recaptchaRef}
          size='invisible'
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          theme='dark'
        />
      </div>
    </form>
  );
};

export default ContactForm;
