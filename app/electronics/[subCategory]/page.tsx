import { NextPage } from 'next';
import HeadClient from '@/components/HeadClient';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadProductList } from '@/utils/helper';

interface IProps {
  params: { subCategory: string };
}

const ElectronicsSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;
  const { products } = loadProductList(subCategory);

  return (
    <HeadClient subCategory={subCategory}>
      ElectronicsSubCategory: {subCategory}
      <ProductCategoryList
        categories={products}
        slugPrefix={'electrinics/' + subCategory}
      />
    </HeadClient>
  );
};

export default ElectronicsSubCategory;
