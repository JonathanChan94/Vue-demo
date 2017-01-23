<template>
<div>
	<p>分类名称内容部分</p>
	<p>{{ msg }}</p>
</div>
</template>

<script>
	var data={msg:"test!!!!"}
	export default{
		name:'typename',
		data () {
			return data
		}
	}
</script>