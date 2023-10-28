import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadCategories } from '@/utils/helper';

interface IProps {}

const Books: NextPage<IProps> = async () => {
  const { product_category } = loadCategories('books');

  return (
    <div>
      <ProductCategoryList slugPrefix="books" categories={product_category} />
    </div>
  );
};

export default Books;
