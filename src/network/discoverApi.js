import { instancePost, instanceGet } from './http'

export const reqSwipeLists = (params) => {
  return instanceGet('/banner', params)
}

export const reqHomePage = () => {
  return instanceGet('/homepage/block/page')
}