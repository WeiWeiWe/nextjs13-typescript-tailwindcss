'use client';

import { FC, ReactNode, useEffect } from 'react';

interface IProps {
  subCategory: string;
  children: ReactNode;
}

const HeadClient: FC<IProps> = ({ subCategory, children }) => {
  useEffect(() => {
    document.title = subCategory;
  }, []);

  return <>{children}</>;
};

export default HeadClient;
