import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:9633/'
})

request.interceptors.request.use(function(config) {
  // let user = localStorage.getItem('user');
  // if(user) {
  //   config.headers.token = JSON.parse(user).token;
  // }

  return config;
})
export default request;