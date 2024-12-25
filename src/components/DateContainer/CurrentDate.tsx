import React from 'react';

export default function CurrentDate() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <h2 className="text-2xl font-semibold text-white mb-6">
      {formattedDate}
    </h2>
  );
}