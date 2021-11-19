<template>
  <div class="container">
    <div class="searchWrap">
      <el-form
        :inline="true"
        :model="formInline"
        size="small"
        class="demo-form-inline"
      >
        <el-form-item label="">
          <el-input v-model="formInline.approver" placeholder="昵称" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.recipient" placeholder="姓名" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.waybillCode" placeholder="电话" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.trackCode" placeholder="身份证" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="clearIpt()">清空</el-button>
          <el-button type="warning" style="visibility: hidden" />
          <el-button
            type="success"
            @click.native="alertSelected"
          >导出联系人</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="tableWrap">
      <el-table
        ref="multipleTable"
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="index" label="序号" width="60" align="center" />
        <el-table-column prop="nickname" label="昵称" align="center" />
        <el-table-column prop="email" label="邮箱" align="center" />
        <el-table-column prop="username" label="用户名" align="center" />
        <el-table-column prop="password" label="密码" align="center" />
        <el-table-column prop="realname" label="姓名" align="center" />
        <el-table-column prop="tel" label="联系电话" align="center" />
        <el-table-column prop="postcode" label="邮政编码" align="center" />
        <el-table-column
          prop="idnumber"
          label="身份证号"
          width="150"
          align="center"
        />
        <el-table-column prop="address" label="家庭住址" align="center" />
        <el-table-column prop="detailinfo" label="详细信息" align="center" />
        <el-table-column prop="hasidimg" label="证件照片" align="center" />
        <el-table-column prop="createdate" label="创建时间" align="center" />
        <el-table-column label="操作" align="center" width="80">
          <a style="color: #74b9ff">打印面单</a>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="paginationConfig.pageSize"
        :total="paginationConfig.total"
        @current-change="changePage"
      />
    </div>
  </div>
</template>

<script>
import { getCustomInfo } from '@/api/custominfo'

export default {
  name: 'CustomInfo',
  data() {
    return {
      formInline: {
        approver: '',
        recipient: '',
        waybillCode: '',
        trackCode: '',
        status: ''
      },
      tableData: null,
      multipleSelection: [],
      paginationConfig: {
        pageSize: 20,
        total: 1000
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getCustomInfo().then(response => {
        console.log(response)
        this.tableData = response.data.items
      })
    },
    onSubmit() {
      console.log('submit!')
    },
    clearIpt() {
      this.formInline = {
        approver: '',
        recipient: '',
        waybillCode: '',
        trackCode: '',
        status: ''
      }
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    alertSelected() {
      this.$message({
        type: this.multipleSelection.length > 0 ? 'success' : 'warning',
        message:
          this.multipleSelection.length > 0
            ? `${[
              ...new Set(this.multipleSelection.map((item) => item.recipient))
            ]}的快递被收取`
            : '未选择任何订单'
      })
      this.toggleSelection()
    },
    changePage(arg) {
      this.$message({
        type: 'success',
        message: `当前为第${arg}页`,
        duration: 1000
        // center: true
      })
    }
  }
}
</script>
tent: center; }
<style>
.container {
  padding: 1vw;
}
.searchWrap {
  /* padding: 1vw; */
  margin: 0.5vh 0;
}
.pagination {
  display: flex;
  margin: 1vh 0;
  justify-content: center;
}
</style>
