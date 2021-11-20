import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/logistic-test-api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/logistic-test-api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logistic-test-api/user/logout',
    method: 'post'
  })
}
