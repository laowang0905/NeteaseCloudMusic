import { instancePost, instanceGet } from './http'

export const reqRegister = (params) => {
  return instancePost('/register/cellphone', params)
}
export const reqLogin = (params) => {
  return instancePost('/login/cellphone', params)
}
export const reqUserInfo = (params) => {
  return instanceGet('/user/detail', params)
}