<template>
	<view class="all">
		<view class="top">
			<view class="topcenter">
				<image src="../../static/ssm.png" mode="" style="width: 100%;height:100%;border-radius: 50%;"></image>
			</view>
			<view class="login">
				<view class="logintop">
					<view class="loginwelcome">
						欢迎使用
					</view>
					<view class="logintext">
						WELCOME TO USE THIS PRODUCT
					</view>
				</view>
				<view class="logincenter">
					 
					<view class="logintest">
						<input type="text" value="" class="logintextinput"  placeholder="请输入手机号码" v-model="phone" @blur="phonetest"/>
						<image src="../../static/cw.png" mode="" class="loginimage" v-if="phonetest1"></image>
					</view> 
					<view class="logintest">
						<input type="text" value="" class="logintextinput"  placeholder="请输入密码" v-model="password"/>
					</view> 
					
				</view>
				<view class="loginbutton">
					<view class="loginlogin" @click="login">
						登录
					</view>
					<view class="loginforget" @click="index">
						我要注册>
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
				phone:'',
				password:'',
				phonetest1:false
			}
		},
		onLoad() {
			this.getaddress()
		},
		methods: {
			index(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			getaddress(){
				var _this = this
				uni.getLocation({
				    type: 'gcj02',
				　　 geocode:true,
				    success: function (res) {
						_this.latitude = res.latitude
						_this.longitude = res.longitude
						console.log(_this.latitude)
						console.log(_this.longitude)
					}
				});
			},
			phonetest(){
				if(this.phone.length != 11 && this.phone != ''){
					this.phonetest1 = true
				}else{
					this.phonetest1 = false
				}
			},
			login(){
				uni.navigateTo({
					url:'../main/main'
				})
			}
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.all{
		height:100vh;
	}
	.top{
		height:40%;
		width:100%;
		padding-top:15%;
		background-image: linear-gradient(#00aaff, #00ffff);
	}
	.topcenter{
		height:170rpx;
		width:170rpx;
		margin:0 auto;
		border-radius: 50%;
		padding:20rpx;
		background-color: white;
	}
	.login{
		height:60vh;
		width:90%;
		border-radius: 20rpx;
		box-shadow:0px 0px 20rpx #888888;
		margin:0 auto;
		margin-top:60rpx;
		background-color: white;
	}
	.logintop{
		height:20%;
		width:90%;
		padding:5%;
		margin:0 auto;
	}
	.loginwelcome{
		height:20%;
		font-weight: bold;
		font-size: 50rpx;
		width:100%;
	}
	.logintext{
		width: 100%;
		height:15%;
		margin-top:10%;
		font-size: 20rpx;
	}
	.logincenter{
		height:50%;
		width:100%;
		padding-left:10%;
		padding-right:10%;
	}
	.loginphone{
		display: flex;
		margin-top:5%;
		height:30%;
		border-bottom:1rpx solid #d1d1d1;
		width:100%;
	}
	.loginphoneleft{
		border:0px;
		height:90%;
		margin-top:1%;
		width:70%;
	}
	.loginphonebutton{
		width:30%;
		margin:0 auto;
		text-align: center;
		margin-top:5%;
		color: white;
		line-height: 74rpx;
		font-size: 25rpx;
		height:60%;
		background-color: #00AAFF;
		border-radius: 40rpx;
	}
	.logintest{
		display: flex;
		margin-top:5%;
		height:30%;
		width:100%;
		border-bottom: 1rpx solid #d1d1d1;
	}
	.logintextinput{
		height:90%;
		width: 90%;
		margin-top:5%;
	}
	.loginimage{
		height: 50%;
		margin-top:10%;
		width:10%;
	}
	.loginbutton{
		height:10%;
		margin-top:20rpx;
		width:100%;
	}
	.loginlogin{
		height:80%;
		width:50%;
		font-size: 30rpx;
		line-height: 70rpx;
		text-align: center;
		border-radius: 20rpx;
		margin:0 auto;
		color:white;
		background-color: #007AFF;
	}
	.loginforget{
		font-size: 15rpx;
		margin-top:50rpx;
		margin-left:43%;
		top:10rpx;
		color:#007AFF;
	}
</style>
