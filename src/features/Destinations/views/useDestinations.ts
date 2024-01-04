import { viewCourses } from '@/utils/schemas';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';

const useDestinations = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    checkbox: false,
  };

  const [isLoading, setIsLoading] = useState(false);
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
      console.log(values);

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
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
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
  };
};

export default useDestinations;
