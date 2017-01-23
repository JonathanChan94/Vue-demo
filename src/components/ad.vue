<template>
    <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
            <div class="ca-list">
                <div class="ca-title">广告位</div>
                <el-menu class="el-menu-vertical-demo">
                    <router-link to="/ad/big" active-class="active">
                        <el-menu-item index="1">巨无霸广告位</el-menu-item>
                    </router-link>
                    <router-link to="/ad/small" active-class="active">
                        <el-menu-item index="2">巨无霸下小广告</el-menu-item>
                    </router-link>
                </el-menu>
            </div>
        </div>
        <div class="toggle" v-bind:class="{show:show}" v-on:click="show = !show">
        </div>
        <div class="content-detail">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
var data = {
    show: true
}
export default {
    name: 'ad',
    data() {
        return data
    }
}
</script>
<style>
.content {
    width: 100%;
    height: 100%;
}

.content .content-aside {
    width: 0px;
    float: left;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #eff2f7;
    overflow: hidden;
    transition: all .2s ease;
}

.content .content-aside.show {
    width: 130px;
}

.ca-list {
    width: 130px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -130px;
    transition: all .2s;
}

.show.content-aside .ca-list {
    left: 0px;
}

.ca-list .ca-title {
    width: 100%;
    height: 60px;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 20px;
    font-family: "microsoft yahei";
}

.content-aside ~ .toggle {
    width: 30px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 0px;
    z-index: 8;
    cursor: pointer;
    background: url(../assets/right_arrow.png) center left no-repeat;
    transition:all .2s ease;
}

.content-aside.show ~ .toggle {
    width: 30px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 118px;
    z-index: 8;
    cursor: pointer;
    background: url(../assets/left_arrow.png) center left no-repeat;
}


.content-detail {
    position: absolute;
    top: 0;
    left: 10px;
    right: 0;
    bottom: 0;
    padding: 20px;
    transition: all .2s ease;
    overflow: auto;
}

.show.content-aside ~ .content-detail {
    left: 130px;
}

.ca-list a.active li {
    color: #20a0ff;
}
</style>
