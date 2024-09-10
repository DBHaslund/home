import Section from '../UI/Section';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { RiJavascriptFill, RiReactjsLine, RiGithubFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

const About = () => {
  return (
    <Section id='about'>
      <h2 className='text-center text-3xl font-semibold'>About Me</h2>
      <div className='pt-4 px-16 md:px-32'>
        <p className='mb-8 '>
          After a lifelong interest in tech, dabbling with various things over
          the years, a good friend of mine finally pushed me to actually learn
          something concrete a couple of years ago. It started with simple
          CSS/JS, and since then I&apos;ve delved into ReactJS, NextJS,
          Tailwind, as well as a bit of Wordpress.
        </p>
        <p className='text-center'>
          I&apos;m always trying to improve my skills. I&apos;m currently
          relatively comfortable with:
        </p>
        <div className='flex justify-center pt-4'>
          <ul>
            <li className='flex p-1'>
              <i className='text-icon'>
                <TiHtml5 />
              </i>
              HTML
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <TiCss3 />
              </i>
              CSS
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <RiJavascriptFill />
              </i>
              Javascript
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <RiReactjsLine />
              </i>
              ReactJS
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <TbBrandNextjs />
              </i>
              NextJS
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <RiReactjsLine />
              </i>
              React Native
            </li>
            <li className='flex p-1'>
              <i className='text-icon'>
                <RiGithubFill />
              </i>
              Github
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
