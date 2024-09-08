import React from 'react';
import { Link } from 'react-router-dom';
import { Show } from '../../types/showTypes';
import SkeletonLoader, { SkeletonType } from '../SkeletonLoader';
import './styles.scss';

interface Props {
  show?: Show;
  path?: string;
}

const ShowCard: React.FC<Props> = ({ show, path }) => {
  return (
    <Link
      to={path && show ? `${path}/${show.id}` : '#'}
      key={show && show.id}
      className="show-card"
    >
      {show ? (
        <img
          src={show.image?.medium || '/placeholder.png'}
          alt={show.name}
          className="show-card__image"
        />
      ) : (
        <SkeletonLoader type={SkeletonType.Image} height="430px" />
      )}

      <h2 className="show-card__title">
        {show && show.name ? (
          show.name
        ) : (
          <SkeletonLoader type={SkeletonType.Text} height="1.5rem" />
        )}
      </h2>
    </Link>
  );
};

export default ShowCard;
