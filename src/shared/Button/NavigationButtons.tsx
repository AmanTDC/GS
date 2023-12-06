import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './styles';

export const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      aria-label='go to prev'
      className={styles.arrows.prev}
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
      className={styles.arrows.next}
    >
      <IoIosArrowForward
        size={25}
        className={`${!onClick && `cursor-not-allowed text-neutral-500`}`}
      />
    </button>
  );
};
