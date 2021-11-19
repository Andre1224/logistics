import request from '@/utils/request'

export function getCustomInfo(token) {
  return request({
    url: '/vue-admin-template/custominfo/list',
    method: 'get',
    params: { token }
  })
}
