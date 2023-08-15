const NavBar = (props) => {
  return (
      <nav className='hidden md:flex w-screen justify-center my-8 py-2 bg-gray'>
        <ul className='flex gap-16'>{props.menuLinks}</ul>
      </nav>
    
  );
};

export default NavBar;
