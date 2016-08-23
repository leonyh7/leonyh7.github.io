<style scoped>
	h1 {
		color: #28a7e1;
		text-align: center;
		font-size: 25px;
		font-weight: bold;
		margin-top: 20px;
	}
	
	h2 {
		text-align: center;
		font-size: 20px;
		margin-top: 10px;
	}
	
	img {
		width: 150px;
	}
</style>
<template>
	<h2>
        <img src="../images/logo.png">
    </h2>
	<h1>
        覆盖移动终端:
        {{ 3731700153 |  NumberSeparator }}
    </h1>
	<h2 v-time></h2>
	<div id="example">
		<h2 v-if="greeting">Hello {{ name }}!</h2>
	</div>

</template>
<script>
	import NumberSeparator from '../filters/number-separator';
	import Time from '../directives/time';

	export default {
		filters: {
			NumberSeparator
		},
		directives: {
			time: Time
		},
		data() {
			return {
				name: 'vue.js',
				greeting: true
			}
		},
		ready() {

		},
		beforeDestroy() {

		},
		methods: {

		}
	};
</script>