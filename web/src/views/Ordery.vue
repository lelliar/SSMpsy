<template>
    <div>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userPhone"
      label="电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="userId.name"
      label="配送员">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created () {
      this.getSucc()
    },
    methods: {
      async getSucc(){
        const res = await this.$http.get('/rest/ordersucces')
        this.tableData = res.data
      }
    },
  }
</script>

<style>
    
</style>