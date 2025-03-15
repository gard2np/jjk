import React from 'react';

interface StemButtonProps {
  stem: string;
  onClick: () => void;
}

const StemButton: React.FC<StemButtonProps> = ({ stem, onClick }) => {
  return (
    <button
      className="p-2 m-1 text-3xl bg-gray-200 hover:bg-gray-400 rounded-lg"
      onClick={onClick}
    >
      {stem}
    </button>
  );
};

export default StemButton;
