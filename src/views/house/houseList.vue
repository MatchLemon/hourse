<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="gethouse">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <!--列表-->
        <el-table :data="house" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="title" label="标题" width="120">
            </el-table-column>
            <el-table-column prop="acreage" label="房屋面积" width="100">
            </el-table-column>
            <el-table-column prop="houseOwnerPhone" label="联系电话" width="150">
            </el-table-column>
            <el-table-column prop="status" label="交易状态" width="130" :formatter="formatStatus" sortable>
            </el-table-column>
            <el-table-column prop="address" label="地址" min-width="150" >

            </el-table-column>
            <el-table-column label="操作" width="150">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form ref="hProperty" :model="hProperty" :rules="houseFormRules" label-width="100px" style="margin:20px ;width:60%; min-width:600px;" >
                <el-form-item label="房产标题" prop="title">
                    <el-input v-model="hProperty.title"></el-input>
                </el-form-item>
                <el-form-item label="发布者" prop="houseOwnerName">
                    <el-input v-model="hProperty.houseOwnerName"></el-input>
                </el-form-item>

            <!--     <el-form-item label="房屋照片">
                    <el-input v-model="hProperty.pic"></el-input>
                </el-form-item> -->

                <el-form-item label="租售">
                    <el-radio-group v-model="hProperty.state">
                        <el-radio :label="1" value="rent" >出租</el-radio>
                        <el-radio :label="0" value="sell">出售</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="租售单价" prop="price">
                    <el-input v-model="hProperty.price"></el-input>
                </el-form-item>

                <el-form-item label="房屋面积" prop="acreage">
                    <el-input v-model="hProperty.acreage"></el-input>
                </el-form-item>

                <el-form-item label="房屋地址" prop="address">
                    <el-input v-model="hProperty.address"></el-input>
                </el-form-item>

                <el-form-item label="联系电话" prop="houseOwnerPhone">
                    <el-input v-model="hProperty.houseOwnerPhone"></el-input>
                </el-form-item>

                <el-form-item label="交易状态">
                    <el-select v-model="hProperty.status" placeholder="请选择状态">
                        <el-option :key="0" label="已打电话" :value="0"></el-option>
                        <el-option :key="0" label="交易中" :value="1"></el-option>
                        <el-option :key="0" label="已付款" :value="2"></el-option>
                        <el-option :key="0" label="已完成" :value="3"></el-option>
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
                          :file-list="imagesList"
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
                    <el-button @click.native="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer"></div>
        </el-dialog>
        </section>
</template>

<script>
    import util from '../../common/js/util'
    import constants from '../../common/js/constants'
    //import NProgress from 'nprogress'
    import {getQiniuToken, getDomain, gethouseListPage, deletehouse, edithouse} from '../../api/api';

    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                house: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels:[],
                qiniuDomain: "",
                qiniuToken: "",

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                houseFormRules: {
                    title: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    houseOwnerName: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    price: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    acreage: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ],
                    houseOwnerPhone: [
                        { required: true, message: '请输此字段', trigger: 'blur' }
                    ]
                },
                //编辑界面数据
                hProperty: {
                    houseOwnerName: '',
                    price: '',
                    acreage: '',
                    address: '',
                    houseOwnerPhone: '',
                    status: '',
                    infomation: '',
                    state: '',
                    isPublic: 1
                },
                dialogImageUrl: '',
                dialogVisible: false,

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                postData : {
                    token: constants.qiniuToken
                },
                images:[],
                imagesList:[]

            }
        },
        methods: {
            formatStatus: function (row, column) {
                var result = "未知";
                if (row.status == 0) {
                    return "已打电话"
                }
                if (row.status == 1) {
                    result = "交易中";
                }
                if (row.status == 2) {
                    result = "已付款";
                }
                if (row.status == 3) {
                    result = "已完成";
                }
                return result;
            },
            handleCurrentChange(val) {
                this.page = val;
                this.gethouse();
            },
            //获取house
            gethouse() {
                let user = JSON.parse(sessionStorage.getItem('user'))
                let para = {
                    pageNumber: this.page - 1,
                    name: this.filters.name,
                    pageSize:20,
                    userId: user.id
                };
                this.listLoading = true;
                //NProgress.start();
                gethouseListPage(para).then((res) => {
                    this.total = res.data.totalCount;
                    this.house = res.data.data;
                    this.listLoading = false;
                    //NProgress.done();
                });
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = {houseId: row.id};
                    deletehouse(para).then((res) => {
                        this.listLoading = false;
                        if(res.data.status == 200) {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.gethouse();
                        }

                    });
                }).catch(() => {

                });
            },
            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.hProperty = Object.assign(this.hProperty, row);
                this.hProperty.price =  this.hProperty.price + "";
                this.hProperty.acreage =  this.hProperty.acreage + "";
                //this.images = this.hProperty.images;
                //console.log(this.hProperty.images);
                this.images = this.hProperty.images;
                this.imagesList = this.hProperty.images.map(function(item){return {"url":item};});
            },
            //编辑
            editSubmit: function () {
                this.$refs.hProperty.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.hProperty);
                            para.images = this.images
                            edithouse(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['hProperty'].resetFields();
                                this.editFormVisible = false;
                                this.gethouse();
                            });
                        });
                    }
                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            //批量删除
            batchRemove: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = { ids: ids };
                    batchRemoveUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.gethouse();
                    });
                }).catch(() => {

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
            this.gethouse();
            this.init();
        },


    }

</script>

<style scoped>

</style>