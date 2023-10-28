import { NextPage } from 'next';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadCategories } from '@/utils/helper';

interface IProps {}

const Apparel: NextPage<IProps> = async () => {
  const { product_category } = loadCategories('apparel');

  return (
    <div>
      <ProductCategoryList slugPrefix="apparel" categories={product_category} />
    </div>
  );
};

export default Apparel;
