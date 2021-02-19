<template>
	<view class="allbox" @click="del">
		<view class="back" @click="backlastpage" >
			<image src="../../static/back1.png" mode="" style="height:100%;width:100%;"></image>
		</view>
		<view class="notice"  @tap="showModal1" data-target="Modal">
			<image src="../../static/tz.png" mode="" style="height:100%;width:100%;"></image>
		</view>
		<view class="noticered" v-if="noticered">
			
		</view>
		
		<view class="topbgc">
			<view class="topall">
				<view class="topimage">
					<image src="../../static/logo.png" mode="" style="height:100%;width:100%;border-radius: 50%;"></image>
				</view>
				<view class="topcenter">
					<view class="topname">
						{{ nickname }}
					</view>
					<view class="topphone">
						<view class="topphoneleft">
							<image src="../../static/phone.png" mode="" style="width:100%;height:100%;"></image>
						</view>
						<view class="topphoneright">
							17390394268
						</view>
					</view>
				</view>
			</view>
				<view class="topbottom">
					<view class="topbottombox">
						<view class="topbottomleft" >
							闪送猫
						</view>
						<view class="topbottomright" style="font-size:20rpx;">
							欢迎使用闪送猫
						</view>
						<view class="topbottombutton" style="color:black;" @click="call">
							联系开发者
						</view>
					</view>
				</view>
		</view>
		<view class="bottombybottom">
			<view class="centertop">
				<view class="centertopbox">
					<view class="centertopboxselect">
						<view class="centertopboxselecttop">
							1233
						</view>
						<view class="centertopboxselectbottom">
							总收入
						</view>
					</view>
				</view>
				<view class="centertopbox" >
					<view class="centertopboxselect" >
						<view class="centertopboxselecttop">
							1433
						</view>
						<view class="centertopboxselectbottom">
							总里程
						</view>
					</view>
				</view>
			</view>
			<view class="centerbottom">
				<view class="centerbottomtop">
					<view class="centerbottomtopleft">
						我的订单
					</view>
					<view class="centerbottomtopright" @click="ToOrder">
						查看全部订单>
					</view>
					
				</view>
				<view class="centerbottomtopbigbox">
					<view class="centerbottomtopsmallbox" v-for="(item , i) in order" :key="i" @click="ToSelect(item.to)">
						<view class="centerbottomtopsmallboxtop">
							<image :src="item.img" mode="" :class="item.id?'centerbottomtopsmallboxtop2' : 'centerbottomtopsmallboxtop1'">
							</image>
						</view>
						<view class="centerbottomtopsmallboxbottom">
							{{ item.text }}
						</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="bottomleft" v-for="(item , i) in select" :key='i' @tap="showModal($event , item)" data-target="DialogModal2">
					<view :class="item.id?'bottomleftimg1':'bottomleftimg'">
						<image :src="item.img" mode="" :class="item.id?'imgstyle1':'imgstyle'"></image>
					</view>
					<view class="bottomlefttext">
						<view class="bottomlefttexttop">
							{{ item.title }}
						</view>
						<view class="bottomlefttextbottom">
							{{ item.text }}
						</view>
					</view>
				</view>
			</view>
			<view class="centerimage" @click="backhome">
				<image src="../../static/ch.png" mode="" style="display:inline-block;width:90%;height:200%;margin:0 auto;margin-top:-15%;"></image>
			</view>
			
		</view>
		<view class="cu-modal" :class="modalName=='Modal'?'show':''" >
			<view class="cu-dialog" style="height:20%;">
				<view class="cu-bar bg-white justify-end" style="height:20%;width:100%;">
					<view class="content">通知</view>
					<view class="action" @tap="hideModal">
						<image src="../../static/cw.png" mode="" style="height:50%;width:7%;margin-left:88%;margin-top:-30rpx;"></image>
					</view>
				</view>
				<view class="padding-xl">
					{{ content }}
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
			<view class="cu-dialog" style="height:30%;">
				<view class="cu-bar bg-white justify-end"  style="height:20%;width:100%;">
					<view class="content">昵称修改</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl" style="height:50%;display: flex;padding-top:10%;">
					<div>修改昵称：</div>
					<input type="text" value="" v-model="ChangeName" style="width:70%;height:20%;border:1px solid black;border-radius: 20rpx;margin-top:-3rpx;"/>
				</view>
				<view class="cu-bar bg-white" style="height:40rpx;">
					
					<view class="action margin-0 flex-sub  solid-left" @tap="NoSuccessName">取消</view>
					<view class="action margin-0 flex-sub text-green solid-left" @tap="SuccessName">确定</view>
				</view>
			</view>
		</view>
		<view class="video" ref="testDom" >
			<video src="../../static/a.mp4" :controls="false"  ref="video"   style="width:100%;height:100%;overflow: hidden;"></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname:'白',
				ChangeName:'',
				userclick:false,
				content:'我是你爸爸',
				modalName: null,
				noticered:false,
				order:[
					{
						text:'问题',
						img:'../../static/program.png',
						to:'../program/program'
					},
					{
						text:'位置',
						img:'../../static/myaddress.png',
						to:'../address/address'
					},{
						id:2,
						text:'已完成',
						img:'../../static/success2.png',
						to:'../success/success'
						}
				],
				select:[
					{
						img:'../../static/revise.png',
						text:'我要修改',
						title:'修改信息',
						change:true
					},
					{
						img:'../../static/detrusion.png',
						id:1,
						text:'退出登录',
						title:'我要退出',
						change:false
					},
				]
			}
		},
		onPullDownRefresh(){
			this.userclick = true
			this.$refs.testDom.$el.style.height="50vh"
			this.$refs.video.play()
			uni.stopPullDownRefresh()
		},
		methods: {
			del(){
				document.getElementsByClassName('video')[0].style.height=0
			},
			backhome(){
				uni.navigateTo({
					url:'../main/main'
				})
			},
			
			hideModal(e) {
				this.modalName = null
			},
			SuccessName(){
				this.modalName = null
				this.nickname = this.ChangeName
				this.ChangeName = ''
			},
			NoSuccessName(){
				this.modalName = null
				this.ChangeName = ''
			},
			backlastpage(){
				uni.navigateBack({
					
				})
			},
			showModal1(e){
				this.modalName = e.currentTarget.dataset.target
				this.noticered = false
			},
			showModal(e , item) {
				if(item.change == true){
					this.modalName = e.currentTarget.dataset.target
					this.noticered = false
				}else{
					uni.navigateTo({
						url:'../login/login'
					})
				}
			},
			call(){
				uni.makePhoneCall({
					   phoneNumber: '17390394258',
					});
			},
			ToOrder(){
				uni.navigateTo({
					url:'../inquiry/inquiry',
				})
			},
			ToSelect(url){
				uni.navigateTo({
					url:url,
				})
			}
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
		height:100vh;
		width:100vw;
	}
	.allbox{
		padding-top:150rpx;
	}
	.back{
		height:4%;
		width:6%;
		position: absolute;
		top:5%;
		left:2%;
		z-index:100;
	}
	.video{
		height:0;
		width:100%;
		position: absolute;
		top:0;
		transition: height 2s;
		
		left:0;
		z-index:1000;
	}
	.centerbottomtopsmallboxtop1{
		width:80%;height:100%;margin-left:10%;
	}
	
	.notice{
		position: absolute;
		top:5%;
		right:4%;
		width:8%;
		height:4%;
		z-index:100;
	}
	.noticered{
		position: absolute;
		top:3%;
		left:91.5%;
		background-color: red;
		border-radius: 50%;
		width:15rpx;
		height:15rpx;
		z-index:100;
	}
	.bottomleft{
		display: inline-flex;
		width:45%;
		height:57%;
		margin-top:5%;
		margin-left:5%;
	}
	.bottombybottom{
		background-color: #f3f3f3;
	}
	.centerbottomtopsmallboxtop2{
		width:80%;
		height:80%;
		margin-left:5%;
		margin-top:10%;
	}
	.imgstyle{
		width:60%;
		height:60%;
		margin-left:18%;
		margin-top:18%;
	}
	.imgstyle1{
		width:60%;
		height:60%;
		margin-left:20%;
		margin-top:20%;
	}
	.bottom{
		height:15%;
		width:90%;
		display: flex;
		margin:0 auto;
		margin-top:5%;
		border-radius: 20rpx;
	}
	.centerimage{
		height:13%;
		width:90%;
		margin:0 auto;
		margin-top:5%;
		border-radius: 25rpx;
	}
	.centerbottomtop{
		 height:30%;
		 display: flex;
		 width:90%;
		 margin:0 auto;
		 font-weight: bold;
	}
	
	.centerbottomtopbigbox{
		display: flex;
		height:50%;
		width:90%;
		margin:0 auto;
		margin-top:3%;
		justify-content:space-around;
	}
	.centerbottomtopsmallbox{
		height:100%;
		width:20%;
	}
	.centerbottomtopsmallboxtop{
		height:70%;
		width:100%;
	}
	.centerbottomtopsmallboxbottom{
		width:100%;
		height:30%;
		text-align: center;
	}
	.centerbottomtopleft{
		height:100%;
		width:30%;
		line-height: 80rpx;
		font-size: 40rpx;
	}
	.centerbottomtopright{
		width:30%;
		height:40%;
		margin-top:6%;
		font-size: 20rpx;
		margin-left:40%;
		color:#bababa;
	}
	.topcenter{
		height:80%;
		width:30%;
		margin-left:2%;
		margin-top:1%;
	}
	.centerbottom{
		height:20%;
		padding-top:2%;
		width:90%;
		margin:0 auto;
		background-color: white;
		border-radius: 20rpx;
		margin-top:5%;
	}
	.centertopboxselecttop{
		height:45%;
		text-align: center;
		line-height:50rpx;
		font-size: 40rpx;
		font-weight: bold;
		width:100%;
	}
	.centertopboxselectbottom{
		height:40%;
		text-align: center;
		font-size:20rpx;
		width: 100%;
		color:#7a7a7a;
		text-align: center;
	}
	.topbottomleft{
		display: flex;
		width:22%;
		height:100%;
		color:white;
		text-align: center;
		line-height: 74rpx;
		font-size: 40rpx;
	}
	.bottomleftimg{
		height:100%;
		width:40%;
		border-radius: 40%;
		opacity: 0.8;
		background: linear-gradient(#ffc378, #ff8b59);
	}
	.bottomleftimg1{
		height:100%;
		width:40%;
		border-radius: 40%;
		opacity: 0.8;
		background: linear-gradient(#ffe187, #fecb64);
	}
	.bottomlefttext{
		width:50%;
		height:80%;
		margin-left:3%;
	}
	.bottomlefttexttop{
		height:60%;
		width:100%;
		font-weight: bold;
		font-size: 35rpx;
	}
	.bottomlefttextbottom{
		height:40%;
		width:100%;
	}
	.centertop{
		display: inline-flex;
		width:90%;
		overflow: hidden;
		border-radius: 20rpx;
		background-color: white;
		height:12%;
		margin-left:5%;
		margin-top:58%;
	}
	.centertopboxselect{
		width:50%;
		height:70%;
		margin:0 auto;
		margin-top:12%;
	}
	.centertopbox{
		width:50%;
		height:100%;
	}
	.topbottombutton{
		height:80%;
		width:30%;
		font-size: 20rpx;
		margin-left:17%;
		text-align: center;
		font-family: 宋体;
		line-height: 70rpx;
		margin-top: 6rpx;
		color: #343434;
		border-radius: 20rpx;
		background-color: #34ccbb;
	}
	.topbottomright{
		width:30%;
		height:60%;
		margin-top:2.3%;
		color:#e3e3e3;
		font-family: 宋体;
		line-height: 60rpx;
	}
	.topbottom{
		height:40%;
		width:65%;
		margin:0 auto;
		margin-top:3%;
		border-radius: 40rpx;
		background-color: #07838a;
	}
	.topbottombox{
		display: inline-flex;
		margin-left:5%;
		margin-top:3%;
		height:40%;
		width:90%;
	}
	.topname{
		height:50%;
		font-size: 40rpx;
		font-family: 宋体;
		width:100%;
		color:white;
	}
	.topphoneleft{
		width:14%;
		height:100%;
	}
	.topphoneright{
		line-height: 40rpx;
		color:#f5f5f5;
		width:60%;
		margin-left:1%;
		height:100%;
	}
	.topall{
		width:100%;
		height:33%;
		margin-top:17%;
		display: flex;
	}
	.topphone{
		display: flex;
		height:30%;
		width:100%;
	}
	.topbgc{
		height:40%;
		width:140%;
		top:0rpx;
		left:-20%;
		overflow: hidden;
		position: absolute;
		background: linear-gradient(#27bf90, #44d6d3);
		border-radius:  0 0 45% 45%;
	}
	.topimage{
		width:130rpx;
		border-radius: 50%;
		height:130rpx;
		margin-left:20%;
	}
</style>
