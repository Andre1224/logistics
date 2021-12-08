import request from '@/utils/request'

export function getcarousel(token) {
  return request({
    url: '/logistic-test-api/carousel',
    method: 'get',
    params: { token }
  })
}
