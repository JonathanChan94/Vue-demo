<template>
    <div>
        <table>
            <tr>
                <th>标题</th>
                <th>图片地址</th>
                <th>PC链接</th>
                <th>Mobile链接</th>
                <th>背景色</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>点击数</th>
                <th>排序</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in bannerData">
                <td style="width:100px;">{{ item.banner }}</td>
                <td style="min-width:250px;">
                    <el-input v-bind:value="item.src"></el-input>
                </td>
                <!-- <td style="min-width:250px;">{{ item.src }}</td> -->
                <!-- <td style="min-width:100px;">{{ item.pcurl }}</td> -->
                <td style="min-width:100px;">
                    <el-input v-bind:value="item.pcurl"></el-input>
                </td>
                <td style="width:100px;">{{ item.mobileurl }}</td>
                <td style="width:80px;">{{ item.bgcolor}}</td>
                <td style="width:180px;">{{ item.begintime }}</td>
                <td style="width:180px;">{{ item.endtime }}</td>
                <td style="width:80px;">{{ item.click }}</td>
                <td style="width:80px;">{{ item.order }}</td>
                <td style="width:120px;">
                    <div>
                        <el-button size="small" @click="handleEdit(item,index)">
                            编辑
                        </el-button>
                        <el-button size="small" type="danger" @click="handleDelete(index)">
                            删除
                        </el-button>
                    </div>
                </td>
            </tr>
        </table>
        <br>
        <el-button type="primary" @click="add">新增banner</el-button>
        <div id="upload" v-show="show">
            <el-form :model="newBanner" :rules="rules" ref="newBanner" label-position="left" label-width="100px" id="add-banner">
                <el-form-item label="标题" prop="banner">
                    <el-input v-model="newBanner.banner"></el-input>
                </el-form-item>
                <el-form-item label="上传图片" class="is-required">
                    <!-- <el-input v-model="newBanner.type"></el-input> -->
                    <input type="file" name="img">
                    <div class="el-form-item__error" id="img-error">请选择图片</div>
                </el-form-item>
                <el-form-item label="PC链接" prop="pcurl">
                    <el-input v-model="newBanner.pcurl"></el-input>
                </el-form-item>
                <el-form-item label="Mobile链接">
                    <el-input v-model="newBanner.mobileurl"></el-input>
                </el-form-item>
                <el-form-item label="背景色" prop="bgcolor">
                    <el-input v-model="newBanner.bgcolor"></el-input>
                </el-form-item>
                <el-form-item label="开始时间" prop="begintime">
                    <el-input v-model="newBanner.begintime"></el-input>
                </el-form-item>
                <el-form-item label="结束时间" prop="endtime">
                    <el-input v-model="newBanner.endtime"></el-input>
                </el-form-item>
                <el-form-item label="排序" prop="order">
                    <el-input v-model="newBanner.order"></el-input>
                </el-form-item>
                <!--    <el-form-item label="日期" prop="date">
       <el-date-picker type="date" placeholder="选择日期" v-model="newBanner.date" style="width: 100%;"></el-date-picker>
    </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">提交</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div id="tpl">
            <h2>修改banner</h2>
            <form>
                <div class="item">
                    <label>标题</label>
                    <input id="banner" type="text" name="">
                </div>
                <div class="item">
                    <label>图片地址</label>
                    <input id="src" type="text" name="">
                </div>
                <div class="item">
                    <label>PC链接</label>
                    <input id="pcurl" type="text" name="">
                </div>
                <div class="item">
                    <label>Mobile链接</label>
                    <input id="mobileurl" type="text" name="">
                </div>
                <div class="item">
                    <label>背景色</label>
                    <input id="bgcolor" type="text" name="">
                </div>
                <div class="item">
                    <label>排序</label>
                    <input id="order" type="text" name="">
                </div>
                <div class="item">
                    <label>开始时间</label>
                    <input id="begintime" type="text" name="">
                </div>
                <div class="item">
                    <label>结束时间</label>
                    <input id="endtime" type="text" name="">
                </div>
                <div class="item">
                    <input id="confirm" type="button" value="确定修改" @click="confirmEdit">
                </div>
                <input id="index" type="hidden">
            </form>
        </div>
    </div>
