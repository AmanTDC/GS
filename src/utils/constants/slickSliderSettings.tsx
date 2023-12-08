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
      breakpoint: 700,
      settings: {
        slidesToShow: 1.5,
        dots: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};

export const STATS_SECTION: Settings = {
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1000, //start delay in  milleSecs
  cssEase: 'linear',
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
