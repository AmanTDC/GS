import * as Yup from 'yup';

export const viewCourses = Yup.object({
  email: Yup.string().email().required('This field is mandatory'),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter valid number.',
      excludeEmptyString: false,
    })
    .required('This field is mandatory'),
  name: Yup.string()
    .min(2)
    .max(50)
    .required('This field is mandatory')
    .matches(
      /^[a-zA-Z ]+$/,
      'Name cannot have special characters and whitespaces'
    )
    .strict(true)
    .trim(),
});
