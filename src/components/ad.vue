<template>
      <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
          <div class="ca-list">
            <div class="ca-title">广告位</div>
<!--             <router-link to="/ad/big" active-class="active">巨无霸广告位</router-link>
            <router-link to="/ad/small"  active-class="active">巨无霸下小广告</router-link> -->
            <el-menu class="el-menu-vertical-demo">
              <router-link to="/ad/big" active-class="active"><el-menu-item index="1">巨无霸广告位</el-menu-item></router-link>
              <router-link to="/ad/small" active-class="active"><el-menu-item index="2">巨无霸下小广告</el-menu-item></router-link>
            </el-menu>
          </div>
        </div>
        <div class="toggle" v-bind:class="{show:show}">
          <button v-on:click="show = !show">点击</button>
        </div>
        <div class="content-detail">
        <!-- <p>hello</p> -->
          <!-- <div id="app"></div> -->
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  var data={show:true}
  export default{
    name:'ad',
    data(){
      return data
    }
  }
</script>