var pcbObj = function(){
	this.name = [];
	this.priority = [];
	this.needTime = [];
	this.cound = [];
	this.round = [];
	this.process = [];
	this.cputime = [];
	this.visible = [];
}
pcbObj.prototype.num = 8;
pcbObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.visible[i] = false;
		this.name[i]= "";
		this.priority[i]= 0;
		this.needTime[i]= 0;
		this.cound[i]= 0;
		this.round[i]= 0;
		this.process[i]= "";
		this.cputime[i]= 0;
	}
}
pcbObj.prototype.creat = function(pn,pt,pr){
	for(var i=0;i<this.num;i++){
		if(!this.visible[i]){
			this.visible[i] = true;
			this.name[i] = pn;
			this.needTime[i] = pt;
			this.priority[i] = pr;
			this.process[i] = "ready";
			return;
		}
	}
}
// pcbObj.prototype.run = function(){
// 	for(var i=0;i<this.num;i++){
// 		if(this.visible[i]){
// 			if(this.process[i] == "执行"){
// 				//
// 			}
// 		}
// 	}
// }
pcbObj.prototype.show = function(){
	for(var i=0;i<this.num;i++){
		if(this.visible[i]){
			var obj = document.getElementById("ul"+i).getElementsByTagName("li");
			obj.item(0).innerHTML = this.name[i];
			obj.item(1).innerHTML = this.cputime[i];
			obj.item(2).innerHTML = this.needTime[i];
			obj.item(3).innerHTML = this.priority[i];
			obj.item(4).innerHTML = this.process[i];

			var showTable = document.getElementById("showTable"+i);
			showTable.style.width = this.needTime[i]*50+"px";
			switch(this.process[i]){
				case "finish":
					showTable.style.width = 500+"px";
					showTable.innerHTML = "已完成"
					showTable.style.background="#0f0";
					break;
				case "execute":
					showTable.style.width = 100+this.needTime[i]*50+"px";
					showTable.innerHTML = "正在执行"
					showTable.style.background="#f00";
					break;
				case "ready":
					showTable.style.width = 100+this.needTime[i]*50+"px";
					showTable.innerHTML = "就绪"
					showTable.style.background="#00f";
					break;
			}
		}
	}
}