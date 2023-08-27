import Project from '../Project/Project';
import Section from '../UI/Section';

const Projects = () => {
  const projectList = [
    {
      id: 'portfolio',
      name: 'Portfolio',
      url: 'https://bzyhas.com',
      repo: 'https://github.com/DBHaslund/home',
      description: 'My own portfolio, built using NextJS, React and Tailwind.',
      slide: '/assets/portfolio.png',
      alt: 'Snapshot of my portfolio',
    },
    {
      id: 'pong',
      name: 'Pong',
      url: 'https://pong.bzyhas.com',
      repo: 'https://github.com/DBHaslund/pong',
      description:
        'A simplified recreation of the classic game Pong, written in javascript utilising canvas. The first real project I coded. Non-responsive, doesnt work on mobile as of now.',
      slide: '/assets/projects/pong.png',
      alt: 'Snapshot of the pong game',
    },
  ];

  let content = projectList.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      url={project.url}
      repo={project.repo}
      description={project.description}
      slide={project.slide}
      alt={project.alt}
    />
  ));

  return (
    <Section id='projects'>
      <h2 className='text-center text-3xl font-semibold'>Projects</h2>
      <div className='flex flex-wrap justify-around gap-8'>{content}</div>
    </Section>
  );
};

export default Projects;
