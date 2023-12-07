import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './styles';

export const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  console.log({ s: window.innerWidth });

  return (
    <button
      aria-label='go to prev'
      className={
        window.innerWidth > 550 ? styles.arrows.prev : styles.arrows.prevMobile
      }
      onClick={onClick}
    >
      <IoIosArrowBack
        size={25}
        className={`${!onClick && `cursor-not-allowed text-neutral-500`}`}
      />
    </button>
  );
};

export const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      aria-label='go to next'
      onClick={onClick}
      className={
        window.innerWidth > 550 ? styles.arrows.next : styles.arrows.nextMobile
      }
    >
      <IoIosArrowForward
        size={25}
        className={`${!onClick && `cursor-not-allowed text-neutral-500`}`}
      />
    </button>
  );
};
