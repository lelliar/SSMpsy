import axios from 'axios'
const http = axios.create({
    baseURL:'http://119.29.6.252:3006/admin/api'
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDFhNjRhMTM1MGJhMTAxMGRiZTNiNCIsImlhdCI6MTYxNDkzNjQ5Nn0.KSjFwgLebC3hvtj5_YZZk3ri3l4h8Fi4ohCMKX37Q6c"
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default http