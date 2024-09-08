import React from 'react';
import './styles.scss';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => {
  return <span className={`badge ${className}`}>{text}</span>;
};

export default Badge;
