import React from 'react';
import SkeletonLoader, { SkeletonType } from '@components/SkeletonLoader';

const EpisodeListLoader: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <React.Fragment key={index}>
          <SkeletonLoader type={SkeletonType.Image} height="200px" />
          <SkeletonLoader type={SkeletonType.Text} height="1rem" />
        </React.Fragment>
      ))}
    </>
  );
};

export default EpisodeListLoader;
