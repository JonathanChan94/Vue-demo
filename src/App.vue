
<template>
      <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
          <div class="ca-list">
            <div class="ca-title">账号管理</div>
            <a href="javascript:void(0);">修改资料</a>
          </div>
        </div>
        <div class="toggle" v-bind:class="{show:show}">
          <button v-on:click="show = !show">点击</button>
        </div>
        <div class="content-detail">
        <p>hello</p>
          <!-- <div id="app"></div> -->
          <!-- <router-view></router-view> -->
        </div>
      </div>
</template>

<script>
  var data={show:true}
  export default{
    name:'content',
    data(){
      return data
    }
  }
</script>
