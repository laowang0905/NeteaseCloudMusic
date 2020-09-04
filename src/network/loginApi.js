import { instancePost } from './http'

export const reqRegister = (url, params) => {
  instancePost(url, params)
}