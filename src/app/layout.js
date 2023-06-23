import Header from './_components/UI/Header';
import './globals.css';

export const metadata = {
  title: 'DBHaslund',
  description: 'Portfolio site created by and for Dennis Haslund',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-purple text-bteal'>
        <Header />
        {children}
        <div id='portal'/>
      </body>
    </html>
  );
};

export default RootLayout;
