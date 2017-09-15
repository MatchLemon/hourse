<template>
    <div >
      <el-form ref="user" :model="user" :rules="userRules" label-width="100px" style="margin:20px ;width:60%; min-width:600px;" >
        <el-form-item label="Account" prop="account">
            <el-input v-model="user.name" ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="title">
            <el-input v-model="user.password" ></el-input>
        </el-form-item>
          <el-form-item label="Upload avatar">
              <el-upload class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click.native="onSubmit" >Save</el-button>
              <el-button @click.native.prevent>Cancle</el-button>
          </el-form-item>
      </el-form>
    </div>
</template>

<script>
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        imageUrl: '',
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        user:{
          name:'',
          password:''
        },
        userRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
        }

      };
    },
    methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('Please upload JPG!');
          }
          if (!isLt2M) {
            this.$message.error('Image size can not exceed 2MB!');
          }
          return isJPG && isLt2M;
        },
        onSubmit() {
          this.$confirm('Please contact the administrator ?', 'Info', {
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cance',
            type: 'warning'
          }).then(() => {

          })
        }
      }
  }

</script>

<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
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