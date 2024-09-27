import * as yup from 'yup';

const wishSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Будь ласка, введіть валідне ім'я"
    ),
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
