import React from 'react';
import './styles.scss';

interface Props {
  message?: string;
}

const ErrorPage: React.FC<Props> = ({ message }) => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">
        {message || 'Oops! The page you are looking for was not found.'}
      </p>
    </div>
  );
};

export default ErrorPage;
