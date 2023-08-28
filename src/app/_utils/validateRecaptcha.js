import axios from 'axios';

const validateRecaptcha = async (recaptchaResponse) => {
  return axios({
    method: 'POST',
    url: '/api/reCaptcha',
    data: { recaptchaResponse: recaptchaResponse },
  });
};

export default validateRecaptcha;
