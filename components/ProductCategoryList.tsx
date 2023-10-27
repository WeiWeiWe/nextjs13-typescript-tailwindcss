import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

type ProductCategoryType = {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
}[];

interface IProps {
  categories: ProductCategoryType;
  slugPrefix: string;
}

const ProductCategoryList: FC<IProps> = ({ categories, slugPrefix }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-4xl">
      {categories?.map((item) => {
        return (
          <Link href={slugPrefix + '/' + item?.slug} key={item?.slug}>
            <div className="w-full aspect-video relative rounded overflow-hidden">
              {item?.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  alt={item?.title}
                  fill
                  sizes="(max-width: 896px) 262px, 390px"
                  priority
                />
              ) : (
                <div className="w-full h-full border border-sky-500 flex justify-center items-center">
                  No Image
                </div>
              )}
            </div>
            <div className="mt-3">
              <h1 className="text-lg font-semibold">{item?.title}</h1>
              <p>{item?.subtitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductCategoryList;
