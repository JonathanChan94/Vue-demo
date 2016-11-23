
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

<style>
      .content{
      position:absolute;
      width:auto;
      top:0;
      bottom:0;
      left:150px;
      right:0;
      background:#fff;
    }
    .content-aside{
      width:0;
      float:left;
      background:#EAEDF1;
      position:absolute;
      top:0;
      bottom:0;
      overflow:hidden;
      transition:all .2s ease;
    }
    .show.content-aside{
      width:130px;
    }
    .show.content-aside ~ .content-detail{
      left:140px;
    }
    .ca-list{
      width:130px;
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:-130px;
      padding-left:10px;
      transition:all .2s;
    }
    .show.content-aside .ca-list{
      left:0px;
    }
    .ca-title{
      width:100%;
      height:60px;
      font-size:20px;
      padding-top:10px;
    }
    .content-aside a{
      display:block;
      width:100%;
      height:30px;
      color:#333;
      text-decoration:none;
    }
    .toggle{
      position:absolute;
      top:300px;
      left:0;
      z-index:10;
      /*display:none;*/
      transition:all .2s ease;
    }
    .toggle.show{
      left:130px;
    }
    .content-detail{
      width:auto;
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      padding-left:10px;
      overflow:hidden;
      transition:all .2s ease;
      z-index:8;
    }
</style>