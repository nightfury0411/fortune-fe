import Footer from './Footer';
import Navbar from './Navbar';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sub3">{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
