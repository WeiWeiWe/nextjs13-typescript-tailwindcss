import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadCategories } from '@/utils/helper';

interface IProps {}

const Electronics: NextPage<IProps> = async () => {
  const { product_category } = loadCategories('electronics');

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
