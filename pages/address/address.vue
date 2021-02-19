<template>
	<view>
		<map  :latitude="latitude" :longitude="longitude"  style="width:100%;height:100vh;"></map>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				            title: 'map',
				            latitude: 0,
				            longitude: 0,
				            
				        }
			},
		onLoad() {
			this.beforeCreate()
		},
		methods:{
			beforeCreate(){
			    this.bus.$on("latitude", msg => {
			      this.latitude = msg;
				  console.log(msg)	
					})
				
				}
		},
		
	}
</script>

<style>
	
</style>