</template>
<style scoped>
table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    font-family: "microsoft yahei";
}

th {
    line-height: 50px;
    border: 1px solid #ccc;
    background: #eff2f7;
}

td {
    width: 200px;
    min-width: 40px;
    text-align: center;
    border: 1px solid #ccc;
    height: 60px;
    line-height: 40px;
    padding: 0 10px;
    word-break: break-word;
}

tr:hover {
    background: #eff2f7;
    transition: all .4s;
}

#upload {
    margin-top: 20px;
    width: 500px;
    margin-left: 10px;
}

#tpl {
    display: none;
}

#img-error {
    display: none;
}
</style>
<script>
export default {
    data() {
            return {
                show: false,
                bannerData: [],
                newBanner: {
                    banner: '',
                    src: '',
                    pcurl: '',
                    mobileurl: '',
                    begintime: '',
                    endtime: '',
                    order: '',
                    bgcolor: '#'
                },
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
            // 如果路由有变化，会再次执行该方法
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
            handleEdit(item, index) {
                $("form #banner").attr("value", item.banner);
                $("form #src").attr("value", item.src);
                $("form #pcurl").attr("value", item.pcurl);
                $("form #mobileurl").attr("value", item.mobileurl);
                $("form #bgcolor").attr("value", item.bgcolor);
                $("form #order").attr("value", item.order);
                $("form #begintime").attr("value", item.begintime);
                $("form #endtime").attr("value", item.endtime);
                $("form #index").attr("value", index);
                var code = $("#tpl").html();
                $("#edit-container").html(code);
                layer.open({
                    type: 1,
                    shadeClose: true,
                    scrollbar: true,
                    title: false,
                    area: ['auto', 'auto'],
                    shade: [0.6],
                    skin: 'layui-layer-nobg',
                    closeBtn: 1,
                    content: $("#edit-container")
                });
                var that = this;
                $("form #confirm").click(function() {
                    that.confirmEdit(index);
                })
            },
            confirmEdit(index) {
                var banner = $(".layui-layer-content #banner").val();
                var src = $(".layui-layer-content #src").val();
                var pcurl = $(".layui-layer-content #pcurl").val();
                var mobileurl = $(".layui-layer-content #mobileurl").val();
                var bgcolor = $(".layui-layer-content #bgcolor").val();
                var begintime = $(".layui-layer-content #begintime").val();
                var endtime = $(".layui-layer-content #endtime").val();
                var order = $(".layui-layer-content #order").val();
                this.bannerData[index].banner = banner;
                this.bannerData[index].src = src;
                this.bannerData[index].pcurl = pcurl;
                this.bannerData[index].mobileurl = mobileurl;
                this.bannerData[index].bgcolor = bgcolor;
                this.bannerData[index].begintime = begintime;
                this.bannerData[index].endtime = endtime;
                this.bannerData[index].order = order;
                layer.closeAll();
                this.$message({
                    type: 'success',
                    message: '修改成功!'
                });
            },
            handleDelete(index) {
                console.log(index);
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
            handleSubmit() {
                this.$refs.newBanner.validate((valid) => {
                    var img = ($("input:file").val() == "" ? 0 : 1);
                    if (valid && img) {
                        $("#img-error").css("display", "none");
                        this.bannerData.push({
                            banner: this.newBanner.banner,
                            src: $("input:file").val(),
                            pcurl: this.newBanner.pcurl,
                            mobileurl: this.newBanner.mobileurl,
                            bgcolor: this.newBanner.bgcolor,
                            order: this.newBanner.order
                        });
                        setTimeout(function() {
                            $("#add-banner")[0].reset();
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
                console.log("reset完毕");
                $("#add-banner")[0].reset();
            }
        }
}
</script>
