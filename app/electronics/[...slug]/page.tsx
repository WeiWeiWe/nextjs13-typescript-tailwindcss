import { NextPage } from 'next';

interface IProps {
  params: {
    slug: string;
  };
}

const ElectronicsDetail: NextPage<IProps> = ({ params }) => {
  return (
    <div className="font-semibold text-lg">
      {params?.slug?.[0]} / {params?.slug?.[1]}
    </div>
  );
};

export default ElectronicsDetail;
