const Mock = require('mockjs')

const data = Mock.mock({
  'items|100': [{
    nickname: '@first',
    username: '@last',
    email: '@email',
    password: '@string(16)',
    realname: '@cname',
    tel: '@natural(10000000000, 19999999999)',
    postcode: '@zip',
    idnumber: 'number|18',
    address: '@province',
    detailinfo: '@city(true)',
    'hasidimg|1': ['已上传', '未上传'],
    createdate: '@date("yyyy-MM-dd HH:mm:ss")'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/custominfo/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
