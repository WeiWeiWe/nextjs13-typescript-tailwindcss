'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  params: { subCategory: string };
}

const KitchenSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <div>KitchenSubCategory: {subCategory}</div>;
};

export default KitchenSubCategory;
