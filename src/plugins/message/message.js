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
     instance.showMessage(options)
		// instance.$refs.uToast.show(options);
	};

	Vue.prototype.$message = (options = {
		type: "success",
		message: "操作成功",
	}) => {
		showMessage(options);
	};

	// 定义Vue.prototype.$message的对象方法
	Vue.prototype.$message = Object.assign(Vue.prototype.$message, {
		show(type = "success", message) {
     instance.showMessage({
				message: message,
				type: type
			})
			// instance.$refs.uToast.show({
			// 	message: message,
			// 	type: type
			// });
		},

		warning (message = "警告哦") {
			this.show("warning", message);
		},
		success(message = "操作成功！") {
			this.show("success", message);
		},
		error(message = "操作失败！") {
			this.show("error", message);
		},
		info(message = "请耐心等待~") {
			this.show("info", message);
		}
	});
}

//使用说明
function instruction() {
	console.log('%c uni-message插件安装成功！欢迎品尝~',
		'color: #007BFF; font-weight: bold; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);');
	console.groupCollapsed('%c 使用方法 ', 'font-weight: bold; font-size: 16px; color: #333;');
	console.log('%c 1. 通过类型调用：', 'font-weight: normal; color: #555;');
	console.log('%c   this.$message.info();', 'color: #000000;'); // 灰色
	console.log('%c   this.$message.success();', 'color: #59d892;'); // 绿色
	console.log('%c   this.$message.error("操作失败！");', 'color: #dc3545;'); // 红色
	console.log('%c   this.$message.warning();', 'color: #ffc107;'); // 黄
	console.log(' 2. 直接调用：', 'font-weight: normal; color: #555;');
	console.log('   this.$message({ type: "info", message: "默认操作" });');
	console.log('%c   this.$message({ type: "success", message: "操作成功！" });', 'color: #59d892;');
	console.log('%c   this.$message({ type: "error", message: "操作失败！" });', 'color: #dc3545;');
	console.log('   this.$message({ type: "warning", message: "警告哦~" });','color: #ffc107;');
	console.groupEnd();
}

export default Message