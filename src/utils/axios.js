import axios from "axios";
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "x-api-key": 1234,
};
const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL_DEV,
  headers,
});

//request interceptor to add the auth token header to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("aqari_token");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const previousRequest = error?.config;
//     if (error?.response?.data?.message === 'Token is not defined.' && !previousRequest?.sent) {
//       console.log('okkkkkk ddddd');
//       previousRequest.sent = true;
//       localStorage.removeItem('aqari_token');
//       localStorage.removeItem('user_type');
//       window.location.replace('/');
//     }
//     return Promise.reject((error.response && error.response.data) || 'Something went wrong');
//   }
// );

export default axiosInstance;
