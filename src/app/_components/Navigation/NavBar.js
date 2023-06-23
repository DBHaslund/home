const NavBar = (props) => {
  return (
    <div className='fixed h-20 flex justify-between items-center md:flex-col w-full text-3xl md:text-2xl my-8'>
      <div className='h-32 bg-gradient-to-r from-purple via-bteal to-purple my-8'>
        <nav className='hidden md:flex w-screen justify-center my-1 py-2 bg-purple'>
          <ul className='flex gap-16'>{props.menuLinks}</ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
