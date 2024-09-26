import * as yup from 'yup';

const wishSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .matches(/^[A-Za-z ]*$/, "Будь ласка, введіть дійсне ім'я"),
  phone: yup
    .string()
    .required()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Номер телефону недійсний'
    ),
  text: yup.string().required(),
});

export default wishSchema;
