<template>
<div>
	<p>api-ad</p>
	<el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    <input type="datetime" name="">
    <p>{{ value | datetime }}</p>
</div>
</template>

<style></style>

<script>
	export default{
		data(){
			return {
				value1:'Tue Dec 20 2016 13:16:24 GMT+0800 (中国标准时间)',
				value:'2016-12-21T10:01'
			}
		},
		filters:{
			'datetime':function(value){
				return value.slice(0,12);
			}
		}
	}

</script>