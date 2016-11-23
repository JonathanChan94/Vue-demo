<template>
<div>
	<p>this is view A</p>
	<p>{{ msg }}</p>
</div>
</template>

<script>
export default {
  name: 'ViewA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>