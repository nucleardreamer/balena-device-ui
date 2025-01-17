import expressApi from 'axios'

const apiPath = '/sdk' as string

export const sdkRequests = {
  device () {
    return expressApi.get(`${apiPath}/device`)
  },
  uuid () {
    return expressApi.get(`${apiPath}/uuid`)
  }
}
