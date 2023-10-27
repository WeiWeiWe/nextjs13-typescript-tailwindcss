'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  params: { subCategory: string };
}

const FurnitureSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <div>FurnitureSubCategory: {subCategory}</div>;
};

export default FurnitureSubCategory;
