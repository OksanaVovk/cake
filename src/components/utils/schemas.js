import * as yup from 'yup';

export const wishSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /[a-zA-zа-яА-яєЄ]$/,
      'Допускаються лише литинські літери та кирилиця'
    )
    .required(),
  phone: yup
    .string()
    .required()
    .matches(
      /[+3][0-9]{11}$/,
      'Номер телефону має мати наступний вигляд: +380 ХХ ХХХХХХХ'
    ),
  text: yup.string().required(),
});

const cutoff = new Date();
cutoff.setHours(0, 0, 0, 0);

export const orderSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /[a-zA-zа-яА-яєЄ]$/,
      'Допускаються лише литинські літери та кирилиця'
    )
    .required(),
  phone: yup
    .string()
    .required()
    .matches(
      /[+3][0-9]{11}$/,
      'Номер телефону має мати наступний вигляд: +380 ХХ ХХХХХХХ'
    ),
  email: yup.string().email('Не валідне значення емейлу'),
  datePhone: yup.string(),
  // date: yup.date().min(cutoff, 'Дата не може бути раніше, ніж сьогодні'),
  city: yup.string(),
  street: yup.string(),
  house: yup.string(),
  apartment: yup.string(),
  comment: yup.string(),
});
