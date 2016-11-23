<template>
<div>
	<p>this is View B</p>
	<p>{{ msg }}</p>
</div>
</template>

<script type="text/javascript">
	export default{
		name:"ViewB",
		data(){
			return {
				msg: "Welcome to Your Vue.js App"
			}	
		}
	}
</script>