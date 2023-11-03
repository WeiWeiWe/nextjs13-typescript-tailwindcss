import { NextPage } from 'next';
import { loadAllProducts } from '@/utils/helper';

interface IProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = loadAllProducts();
  const slugs = [];

  for (const key in products) {
    const productByCategory = products[key];

    if (Array.isArray(productByCategory) && productByCategory?.length > 0) {
      for (const product of productByCategory) {
        slugs.push({
          slug: [key, product?.slug || ''],
        });
      }
    }
  }

  return slugs;
}

const ElectronicsDetail: NextPage<IProps> = ({ params }) => {
  return (
    <div className="font-semibold text-lg">
      {params?.slug?.[0]} / {params?.slug?.[1]}
    </div>
  );
};

export default ElectronicsDetail;
