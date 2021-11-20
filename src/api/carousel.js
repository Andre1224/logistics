import request from '@/utils/request'

export function getCustomInfo(token) {
  return request({
    url: '/vue-admin-template/carousel',
    method: 'get',
    params: { token }
  })
}
