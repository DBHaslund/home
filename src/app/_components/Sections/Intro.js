import Image from 'next/image';
import Section from '../UI/Section';

const Intro = () => {
  return (
    <Section className='py-40 bg-transparent'>
      <Image
        src='/assets/pfp.png'
        alt='profile picture'
        width={100}
        height={100}
        className='mx-auto mb-32 rounded-full shadow-[0_0_1em_1em_#0aadaf]'
      />
      <h2 className='text-center text-3xl font-semibold'>Hi, I&apos;m Dennis</h2>
      <h1 className='text-center text-5xl font-bold'>Frontend Developer</h1>
    </Section>
  );
};

export default Intro;

