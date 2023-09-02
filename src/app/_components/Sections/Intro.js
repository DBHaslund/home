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
          className='mx-auto border-collapse mt-12 mb-32 pfp rounded-full'
        />
        <svg
          fill='white'
          className='cross absolute m-auto left-0 right-0 top-[-3rem] -z-10'
          viewBox='0 0 100 100'
          width='200'
        >
          <rect
            className='line-top'
            width='138'
            height='2'
            x='2'
            y='-1'
            rx='2'
          ></rect>
          <rect
            className='line-bot'
            width='138'
            height='2'
            x='-69'
            y='69'
            rx='2'
          ></rect>
        </svg>
      </div>
      <h2 className='text-center text-3xl font-semibold'>
        Hi, I&apos;m Dennis
      </h2>
      <h1 className='text-center text-5xl font-bold'>Frontend Developer</h1>
    </Section>
  );
};

export default Intro;
