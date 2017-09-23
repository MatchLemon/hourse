<template>
    <el-form ref="hProperty" :model="hProperty" :rules="houseFormRules" label-width="100px" style="margin:20px ;width:60%; min-width:600px;" >
        <el-form-item label="房产标题" prop="title">
            <el-input v-model="hProperty.title"></el-input>
        </el-form-item>
        <el-form-item label="发布者" prop="name">
            <el-input v-model="hProperty.name"></el-input>
        </el-form-item>

    <!--     <el-form-item label="房屋照片">
            <el-input v-model="hProperty.pic"></el-input>
        </el-form-item> -->

        <el-form-item label="房屋总价" prop="totalPrice">
            <el-input v-model="hProperty.totalPrice"></el-input>
        </el-form-item>
        <el-form-item label="参考价格(M^2/￥)" prop="refPrice">
            <el-input v-model="hProperty.refPrice"></el-input>
        </el-form-item>
        <el-form-item label="房屋面积" prop="area">
            <el-input v-model="hProperty.area"></el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="交易权属" prop="tradingRight">
            <el-input v-model="hProperty.tradingRight"></el-input>
        </el-form-item>
        <el-form-item label="户型" prop="houseType">
            <el-input v-model="hProperty.houseType"></el-input>
        </el-form-item>
        <el-form-item label="房屋朝向" prop="houseOrientation">
            <el-input v-model="hProperty.houseOrientation"></el-input>
        </el-form-item>
        <el-form-item label="所在楼层" prop="floor">
            <el-input v-model="hProperty.floor"></el-input>
        </el-form-item>
        <el-form-item label="装修情况" prop="decorate">
            <el-input v-model="hProperty.decorate"></el-input>
        </el-form-item>
        <el-form-item label="产权年限" prop="equityYear">
            <el-input v-model="hProperty.equityYear"></el-input>
        </el-form-item>
        <el-form-item label="建筑年代" prop="buildYear">
            <el-input v-model="hProperty.buildYear"></el-input>
        </el-form-item>

        <el-form-item label="房屋地址" prop="addr">
            <el-input v-model="hProperty.addr"></el-input>
        </el-form-item>

        <el-form-item label="房东电话" prop="hostPhone">
            <el-input v-model="hProperty.hostPhone"></el-input>
        </el-form-item>
        <el-form-item label="业务员电话" prop="salesManPhone">
            <el-input v-model="hProperty.salesManPhone"></el-input>
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
                  action="http://up-z1.qiniu.com"
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
import {savehouse, getQiniuToken, getDomain} from '../../api/api';
import constants from '../../common/js/constants'

    export default {
        data() {
            return {
                hProperty: {
                    title:'',
                    name: '',
                    totalPrice:'',
                    refPrice:'',
                    area: '',
                    tradingRight:'',
                    houseType:'',
                    houseOrientation:'',
                    floor:'',
                    decorate:'',
                    equityYear:'',
                    buildYear:'',
                    addr: '',
                    hostPhone: '',
                    salesManPhone: '',
                    status: '',
                    desc: '',
                    isPublic: 1
                },
                dialogImageUrl: '',
                dialogVisible: false,
                postData : {
                    token: this.qiniuToken
                },
                qiniuDomain: "",
                qiniuToken: "",
                houseFormRules: {
                    title: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    totalPrice: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    refPrice: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    tradingRight: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    houseType: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    houseOrientation: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    tradingRight: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    floor: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    decorate: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    equityYear: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    buildYear: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    addr: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    hostPhone: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    salesManPhone: [
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
                        let user = JSON.parse(sessionStorage.getItem('user'));
                        this.hProperty.type = 1;
                        this.hProperty.images = this.images;
                        savehouse(Object.assign({}, this.hProperty)).then((res) => {
                            if (res.data.status == 200 ) {
                                this.$router.push({ path: '/admin/houseList' });
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
                this.dialogImageUrl = this.qiniuDomain + '/' + res.key;
                this.addImages(this.dialogImageUrl);
            },
            handleRemove(file, fileList) {
                if (file.response == undefined) {
                    this.delImages(file.url);
                } else {
                    this.delImages(this.qiniuDomain + '/' + file.response.key);
                }

            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            init() {
                getDomain({}).then((res) => {
                    this.qiniuDomain = res.data.domain
                });
                getQiniuToken({}).then((res) => {
                    this.qiniuToken = res.data.token
                    this.postData.token = this.qiniuToken;
                });
            }
        },
        mounted() {
            this.init();
        },
    }

</script>