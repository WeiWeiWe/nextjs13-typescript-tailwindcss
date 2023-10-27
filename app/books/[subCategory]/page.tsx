'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  params: { subCategory: string };
}

const BooksSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <div>BooksSubCategory: {subCategory}</div>;
};

export default BooksSubCategory;
