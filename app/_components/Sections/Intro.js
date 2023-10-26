
'use client'
import Image from 'next/image';
import Section from '../UI/Section';

const Intro = () => {

  return (
    <Section className='py-32 bg-transparent'>
      <div className='relative'>        
        <Image
          src='/assets/pfp.png'
          alt='profile picture'
          width={100}
          height={100}
          className='mx-auto mt-12 mb-32 pfp pfp-ani rounded-full'
        />
      </div>
      <h2 className='text-center text-3xl font-semibold'>
        Hi, I&apos;m Dennis
      </h2>
      <h1 className='text-center text-5xl font-bold'>Frontend Developer</h1>
    </Section>
  );
};

export default Intro;
