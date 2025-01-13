
<template>
	<div class="messagebox-shade" id="message-iou8098h89y90j8" v-if="isShow"
		:style="[{'background-color':maskColor,'pointer-events': 'none'}]" @touchmove.stop="">
		<div class="messagebox-main"
			:style="[{'width':'auto','minWidth':minWidth,'maxWidth':maxWidth,'background':background,'border-radius':radius+'px'}]">
			<div class="messagebox-content" :style="[{'padding':padding}]">
				<div v-if="imgUrl" class="flexContentCenter">
					<div style="margin-bottom: 6px;" :style="[setImageSize]">
						<image class="image" :src="imgUrl"></image>
					</div>
				</div>
				<div class="flexContentCenter">
					<span class="message" :style="[messageStyle]">{{message}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		// success_icon,
		error_icon,
		warning_icon
	} from './static/image.js'
  // import successIcon  from './static/success_icon.png';
  import errorIcon  from './static/error_icon.png';
  import warningIcon  from './static/warning_icon.png';
	import {
		themeEnum
	} from './static/theme.js'
	export default {
		name: "messageComponent",
		data() {
			return {
				type: 'success', //有success，error，warning, info
				duration: 2, //动画时间
				radius: 5, //圆角
				isShow: false, //是否显示弹框
				maskColor: "transparent", //遮罩层的背景颜色
				background: 'rgba(0, 0, 0, 0.8)', //弹窗的背景
				padding: '12px',
				imageSize: {
					width: '32px',
					height: '32px'
				},
				imageUrl: "",
				maxWidth: '80%', //弹窗的大小
				minWidth: '85px',
				message: "", //弹窗的内容
				messageStyle: {}, //内容的样式
				originalData: null,
				time: null
			}
		},
		computed: {
			setImageSize() {
				let size = {}
				size.width = this.imageSize.width || '32px'
				size.height = this.imageSize.height || '32px'
				return size
			},
			//图片采用base64位，为了兼容小程序，app，vue3
			imgUrl() {
				// if ((this.imageUrl || '').length > 0) {
				// 	return this.imageUrl
				// }
				if (this.type === 'success') {
					return require('@/assets/success_icon.png')
				} else if (this.type === 'error') {
					return require('@/assets/error_icon.png') || errorIcon || error_icon()
				} else if (this.type === 'warning') {
					return require('@/assets/warning_icon.png') || warningIcon || warning_icon()
				}
				return ''
			}
		},
		methods: {
			typeEffect(type = "success") {
				return {
					message: "提示",
					duration: 2.5,
					radius: 5,
					background: themeEnum[type].backgroundColor,
					maxWidth: '80%',
					messageStyle: {
						'color': themeEnum[type].color,
						'text-align': 'center'
					}
				}
			},
			show(data = {}) {
				console.log("显示", data);
				const type = data.type || 'success'
				const configData = {
					type: 'success',
					message: "提示",
					duration: 2.5,
					radius: 5,
					background: themeEnum[type].backgroundColor,
					maxWidth: '80%',
					messageStyle: {
						'color': themeEnum[type].color,
						'text-align': 'center'
					}
				}
				const tempData = {
					...configData,
					...data
				}
				Object.keys(tempData).forEach(key => {
					this[key] = tempData[key]
				})
				this.isShow = true
				if (this.duration > 0) {
					let that = this
					this.time = setTimeout(function() {
						that.time = null
						that.close()
					}, that.duration * 1000)
				}
			},
			close() {
				this.isShow = false
			},

		},
		beforeCreate() {
			if (this.time !== null) {
				clearTimeout(this.time)
			}
		}
	}
</script>

<style scoped>
	.messagebox-shade {
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.45);
		z-index: 99999999999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.messagebox-main {
		display: flex;
		flex-direction: column;
		position: relative;
		background: white;
		width: 80%;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.04);
		box-sizing: border-box;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}

	.background-content {
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 0;
		bottom: 0;
		top: 0;
		left: 0;
	}

	.messagebox-content {
		box-sizing: border-box;
		width: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		position: relative;
		white-space: pre-wrap;
	}

	.rightTopClose {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		position: absolute;
		z-index: 100;
		top: 3px;
		right: 5px;
	}

	.closeImage {
		height: 15px;
		width: 15px;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.image {
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.fadelogOutOpcity {
		-webkit-transition: all 0.25s;
		-moz-transition: all 0.25s;
		-ms-transition: all 0.25s;
		-o-transition: all 0.25s;
		transition: all 0.25s;
		animation-timing-function: ease-out;
		-webkit-animation-timing-function: ease-out;
		opacity: 0;
	}

	.flexContentCenter {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.message {
		color: #FFFFFF;
		font-size: 14.5px;
		word-break: break-all;
		text-align: center;
		white-space: pre-wrap;
	}
</style>