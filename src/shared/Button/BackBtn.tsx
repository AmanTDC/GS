import { IoIosArrowBack } from 'react-icons/io';
import styles from './styles';
import { useRouter } from 'next/router';

interface IBackButton {
  btnName?: string;
  className?: string;
}
const BackBtn = ({ className, btnName }: IBackButton) => {
  const router = useRouter();
  return (
    <div className={styles.backButton(className)} onClick={() => router.back()}>
      <div className={styles.buttonWrapper}>
        <IoIosArrowBack className={styles.backButtonIcon} />
      </div>
      <p className={styles.buttonName}>{btnName ?? 'Back'}</p>
    </div>
  );
};

export default BackBtn;
