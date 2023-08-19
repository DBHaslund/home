'use client';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => console.log(data, e);

  const onError = (errors, e) => console.log(errors, e);

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
