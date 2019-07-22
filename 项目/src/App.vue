<template>
 <div id="app">
  <header class="header">
				<a href="" class="nav_back_icon">
					<img src="../static/icon_back.png" alt="" />
				</a>
				<div class="nav_back_middle">放送表</div>
				<div class="nav_back_rigth"></div>
			</header>
			
  <div class="headr">
  <all class="ll"></all>
  </div>
  <div class="tijia">
  <router-view/>
  </div>
 </div>
</template>

<script>
	import all from './components/all'
export default {
  name: 'App',
 components:{
 	all
 }
}
</script>

<style>
	.ll{
		z-index: 4;
	}
	*{
		margin: 0px;
		padding: 0px;
	}
	.header{
		z-index: 999;
		position: fixed;
		width: 100%;
	height:2.5rem;
	display: flex;
	background-color: white;
}
.header .nav_back_icon{
	width: 20%;
}
.header .nav_back_middle{
	color: #c4b3ba;
	width: 60%;
	
	display: flex;
	justify-content: center;
	align-items: center;
}
.header img{
	width: 3rem;
}

	.headr{
		width: 100%;
		z-index: 4;
		background-color: white;
		position: fixed;
		top:2.5rem;
		border-bottom: solid #c4b3ba 1px;
	}
.tijia{
	position: relative;
	top:5rem;
	z-index: 1;
}
</style>

















































































































































































































































































































































