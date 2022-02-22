import request from '@/utils/request.jsx'

export const home = (data) => {
  return request({
    method: 'post',
    url: '/home',
    data,
    headers: {
      authorization:
        'aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyJ9LCJpYXQiOjE2NDQ2NTg2NDksImV4cCI6MTY0NDY2MjI0OX0.dedzA8yaIJg8SbrxGeIzY0rc0N4nDr5T8nyCog_ALF8'
    }
  })
}
