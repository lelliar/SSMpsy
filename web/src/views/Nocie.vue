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
            <img v-if="form.url" :src="form.url" class="avatar" style="height:205px;width:300px;">
            <i v-else class="el-icon-plus avatar-uploader-icon" style="height:205px;width:300px;"></i>
            </el-upload>
            
      </div>
      <el-form ref="form" :model="form" label-width="80px">
         <el-form-item label="标题" style="width:50%;margin-top:3%;">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
         <el-form-item label="描述" style="width:50%;margin-top:3%;">
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
    data() {
      return {
        form:{
            type:"image",
            title:'',
            description:'',
            url:""
        },
      };
    },
    methods: {
      afterUpload(res){
          this.$set(this.form , 'url' ,  res.url)
      },
      async onSubmit(){
          await this.$http.post('/rest/announcements' , this.form)
          this.$message({
              type:'success',
              message:'保存成功'
          })
          this.form.title='',
          this.form.description='',
          this.form.url=''
      }
    }
  }
</script>

<style>
    .top{
        width:130px;
        height:30px;
        font-size:20px;
        font-weight: bold;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .imgtext{
      font-weight: bold;
      font-size: 15px;
      width:100px;
      height:50px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
 
</style>