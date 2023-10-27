import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';

interface IProps {}

const Electronics: NextPage<IProps> = async () => {
  const { product_category } = await fetch(
    'http://localhost:3000/api/category?name=electronics'
  ).then((res) => res.json());

  return (
    <div>
      <ProductCategoryList
        slugPrefix="electronics"
        categories={product_category}
      />
    </div>
  );
};

export default Electronics;
