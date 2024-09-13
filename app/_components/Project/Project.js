import Image from 'next/image';
import Link from 'next/link';

const Project = (props) => {
  return (
    <div>
      <h3 className='text-center font-semibold py-2'>{props.name}</h3>
      <Link href={props.url}>
        <Image
          src={props.slide}
          alt={props.alt}
          width={300}
          height={150}
          className='m-auto w-[300px] h-[150px] object-cover transition-all duration-200 scale-100 hover:scale-95 hover:opacity-80'
        />
      </Link>
      <div className='flex justify-center gap-16 py-2 underline'>
        {props.url && (
          <a className='hover:text-white' href={props.url}>
            Link
          </a>
        )}
        {props.repo && (
          <a className='hover:text-white' href={props.repo}>
            Github
          </a>
        )}
      </div>
      <p className='max-w-[300px]'>{props.description}</p>
    </div>
  );
};

export default Project;
