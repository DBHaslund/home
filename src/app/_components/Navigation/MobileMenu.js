const MobileMenu = (props) => {
  return (
      <nav className='md:invisible fixed top-0 left-0 w-4/5 bg-gray h-full flex flex-col justify-center items-center text-3xl'>
        <ul className='flex flex-col gap-4 items-center'>{props.menuLinks}</ul>
      </nav>
  );
};

export default MobileMenu;
