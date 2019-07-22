<template>
<div class="pict" @click="fn">

<span :class="{kk:isShow}">{{title}}</span>
</div>

</div>
</template>

<script>
	export default {
 
 props:['title','mark'],
 data(){
 	return{
 		isShow:false
 	}
 },
 methods:{
 	fn(){
 		this.$emit('inncre',this.mark);
 		this.isShow=true;
 	}
 	
 },

}
</script>

<style>
.pict{
flex: 1;
	font-size:.8rem;
	text-align: center;
	
}
.pict:last-child span{
	color: black;
}
.kk{
	color: black;
}

	
</style>