import { NextPage } from 'next';

interface IProps {}

// @ts-expect-error Server Component
const Electronics: NextPage<IProps> = async () => {
  const { product_category } = await fetch(
    'http://localhost:3000/api/category?name=electronics'
  ).then((res) => res.json());

  type ProductCategoryType = {
    slug: string;
    title: string;
    subtitle: string;
    thumbnail: string;
  }[];

  return (
    <div>
      {(product_category as ProductCategoryType)?.map((item) => {
        return <div key={item.slug}>{item.title}</div>;
      })}
    </div>
  );
};

export default Electronics;
