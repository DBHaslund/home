import Image from 'next/image';

const Intro = () => {
  return (
    <section className='items-center w-full py-80'>
      <Image
        src='/assets/pfp.svg'
        alt='profile picture'
        width={50}
        height={50}
        className='mx-auto'
      />
      <h2 className='text-center text-3xl font-semibold'>Hi, I&apos;m Dennis</h2>
      <h1 className='text-center text-5xl font-bold'>Frontend Developer</h1>
    </section>
  );
};

export default Intro;

