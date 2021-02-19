<template>
	<view class="alltop">
		<view class="top">
			<view class="topleft" @click="chat">
				<image src="../../static/lt.png" mode="" style="width:100%;height:100%;"></image>
			</view>
			<view class="topcenter">
				<view class="topcenterleft">
					<image src="../../static/search.png" mode="" style="height:100%;width:100%;"></image>
				</view>
				<view class="topcenterright">
					<input type="text" value="" style="height:100%;width:100%;padding-top:1rpx;"/>
				</view>
			</view>
			<view class="topright">
				<image src="../../static/sys.png" mode="" style="width:100%;height:100%;" @click="scan"></image>
			</view>
		</view>
		<view class="center">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500" style="">
				<swiper-item v-for="(item,index) in swiperList" :key="index" s tyle="border-radius:30rpx;height:100%;width:100%;" >
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'" style="border-radius: 30rpx;"></image>
				</swiper-item>
			</swiper> 
		</view>
		<view class="centerselect">
			<view class="centerselectbox" v-for="(item , i) in boxselect" :key="i" @click="inquiry(item.to)">
				<view class="centerselectboxtop">
					<view class="centerselectboxtopimg" :style="`background-color: ${item.color};`">
						<image :src="item.img" mode="" style="width:100%;height:100%;"></image>
					</view>
				</view>
				<view class="centerselectboxbottom">
					{{ item.text }}
				</view>
			</view>
		</view>
		<view class="centergg">
			<view class="centerggleft" @click="program">
				<view class="centergglefttitle">
					<view class="centergglefttitletext">
						问题报告
					</view>
					<view class="centergglefttitledes">
						该APP问题提交
					</view>
				</view>
			</view>
			<view class="centerggright">
				<view class="centerggrighttop" @click="income">
					<view class="centerggrighttoptitle">
						<view class="centerggrighttoptitletop">
							我的收益
						</view>
						<view class="centerggrighttoptitlebottom">
							收入金额
						</view>
					</view>
					<view class="centerggrighttopall">
						<image src="../../static/money.png" mode="" style="height:100%;width:60%;margin-left:25%;"></image>
					</view>
				</view>
				
				<view class="centerggrightbottom" @click="my">
					<view class="centerggrighttoptitle">
						<view class="centerggrighttoptitletop">
							我的
						</view>
						<view class="centerggrighttoptitlebottom">
							个人信息
						</view>
					</view>
					<view class="centerggrighttopall">
						<image src="../../static/my.png" mode="" style="height:100%;width:56%;margin-left:25%;"></image>
					</view>
				</view>
			</view>
		</view>
			<view class="bottomtop">
				<view class="bottomtopleft" >
					公告
				</view>
				<view class="bottomtopright">
					<view class="bottomtoprightselect">
						{{ this.count }}
					</view>
					<view class="bottomtoprightnoselect">
						/15
					</view>
				</view>
			</view>
			 <view class="bottomdi">
			<swiper class="screen-swiper"  interval="5000" duration="500" @change="countadd">
			 <swiper-item v-for="(item,index) in swipergg" :key="index" style="height:100%;width:100%;">
				<view class="bottomditop">
					<image :src="item.url" mode="" style="height:100%;width:100%;"></image>
				</view>
				<view class="bottomdibottom">
					<view class="bottomdibottomtitle">
						{{ item.title }}
					</view>
					<view class="bottomdibottomdes">
						{{ item.description }}
					</view>
					</view>
				</swiper-item>
			</swiper>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url:'../../static/a.jpg',
					
				}],
				swipergg:[{
					id:0,
					count:1,
					type:'image',
					url:'../../static/bgc.jpg',
					title:'紧急通知1',
					description:'配送员全部回家'
				},
				{
					id:1,
					count:2,
					type:'image',
					url:'../../static/bgc.jpg',
					title:'紧急通知',
					description:'配送员全部回家'
				}],
				count:1,
				boxselect:[
					{text:'订单查询' , img:'../../static/fire.png' , color:'#dd9bea' , to:'../inquiry/inquiry'},
					{text:'我的完成' , img:'../../static/success.png' , color:'#8fc3e6' , to:'../success/success'},
					{text:'我的位置' , img:'../../static/address.png' , color:'#aaeb98' , to:'../address/address'},
					{text:'紧急呼叫' , img:'../../static/hj.png' , color:'#55007f' , to:'../shout/shout' , to:'17390394258'}
				],
				dotStyle: true,
				towerStart: 0,
				direction: '',
				location:[]
			}
		},
		onLoad() {
			this.getaddress()
		},
		methods: {
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			countadd(e){
				this.count = 0
				this.count = e.detail.current+1
			},
			chat(){
				uni.showToast({
					title: '该功能暂未开放',
					icon:'none',
					duration: 2000
				});
			},
			getaddress(){
				uni.getLocation({
				    type: 'gcj02',
				　　 geocode:true,
				    success: function (res) {
						this.location = res;
					},fail: (err) => {
							console.log(err)
							// this.$api.msg('获取定位失败');
						  }
				});
				console.log(this.location)
			},
			scan() {
			                 let that = this;
			                 // 允许从相机和相册扫码
			                 uni.scanCode({
			                     success: function (res) {
			                         console.log('条码类型：' + res.scanType);
			                         console.log('条码内容：' + res.result);
			                     }
			                 });
			             },
			inquiry(url){
				if(url == '17390394258'){
					uni.makePhoneCall({
					    phoneNumber: url,
					});
				}else{
				uni.navigateTo({
					url:url
				})
				}
			},
			program(){
				uni.navigateTo({
					url:'../program/program'
				})
			},
			income(){
				uni.navigateTo({
					url:'../income/income'
				})
			},
			my(){
				uni.navigateTo({
					url:'../my/my'
				})
			}
		}
	}
