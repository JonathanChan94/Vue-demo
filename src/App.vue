<template>
    <div id="app">
        <header>
            <el-row>
                <el-col :span="20" class="title">聚合数据后台管理系统</el-col>
                <el-col :span="4" class="login">欢迎,<span v-text="username"></span><a href="">退出</a></el-col>
            </el-row>
        </header>
        <div class="main">
            <div class="aside">
                <el-menu class="el-menu-vertical-demo" theme="dark">
                    <router-link to="/menu" class="router" active-class="active">
                        <el-menu-item index="1"><i class="el-icon-menu"></i>首页分类导航</el-menu-item>
                    </router-link>
                    <router-link to="/ad" class="router" active-class="active">
                        <el-menu-item index="2"><i class="el-icon-menu"></i>广告位</el-menu-item>
                    </router-link>
                    <router-link to="/recommend" class="router" active-class="active">
                        <el-menu-item index="3"><i class="el-icon-setting"></i>推荐数据运营区</el-menu-item>
                    </router-link>
                    <router-link to="/api" class="router" active-class="active">
                        <el-menu-item index="4"><i class="el-icon-setting"></i>API页面</el-menu-item>
                    </router-link>
                    <router-link to="/login" class="router" active-class="active">
                        <el-menu-item index="5"><i class="el-icon-setting"></i>登录注册</el-menu-item>
                    </router-link>
                    <router-link to="/user" class="router" active-class="active">
                        <el-menu-item index="6"><i class="el-icon-setting"></i>个人中心</el-menu-item>
                    </router-link>
                    <router-link to="/friend" class="router" active-class="active">
                        <el-menu-item index="7"><i class="el-icon-setting"></i>合作伙伴</el-menu-item>
                    </router-link>
                </el-menu>
            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'content',
    data() {
        return {
            username: '小明'
        }
    }
}
</script>
<style>
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

header {
    width: 100%;
    height: 50px;
    background: rgb(211, 220, 230);
}

header .title {
    font-size: 18px;
    color: #6d6d6d;
    padding-top: 10px;
    padding-left: 20px;
}

header .login {
    text-align: right;
    font-size: 14px;
    color: #6d6d6d;
    padding-right: 20px;
    padding-top: 14px;
}

header .login a {
    margin-left: 10px;
    color: #6d6d6d;
}

header .login a:hover {
    color: red;
}

.main {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
}

.main .aside {
    width: 200px;
    height: 100%;
    background: #324057;
}

.aside a.active li {
    color: #20a0ff !important;
}

.container {
    position: absolute;
    top: 0;
    left: 200px;
    right: 0;
    bottom: 0;
}

#edit-container {
    width: 500px;
    border-radius: 20px;
    background: #fff;
    padding: 20px;
}

#edit-container h2 {
    font-size: 20px;
    font-family: "microsoft yahei";
    color: #7e7c7c;
    margin-bottom: 20px;
    padding-left: 10px;
}
</style>
