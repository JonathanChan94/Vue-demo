<template>
    <div>
        <el-table :data="bannerData" style="width: 100%">
            <el-table-column prop="banner" label="标题">
            </el-table-column>
            <el-table-column :context="_self" inline-template min-width="180" label="图片地址">
                <div>
                    <el-input v-bind:value="bannerData[$index].src"></el-input>
                </div>
            </el-table-column>
            <el-table-column :context="_self" inline-template min-width="150" label="PC链接">
                <div>
                    <el-input v-bind:value="bannerData[$index].pcurl"></el-input>
                </div>
            </el-table-column>
            <el-table-column prop="mobileurl" label="mobile链接" width="90">
            </el-table-column>
            <el-table-column prop="bgcolor" label="背景色">
            </el-table-column>
            <el-table-column prop="begintime" label="开始时间" width="110">
            </el-table-column>
            <el-table-column prop="endtime" label="结束时间" width="110">
            </el-table-column>
            <el-table-column prop="click" label="点击数" width="90">
            </el-table-column>
            <el-table-column prop="order" label="排序" width="60">
            </el-table-column>
            <el-table-column label="操作" :context="_self" inline-template width="100">
                <div>
                    <el-button size="small" type="text" @click="handleEdit($index, row)">
                        编辑
                    </el-button>
                    <br>
                    <el-button size="small" type="text" @click="handleDelete($index,row)">
                        删除
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
        <br>
        <el-button type="primary" @click="add">新增banner</el-button>
        <div id="upload" v-show="show">
            <el-form :model="newBanner" :rules="rules" ref="newBanner" label-position="left" label-width="100px" id="add-banner">
                <el-form-item label="标题" prop="banner">
                    <el-input v-model="newBanner.banner" name="banner"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" class="is-required">
                    <input type="file" name="img" v-on:change="checkImg" id="upload-img">
                    <div class="el-form-item__error" id="img-error">请选择图片</div>
                </el-form-item>
                <el-form-item label="PC链接" prop="pcurl">
                    <el-input v-model="newBanner.pcurl" name="pcurl"></el-input>
                </el-form-item>
                <el-form-item label="Mobile链接">
                    <el-input v-model="newBanner.mobileurl" name="mobileurl"></el-input>
                </el-form-item>
                <el-form-item label="背景色" prop="bgcolor">
                    <el-input v-model="newBanner.bgcolor" name="bgcolor"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="begintime">
                    <el-input v-model="newBanner.begintime" name="begintime"></el-input>
                </el-form-item>
                <el-form-item label="结束时间" prop="endtime">
                    <el-input v-model="newBanner.endtime" name="endtime"></el-input>
                </el-form-item>
                <el-form-item label="排序" prop="order">
                    <el-input v-model="newBanner.order" name="order"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">提交</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-dialog title="修改banner" v-model="dialogFormVisible">
            <el-form :model="editBanner" label-position="left" label-width="100px" id="editform">
                <el-form-item label="标题">
                    <el-input name="editBanner" v-model="editBanner.banner"></el-input>
                </el-form-item>
                <el-form-item label="图片地址">
                    <el-input name="editimg" v-model="editBanner.src"></el-input>
                </el-form-item>
                <el-form-item label="PC链接">
                    <el-input name="editpcurl" v-model="editBanner.pcurl"></el-input>
                </el-form-item>
                <el-form-item label="Mobile链接">
                    <el-input name="editmobileurl" v-model="editBanner.mobileurl"></el-input>
                </el-form-item>
                <el-form-item label="背景色">
                    <el-input name="editbgcolor" v-model="editBanner.bgcolor"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-input name="editbegintime" v-model="editBanner.begintime"></el-input>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-input name="editendtime" v-model="editBanner.endtime"></el-input>
                </el-form-item>
                <el-form-item label="排序">
                    <el-input name="editorder" v-model="editBanner.order"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" id="confirm" @click="confirmEdit">确定修改</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
            return {
                bannerData: [],
                show: false,
                newBanner: {
                    banner: '',
                    img: null,
                    pcurl: '',
                    mobileurl: '',
                    begintime: '',
                    endtime: '',
                    order: '',
                    bgcolor: '#'
                },
                editBanner: {
                    banner: '',
                    src: '',
                    pcurl: '',
                    mobileurl: '',
                    begintime: '',
                    endtime: '',
                    order: '',
                    bgcolor: ''
                },
                index: 0,
                dialogFormVisible: false,
                rules: {
                    banner: [{
                        required: true,
                        message: "请输入图片名称",
                        trigger: "blur"
                    }],
                    pcurl: [{
                        required: true,
                        message: "请输入pc链接地址",
                        trigger: "blur"
                    }],
                    bgcolor: [{
                        required: true,
                        message: "请输入背景色",
                        trigger: "blur"
                    }],
                    begintime: [{
                        required: true,
                        message: "请输入开始时间",
                        trigger: "blur"
                    }],
                    endtime: [{
                        required: true,
                        message: "请输入结束时间",
                        trigger: "blur"
                    }],
                    order: [{
                        required: true,
                        message: "请输入排序",
                        trigger: "blur"
                    }]
                }
            }
        },
        created() {
            this.fetchData();
            var date = new Date();
            var day = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            this.newBanner.begintime = day + ' 00:00:00';
            this.newBanner.endtime = day + ' 23:59:59';
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                if (this.$route.path == "/ad/big") {
                    this.bannerData = [{
                        banner: '抢购攻略',
                        src: 'https://juheimg.oss-cn-hangzhou.aliyuncs.com/www/activity/201612/strategyb.jpg',
                        pcurl: 'https://www.juhe.cn/activity/dazhaxie',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 1999999,
                        order: 0,
                        bgcolor: '#a610ec'
                    }, {
                        banner: '火车票',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201611/58354c0d23a70.png',
                        pcurl: 'https://www.juhe.cn/docs/api/id/173',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 3899,
                        order: 1,
                        bgcolor: '#0390fc'
                    }, {
                        banner: '苏州的味道',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201610/57ff3648b8ece.png',
                        pcurl: 'https://www.juhe.cn/activity/dazhaxie',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 4999,
                        order: 2,
                        bgcolor: '#f8f8f8'
                    }, {
                        banner: '免费股票API',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201610/5804492eb7cfa.png',
                        pcurl: 'https://www.juhe.cn/docs/api/id/21',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 5999,
                        order: 3,
                        bgcolor: '#fff'
                    }];
                } else {
                    this.bannerData = [{
                        banner: '一元特惠',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201609/57cd485f4ac7c.png',
                        pcurl: 'https://www.juhe.cn/activity/oneDiscount',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 6999,
                        order: 1,
                        bgcolor: '#'
                    }, {
                        banner: '新用户专享',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201609/57cd488dcea4b.png',
                        pcurl: 'https://www.juhe.cn/activity/reg',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 7999,
                        order: 2,
                        bgcolor: '#'
                    }, {
                        banner: '招募',
                        src: 'https://juheimgs.oss-cn-beijing.aliyuncs.com/banner/201609/57d7bdaf47f84.png',
                        pcurl: 'https://www.juhe.cn/contact',
                        mobileurl: '',
                        begintime: '2016-10-25 00:00:00',
                        endtime: '2016-12-31 18:00:00',
                        click: 8999,
                        order: 3,
                        bgcolor: '#'
                    }];
                };
            },
            handleEdit(index, row) {
                this.index = index;
                this.editBanner.banner=this.bannerData[index].banner;
                this.editBanner.src=this.bannerData[index].src;
                this.editBanner.pcurl=this.bannerData[index].pcurl;
                this.editBanner.mobileurl=this.bannerData[index].mobileurl;
                this.editBanner.bgcolor=this.bannerData[index].bgcolor;
                this.editBanner.begintime=this.bannerData[index].begintime;
                this.editBanner.endtime=this.bannerData[index].endtime;
                this.editBanner.order=this.bannerData[index].order;
                this.dialogFormVisible = true;
            },
            confirmEdit() {
                this.bannerData[this.index].banner=this.editBanner.banner;
                this.bannerData[this.index].src=this.editBanner.src;
                this.bannerData[this.index].pcurl=this.editBanner.pcurl;
                this.bannerData[this.index].mobileurl=this.editBanner.mobileurl;
                this.bannerData[this.index].bgcolor=this.editBanner.bgcolor;
                this.bannerData[this.index].begintime=this.editBanner.begintime;
                this.bannerData[this.index].endtime=this.editBanner.endtime;
                this.bannerData[this.index].order=this.editBanner.order;
                this.dialogFormVisible=false;
            },
            handleDelete(index, row) {
                this.$confirm('确认删除？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.bannerData.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            add() {
                this.show = true;
            },
            checkImg(e) {
                let file = e.target.files[0];
                console.log(file);
                let supportedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                if (file && supportedTypes.indexOf(file.type) >= 0) {
                    this.newBanner.img = file;
                    $("#img-error").hide();
                } else {
                    if (file == undefined) {
                        $("#img-error").html("请选择图片");
                        $("#img-error").show();
                    } else {
                        $("#img-error").html("图片格式只支持：jpg、jpeg 和 png");
                        $("#img-error").show();
                    }

                    // this.clearFile();
                }
            },
            checkHasImg() {
                if (this.newBanner.img === null) {
                    $("#img-error").html("请选择图片");
                    $("#img-error").show();
                    return false;
                } else {
                    return true;
                }
            },
            handleSubmit() {
                var self = this;
                this.$refs.newBanner.validate((valid) => {
                    if (valid && this.checkHasImg()) {
                        $("#img-error").hide();
                        this.bannerData.push({
                            banner: this.newBanner.banner,
                            src: $("input:file").val(),
                            pcurl: this.newBanner.pcurl,
                            mobileurl: this.newBanner.mobileurl,
                            bgcolor: this.newBanner.bgcolor,
                            begintime: this.newBanner.begintime,
                            endtime: this.newBanner.endtime,
                            order: this.newBanner.order
                        });
                        setTimeout(function() {
                            $("#add-banner")[0].reset();
                            self.show = false;
                        }, 20)
                    } else {
                        if (!img) {
                            $("#img-error").css("display", "block");
                        }
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleReset() {
                $("#add-banner")[0].reset();
            }
        }
}
</script>
<style>
.el-table {
    border: 0 !important;
}

.el-table th {
    text-align: center !important;
}

.el-table .cell,
.el-table th>div {
    padding: 10px 0 !important;
}
table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    font-family: "microsoft yahei";
}
th{
    border:1px solid #ccc;
}
td{
    text-align:center;
    border:1px solid #ccc;
    padding:0 10px;
}
#upload {
    margin-top: 20px;
    width: 500px;
    margin-left: 10px;
}
#edit {
    width: 500px;
    background: #fff;
    display: none;
}
</style>
