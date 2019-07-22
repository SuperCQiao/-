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
				src1:'http://img.manhua.weibo.com/hcover/2018/12/24/6469545963_KjDiUXtX.jpg',
				sp01:'恋爱',sp02:'第101次禁声',sp03:'第09话',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2019/01/15/2106978712_oAn1AOTd.jpg',
				sp01:'剧情',sp02:'住手，你这只多肉精！',sp03:'第81话',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/12/11/6713434631_I3IiLhi7.jpg',
				sp01:'剧情',sp02:'恋爱超能力不是用来恋爱的',sp03:'第123章',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2019/03/11/5843564515_wl9M3bsS.jpg',
				sp01:'恋爱',sp02:'甜蜜禁爱',sp03:'第77话',
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/30/3471934934_2FvxJJVB.jpg',
				sp01:'恋爱',sp02:'他她她',sp03:'第123章'
				},
				{
					src1:'http://img.manhua.weibo.com/hcover/2018/09/29/2084322240_dgFQRZXS.jpg',
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

