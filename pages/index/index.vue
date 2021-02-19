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
						<input type="text" value="" class="logintextinput"  placeholder="请输入昵称" v-model="nickname"/>
						
					</view>
					 <view class="logintest">
					 	<input type="text" value="" class="logintextinput"  placeholder="请输入真实姓名" v-model="name"/>
					 </view> 
					<view class="loginphone">
						<input type="text" value="" class="loginphoneleft" placeholder="请输入手机号码" v-model="phone" @blur="phonetest"/>
						<image src="../../static/cw.png" mode="" class="loginimage" style="margin-top:3%;height:60rpx;" v-show="phonetest1"></image>
						<view class="loginphonebutton">
								获取验证码
						</view>
					</view>
					<view class="logintest">
						<input type="text" value="" class="logintextinput"  placeholder="请输入验证码" v-model="test"/>
					</view> 
					<view class="logintest">
						<input type="password" value="" class="logintextinput"  placeholder="请输入密码" v-model="password"/>
					</view> 
					<view class="logintest">
						<input type="password" value="" class="logintextinput"  placeholder="请再次输入密码" v-model="password2"  @blur="passwordtest" />
						<image src="../../static/cw.png" mode="" class="loginimage" style="height:60rpx;width: 60rpx;margin-top:20rpx;" v-if="password1"></image>
					</view> 
				</view>
				<view class="loginbutton">
					<view class="loginlogin">
						注册
					</view>
					<view class="loginforget" @click="login">
						我要登录
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
				nickname:'',
				name:'',
				phone:'',
				test:'',
				password:'',
				password2:'',
				phonetest1:false,
				password1:false
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			passwordtest(){
				if(this.password.toString() != this.password2.toString() && this.password.length != ''){
					this.password1 = true
				}else{
					this.password1 = false
				}
			},
			phonetest(){
				if(this.phone.length != 11 && this.phone.length != ''){
					this.phonetest1 = true
				}else{
					this.phonetest1 = false
				}
			}
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.loginimage{
		height: 50%;
		margin-top:10%;
		width:10%;
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
		height:66vh;
		width:90%;
		border-radius: 20rpx;
		box-shadow:0px 0px 20rpx #888888;
		margin:0 auto;
		margin-top:60rpx;
		background-color: white;
	}
	.logintop{
		height:15%;
		width:90%;
		padding:5%;
		margin:0 auto;
	}
	.loginwelcome{
		height:30%;
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
		height:70%;
		width:100%;
		padding-left:10%;
		padding-right:10%;
	}
	.loginphone{
		display: flex;
		margin-top:5%;
		height:13%;
		border-bottom:1rpx solid #d1d1d1;
		width:100%;
	}
	.loginphoneleft{
		display: flex;
		border:0px;
		height:90%;
		margin-top:1%;
		width:60%;
	}
	.loginphonebutton{
		width:30%;
		margin:0 auto;
		
		text-align: center;
		margin-top:1%;
		color: white;
		line-height: 64rpx;
		font-size: 25rpx;
		height:90%;
		background-color: #00AAFF;
		border-radius: 40rpx;
	}
	.logintest{
		display: flex;
		margin-top:5%;
		height:13%;
		width:100%;
		border-bottom: 1rpx solid #d1d1d1;
	}
	.logintextinput{
		height:100%;
		width:90%;
		margin-top:1%;
	}
	.loginbutton{
		display: flex;
		height:10%;
		position: relative;
		margin-top:20rpx;
		width:100%;
	}
	.loginlogin{
		height:80%;
		width:30%;
		font-size: 30rpx;
		line-height: 70rpx;
		text-align: center;
		border-radius: 20rpx;
		margin:0 auto;
		color:white;
		background-color: #007AFF;
	}
	.loginforget{
		position: absolute;
		left:80%;
		font-size: 15rpx;
		top:10rpx;
		color:#007AFF;
		margin:0 auto;
	}
</style>
