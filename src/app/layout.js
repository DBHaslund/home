import Header from './_components/UI/Header';
import Footer from './_components/UI/Footer';
import './globals.css';

export const metadata = {
  title: 'DBHaslund',
  description: 'Portfolio site created by and for Dennis Haslund',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className=''>
        <Header />
        {children}
        <div id='portal'/>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
