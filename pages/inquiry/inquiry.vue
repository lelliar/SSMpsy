<template>
	<view>
		<view class="top">
			<view class="topleft">
				<image src="../../static/search1.png" mode="" style="height:100%;width:100%;"></image>
			</view>
			<view class="topright">
				<input type="text" value="" style="width:100%;height:100%" placeholder="请搜索"/>
			</view>
		</view>
		<view class="center" v-for="(item , i) in list" :key="i">
			<view class="centertop">
				<view class="centertopleft">
					{{ item.firstname }}
				</view>
				<view class="centertopright">
					<view class="centertoprighttop">
						{{ item.name }}
					</view>
					
					<view class="centertoprightbottom">
						{{ item.time }}
					</view>
					
				</view>
			</view>
			<view class="centerbottom">
				<view class="centerbottomtop">
					<view class="centerbottomtopleft">
						<image src="../../static/dz.png" mode="" style="height:100%;width:100%"></image>
					</view>
					<view class="centerbottomtopright" style="margin-top:-10rpx;">
						{{ item.address }}
						<view style="font-weight: 100;font-size:20rpx;margin-top:-20rpx;height:auto;">
							{{ item.phone }}
						</view>
					</view>
					
				</view>
				<view class="centerbottomlow">
					<view class="centerbottomlowbox">
						{{ item.price }}元
					</view>
					<view class="centerbottomlowbox">
						{{ item.size }}
					</view>
					<view class="centerbottomlowright" @click="success">
						我已完成
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				list:[
					{
						firstname:'王',
						name:'王TT',
						time:'2020-08-04 10:00:00',
						address:'博慧三a514',
						phone:'17390394258',
						price:6,
						size:'大件'
					},
					{
						firstname:'王',
						name:'王TT',
						time:'2020-08-04 10:00:00',
						address:'博慧三a514',
						phone:'17390394258',
						price:6,
						size:'大件'
					},
					{
						firstname:'王',
						name:'王TT',
						time:'2020-08-04 10:00:00',
						address:'博慧三a514',
						phone:'17390394258',
						price:6,
						size:'大件'
					},
					{
						firstname:'王',
						name:'王TT',
						time:'2020-08-04 10:00:00',
						address:'博慧三a514',
						phone:'17390394258',
						price:6,
						size:'大件'
					}
				]
			}
		},
		methods: {
			success(){
				
				uni.showModal({
				    title: '提示',
				    content: '是否确认完成',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style scoped>
	*{
		height:100vh;
		box-sizing: border-box;
	}
	.centerbottomlowright{
		width:40%;
		height:100%;
		background-color: #007AFF;
	}
	.top{
		display:flex;
		height:5%;
		width:90%;
		background-color: red;
		margin:0 auto;
		background-color: #e1e0e5;
		margin-top:20rpx;
		border-radius: 20rpx;
	}
	.topleft{
		width:10%;
		height:100%;
		margin-left:2%;
	}
	.topright{
		width:85%;
		height:100%;
		margin:0 auto;
	}
	.centerbottomlowright{
		width:150rpx;
		height:60rpx;
		border-radius: 15rpx;
		left:450rpx;
		top:30rpx;
		line-height:70rpx;
		color:white;
		font-weight: bold;
		text-align: center;
		background-color: #007AFF;
		position: absolute;
		
	}
	.center{
		width:90%;
		height:30%;
		background-color: white;
		margin:0 auto;
		margin-top:40rpx;
		border-radius: 30rpx;
		padding:5%;
		box-shadow: 4rpx 4rpx 10rpx #888888;
	}
	.centertop{
		display: flex;
		height:40%;
		border-bottom:1px solid #e1e1e1;
		width:100%;
	}
	.centertopleft{
		display: inline-block;
		height:70%;
		margin-top:3%;
		width:15%;
		text-align: center;
		line-height: 90rpx;
		color:white;
		font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-weight: bold;
		font-size: 40rpx;
		background-color: #3f6dfe;
		border-radius: 50%;
	}
	.centertopright{
		height:70%;
		width:70%;
		margin-top:3%;
		margin-left:3%;
	}
	.centertoprighttop{
		height:65%;
		line-height: 60rpx;
		width:100%;
		font-size: 30rpx;
	}
	.centertoprightcenter{
		height:30%;
		color: #b4b4b4;
		width:100%;
	}
	.centertoprightbottom{
		height:30%;
		width: 100%;
		color:#abacb6;
	}
	.centerbottom{
		height:50%;
		margin-top:5%;
		width:100%;
	}
	.centerbottomtop{
		height:40%;
		width:100%;
		display: flex;
	}
	.centerbottomtopleft{
		height:100%;
		width:10%;
		margin-left:5%;
	}
	.centerbottomtopright{
		width:70%;
		height:100%;
		margin-left:5%;
		font-size: 40rpx;
		font-weight: bold;
		line-height: 60rpx;
	}
	.centerbottomlow{
		position: relative;
		height:60%;
		margin-top:10rpx;
		display: flex;
		padding-top:4%;
		padding-bottom:4%;
	}
	.centerbottomlowbox{
		height:100%;
		width:auto;
		margin-left:4%;
		padding-left:20rpx;
		padding-right: 20rpx;
		line-height: 50rpx;
		color:#0867ff;
		border-radius: 10rpx;
		background-color: #dbe7ff;
	}
</style>
