import service from '@/utils/request'

const mixinInterface = {
  data() {
    return {
      dataSource: []
    }
  },
  created() {
    if (!this.url.list) {
      alert('can not found list param')
    }
    this.fetchData()
  },
  methods: {
    fetchData() {
      service.get(this.url.list).then((res) => {
        this.dataSource = JSON.parse(res.data)
      })
    },
    updateData() {
      service.post(this.url.update).then((res) => {})
    },
    deleteData() {
      service.delete(this.url.delete).then((res) => {})
    },
    addData() {
      service.post(this.url.add).then((res) => {})
    }
  }
}

export default mixinInterface
