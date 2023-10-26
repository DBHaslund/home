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
          <a href='https://github.com/DBHaslund'>
            <Image
              src='/assets/github.svg'
              alt='Github logo'
              width={100}
              height={100}
              className='w-12 mx-1'
            ></Image>
          </a>
          <a href='https://www.linkedin.com/in/dennis-haslund-b4809b290?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTxPxPh7cQs2GnxGmRQwdag%3D%3D'>
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
