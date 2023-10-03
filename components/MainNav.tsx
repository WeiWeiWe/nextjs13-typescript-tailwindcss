import { FC } from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface IProps {}

const MainNav: FC<IProps> = () => {
  return (
    <div className="bg-gray-900 fixed top-0 left-0 bottom-0 w-44">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </div>
  );
};

export default MainNav;
