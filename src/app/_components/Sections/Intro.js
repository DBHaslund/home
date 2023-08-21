import Image from 'next/image';
import Section from '../UI/Section';

const Intro = () => {
  return (
    <Section className='py-40 bg-transparent'>
      <Image
        src='/assets/pfp.svg'
        alt='profile picture'
        width={50}
        height={50}
        className='mx-auto mb-40'
      />
      <h2 className='text-center text-3xl font-semibold'>Hi, I&apos;m Dennis</h2>
      <h1 className='text-center text-5xl font-bold'>Frontend Developer</h1>
    </Section>
  );
};

export default Intro;

