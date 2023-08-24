'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import sendMail from '../../_utils/sendMail';

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

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const req = await sendMail(data.email, data.name, data.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: 'Thank you for your message.',
        });
      }
    } catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops something went wrong. Please try again.',
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
        <label htmlFor='name'>{errors.name?.message || 'Name'}</label>
        <input
          type='text'
          id='name'
          {...register('name', { required: 'Please enter your name.' })}
          autoComplete='name'
          className='w-full p-1 rounded drop-shadow bg-dgray'
        />
        <label htmlFor='email'>{errors.email?.message || 'Email'}</label>
        <input
          type='email'
          id='email'
          {...register('email', { required: 'Please enter a valid email.' })}
          autoComplete='email'
          className='w-full p-1 rounded drop-shadow bg-dgray'
        />
        <label htmlFor='message'>{errors.message?.message || 'Message'}</label>
        <textarea
          rows='5'
          id='message'
          {...register('message', { required: 'Please include a message.' })}
          className='w-full p-1 rounded drop-shadow bg-dgray'
        />
        <button
          type='submit'
          className='rounded drop-shadow py-2 px-4 my-2 bg-dgray block ml-auto'
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
