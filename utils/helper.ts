import fs from 'fs';
import path from 'path';

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
