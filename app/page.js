import Intro from './_components/Sections/Intro';
import About from './_components/Sections/About';
import Projects from './_components/Sections/Projects';
import Contact from './_components/Sections/Contact';
import ReturnTopBtn from './_components/Navigation/ReturnTopBtn';

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-between py-12'>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <ReturnTopBtn />
    </main>
  );
};

export default Home;
