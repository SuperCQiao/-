<template>
	
	 <div class="thursday">
	 	<div v-for="site in arr">
	 		
	 		
	 		<img :src="site.src1" alt="" />
	 		<div class="title">
	 		<span>{{site.sp01}}</span>
	 		<span>{{site.sp02}}</span>
	 		<span>{{site.sp03}}</span>
	 		</div>
	 	</div>
	 </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
 data(){
 	return{
 		arr:[
				{
				src1:'http://img.manhua.weibo.com/hcover/2018/10/15/5657589144_CjhiiwAV.jpg',
				sp01:'恋爱',sp02:'苏小照的神出鬼没',sp03:'第27话 平常的上学日',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/11/2660188431_WqoGhnih.png',
				sp01:'古风',sp02:'大风歌',sp03:'第20话 长剑秦弓 （9）',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2019/07/04/2042188591_SwxBw8pG.jpg',
				sp01:'恋爱',sp02:'冒牌大小姐',sp03:'第88话 不完全真相',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/27/2042188591_BSwaas0T.jpg',
				sp01:'恋爱',sp02:'总裁，别退话啊！',sp03:'第七十九话',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2019/05/31/2042188591_OoZflL19.jpg',
				sp01:'校园',sp02:'只想撩到你！',sp03:'第92话 她到底约了谁'
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/27/2084322240_BocgWruF.jpg',
				sp01:'恋爱',sp02:'年小小逃跑计划！',sp03:'第132话'
				}]
 	}
 },
 }
</script>


<style>
	.thursday{
		padding: .5rem 1rem;
	}
.thursday img{
	width: 100%;
	height: 14rem;
	border-radius: .3rem;
}
.title{
	padding-top: .3rem;
	padding-bottom: .5rem;
	height: 2rem;
	display: flex;
	align-items: center;
	font-size: 1rem;
	
}
.title span:first-child{
	background-color: #f2c900;
	display: block;
	width: 2.5rem;
	height: 1.3rem;
	font-size: .8rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: .1rem;
	margin-right:.6rem ;
}
.title:nth-of-type(2) span:first-child{
	background-color: #fc7933;
}
.title span:nth-of-type(2){
	color: #787878;
	font-weight: 300;
}
.title span:nth-of-type(3){
	font-size: .8rem;
	color: #ababab;
	position: absolute;
	right: 0.3rem;
}
</style>
