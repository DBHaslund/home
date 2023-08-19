import Image from 'next/image';

const Project = (props) => {
  console.log(props);
  return (
    <div>
      <h3 className='text-center font-semibold py-2'>{props.name}</h3>
      <Image
        src={props.slide}
        alt={props.alt}
        width={300}
        height={150}
        className='m-auto w-[300px] h-[150px] object-cover'
      />
      <div className='flex justify-center gap-16 py-2'>
        <a href={props.url}>Link</a>
        <a href={props.repo}>Github</a>
      </div>
      <p className='max-w-[300px]' >{props.description}</p>
    </div>
  );
};

export default Project;
