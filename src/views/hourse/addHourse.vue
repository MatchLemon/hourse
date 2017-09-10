<template>
    <el-form ref="hProperty" :model="hProperty" :rules="hourseFormRules" label-width="100px" style="margin:20px ;width:60%; min-width:600px;" >
        <el-form-item label="房产标题" prop="title">
            <el-input v-model="hProperty.title"></el-input>
        </el-form-item>
        <el-form-item label="发布者" prop="name">
            <el-input v-model="hProperty.name"></el-input>
        </el-form-item>

    <!--     <el-form-item label="房屋照片">
            <el-input v-model="hProperty.pic"></el-input>
        </el-form-item> -->

        <el-form-item label="租售">
            <el-radio-group v-model="hProperty.sellWay">
                <el-radio :label="1">出租</el-radio>
                <el-radio :label="0">出售</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="租售单价" prop="unitPrice">
            <el-input v-model="hProperty.unitPrice"></el-input>
        </el-form-item>

        <el-form-item label="房屋面积" prop="area">
            <el-input v-model="hProperty.area"></el-input>
        </el-form-item>

        <el-form-item label="房屋地址" prop="addr">
            <el-input v-model="hProperty.addr"></el-input>
        </el-form-item>

        <el-form-item label="联系电话" prop="phone">
            <el-input v-model="hProperty.phone"></el-input>
        </el-form-item>

        <el-form-item label="交易状态">
            <el-select v-model="hProperty.status" placeholder="请选择状态">
                <el-option label="已打电话" value="0"></el-option>
                <el-option label="交易中" value="1"></el-option>
                <el-option label="已付款" value="2"></el-option>
                <el-option label="已完成" value="3"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="是否公开">
            <el-radio-group v-model="hProperty.isPublic">
                <el-radio :label="1" >是</el-radio>
                <el-radio :label="0" >否</el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="添加图片">
        <div class="upload-block">
            <div class="source">
                <el-upload
                  action="http://up-z0.qiniu.com"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="uploadSuccess"
                  :data="postData">
                  <i class="el-icon-plus"></i>
            </el-upload>
            </div>
            <el-dialog v-model="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>

        </el-form-item>
        <el-form-item label="房屋详细信息">
            <el-input type="textarea" v-model="hProperty.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click.native="onSubmit" >立即创建</el-button>
            <el-button @click.native.prevent>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<style lang="scss" scoped>
    .upload-block {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        padding: 24px;
    }

</style>
<script>
import { saveHourse } from '../../api/api';
import constants from '../../common/js/constants'

    export default {
        data() {
            return {
                hProperty: {
                    name: '',
                    pic: '',
                    unitPrice: '',
                    area: '',
                    addr: '',
                    phone: '',
                    status: '',
                    desc: '',
                    sellWay: '',
                    isPublic: 1
                },
                dialogImageUrl: '',
                dialogVisible: false,
                postData : {
                    token: constants.qiniuToken
                },
                hourseFormRules: {
                    title: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    unitPrice: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    addr: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ]
                },
                images:[]
            }
        },
        methods: {
            addImages(str) {
                this.images.push(str);
            },
            delImages(str) {
                var tmp = this.images;
                this.images.forEach((item, index) => {
                    if (item == str) {
                        tmp.splice(index,1);
                    }
                });
                this.images = tmp;
            },
            onSubmit() {
                this.$refs.hProperty.validate((valid) => {
                    if (valid) {
                        let user = JSON.parse(sessionStorage.getItem('user'))
                            var hourse = {
                                houseOwnerName : this.hProperty.name,
                                title : this.hProperty.title,
                                //images : this.hProperty.pic,
                                images : this.images,
                                price : this.hProperty.unitPrice,
                                acreage : this.hProperty.area,
                                address : this.hProperty.addr,
                                houseOwnerPhone : this.hProperty.phone,
                                status : this.hProperty.status,
                                infomation : this.hProperty.desc,
                                state : this.hProperty.sellWay,
                                userId : user.id
                            }
                            saveHourse(hourse).then((res) => {
                                if (res.data.status == 200 ) {
                                    this.$router.push({ path: '/hourseList' });
                                    this.$message({
                                         message: '添加成功',
                                         type: 'success'
                                    });
                                }
                                    //NProgress.done();
                            });
                    }
                });
            },
            uploadSuccess(res, file, fileList) {
                this.dialogImageUrl = 'http://ow1fx96vf.bkt.clouddn.com/' + res.key;
                this.addImages(file.response.key);
            },
            handleRemove(file, fileList) {
                this.delImages(file.response.key);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }

</script>