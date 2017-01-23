<template>
      <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
          <div class="ca-list">
            <div class="ca-title">推荐数据</div>
            <el-menu class="el-menu-vertical-demo">
              <router-link to="/recommend/data" active-class="active"><el-menu-item index="1">推荐API</el-menu-item></router-link>
              <router-link to="/recommend/leftdata" active-class="active"><el-menu-item index="2">左侧广告</el-menu-item></router-link>
            </el-menu>
          </div>
        </div>
        <div class="toggle" v-bind:class="{show:show}" v-on:click="show = !show">
          <!-- <button >点击</button> -->
        </div>
        <div class="content-detail">
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  var data={show:true}
  export default{
    name:'recommend',
    data(){
      return data
    }
  }
</script>