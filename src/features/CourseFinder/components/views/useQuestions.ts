import { viewCourses } from '@/utils/schemas';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const useQuestions = (index: number, action: (idx: number) => void) => {
  const [selected, setSelected] = useState<any>(-1);
  const [answers, setAnswers] = useState({
    country: '',
    degree: '',
    eduction: '',
    areaOfStudy: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const onSubmit = () => {
    index === 0
      ? setAnswers({
          ...answers,
          country: selected?.name,
        })
      : index === 1
      ? setAnswers({
          ...answers,
          degree: selected,
        })
      : index === 2
      ? setAnswers({
          ...answers,
          eduction: selected,
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
      setIsLoading(true);
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
          setIsLoading(false);
          toast.success('Message Sent !', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message',
          });
          router.push('/courseResult');
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },
  });
  const inputType = (idx: number) =>
    idx === 0 ? values?.name : idx === 1 ? values?.email : values?.phone;
  const errorType = (idx: number) =>
    idx === 0 ? errors?.name : idx === 1 ? errors?.email : errors?.phone;
  const touchedType = (idx: number) =>
    idx === 0 ? touched?.name : idx === 1 ? touched?.email : touched?.phone;

  return {
    onSubmit,
    inputType,
    errorType,
    touchedType,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    selected,
    setSelected,
    isLoading,
  };
};

export default useQuestions;
