import Banner from './banner';
import Functions from './functions';
import Solution from './solution';
import Request from './request';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Fortune | Trang chủ</title>
      </Helmet>
      <section>
        <div>
          <Banner />
        </div>
        <div className="py-16 bg-white">
          <Functions />
        </div>
        <div className="py-16">
          <Solution />
        </div>
        <div className="pt-16">
          <Request />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
