import Intro from './_components/Sections/Intro';
import Contact from './_components/Sections/Contact';
import Projects from './_components/Sections/Projects';
import ReturnTopBtn from './_components/Navigation/ReturnTopBtn';

const Home = () => {
  return (
    <main className='flex min-h-[80vh] flex-col items-center justify-between px-24 py-12'>
      <Intro />
      <Projects />
      <Contact />
      <ReturnTopBtn />      
    </main>
  );
};

export default Home;
