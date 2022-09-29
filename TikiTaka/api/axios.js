import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.response.use(
  res => res,
  async error => {
    if (error.response?.status === 401) {
      const response = await axios.post(
        'auth/refresh',
        {},
        {withCredentials: true},
      );
      if (response.status === 200) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        return axios(error.config);
      }
    }
    return error;
  },
);
