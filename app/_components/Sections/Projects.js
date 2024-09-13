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
      slide: '/assets/projects/portfolio.png',
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
    {
      id: 'blog',
      name: 'Blog Site',
      url: 'https://blog.bzyhas.com',
      repo: 'https://github.com/DBHaslund/blog',
      description:
        'Blog site built using a wp backend, React, NextJS and Tailwind.',
      slide: '/assets/projects/blog.png',
      alt: 'Snapshot of the blog site',
    },
    {
      id: 'co2form',
      name: 'CO2 Calculator',
      url: 'https://h-daugaard.dk/om-os/co2-udledning/',
      repo: '',
      description:
        'Form and result page built in regular javascript and css as a plugin for wordpress, interacting with an API for the results.',
      slide: '/assets/projects/co2form.png',
      alt: 'Snapshot of the form',
    },
    {
      id: 'urlsnip',
      name: 'URLSnip, URL Shortener',
      url: 'https://urlsnip.bzyhas.com',
      repo: 'https://github.com/DBHaslund/urlsnip',
      description:
        'URL shortener using React, NextJS and tailwind, utilizing the short.io API. Saves history to localstorage.',
      slide: '/assets/projects/urlsnip.png',
      alt: 'Snapshot of the site',
    },
    {
      id: 'medicinpriser',
      name: 'Medicinpriser',
      url: '',
      repo: 'https://github.com/DBHaslund/medicinpriser',
      description:
        'Android app to look up current medicine prices',
      slide: '/assets/projects/medicinpriser.png',
      alt: 'Snapshot of the site',
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
      <div className='flex flex-wrap justify-center gap-16 px-8'>{content}</div>
    </Section>
  );
};

export default Projects;
