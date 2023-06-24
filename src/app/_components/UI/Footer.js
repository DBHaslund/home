import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <ContactForm />
      <p className='text-center'>
        Created by Dennis Haslund <span>{year}</span>
      </p>
    </footer>
  );
};

export default Footer;
