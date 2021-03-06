import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })
  instance.interceptors.request.use(req => {
    // return JSON.stringify(req)
    // console.log(req)
    
    return req
  })
  instance.interceptors.response.use(rep => {
    return rep.data
  })
  return instance(config)
}