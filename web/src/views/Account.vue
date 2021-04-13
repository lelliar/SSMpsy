<template>
    <div>
      <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="电话"
      width="180">
    </el-table-column>
     <el-table-column label="操作" prop="money" width="200%">
        <template v-slot="scope"  >
          <el-button
          type="danger"
           size="small" 
           @click="deluser(scope.row._id)"
            >删除账号</el-button
          >
        </template>
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
        this.getuser()
    },
    methods: {
      async getuser(){
        const res = await this.$http.get('/rest/users')
        this.tableData = res.data
      },
      async deluser(item){
        const res = await this.$http.delete(`/rest/users/${item}`)
        console.log(res)
      } 
    },
  }
</script>


<style>
    
</style>