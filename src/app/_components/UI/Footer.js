import Image from 'next/image';
// import linkedinLogo from '/assets/linkedin.svg';
// import githubLogo from '/assets/github.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='py-[2px] bg-gradient-to-r from-purple via-bteal to-purple'></div>
      <div className='flex justify-between px-4 py-8'>
        <p className=''>
          Created by <br />
          Dennis Haslund <span>{year}</span>
        </p>
        <div className='flex'>
          <a href='https://github.com'>
            <Image
              src='/assets/github.svg'
              alt='Github logo'
              width={100}
              height={100}
              className='w-12 mx-1'
            ></Image>
          </a>
          <a href='https://linkedin.com'>
            <Image
              src='/assets/linkedin.svg'
              alt='LinkedIn logo'
              width={100}
              height={100}
              className='w-12 mx-1'
            ></Image>
          </a>
        </div>
      </div>
      {/* <div className='pb-1 md:via-purple bg-gradient-to-r from-purple via-bteal to-purple'></div> */}
    </footer>
  );
};

export default Footer;
