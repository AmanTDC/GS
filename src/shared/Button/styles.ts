import clsx from 'clsx';

const styles = {
  backButton: (className?: string) =>
    clsx(
      `flex w-fit cursor-pointer items-center gap-1 font-medium md:text-xl relative`,
      className
    ),
  backButtonIcon: 'text-xl md:text-2xl',
  buttonName: 'absolute left-6',
  buttonWrapper:
    'absolute left-[-0.4rem] z-[1] w-20 transition-all duration-500 hover:left-[-15px]',
  buttonClass: (
    fullWidth?: boolean,
    size?: string,
    className?: string,
    isDisabled?: boolean,
    noHover?: boolean
  ) =>
    clsx(
      'h-max rounded-md text-white bg-blue-500 lg:hover:bg-blue-400 duration-500 p-2 px-5 text-base',
      fullWidth && 'w-full',
      {
        'p-1 text-sm': size === 'sm',
        'p-3 text-lg': size === 'lg',
      },
      className,
      isDisabled && 'cursor-not-allowed opacity-75',
      noHover && 'lg:hover:transition-none'
    ),
  arrows: {
    next: 'absolute -bottom-16 left-[55%] z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 md:left-16',
    prev: 'absolute -bottom-16 left-[35%] z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 md:left-4',
  },
};

export default styles;
