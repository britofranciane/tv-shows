import React from 'react';
import './styles.scss';

export enum SkeletonType {
  Text = 'text',
  Image = 'image',
  Rectangle = 'rectangle',
}

export interface Props {
  type: SkeletonType;
  width?: string;
  height?: string;
  radius?: string;
}
const SkeletonLoader: React.FC<Props> = ({
  type = SkeletonType.Text,
  width = '100%',
  height = '100%',
  radius = '1rem',
}) => {
  return (
    <div
      className={`skeleton-loader skeleton-loader__${type}`}
      style={{ width, height, borderRadius: radius }}
    />
  );
};

export default SkeletonLoader;
