import React from 'react';

const logos = [
  { name: 'King Crimson', src: '/logos/king-crimson.svg' },
  { name: 'Dream Theater', src: '/logos/dream-theater.svg' },
  { name: 'InsideOut Music', src: '/logos/insideout.svg' },
  { name: 'Kscope', src: '/logos/kscope.svg' },
  { name: 'Magna Carta', src: '/logos/magna-carta.svg' },
  { name: 'Yes', src: '/logos/yes.svg' },
];

export const SocialProof = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-700 mb-10">
          영향력 있는 아티스트 및 레이블
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {logos.map((logo) => (
            <img
              key={logo.name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 filter grayscale opacity-60 hover:opacity-100 hover:filter-none transition-all duration-300"
              src={logo.src}
              alt={logo.name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 