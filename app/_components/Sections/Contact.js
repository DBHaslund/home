import ContactForm from '../ContactForm/ContactForm';
import Section from '../UI/Section';

const Contact = () => {
  return (
    <Section id='contact'>
      <h2 className='text-center text-3xl font-semibold'>Contact Me</h2>
      <ContactForm />
    </Section>
  );
};

export default Contact;
