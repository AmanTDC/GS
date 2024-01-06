import { viewCourses } from '@/utils/schemas';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const useQuestions = (index: number, action: (idx: number) => void) => {
  const [selected, setSelected] = useState<any>(-1);
  const [answers, setAnswers] = useState({
    country: '',
    degree: '',
    level: '',
    areaOfStudy: '',
  });
  const [isLoading, setIsLoading] = useState(-1);
  useScrollHidden(isLoading === 1);
  const router = useRouter();
  const onSubmit = () => {
    index === 0
      ? setAnswers({
          ...answers,
          country: selected,
        })
      : index === 1
      ? setAnswers({
          ...answers,
          degree: selected,
        })
      : index === 2
      ? setAnswers({
          ...answers,
          level: selected,
        })
      : index === 3
      ? setAnswers({
          ...answers,
          areaOfStudy: selected,
        })
      : null;
    action(index + 1);
    setSelected(-1);
  };
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    checkbox: false,
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: viewCourses,

    onSubmit: async (values) => {
      setIsLoading(0);
      var templateParams = {
        name: values?.name,
        email: values?.email,
      };
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((res) => {
          setIsLoading(1);

          router.push({
            pathname: '/courseResult',
            query: { data: JSON.stringify(answers) },
          });
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(-1);
        });
    },
  });

  return {
    onSubmit,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    selected,
    setSelected,
    isLoading,
    router,
    handleSubmit,
    answers,
    setIsLoading,
  };
};

export default useQuestions;
