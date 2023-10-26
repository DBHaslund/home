import axios from 'axios';

const sendMail = async (email, name, message) => {
  return axios({
    method: 'POST',
    url: '/api/contact',
    data: {
      email: email,
      name: name,
      message: message,
    },
  });
};

export default sendMail;
