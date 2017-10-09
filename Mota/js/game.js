var layer=1;/*所在层数*/
/*音乐*/
var music_data=[
				"music/Unity.mp3",
				"music/China-P.mp3",
				"music/Beijing.mp3",
				"music/China-X.mp3",
				];
var musicIndex=0;/*音乐索引*/
/*地图数据三维数组*/
var map_Data=[
				[
					[0,0,0,0,0,0,0,0,0,0,0,0,0],
					[0,2,520,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,19,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,1,1,1,1,1,1,1,1,1,1,1,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,02,01,50,51,50,01,01,01,01,01,01,00],
					[00,00,00,00,00,00,00,00,00,00,00,01,00],
					[00,14,01,01,04,01,00,16,13,01,00,01,00],
					[00,01,52,01,00,01,00,17,14,01,00,01,00],
					[00,00,04,00,00,01,00,00,00,04,00,01,00],
					[00,13,01,01,00,01,04,54,55,54,00,01,00],
					[00,01,52,01,00,01,00,00,00,00,00,01,00],
					[00,00,04,00,00,01,01,01,01,01,01,01,00],
					[00,01,01,01,00,00,04,00,00,00,04,00,00],
					[00,14,01,13,00,13,01,01,00,01,54,01,00],
					[00,14,18,13,00,01,520,01,00,50,15,50,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,03,01,05,01,01,01,01,01,01,01,01,00],
					[00,520,01,00,00,01,56,01,56,01,00,00,00],
					[00,01,00,00,00,00,00,01,00,00,00,00,00],
					[00,01,00,13,13,00,01,01,01,00,01,100,00],
					[00,01,00,13,01,07,01,01,01,07,01,01,00],
					[00,01,00,00,00,00,01,01,01,00,00,00,00],
					[00,01,00,102,01,00,01,01,01,00,01,101,00],
					[00,01,00,01,01,07,01,01,01,07,01,01,00],
					[00,01,00,00,00,00,01,01,01,00,00,00,00],
					[00,01,00,15,15,00,01,01,01,00,01,01,00],
					[00,02,00,15,01,07,01,01,01,07,01,01,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,13,17,00,13,15,13,00,01,00,01,14,00],
					[00,01,14,00,15,13,15,00,01,04,54,01,00],
					[00,55,01,00,13,12,13,00,01,00,00,00,00],
					[00,04,00,00,00,01,00,00,01,00,01,101,00],
					[00,01,01,54,01,01,01,50,01,01,01,01,00],
					[00,04,00,00,01,01,01,00,01,00,00,00,00],
					[00,52,01,00,00,01,00,00,01,00,01,14,00],
					[00,01,13,00,01,01,01,00,01,04,55,13,00],
					[00,14,16,00,01,150,01,00,01,00,00,00,00],
					[00,00,00,00,00,01,00,00,51,00,01,01,00],
					[00,03,520,01,01,01,01,00,01,04,01,02,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,01,12,01,00,00,00,00,00,01,101,01,00],
					[00,14,01,13,00,01,01,01,00,13,01,15,00],
					[00,01,01,01,00,01,01,01,00,01,53,01,00],
					[00,00,04,00,00,00,05,00,00,00,04,00,00],
					[00,01,55,01,04,01,51,01,01,52,01,01,00],
					[00,01,01,01,00,00,00,00,00,00,00,00,00],
					[00,51,01,50,01,01,01,01,01,01,04,01,00],
					[00,04,00,00,04,00,00,00,04,00,00,01,00],
					[00,01,00,01,54,01,00,01,55,01,00,01,00],
					[00,01,00,50,01,13,00,16,01,14,00,520,00],
					[00,02,00,13,50,13,00,01,50,01,00,03,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,02,00,01,51,04,01,00,01,01,04,01,00],
					[00,01,00,01,01,00,13,00,50,50,00,51,00],
					[00,01,04,54,01,00,01,00,13,13,00,01,00],
					[00,00,00,00,04,00,54,00,13,13,00,01,00],
					[00,13,01,55,01,00,01,00,00,00,00,01,00],
					[00,13,01,01,54,00,01,50,01,01,01,01,00],
					[00,00,53,00,00,00,01,00,00,00,00,51,00],
					[00,01,01,01,01,00,50,00,01,01,01,01,00],
					[00,17,13,14,18,00,01,00,04,00,00,00,00],
					[00,00,00,00,00,00,01,00,01,00,01,01,00],
					[00,03,520,01,01,01,01,00,01,22,01,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,03,00,13,13,00,01,55,01,13,50,01,00],
					[00,520,00,13,13,00,01,00,00,00,00,04,00],
					[00,01,00,00,51,00,01,00,14,01,52,01,00],
					[00,01,04,04,01,04,01,00,100,01,01,54,00],
					[00,01,00,00,00,00,01,00,00,00,00,00,00],
					[00,01,01,51,55,01,13,01,52,53,01,01,00],
					[00,00,00,00,00,00,01,00,00,00,00,01,00],
					[00,55,01,01,101,00,01,04,04,01,04,01,00],
					[00,01,54,01,17,00,01,00,00,51,00,51,00],
					[00,04,00,00,00,00,01,00,01,01,00,01,00],
					[00,01,50,01,01,52,01,00,14,14,00,02,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,01,00,16,00,01,100,01,00,13,00,50,00],
					[00,01,00,14,00,01,01,01,00,13,00,51,00],
					[00,01,00,54,00,51,00,53,00,14,00,50,00],
					[00,01,00,01,00,01,00,01,00,01,00,01,00],
					[00,04,00,04,00,05,00,04,00,52,00,04,00],
					[00,01,53,01,55,01,01,01,01,01,01,01,00],
					[00,04,00,04,00,04,00,04,00,53,00,04,00],
					[00,01,00,01,00,01,00,01,00,01,00,01,00],
					[00,01,00,01,00,54,00,51,00,15,00,01,00],
					[00,50,00,50,00,13,00,55,00,13,00,520,00],
					[00,01,50,01,00,13,00,15,00,13,00,03,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
				[
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
					[00,00,00,00,00,00,00,00,00,00,00,00,00],
				],
			];
/*英雄数据 *血量*攻击力*防御力*金钱*红钥匙数量*蓝钥匙数量*黄钥匙数量**/
var hero=[1000,100,100,0,0,0,0];
/*动画判断符*/
var bl=true;
/*怪物数据*血量*攻击力*防御力*金钱**/
var monster=[
				[35,18,1,1],	//绿史莱姆=50
				[45,20,2,2],	//红史莱姆=51
				[50,42,6,6],	//骷髅人=52
				[55,52,12,8],	//骷髅士兵=53
				[35,38,3,3],	//小蝙蝠*=54
				[60,32,8,5]		//初级法师=55
			];
var heroPoint;/*英雄坐标*/
/*键盘操作*/
function OperatingKeyboard(event){
	var x;
	if(window.event) // IE8 以及更早版本
	{
		x=event.keyCode;
	}
	else if(event.which) // IE9/Firefox/Chrome/Opera/Safari
	{
		x=event.which;
	}
	var keychar=String.fromCharCode(x);
	var toPoint;
	/*方向键左*/
	if(keychar=="%"){
		toPoint=[heroPoint[0]-1,heroPoint[1]];//判断英雄位置
		moveInMap(toPoint);
	}
	/*方向键上*/
	if(keychar=="&"){
		toPoint=[heroPoint[0],heroPoint[1]-1];
		moveInMap(toPoint);
	}
	/*方向键下*/	
	if(keychar=="("){
		toPoint=[heroPoint[0],heroPoint[1]+1];
		moveInMap(toPoint);
	}
	/*方向键右*/	
	if(keychar=="'"){
		toPoint=[heroPoint[0]+1,heroPoint[1]];
		moveInMap(toPoint);
	}	
}

/*移动事件*/
function moveInMap(toPoint){
	/*判断是否出界*/
	if(toPoint[0]<=0||toPoint[0]>=13||toPoint[1]<=0||toPoint[1]>=13){
		return;
	}
	/*判断遇见事物*/
	switch (map_Data[layer][toPoint[1]][toPoint[0]]){
		/*遇墙与栅栏不发生任何事*/
		case 0:
		case 7:
			return;
		/*遇地板向其方向移动*/
		case 1:
			moveToPoint(toPoint);
			break;
		/*上下楼*/
		case 2:
			layer++;
			loadMap();
			break;
		case 3:
			layer--;
			loadMap();
			break;
		/*开门*/
		case 4:
			openDoor(toPoint,6);
			break;
		case 5:
			openDoor(toPoint,5);
			break;
		case 6:
			openDoor(toPoint,4);
			break;
		/*得到钥匙*/
		case 11:
			addProperty(toPoint,4,1);
			break;
		case 12:
			addProperty(toPoint,5,1);
			break;
		case 13:
			addProperty(toPoint,6,1);
			break;
		/*得到药瓶*/
		case 14:	
			addProperty(toPoint,0,50);
			break;
		case 15:	
			addProperty(toPoint,0,200);
			break;
		/*得到宝石*/
		case 16:	
			addProperty(toPoint,1,1);
			break;
		case 17:	
			addProperty(toPoint,2,1);
			break;
		case 18:	
			updateProp(toPoint,18);
			break;	
		
		case 20:	
			hero[1]+=10;
			updateProp(toPoint,20);
			break;	
			
		case 22:	
			poqiang(toPoint);
			break;	
		/*与怪物战斗*/
		case 50:
			fighting(toPoint,0);
			break;
		case 51:
			fighting(toPoint,1);
			break;
		case 52:
			fighting(toPoint,2);
			break;
		case 53:
			fighting(toPoint,3);
			break;
		case 54:
			fighting(toPoint,4);
			break;
		case 55:
			fighting(toPoint,5);
			break;
		case 56:
			Notice("你无法击败它！！！");
			//fighting(toPoint,6);
			break;
			
		/*遇见NPC（剧情）*/	
		case 101:
			/*得到手册*/
			getManual();
			break;
		case 102:
			/*逃跑*/
			runAway();
			break;	
		case 150:
			/*初次遇见魔王（被抓）*/
			incident(toPoint);
			break;	
		default:
			break;
	}
	update();/*更新英雄数据*/
}


function poqiang(toPoint){
	/*地图样式相应改变*/
	document.getElementById("point_"+toPoint[1]+"_"+toPoint[0]).className="map map_1";
	/*地图数据相应改变*/
	map_Data[layer][toPoint[1]][toPoint[0]]=1;
}




/*得到装备信息*/
function getManual(){
	
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='getManual_1(this)'>(｡･∀･)ﾉﾞ嗨，老弟，你知道么？这里是魔塔呦<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
	document.getElementsByTagName("body")[0].onkeydown=null;//锁定键盘
}

/*得到手册.2*/
function getManual_1(div_cl){
	/*清除原对话框*/
	var pE=div_cl.parentElement;
	pE.removeChild(div_cl);
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='getManual_2(this)'>.......<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
}

/*得到手册.3*/
function getManual_2(div_cl){
	/*清除原对话框*/
	var pE=div_cl.parentElement;
	pE.removeChild(div_cl);
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='getManual_3(this)'>告诉你个秘密，5楼有装备捡呦<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
}
/*得到手册.4*/
function getManual_3(div_cl){
	/*清除原对话框*/
	var pE=div_cl.parentElement;
	pE.removeChild(div_cl);
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='getManual_4(this)'>那我还是赶紧去五楼吧<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
}
/*得到手册.5*/
function getManual_4(div_cl){
	/*清除原对话框*/
	var pE=div_cl.parentElement;
	pE.removeChild(div_cl);
	/*更新地图数据*/
	map_Data[5][11][11]=20;
	/*恢复键盘*/
	document.getElementsByTagName("body")[0].onkeydown=function OK_5(event){OperatingKeyboard(event);} 
	
}
/*逃跑*/
function runAway(){
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='runAway_1(this)'>兄弟你运气不错，哥刚挖通一个隧道<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
	document.getElementsByTagName("body")[0].onkeydown=null;//锁定键盘
}

/*逃跑.2*/
function runAway_1(div_cl_1){
	/*清除原对话框*/
	var pE=div_cl_1.parentElement;
	pE.removeChild(div_cl_1);
	/*改变地图数据*/
	map_Data[layer][7][2]=1;
	/*改变地图样式*/
	document.getElementById("point_7_2").className="map map_1";
	pE.innerHTML+="<div id='cl_1' onclick='runAway_2(this)'>先走了，拜拜<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
}
/*逃跑.3*/
function runAway_2(div_cl_1){
	/*清除原对话框*/
	var pE=div_cl_1.parentElement;
	pE.removeChild(div_cl_1);
	/*改变地图数据*/
	map_Data[layer][7][3]=1;
	/*改变地图样式*/
	document.getElementById("point_7_3").className="map map_1";
	//恢复键盘
	document.getElementsByTagName("body")[0].onkeydown=function OK_2(event){OperatingKeyboard(event);}   
}
/*第一次见魔王.2*/
function cl_1(div_cl_1){
	/*清除原对话框*/
	var pE=div_cl_1.parentElement;
	pE.removeChild(div_cl_1);
	pE.innerHTML+="<div id='cl_1' onclick='cl_2(this)'>接受制裁吧<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
	/*改变地图样式（魔王守卫出现）*/
	document.getElementById("point_"+(heroPoint[1]-1)+"_"+heroPoint[0]).className="map map_998";
	document.getElementById("point_"+(heroPoint[1]+1)+"_"+heroPoint[0]).className="map map_998";
	document.getElementById("point_"+heroPoint[1]+"_"+(heroPoint[0]+1)).className="map map_998";
	document.getElementById("point_"+heroPoint[1]+"_"+(heroPoint[0]-1)).className="map map_998";
}
/*第一次见魔王.3*/
function cl_2(div_cl_1){
	var Map=document.getElementsByClassName("mid_map")[0].childNodes;
	var a=0;
	var b=0;
	for (var i=0;i<Map.length;i++) {
		Map[i].className="map map_998";
		b++;
		if(b>=13){
			a++;
			b=0;
		}
	}
	var pE=div_cl_1.parentElement;
	pE.removeChild(div_cl_1);
	pE.innerHTML+="<div id='cl_1' onclick='cl_3(this)'>喂，兄弟，醒醒...<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
}
/*第一次见魔王.4*/
function cl_3(div_cl_1){
	/*更新地图数据*/
	map_Data[layer][heroPoint[1]][heroPoint[0]]=01;
	map_Data[layer][11][2]=520;
	layer--;
	map_Data[layer][10][1]=01;
	map_Data[layer][8][4]=520;
	/*被抓失去装备，生命值，攻防削弱*/
	hero[0]*=0.4;
	hero[1]/=10;
	hero[2]/=10;
	/*清空道具栏*/
	document.getElementById("prop").innerHTML="";
	/*加载地图*/
	loadMap();
	/*更新英雄数据*/
	update();
	/*改变英雄图（被打）*/
	document.getElementById("point_"+heroPoint[1]+"_"+heroPoint[0]).className="map map_520_1";
	/*清除对话框*/
	div_cl_1.parentElement.removeChild(div_cl_1);
	/*恢复键盘*/
	document.getElementsByTagName("body")[0].onkeydown=function OK(event){OperatingKeyboard(event);}   
}
/*第一次见魔王*/
function incident(toPoint){
	/*移动*/
	moveToPoint(toPoint);
	/*地图样式改变（魔王出现）*/
	document.getElementById("point_"+(toPoint[1]-2)+"_"+toPoint[0]).className="map map_999";
	document.getElementsByClassName("bottom")[0].innerHTML+="<div id='cl_1' onclick='cl_1(this)'>愚蠢的滑稽，你中计了！！！<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
	//bottom
	//document.getElementsByTagName("body")[0].innerHTML+="<div id='cl_1' onclick='cl_1(this)'>愚蠢的滑稽，你中计了！！！<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />按鼠标左键继续</div>";
	document.getElementsByTagName("body")[0].onkeydown=null;//锁定键盘
}
/*英雄属性或道具提升*/
function addProperty(toPoint,propertyIndex,propertyNumber){
	/*英雄相应属性改变*/
	hero[propertyIndex]+=propertyNumber;
	/*地图样式相应改变*/
	document.getElementById("point_"+toPoint[1]+"_"+toPoint[0]).className="map map_1";
	/*地图数据相应改变*/
	map_Data[layer][toPoint[1]][toPoint[0]]=1;
	/*给出提示信息*/
	switch (propertyIndex){
		case 0:
			Notice("得到一瓶药瓶");
			break;
		case 1:
		case 2:
			Notice("得到一颗宝石");
			break;
		case 4:
		case 5:
		case 6:
			Notice("得到一把钥匙");
			break;
		default:
			break;
	}
}

/*战斗*/
function fighting(toPoint,monsterindex){
	var _monster=monster[monsterindex];
	//伤害计算方法
	/*HP2÷（A-D2）=W （注;W用进一法）
	HP-（W-1）×（A2-D）=伤害*/
	var subhp=hero[0]-(Math.ceil(_monster[0]/(hero[1]-_monster[2]))-1)*(_monster[1]-hero[2]);
	if(subhp>0){
		/*战斗后更新英雄属性*/
		hero[0]=subhp;
		hero[3]+=_monster[3];
		moveToPoint(toPoint);
		//setTimeout("",3000);
		Notice("消灭了一个怪物，得到"+_monster[3]+"个金币");
		fightinghero();
	}
	else{
		Notice("你无法击败它！！！");
	}
}

/*开门*/
function openDoor(toPoint,colorkeyindex){
	if(hero[colorkeyindex]<=0){
		Notice("你没有该颜色的钥匙");
	}
	else{
		/*开门，更新英雄属性信息及地图信息*/
		hero[colorkeyindex]--;
		document.getElementById("point_"+toPoint[1]+"_"+toPoint[0]).className="map map_1"
		map_Data[layer][toPoint[1]][toPoint[0]]=1;
	}
}

/*加载地图*/
function loadMap(){
	/*得到所有的地图单元格*/
	var Map=document.getElementsByClassName("mid_map")[0].childNodes;
	var a=0;
	var b=0;
	/*双重循环给单元格对应的样式*/
	for (var i=0;i<Map.length;i++) {
		Map[i].className="map map_"+map_Data[layer][a][b];
		if(map_Data[layer][a][b]==520){
			heroPoint[0]=b;
			heroPoint[1]=a;
		}
		b++;
		if(b>=13){
			a++;
			b=0;
		}
	}
	/*更改背景音乐*/
	if(!document.getElementById('myaudio').paused){
		musicChange();
	}
}
/*地图动画*/
function animationMap(){
	/*根据动画判断符更新相应的图片信息以产生动画效果*/
	for (var i=0;i<map_Data[layer].length;i++) {
		for (var j=0;j<map_Data[layer][i].length;j++) {
			if(map_Data[layer][i][j]>=50&&map_Data[layer][i][j]<150){
				if (bl) {
					document.getElementById("point_"+i+"_"+j).className="map map_"+map_Data[layer][i][j];
				} else{
					document.getElementById("point_"+i+"_"+j).className="map map_"+map_Data[layer][i][j]+"_1";
				}
			}
		}
	}
	bl=!bl;
	/*每隔0.25秒执行一次此函数*/
	setTimeout("animationMap()",250);
}
/*更新英雄数据*/
function update(){
	/*将英雄属性信息显示至英雄属性信息栏中*/
	document.getElementById("layer").innerHTML="魔塔第"+layer+"层";
	var msg=document.getElementsByClassName("heroMsg");
	for (var i=0;i<hero.length;i++) {
		msg[i].innerHTML=hero[i];
	}
}
/*更新英雄道具*/
function updateProp(toPoint,prop){
	/*将英雄道具信息显示至英雄道具信息栏中*/
	document.getElementById("prop").innerHTML+="<div class='prop map map_"+prop+"'>";
	/*地图样式相应改变*/
	document.getElementById("point_"+toPoint[1]+"_"+toPoint[0]).className="map map_1";
	/*地图数据相应改变*/
	map_Data[layer][toPoint[1]][toPoint[0]]=1;
}

/*向指定位置移动*/
function moveToPoint(toPoint){
	/*得到该层数数据*/
	var tempMap=map_Data[layer];
	/*得到英雄和目的地的div*/
	var hero_Point=document.getElementById("point_"+heroPoint[1]+"_"+heroPoint[0]);
	var to_Point=document.getElementById("point_"+toPoint[1]+"_"+toPoint[0]);
	/*更新英雄样式（地图显示位置）*/
	to_Point.className=hero_Point.className;
	hero_Point.className="map map_1";
	/*更新地图数据*/
	tempMap[toPoint[1]][toPoint[0]]=tempMap[heroPoint[1]][heroPoint[0]];
	tempMap[heroPoint[1]][heroPoint[0]]=1;
	//map_Data[layer]=tempMap;
	heroPoint=toPoint;
}

/*退出游戏，关闭窗口*/
function closeGame(){
	window.close();
}

/*初始化地图*/
function initMap(){
	/*英雄属性块*/
	var msg="<div class='left'><div id='layer'></div><div id='heroMsg'><div id='HP' class='heroMsg'></div><div id='ATK' class='heroMsg'></div><div id='DEF' class='heroMsg'></div><div id='money' class='heroMsg'></div><div id='redKey'  class='heroMsg'></div><div id='blueKey' class='heroMsg'></div><div id='yellowKey' class='heroMsg'></div></div><input type='button' name='bofang' id='bofang' class='music' value='播放' onclick='bofangmusic()' /><input type='button' name='zanting' id='zanting' class='music' value='暂停'  onclick='zantingmusic()' /></div><div class='mid_map'>";
	var mapTemp=map_Data[layer];
	/*地图单元快*/
	for (var i=0;i<mapTemp.length;i++) {
		for(var j=0;j<mapTemp[i].length;j++){
			msg+="<div id='point_"+i+"_"+j+"' class='map map_"+mapTemp[i][j]+"'></div>";
			if(mapTemp[i][j]==520){
				heroPoint=[j,i];
			}
		}
	}
	/*道具块及提示信息块*/
	msg+="</div><div class='right'><div id='_text_'>拥有的道具</div><div id='prop'><div class='map map_20'></div><div  class='map map_21'></div></div></div><div class='bottom'>提示信息</div>";
	document.getElementById("game").innerHTML=msg;
	
	/*显示英雄信息*/
	update();
}

/*开始游戏*/
function startGame(){
	/*初始化地图*/
	initMap();
	/*更改背景音乐*/
	musicChange();
	
	/*动画效果*/
	animationMap();
}
/*音乐*/
function musicChange(){
	document.getElementById('myaudio').src=music_data[musicIndex];
	if ((++musicIndex)>=4) {
		musicIndex=0;
	}
}

/*开始选择界面*/
function toInterface(){
	var _game_=document.getElementById("game");
	_game_.onclick='';
	_game_.className="game_2";
	_game_.innerHTML="<div class='start start_1' onclick='startGame()'>开始游戏</div><div class='start' onclick='presentation()'>游戏介绍</div><div class='start'  onclick='closeGame()'>退出游戏</div>";
}
/*提示信息*/
function presentation(){
	var body=document.getElementsByTagName("body")[0];
	document.getElementById("game").style.animationName = "none";
	document.getElementById("game").style.backgroundPosition="center center";
	var btn_xuanze=document.getElementsByClassName("start_1");
	for (var i=0;i<btn_xuanze.length;i++) {
		btn_xuanze[i].style.animationName = "none";
		btn_xuanze[i].style.marginTop="20%";
	}
	alert("这是一个坑爹的魔塔");
}
function Notice(msg){
	document.getElementsByClassName("bottom")[0].innerHTML=msg;
}

function fightinghero(){
	document.getElementsByClassName("right")[0].innerHTML+="<div class='fightinghero'></div>";
	document.getElementsByTagName("body")[0].onkeydown=null;//锁定键盘
	setTimeout("fightinghero_1()",2000);
}
function fightinghero_1(){
	document.getElementsByClassName('right')[0].removeChild(document.getElementsByClassName('fightinghero')[0]);
	/*恢复键盘*/
	document.getElementsByTagName("body")[0].onkeydown=function OK(event){OperatingKeyboard(event);} 
}





function bofangmusic(){
	
	if(document.getElementById('myaudio').paused){
		document.getElementById('myaudio').play();
	}
}
	
function zantingmusic(){
	document.getElementById('myaudio').pause();
}
