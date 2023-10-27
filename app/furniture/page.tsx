import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';

interface IProps {}

const Furniture: NextPage<IProps> = async () => {
  const { product_category } = await fetch(
    'http://localhost:3000/api/category?name=furniture'
  ).then((res) => res.json());

  return (
    <div>
      <ProductCategoryList
        slugPrefix="furniture"
        categories={product_category}
      />
    </div>
  );
};

export default Furniture;
