import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Select, SkeletonLoader } from '@components/index';
import useShowDetails from '@hooks/useShowDetails/useShowDetails';
import { SkeletonType } from '@components/SkeletonLoader';
import { Episode } from '@types/showTypes';
import { EpisodeList, ShowInfo } from './components/index';
import ErrorPage from '../ErrorPage';
import './styles.scss';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const { showDetails, loading, error } = useShowDetails(Number(id));

  const seasons = useMemo(() => {
    return showDetails
      ? Array.from(
          new Set(
            showDetails._embedded.episodes.map((ep: Episode) => ep.season),
          ),
        )
      : [];
  }, [showDetails]);

  if (error) return <ErrorPage />;

  const filteredEpisodes = showDetails?._embedded.episodes.filter(
    (ep: Episode) => ep.season === selectedSeason,
  );

  return (
    <div className="details">
      <ShowInfo showDetails={showDetails} loading={loading} />
      <div className="details__episodes-section">
        {loading ? (
          <SkeletonLoader
            type={SkeletonType.Text}
            height="2rem"
            width="300px"
          />
        ) : (
          <Select
            options={seasons}
            value={selectedSeason}
            onChange={(e: string) => setSelectedSeason(Number(e))}
          />
        )}
        <EpisodeList episodes={filteredEpisodes || []} loading={loading} />
      </div>
    </div>
  );
};

export default Details;
