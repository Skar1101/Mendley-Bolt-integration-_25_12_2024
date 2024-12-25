import React from 'react';

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-75"
      >
        <source
          src="https://cdn.dribbble.com/userupload/16642885/file/original-6433de79a34f799bf4a634cbbdda7967.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}