import { httpClient } from '~/utils/https'

export const testApi = {
  getData: () => {
    return httpClient.get('/test')
  },
}