import React from 'react';
import SkeletonLoader, { SkeletonType } from '@components/SkeletonLoader';

const ShowInfoLoader: React.FC = () => {
  return (
    <div className="show-info">
      <div className="show-info__show-image">
        <SkeletonLoader type={SkeletonType.Image} height="588px" />
      </div>

      <div className="show-info__info-text">
        <h1>
          <SkeletonLoader
            type={SkeletonType.Text}
            height="3rem"
            width="300px"
          />
        </h1>
        <p>
          <SkeletonLoader
            type={SkeletonType.Text}
            height="1.5rem"
            width="150px"
          />
        </p>
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonLoader
            key={index}
            type={SkeletonType.Text}
            height="1rem"
            width="500px"
          />
        ))}
        <p>
          <SkeletonLoader
            type={SkeletonType.Text}
            height="1.5rem"
            width="400px"
          />
        </p>
        <div className="show-info__info-text__badges-container">
          {Array.from({ length: 3 }, (_, i) => (
            <SkeletonLoader
              key={i}
              type={SkeletonType.Text}
              height="1.75rem"
              width="100px"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowInfoLoader;
