import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';

interface IProps {}

const Apparel: NextPage<IProps> = async () => {
  const { product_category } = await fetch(
    'http://localhost:3000/api/category?name=apparel'
  ).then((res) => res.json());

  return (
    <div>
      <ProductCategoryList
        slugPrefix="apparel"
        categories={product_category}
      />
    </div>
  );
};

export default Apparel;
