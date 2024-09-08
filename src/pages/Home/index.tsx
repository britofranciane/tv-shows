import React from 'react';
import ShowCard from '@components/ShowCard';
import ErrorPage from '../ErrorPage';
import useShows from '@hooks/useShows/useShows';
import { Show } from '@types/showTypes';
import './styles.scss';

const Home: React.FC = () => {
  const { shows, loading, error } = useShows();

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <div className="home">
      <div className="home__shows-grid">
        {loading
          ? Array.from({ length: 20 }, (_, index) => <ShowCard key={index} />)
          : shows.map((show: Show) => (
              <ShowCard show={show} path={'/details'} key={show.id} />
            ))}
      </div>
    </div>
  );
};

export default Home;
