<template>
      <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
          <div class="ca-list">
            <div class="ca-title">API页面</div>
            <el-menu class="el-menu-vertical-demo">
              <router-link to="/api/api-ad" active-class="active"><el-menu-item index="1">右侧广告位</el-menu-item></router-link>
              <router-link to="/api/api-data" active-class="active"><el-menu-item index="2">推荐数据</el-menu-item></router-link>
              <router-link to="/api/api-text" active-class="active"><el-menu-item index="3">文字链</el-menu-item></router-link>
              <router-link to="/api/api-icon" active-class="active"><el-menu-item index="4">API图标</el-menu-item></router-link>
            </el-menu>
          </div>
        </div>
        <div class="toggle" v-bind:class="{show:show}" v-on:click="show = !show">
          <!-- <button v-on:click="show = !show">点击</button> -->
        </div>
        <div class="content-detail">
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  var data={show:true}
  export default{
    name:'api',
    data(){
      return data
    }
  }
</script>