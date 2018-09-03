//1.一个完善功能，需要把所有的代码都放在一个自执行函数中，
//那么这个功能里的所有的变量，就不会被外界的同名变量干扰
//2.如果把所有的代码都放到一个自执行函数中，那么在这里面的
//所有东西（包括 Yzm的这个构造函数外界都访问不到）
//如果就是有一个东西（构造函数）是需要外界能够访问到的，
//可以把这一个构造函数挂载在window对象上
//window对象是js中的全局对象，在window对象上的所有的属
//性或方法，在js的任何地方都可以访问
~function(){
	var name = "小明";
	
	function ran(n,m){
		return Math.round(Math.random()*(m-n)+n)
	}
	
	function Yzm(id){
		this.el = document.getElementById(id);
		//在初始化实例对象时，就调用一次实例对象的方法
		this.huizhi()
		this.getFour()
	}
	Yzm.prototype.huizhi = function(){
		this.el.style.border = "1px solid #f60";
		this.el.style.width = "80px";
		this.el.style.lineHeight = "40px";
		this.el.style.textAlign = "center";
		this.el.style.letterSpacing = "5px";
		//绑定事件   //this.el.onclick = function(){
		//箭头函数：作用，在箭头函数中不会产生新的this指向
		this.el.onclick = ()=>{
			//事件中的this永远指向  触发事件的 那个元素对象  this.el
			this.getFour()
			//alert(name)
		}
	}
	Yzm.prototype.getFour = function(){
		var strCode = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
		var four = "";
		for(var i=0;i<4;i++){
			var num = ran(0,strCode.length);
			var onestr = strCode.charAt(num);
			four += onestr;
		}
		//把this.el元素对象的内容赋值成 总字符
		this.el.innerHTML = four;
	}
	
	//把Yzm构造函数挂载到window上
	window.Yzm = Yzm;
}()