</script>

<style scoped>
	*{
		height:100vh;
		box-sizing: border-box;
		
	}
	.bottomdibottom{
		height:25%;
		margin-top:10rpx;
		width: 100%;
	}
	.alltop{
		margin-top:80rpx;
	}
	.bottom{
		height:30%;
		width:95%;
		margin:0 auto;
		margin-top:40rpx;
		background-color: orange;
	}
	.bottomditop{
		height:75%;
		width:100%;
	}
	.centerselect{
		display: flex;
		width:95%;
		height:10%;
		margin:0 auto;
		margin-top:40rpx;
		
	}
	.bottomdibottomtitle{
		height:50%;
		width:100%;
		font-size: 40rpx;
		font-weight:bold;
	}
	.bottomdibottomdes{
		height:50%;
		margin-top:5rpx;
		width: 100%;
		color:#919191;
		font-size: 25rpx;	
		
	}
	.bottomdi{
		width:95%;
		height:40%;
		padding-top:5%;
		padding-bottom:10%;
		margin:0 auto;
		
	}
	.bottomtopleft{
		width: 80%;
		font-weight: bold;
		font-size: 44rpx;
		height:100%;
	}
	.bottomtopright{
		display: flex;
		width:20%;
		height:100%;
	}
	.bottomtoprightselect{
		width:20%;
		margin-left:30%;
		height:80%;
		margin-top:5%;
		font-size: 40rpx;
		font-weight: bold;
	}
	.bottomtoprightnoselect{
		font-size: 40rpx;
		height:70%;
		width:50%;
		margin-top:10%;
		}
	.bottomtop{
		
		display: flex;
		height:5%;
		width:95%;
		margin:0 auto;
		margin-top:8%;
	}
	.centerselectboxtop{
		height:70%;
		width:100%;
	}
	.centergglefttitle{
	
		margin:10%;
		width:70%;
		height:20%;
	}
	.centerggrighttoptitle{
		display: inline-block;
		margin-left:5%;
		margin-top:5%;
		height:50%;
		width:55%;
		
	}
	.centerggrighttopall{
		height:50%;
		width:50%;
		margin-top:25%;
	}
	.centerggrighttoptitletop{
		height:65%;
		width:100%;
		font-size: 40rpx;
		font-weight: bold;
	}
	.centerggrighttoptitlebottom{
		height:35%;
		font-size: 20rpx;
		color:#595959;
	}
	.centergglefttitledes{
		height:35%;
		width:100%;
		color:#595959;
		font-size: 20rpx;	
	}
	.centergglefttitletext{
		height:65%;
		font-weight: bold;
		font-size: 40rpx;
		width:100%;
	}
	.centerselectboxtopimg{
		width:65%;
		height:100%;
		border-radius: 50%;
		padding:10%;
		margin:0 auto;
	}
	.centergg{
		display: flex;
		height:30%;
		width:90%;
		margin:0 auto;
		margin-top:5%;
	}
	.centerggleft{
		height:100%;
		width:45%;
		background: url(../../static/yiqing.jpg) no-repeat;
		background-size:cover;
	}
	.centerggright{
		height:100%;
		width:50%;
		margin-left:5%;
	}
	.centerggrighttop{
		height:45%;
		width:100%;
		display: flex;
		background-color: #ffc0c1;
	}
	.centerggrightbottom{
		display:flex;
		height:45%;
		width:100%;
		margin-top: 12%;
		background-color: #c5eea3;
	}
	.centerselectboxbottom{
		height:30%;
		width:100%;
		text-align: center;
		font-family: 宋体;
		font-size: 15rpx;
		line-height: 50rpx;	
		font-weight: bold;
	}
	.centerselectbox{
		margin-left:4%;
		width:20%;
		height:100%;
	}
	.top{
		display: flex;
		height:6.5%;
		width:95%;
		margin:0 auto;
		padding-top:20rpx;
	}
	.topleft{
		height:100%;
		width:10%;
	}
	.topcenter{
		display:flex;
		width: 75%;
		background-color: #f3f3f3;
		height:100%;
		border:1px solid #999999;
		border-radius: 40rpx;
		margin:0 auto;
	}
	.card-swiper{
		height:100%;
		width:100%;
	}
	.topright{
		width: 10%;
		height:100%;
	}
	.topcenterleft{
		width:12%;
		height:100%;
		padding:15rpx;
	}
	.topcenterright{
		width: 85%;
		border-radius: 40rpx;
		margin:0 auto;
		height:100%;
	}
	.screen-swiper{
		width:100%;height:100%;border-radius:30rpx;
	}
	.center{
		width:90%;
		height:30%;
		margin:0 auto;
		margin-top:4.5%;
		box-shadow: 6rpx 6rpx 20rpx #888888;
		border-radius: 30rpx;
	}
</style>
