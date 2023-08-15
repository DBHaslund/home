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
      className='w-4/5 mx-auto my-8 text-xl p-2 border-violet-700 border-2 bg-gray rounded-lg'
    >
      <div className='md:flex justify-center gap-2 md:gap-8'>
        <div className='max-w-[15em]'>
          <label htmlFor='name'>{errors.name?.message || 'Name'}</label>
          <input
            type='text'
            id='name'
            {...register('name', { required: 'Please enter your name.' })}
            autoComplete='name'
            className='w-full p-1 rounded drop-shadow text-slate-950'
          />
        </div>
        <div className='max-w-[15em]'>
          <label htmlFor='email'>{errors.email?.message || 'Email'}</label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'Please enter a valid email.' })}
            autoComplete='email'
            className='w-full p-1 rounded drop-shadow text-slate-950'
          />
        </div>
      </div>
      <div className=''>
        <label htmlFor='message'>{errors.message?.message || 'Message'}</label>
        <textarea
          rows='5'
          id='message'
          {...register('message', { required: 'Please include a message.' })}
          className='w-full p-1 rounded drop-shadow text-slate-950'
        />
      </div>
      <button
        type='submit'
        className='rounded drop-shadow py-2 px-4 my-2 bg-gray border-violet-700 border-2'
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
