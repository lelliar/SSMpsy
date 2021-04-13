<template>
    <div>
    <el-form ref="form" :model="form" label-width="80px">
         <el-form-item label="内容" style="width:50%;margin-top:3%;">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
    <el-button type="primary" @click="onSubmit">立即通知</el-button>
    <el-button>取消</el-button>
  </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                description:''
            }
        }
    },
    methods: {
        async onSubmit(){
          const res = await this.$http.get('/rest/noicebyps')
            if(res.data.length != 0){
                await this.$http.put(`/rest/noicebyps/${res.data[0]._id}` , this.form)
            }
            else{
                await this.$http.post('/rest/noicebyps' , this.form)
            }
          this.$message({
              type:'success',
              message:'保存成功'
          })
      }  
    },
}
</script>

<style>
    
</style>