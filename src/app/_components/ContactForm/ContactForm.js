const ContactForm = () => {
  return (
    <form action='' className='w-4/5 m-auto text-xl p-2 border-bteal border-2 bg-gray rounded-lg'>
      <div className='md:flex justify-center gap-2 md:gap-8'>
        <div className='max-w-[15em]'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' autoComplete='name' className='w-full p-1 rounded drop-shadow text-slate-950' />
        </div>
        <div className='max-w-[15em]'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' autoComplete='email' className='w-full p-1 rounded drop-shadow text-slate-950' />
        </div>
      </div>
      <div className=''>
        <label htmlFor='message'>Message</label>
        <textarea
          rows='5'
          id='message'
          name='message'
          className='w-full p-1 rounded drop-shadow text-slate-950'
        />
      </div>
      <button className='rounded drop-shadow py-2 px-4 my-2 bg-gray border-bteal border-2'>Send</button>
    </form>
  );
};

export default ContactForm;
