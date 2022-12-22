import axios from 'axios'

const BASE_URL = 'https://pk84iektul.execute-api.us-west-1.amazonaws.com/dev'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7IlVJRF9QSyI6IkJDRTcwNTRCLTg2N0UtNEE3RC1BRTM3LTk0RUQyMDk5NzgxNSIsIkxvZ2luTmFtZSI6ImFuc2hpa2EtdGVzdCIsIkZpcnN0TmFtZSI6ImFuc2hpa2EiLCJMYXN0TmFtZSI6InRlc3QiLCJNaWRkbGVOYW1lIjpudWxsLCJOaWNrTmFtZSI6bnVsbCwiRW1haWwiOiJhbnNoaWthY2hhdWhhbjI4QGdtYWlsLmNvbSIsIkhQd2QiOiIkMmEkMTAkTWM2RExITHQvNUQ1WTdWbHZnTlNCZXdROWxtcmRhUmR2ekt4eGtLRlZMVy5aSkJJUDR3RGUiLCJGYXZvcml0VGVhbU5hbWUiOm51bGwsIlByb2ZpbGVQaWMiOm51bGwsIlJvbGUiOjF9LCJpYXQiOjE2NjkxMjYwNzQsImV4cCI6MTY3MTcxODA3NH0.kw0QnuN_ajNPygBD4eVxTU_9QN7ms2YTOqDaeqHaJCo'

const getRequest = async (path) => {
  const reqURL = `${BASE_URL}${path}`
  let response = await axios.get(reqURL, {
    headers: {
      'x-token': token,
    },
  })
  return response
}

export const Api = {
  getAllUsers: () => {
    let path = '/api/admin/getAllUser'
    return getRequest(path)
  },
}
