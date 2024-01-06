import { viewCourses } from '@/utils/schemas';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useScrollHidden from '@/utils/hooks/useScrollHidden';

const useServices = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    checkbox: false,
  };

  const [isLoading, setIsLoading] = useState(-1);
  useScrollHidden(isLoading === 1);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
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
        .then(() => setIsLoading(1))
        .catch((err) => {
          console.log(err);
          setIsLoading(-1);
        });
    },
  });
  return {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    isLoading,
    setIsLoading,
  };
};

export default useServices;
