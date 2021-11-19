import request from '@/utils/request'

export function getAbout(token) {
  return request({
    url: '/vue-admin-template/getAbout',
    method: 'get',
    params: { token }
  })
}
