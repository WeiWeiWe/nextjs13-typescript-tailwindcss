'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  params: { subCategory: string };
}

const ElectronicsSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <div>ElectronicsSubCategory: {subCategory}</div>;
};

export default ElectronicsSubCategory;
