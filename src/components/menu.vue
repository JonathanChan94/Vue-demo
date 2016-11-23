
<template>
      <div class="content">
        <div class="content-aside" v-bind:class="{show:show}">
          <div class="ca-list">
            <div class="ca-title">分类导航</div>
            <el-menu class="el-menu-vertical-demo">
              <router-link to="/menu/typename" active-class="active"><el-menu-item index="1">分类名称</el-menu-item></router-link>
              <router-link to="/menu/sort" active-class="active"><el-menu-item index="2">排序</el-menu-item></router-link>
            </el-menu>
          </div>
        </div>
        <div id="toggle" class="toggle" v-bind:class="{show:show}">
          <el-button id="btn" type="text" icon="d-arrow-left" v-on:click="change"></el-button>
        </div>
        <div class="content-detail">
          <router-view></router-view>
        </div>
      </div>
</template>

<script>
  var data={show:true}
  export default{
    name:'menu',
    data(){
      return data
    },
    methods:{
      change:function(event){
        data.show=!data.show;
        if(event.target.className=="el-icon-d-arrow-left"){
          event.target.className="el-icon-menu";
        }else{
          event.target.className="el-icon-d-arrow-left";
        }
      }
    }
  }
</script>
