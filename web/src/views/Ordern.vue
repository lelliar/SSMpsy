<template>
    <div>
      <el-table
    stripe
    :data = "tableData"
    style="width: 100%">
    <el-table-column
      label="姓名"
      prop="userName"
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
    created() {
      this.getorder()
    },
    methods: {
      async getorder(){
        const res = await this.$http.get('/rest/orders')
        this.tableData = res.data
       
      }
    },
  }
</script>

<style>
    
</style>