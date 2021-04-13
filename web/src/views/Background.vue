<template>
    <div>
          <div class="top">
            首页通知
        </div>
      <div style="display:flex;margin-top:50px;">
          <div class="imgtext">
              上传图片:
          </div>
           <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="afterUpload"
            >
            <img v-if="model.icon" :src="model.icon" class="avatar" style="height:205px;width:350px;">
            <i v-else class="el-icon-plus avatar-uploader-icon" style="height:205px;width:350px;"></i>
            </el-upload>
      </div>
      <el-form>
                <el-form-item style="margin-top:40px;margin-left:120px;">
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
            model:{
                icon:'',
                type:'image'
            }
        }
    },
    methods: {
      afterUpload(res){
          this.$set(this.model , 'icon' ,  res.url)
      },
      async onSubmit(){
          const res = await this.$http.get('/rest/background')
            if(res.data.length != 0){
                await this.$http.put(`/rest/background/${res.data[0]._id}` , this.model)
            }
            else{
                await this.$http.post('/rest/background' , this.model)
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