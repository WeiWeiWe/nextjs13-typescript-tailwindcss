import fs from 'fs';
import path from 'path';

export type ProductCategoryType = {
  slug: string;
  title: string;
  subTitle?: string;
  thumbnail: string;
  rating?: number;
}[];

export const loadCategories = (category: string) => {
  try {
    const jsonRes = fs.readFileSync(
      path.join(process.cwd(), 'data/categories.json'),
      'utf-8'
    );
    const categories = JSON.parse(jsonRes);
    return { product_category: categories[category] };
  } catch (error: any) {
    console.error(error);
    return { product_category: [] };
  }
};

export const loadProductList = (category: string) => {
  try {
    const jsonRes = fs.readFileSync(
      path.join(process.cwd(), 'data/electronics.json'),
      'utf-8'
    );
    const list = JSON.parse(jsonRes);
    return { products: list[category] as ProductCategoryType };
  } catch (error: any) {
    console.error(error);
    return { products: [] };
  }
};
