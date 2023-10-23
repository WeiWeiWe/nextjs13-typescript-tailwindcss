import { NextApiHandler } from 'next';
import fs from 'fs';
import path from 'path';

const handler: NextApiHandler = (req, res) => {
  const { name } = req.query as { name: string };

  try {
    const jsonRes = fs.readFileSync(
      path.join(process.cwd(), 'data/categories.json'),
      'utf-8'
    );
    const categories = JSON.parse(jsonRes);
    res.json({ product_category: categories[name] });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error?.message });
  }
};

export default handler;
