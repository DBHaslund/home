import Intro from './_components/Sections/Intro/Intro';
import Contact from './_components/Sections/Contact/Contact';
import Projects from './_components/Sections/Projects/Projects';

const Home = () => {
  return (
    <main className='flex min-h-[80vh] flex-col items-center justify-between px-24 py-12'>
      <Intro />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
