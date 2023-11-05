import { FC } from 'react';

interface IProps {}

const Loading: FC<IProps> = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-4xl">
      {Array(4)
        .fill('')
        .map((_, index) => {
          return (
            <div key={index} className="space-y-3">
              <div className="h-28 bg-blue-400"></div>
              <div className="h-4 bg-blue-400"></div>
              <div className="h-4 bg-blue-400"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Loading;
