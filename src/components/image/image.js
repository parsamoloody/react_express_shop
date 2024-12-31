import React from 'react';
// const manBanner = '../assets/man.png';
// const womanLandBanner = '../assets/woman-land.png';
// const geanBanner = '../assets/gean.png';

export default function ExpressIconComponent({uri}) {
  return (
    <img src={uri} alt="Express Icon"
    className="w-full h-full"
     />
  );
};

// export const ManBannerComponent = () => {
//   return (
//     <img src={uri} alt="Man Banner" />
//   );
// };

// export const WomanLandBannerComponent = () => {
//   return (
//     <img src={womanLandBanner} alt="Woman Land Banner" />
//   );
// };

// export const GeanBannerComponent = () => {
//   return (
//     <img src={geanBanner} alt="Gean Banner" />
//   );
// };
