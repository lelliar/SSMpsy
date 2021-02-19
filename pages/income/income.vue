<template>
	<view>
		<view class="top" style="margin-top:20rpx;">
			<view class="topleft" >
				<image src="../../static/back.png" mode="" style="height:50%;width:40%;" @click="back"></image>
			</view>
			<view class="topright">
				<image src="../../static/date.png" mode="" style="height:60%;width:70%;" @click="onShowDatePicker('date')"></image>
				<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :show-seconds="true" @confirm="onSelected" @cancel="onSelected"/>
			</view>
		</view>
		<swiper class="center" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" 
		  interval="5000" duration="500">
			<swiper-item v-for="(item,index) in list" :key="index" style="border-radius:30rpx;height:100%;width:100%;" >
	
			<view class="centertop">
				今日金额
			</view>
			<view class="centermiddle">
				{{ item.money }}
			</view>
			<view class="centerbottom">
				日期 ：{{ item.date }}
			</view>
		</swiper-item>
		</swiper>
		<view class="fiveall">
			<view class="fivealltop">
				总收益
			</view>
			<view class="fiveallbutton">
				143,234
			</view>
		</view>
		
		<view @click="echarts.onClick" :prop="option" :change:prop="echarts.updateEcharts" id="echarts" class="echarts"></view>
		<view class="buttondate">
			<view class="bottondatebox" v-for="(item , i) in bottomdate" :key="i">
				{{ item }}
			</view>
		</view>
	</view>
</template>

<script>
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	export default {
		
		 components: {
		            MxDatePicker
		        },
		data() {
			return {
				bottomdate:[],
				option: {
					 grid: {
					        left: '-14%',
					        right: '-4%',
					        bottom: '-3%',
					        containLabel: true
					    },
					    xAxis: [
					        {
					            type: 'category',
					            boundaryGap: false,
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value',
								 "splitLine": {     //网格线
								          "show": false
								        }
					        },
					    ],
					    series: [
					        {
					            type: 'line',
					            stack: '总量',
								color:'white',
								opacity:0.8,
					              smooth: true,
					              showSymbol: false,
					            areaStyle: {
									 opacity: 0.5,
									  color: '#0011f2',
								},
					            emphasis: {
					                focus: 'series'
					            },
					            data: [55, 65, 53, 48, 60]
					        }
					    ]
				},
				
				dotStyle: true,
				showPicker: false,
				                date: '2019/01/01',
				                value: '',
								 type: 'rangetime',
				list:[
					{
						id:0,
						date:'2021-02-10',
						money:'356,859'
					},{
						id:1,
						date:'2021-02-09',
						money:'123,123'
					},{
						id:2,
						date:'2021-02-08',
						money:'123,343'
					},{
						id:3,
						date:'2021-02-03',
						money:'123,123'
					},
					{
						id:4,
						date:'2021-02-04',
						money:'123,433'
					}
				],
			}
		},
		onLoad() {
		},
		methods: {
			back(){
				uni.navigateBack({
					
				})
			},
			
			onShowDatePicker(type){//显示
							var date = new Date()
							var y = date.getFullYear()
							var m = date.getMonth()+1;
							var d = date.getDate()
							if(m<10){
								m = '0'+m
							}
							if(d<10){
								d = '0'+d
							}
							this.date = y+'/'+m+'/'+d
							
							
			                this.type = type;
			                this.showPicker = true;
			                this.value = this[type];
			 },
			 onSelected(e) {//选择
			                 this.showPicker = false;
			                 if(e) {
			                     this[this.type] = e.value; 
			                     //选择的值
			                     console.log('value => '+ e.value);
			                     //原始的Date对象
			                     console.log('date => ' + e.date);
			                 }
			             }
		}
	}
</script>

<script module="echarts" lang="renderjs">
	let myChart
	export default {
		mounted() {
			if (typeof window.echarts === 'function') {
				this.initEcharts()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/echarts.js'
				script.onload = this.initEcharts.bind(this)
				document.head.appendChild(script)
			}
		},
		methods: {
			initEcharts() {
				myChart = echarts.init(document.getElementById('echarts'))
				// 观测更新的数据在 view 层可以直接访问到
				myChart.setOption(this.option)
			},
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				myChart.setOption(newValue)
			},
			onClick(event, ownerInstance) {
				// 调用 service 层的方法
				
			}
		}
	}
</script>

<style>
	*{
		height:100vh;
		box-sizing: border-box;
	}
	.top{
		display: flex;
		height:5%;
		width:90%;
		margin:0 auto;
	}
	.buttondate{
		display: flex;
		height:10%;
		width:100%;
		padding:5%;
		padding-left:0rpx;
		padding-right:0rpx;
		position: absolute;
		top:90%;
	}
	.fiveall{
		width:30%;
		height:10%;
		z-index:100;
		top:78%;
		left:10%;
		position: absolute;
	}
	.fivealltop{
		height:50%;
		width:100%;
		line-height: 70rpx;
		color:white;
		
	}
	.fiveallbutton{
		height:50%;
		width:100%;
		font-size: 50rpx;
		font-weight: bold;
		color: white;
	}
	.center{
		width:90%;
		height:30%;
		margin:0 auto;
		margin-top:40rpx;
		border-radius: 40rpx;
		box-shadow: 0rpx 0rpx 20rpx #b8b8b8;
	}
	.bottondatebox{
		width:15%;
		height:100%;
		margin-left:4%;
		text-align: center;
		line-height: 60rpx;
		color:white;
	}
	.centerbottom{
		height:10%;
		width:80%;
		margin:0 auto;
		color:#9f9f9f;
		margin-top:20%;
		line-height: 40rpx;
	}
	.centertop{
		display: inline-block;
		height:10%;
		width:80%;
		color:#9f9f9f;
		margin-left:10%;
		margin-top:10%;
	}
	.centermiddle{
		height:20%;
		width: 80%;
		margin:0 auto;
		font-size:70rpx;
		line-height: 80rpx;
		font-weight: bold;
	}
	.topleft{
		height:100%;
		width:12%;
		line-height:80rpx;
	}
	.echarts{
		width:100%;
		position:absolute;
		height:71%;
		top:20%;
		margin-top:20%;
	}
	.topright{
		height:100%;
		width:8%;
		line-height: 90rpx;
		margin-left:80%;
	}
</style>
