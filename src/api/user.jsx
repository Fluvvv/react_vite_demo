import request from '@/utils/request.jsx'

export const allUser = () => {
  return request({
    method: 'GET',
    url: '/allUser'
  })
}

export const userRegister = (data) => {
  return request({
    method: 'POST',
    url: '/userRegister',
    params: {
      data
    }
  })
}

// export const userLogin = (data) => {
//   return request({
//     method: 'GET',
//     url: '/userLogin',
//     params: {
//       data
//     }
//   });
// };
export const userLogin = (data) => {
  return request({
    method: 'POST',
    url: '/login',
    data
  })
}
