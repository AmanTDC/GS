import { ReactNode, useState } from 'react';
import styles from './styles';
import {
  AiOutlineMinus,
  AiOutlineMinusCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from 'react-icons/ai';

interface IAccordion {
  data: {
    title: string;
    description: ReactNode;
    accTitleBg?: string;
    accDescriptionBg?: string;
    descriptionColor?: string;
    titleColor?: string;
    width?: number;
  }[];
  defaultOpen?: number;
  wrapperClass?: string;
  labelClass?: string;
}

const Accordion = ({
  data,
  defaultOpen,
  wrapperClass,
  labelClass,
}: IAccordion) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultOpen ?? -1);
  const handleAccordionToggle = (index: number) => {
    setActiveIndex((p) => (p === index ? -1 : index));
  };
  return (
    <div
      className={styles.accordion(
        data?.some((acc) => acc?.width && acc?.width !== null)
      )}
    >
      {data?.map((acc, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={acc.title}
            // style={{
            //   width: width && width < 768 ? '100%' : `${acc.width}%` || '100%',
            // }}
            className={styles.accordionInner(wrapperClass)}
          >
            <div
              className={styles.accordionInnerChild}
              style={{ background: acc.accTitleBg || '#F9FAFB' }}
              onClick={() => handleAccordionToggle(index)}
            >
              <p
                className={styles.accordionInnerPara(labelClass)}
                style={{ color: acc.titleColor || 'black' }}
              >
                {acc.title}
              </p>
              {isActive ? (
                <AiOutlineMinus className={styles.accordionIcon} />
              ) : (
                // AiOutlinePlusCircle
                <AiOutlinePlus className={styles.accordionIcon} />
              )}
            </div>
            {isActive && (
              <section
                className={styles.accordionContent}
                style={{
                  background: acc.accDescriptionBg || '#F9FAFB',
                  color: acc.descriptionColor || 'black',
                }}
              >
                {acc.description}
              </section>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
