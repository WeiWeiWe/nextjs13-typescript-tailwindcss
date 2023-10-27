import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';

interface IProps {}

const Books: NextPage<IProps> = async () => {
  const { product_category } = await fetch(
    'http://localhost:3000/api/category?name=books'
  ).then((res) => res.json());

  return (
    <div>
      <ProductCategoryList
        slugPrefix="books"
        categories={product_category}
      />
    </div>
  );
};

export default Books;
