import React from 'react';
import { EpisodeCard } from '@components/index';
import EpisodeListLoader from './EpisodeListLoader';
import { Episode } from '@types/showTypes';
import './styles.scss';

interface Props {
  episodes: Episode[];
  loading: boolean;
}

const EpisodeList: React.FC<Props> = ({ episodes, loading }) => {
  return (
    <div className="episodes-section__episodes-list">
      {loading ? (
        <EpisodeListLoader />
      ) : (
        episodes?.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))
      )}
    </div>
  );
};

export default EpisodeList;
