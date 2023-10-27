'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface IProps {
  params: { subCategory: string };
}

const ApparelSubCategory: NextPage<IProps> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <div>ApparelSubCategory: {subCategory}</div>;
};

export default ApparelSubCategory;
