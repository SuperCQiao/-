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
				src1:'http://img.manhua.weibo.com/hcover/2018/09/10/2660188431_x4h8zT12.png',
				sp01:'搞笑',sp02:'管家君充电中',sp03:'第142话 回忆 （02）',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/06/14/6572967266_qfVSYVgg.jpg',
				sp01:'恋爱',sp02:'人鱼公主',sp03:'第132话 救出爱人',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/07/2084322240_pX7B5ZBX.png',
				sp01:'古风',sp02:'万里雪歌',sp03:'第14话 天长路远魂飞苦 （4）',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/12/2660188431_MCLco7O8.png',
				sp01:'剧情',sp02:'恋爱超能力',sp03:'第67话',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/10/2660188431_MQVzDH3A.png',
				sp01:'出轨',sp02:'吴伦国勇唱绿色',sp03:'第123章'
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/12/04/5531438601_LS6auxrK.jpg',
				sp01:'古风',sp02:'春江花月',sp03:'第70话 今夕何夕'
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
