const Section = ({ children, id, className }) => {
  const classes = `${className} section`

  return <section className={classes} id={id}>{children}</section>;
};

export default Section;
