import { Helmet } from 'react-helmet';
import Banner from './banner';
import Choice from './choice';

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Fortune | Sản phẩm</title>
      </Helmet>
      <section>
        <div>
          <Banner />
        </div>
        <div>
          <Choice />
        </div>
      </section>
    </>
  );
};

export default Product;
