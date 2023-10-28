import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadCategories } from '@/utils/helper';

interface IProps {}

const Furniture: NextPage<IProps> = async () => {
  const { product_category } = loadCategories('furniture');

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
