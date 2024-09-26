import emailjs from 'emailjs-com';

const YOUR_SERVICE_ID = 'service_crp0fo9';
const YOUR_TEMPLATE_ID = 'template_0nhrx7e';
const YOUR_PUBLIC_KEY = '_3q6GQk1_Gb8tvb_D';

export const sentEmail = event => {
  emailjs
    .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, event.target, YOUR_PUBLIC_KEY)
    .then(
      response => {
        console.log('SUCCESS!', response.status, response.text);
      },
      error => {
        console.log(error.text);
      }
    );
};
