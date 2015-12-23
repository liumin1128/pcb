var addButton = document.getElementById("addButton");
var start = document.getElementById("start");
var pcb;
var TIME = 50;
var cpuTime = 0;
window.onload = function(){
	pcb = new pcbObj();
	pcb.init();
	aaaaaaaaa();
}
function start0(){
	loop();
	// cpuTime++;
	// cpuexe();
	// pcb.show();
}
function loop(){
	cpuTime++;
	cpuexe();
	pcb.show();
	setTimeout(loop,2000);
}
function cpuexe(){
	document.getElementById("cputime").innerHTML = cpuTime;

	var top = 1000;
	for(var i=0;i<pcb.num;i++){//求最大优先度
		if(pcb.visible[i]){
			if(pcb.process[i]!="finish"){
				pcb.process[i] = "ready";
				if(pcb.needTime[i]==0){
					pcb.process[i] = "finish";
				}
			}
			if(top>pcb.priority[i]&&pcb.process[i]!="finish"){
				top=pcb.priority[i];
			}
		}
	}
	for(var i=0;i<pcb.num;i++){
		if(pcb.visible[i]){
			if(top==pcb.priority[i]&&pcb.process[i]!="finish"){
				if(pcb.needTime[i] != 0){
					pcb.priority[i]++;
					pcb.needTime[i]--;
					pcb.process[i] = "execute";
					pcb.cputime[i]++;
				}
				return;
			}
		}
	}
}
function addProgress(){
	var pn = document.getElementById("pn").value;
	var pt = document.getElementById("pt").value;
	var pr = document.getElementById("pr").value;
	pcb.creat(pn,pt,pr);
	creatUl();
	pcb.show();
}
function creatUl(){
	var num = 0;
	for(var i=0;i<pcb.num;i++){
		if(pcb.visible[i]){
			num++;
		}
	}
	num-=1;
	var ul = document.createElement("ul");


	var showTable = document.createElement("div");
	showTable.setAttribute("id","showTable"+num);
	showTable.setAttribute("class","showTable");
	ul.appendChild(showTable);


	ul.setAttribute("id","ul"+num);
	ul.setAttribute("class","ul");
	for(var i=0;i<5;i++){
		var li = document.createElement("li");
		ul.appendChild(li);
	}

	document.getElementById("left").appendChild(ul);

}
function aaaaaaaaa( ){　
            var r2 = Math.floor(Math.random()*125+125);
            var g2 = Math.floor(Math.random()*125+125);
            var b2 = Math.floor(Math.random()*125+125);
            document.body.style.background = "rgb("+r2+","+g2+","+b2+")";
　           setTimeout("aaaaaaaaa()", 10000);
}