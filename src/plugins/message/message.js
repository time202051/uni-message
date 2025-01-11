import MessageComponent  from "@/plugins/message/messageComponent .vue"

const Message = {}

Message.install = function(Vue) {
	// 说明文档
	instruction()

	// vue构造器，创建一个“子类”
	const MessageConstructor = Vue.extend(MessageComponent )
	const instance = new MessageConstructor()
  console.log("instance",instance);
  
	instance.$mount(document.createElement('div'))
	document.body.appendChild(instance.$el)

	const showMessage = (options) => {
		instance.$refs.uToast.show(options);
	};

	Vue.prototype.$message = (options = {
		type: "success",
		message: "操作成功",
	}) => {
		showMessage(options);
	};

	// 定义Vue.prototype.$message的对象方法
	Vue.prototype.$message = Object.assign(Vue.prototype.$message, {
		show(type = "default", message) {
      console.log("ooo",instance,instance.$refs.uToast);
			instance.$refs.uToast.show({
				message: message,
				type: type
			});
		},

		default (message = "默认操作") {
			this.show("default", message);
		},
		success(message = "操作成功！") {
			this.show("success", message);
		},
		error(message = "操作失败！") {
			this.show("error", message);
		},
		loading(message = "请耐心等待~") {
			this.show("loading", message);
		}
	});
}

//使用说明
function instruction() {
	console.log('%c uni-message插件安装成功！欢迎品尝~',
		'color: #007BFF; font-weight: bold; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);');
	console.groupCollapsed('%c 使用方法 ', 'font-weight: bold; font-size: 16px; color: #333;');
	console.log('%c 1. 通过类型调用：', 'font-weight: normal; color: #555;');
	console.log('%c   this.$message.default();', 'color: #585858;');
	console.log('%c   this.$message.success();', 'color: #59d892;'); // 绿色
	console.log('%c   this.$message.error("操作失败！");', 'color: #dc3545;'); // 红色
	console.log('%c   this.$message.loading();', 'color: #585858;'); // 黄
	console.log(' 2. 直接调用：', 'font-weight: normal; color: #555;');
	console.log('   this.$message({ type: "default", message: "默认操作" });');
	console.log('%c   this.$message({ type: "success", message: "操作成功！" });', 'color: #59d892;');
	console.log('%c   this.$message({ type: "error", message: "操作失败！" });', 'color: #dc3545;');
	console.log('   this.$message({ type: "loading", message: "请耐心等待~" });');

	// 参数说明
	console.groupCollapsed('%c 参数说明: ', 'font-weight: bold; font-size: 16px; color: #333;');
	console.table([{
			参数: 'loading',
			说明: '是否加载中',
			类型: 'Boolean',
			默认值: 'false',
			可选值: 'true'
		},
		{
			参数: 'message',
			说明: '显示的文本',
			类型: 'String | Number',
			默认值: '-',
			可选值: '-'
		},
		{
			参数: 'icon',
			说明: '图标，或者绝对路径的图片',
			类型: 'String',
			默认值: '-',
			可选值: '-'
		},
		{
			参数: 'position',
			说明: 'toast 出现的位置',
			类型: 'String',
			默认值: 'center',
			可选值: 'top / bottom'
		},
		{
			参数: 'type',
			说明: '主题类型',
			类型: 'String',
			默认值: '-',
			可选值: '-'
		},
		{
			参数: 'params',
			说明: '跳转的参数',
			类型: 'Object',
			默认值: '-',
			可选值: '-'
		},
		{
			参数: 'duration',
			说明: '展示时间，单位 ms',
			类型: 'String | Number',
			默认值: '2000',
			可选值: '-'
		},
		{
			参数: 'complete',
			说明: '执行完后的回调函数',
			类型: 'Function',
			默认值: 'null',
			可选值: '-'
		},
	]);
	console.groupEnd();
}

export default Message