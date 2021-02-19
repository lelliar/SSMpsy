<template>
	<view>
		<view class="top">
			请选择问题类型
		</view>
		<view class="centertop">
			<view class="centertopone">
				<view class="centertoponebox" v-for="(item , i) in list" :key="i">
					<view :class="item.select?'centertopleftone':'centertopleft'" @click="item.select = !item.select">
						<image src="../../static/cancle.png" mode="" v-if="item.select" style="height:100%;width:100%;padding:20%;"></image>
					</view>
					<view class="centertopright">
						{{ item.text }}
					</view>
				</view>
			</view>
		</view>
		<view class="centerbottombox">
			<textarea value="" placeholder="请描述你遇到的问题,以便我们尽快解决" style="height:100%;width:100%;background-color: #ebebeb;"/>
		</view>
		<view class="centerbottomphone">
			<view class="centerbottomphonename">
				联系方式：
			</view>
			<view class="centerbottomphonenumber">
				<input value="" style="height:100%;width:90%;margin-left:5%;"/>
			</view>
		</view>
		<view class="submit">
			立 即 提 交
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			
			return {
				phone:'',
				list:[
					{
						select:false,
						text:'内容加载失败'
					},
					{
						select:false,
						text:'乱码错别字'
					},
					{
						select:false,
						text:'目录顺序错误'
					},
					{
						select:false,
						text:'排版混乱'
					},
					{
						select:false,
						text:'内容空白缺失'
					},
					{
						select:false,
						text:'重复内容章节'
					},
					{
						select:false,
						text:'标题不对'
					},
					{
						select:false,
						text:'不良信息'
					},
					{
						select:false,
						text:'分类错误'
					},
					{
						select:false,
						text:'其他问题'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	*{
		box-sizing: border-box;
		height:93vh;
	}
	.centerbottomphone{
		display: flex;
		height:4%;
		width:90%;
		margin:0 auto;
		margin-top:5%;
	}
	.submit{
		height:6%;
		border-radius: 15rpx;
		text-align: center;
		color:white;
		line-height:80rpx;
		font-weight: bold;
		width:90%;
		margin:0 auto;
		margin-top:10%;
		background-color: #14a9f3;
	}
	.uni-textarea-placeholder{
		height:100%;
	}
	.centerbottomphonename{
		height:100%;
		width:40%;
		font-size: 35rpx;
		line-height:60rpx;
		font-weight: bold;
	}
	.centerbottomphonenumber{
		width:100%;
		margin:0 auto;
		height:100%;
		background-color: #e2e2e2;border-radius: 20rpx;
	}
	.centerbottombox{
		height:20%;
		width:90%;
		margin:0 auto;
		margin-top:40rpx;
	}
	.centertopleftone{
		height:100%;
		width:16%;
		border-radius: 50%;
		background-color: #1296db;
	}
	.centertoponebox{
		display: flex;
		height:50rpx;
		width:50%;
		margin-top:40rpx;
	}
	.centertopright{
		margin-left:20rpx;
		height:100%;
		width:84%;
		line-height:55rpx;
		color:#787878;
	}
	.centertopleft{
		height:100%;
		width:16%;
		border:1px solid #787878;
		border-radius: 50%;
	}
	.top{
		height:8%;
		width:90%;
		padding:3%;
		padding-left:0;
		font-weight: bold;
		font-size:40rpx;
		margin:0 auto;
	}
	.centertop{
		display: flex;
		width:100%;
		height:auto;
		flex-wrap: wrap;
	}
	.centertopone{
		display: flex;
		height:auto;
		width:90%;
		margin:0 auto;
		flex-wrap: wrap;
	}
</style>
