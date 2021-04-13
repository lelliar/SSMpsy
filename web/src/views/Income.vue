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
      prop="address"
      label="工资">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
export default {
    data(){
      return {
        tableData: [],
        order0:[],
        order1:[],
        order2:[],
        order3:[]
      }
    },
    created () {
      this.getuser()
      this.getorder()
    },
    methods: {
      async getuser(){
        const res = await this.$http.get('/rest/users')
        this.tableData = res.data
      },
      async getorder(){
        const res = await this.$http.get('/rest/ordersucces')
        
        for(var i=0 ; i<=res.data.length ; i++){
          if(res.data[i].userId){
                if(this.tableData[0]._id == res.data[i].userId._id){
                    this.order0.push(res.data[i])
                    console.log(res.data[i])
                     
// if(this.tableData[1]._id == res.data[i].userId._id){
//                   this.order1.push(res.data[i])
//                 }if(this.tableData[2]._id == res.data[i].userId._id){
//                   this.order2.push(res.data[i])
//                 }if(this.tableData[3]._id == res.data[i].userId._id){
//                   this.order3.push(res.data[i])
                // }
                }
          }
        }
      }
    },
}
</script>

<style>
    
</style>