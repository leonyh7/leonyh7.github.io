<style lang="sass" scoped>
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
	
	.charts{
		text-align: center;
		font-family: "微软雅黑";
		margin-top: 10px;
		
		
	}	
	a{
			color: #41b883;
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
	<div class="charts">
		<a v-link="{path: '/chart'}">打开图表页</a>		
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