import { instancePost, instanceGet } from './http'

export const reqSwipeLists = (params) => {
  return instanceGet('/banner', params)
}