import * as React from 'react';
import DOMPurify from 'dompurify';
import { Episode } from '../../types/showTypes';
import SkeletonLoader, { SkeletonType } from '../SkeletonLoader';
import './styles.scss';

interface Props {
  episode: Episode;
}

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  const sanitizedSummary = DOMPurify.sanitize(episode.summary);
  return (
    <div className="episode-card">
      {episode.image ? (
        <img
          src={episode.image?.medium || '/placeholder.png'}
          alt={episode.name}
          className="episode-card__image"
        />
      ) : (
        <SkeletonLoader type={SkeletonType.Image} height="270px" />
      )}
      <div className="episode-card__episode-info">
        <h3>
          {episode.number}. {episode.name}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
        <p>
          <strong>Runtime:</strong> {episode.runtime} minutes
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
