const NavBar = (props) => {
  return (
    <nav className='hidden md:flex justify-center gap-12'>
      {props.menuLinks}
    </nav>
  );
};

export default NavBar;
