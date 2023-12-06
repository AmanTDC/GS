import { Settings } from 'react-slick';

export const VERIFICATION_SLICK_SETTING: Settings = {
  slidesToShow: 3.5,
  swipeToSlide: true,
  infinite: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2.45,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 725,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
