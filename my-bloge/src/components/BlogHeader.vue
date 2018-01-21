<template>
	<div class="nav">
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="add" exact>写博客</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"blog-header"
	}
</script>
<style scoped>
	.nav{
		padding:30px 0;
		margin: 0 0 40px 0 ;
		background: crimson;

	}
	ul {
		margin: 0;
		list-style-type: none;
		text-align: center;

	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		padding: 12px;
       color: #fff;
       text-decoration: none;
       border-radius: 5px;
	}
	/* 默认给的类名 */
	.router-link-active{
		background: rgba(255,255,255,0.8);
		color: #444;
	}

</style>