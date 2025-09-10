import React from 'react';

const FlashingHeader: React.FC = () => {
  return (
    <div className="flex items-center pt-3">
      <h1 className="text-lg font-bold text-red-600 animate-flash">
        Work under progress
      </h1>
    </div>
  );
};

export default FlashingHeader;
