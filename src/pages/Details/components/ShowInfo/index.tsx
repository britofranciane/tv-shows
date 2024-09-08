import React from 'react';
import { Badge } from '@components/index';
import { sanitizeHtml } from '@utils/sanitizeHtml';
import { ShowDetails } from '@types/showTypes';
import ShowInfoLoader from './ShowInfoLoader';
import './styles.scss';

interface Props {
  showDetails: ShowDetails | null;
  loading: boolean;
}

const ShowInfo: React.FC<Props> = ({ showDetails, loading }) => {
  const sanitizedSummary = showDetails ? sanitizeHtml(showDetails.summary) : '';

  if (loading) {
    return <ShowInfoLoader />;
  }

  return (
    <div className="show-info">
      <div style={{ maxWidth: '400px', width: '100%' }}>
        {showDetails && (
          <img
            className="show-info__show-image"
            src={showDetails.image?.original || '/placeholder.png'}
            alt={`Image of ${showDetails.name}`}
          />
        )}
      </div>

      <div className="show-info__info-text">
        <h1>{showDetails?.name}</h1>

        <p>
          <span>Description</span>
        </p>

        <p dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />

        <p>
          <span>Premiered </span>
          {showDetails?.premiered}
        </p>

        <div className="show-info__info-text__badges-container">
          <span>Genres</span>
          {showDetails?.genres.map((genre: string) => (
            <Badge text={`# ${genre}`} className={'info'} key={genre} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
