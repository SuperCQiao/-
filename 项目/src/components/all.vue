<template>
	<div class="item">
		<item title="周四" mark="thursday"  @inncre="look">

		</item>
		<item title="周五" mark="firday"  @inncre="look">
			

		</item>
		<item title="周六" mark="saturday" @inncre="look">

		</item>
		<item title="周天" mark="sunday" @inncre="look">

		</item>
		<item title="周一" mark="monday" @inncre="look">
		
		</item>
		<item title="昨天" mark="tuesday" @inncre="look">
		
		</item>
		<item title="今天" mark="wednesday" @inncre="look">
		
		</item>
	</div>
</template>

<script>
	import item from './item'
export default {
  name: 'all',
 components:{
 	item
 },
 data(){
 	return{
 		current:'wednesday',
 	}
 },
methods:{
 	look(data){
 		this.current=data;
 		this.$router.push(data);
 	}
 }
 
}
</script>

<style>
.item{
	display: flex;
	width: 100%;
	color: #c4b3ba;
	height: 2rem;
	display: flex;
}

</style>