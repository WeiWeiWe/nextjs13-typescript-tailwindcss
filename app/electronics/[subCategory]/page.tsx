import { NextPage } from 'next';
import HeadClient from '@/components/HeadClient';
import ProductCategoryList from '@/components/ProductCategoryList';
import { loadCategories, loadProductList } from '@/utils/helper';

interface IProps {
  params: { subCategory: string };
}

export const generateStaticParams = () => {
  const { product_category } = loadCategories('electronics');
  const slugs = product_category?.map(({ slug }) => {
    return {
      subCategory: slug,
    };
  });

  return slugs;
};

const ElectronicsSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;
  const { products } = loadProductList(subCategory);

  return (
    <HeadClient subCategory={subCategory}>
      ElectronicsSubCategory: {subCategory}
      <ProductCategoryList categories={products} slugPrefix={subCategory} />
    </HeadClient>
  );
};

export default ElectronicsSubCategory;
