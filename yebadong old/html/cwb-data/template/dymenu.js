///////////////////////////////////////////////////////////////////////////////
//
//	dynamic_menu.js	-	FAST DyMenu library for NS & IE 4.x common interface
//
//				Script Written by :	Gi-il, Kim.
//				Technical Contect : kiexpert@nobreak.com
//				Home-Page URL     : http://kiexpert.nobreak.ne.kr/
//
//			Powered by Nobreak Technologies, Inc.
//
///////////////////////////////////////////////////////////////////////////////

//
// This script requires init.js ( source; http://kiexpert.nobreak.ne.kr/js/init.js ) ...
//

// �� ��ũ��Ʈ�� �����鼭�� ���� ����� �����ϱ� ���Ͽ� ���� �׽�Ʈ�� ���� ����� 
// �����ϰ� �ۼ��Ǿ� �ְ�, ���� ������ �������� ����� ������, ���� �����ڰ� ������
// ��￩ �ۼ� �� ���׷��̵��ϴ� ���̹Ƿ�, ��ü�� ������ �ﰡ�� �ֽñ� �ٶ��ϴ�.

//-- NS/IE ------------------------------------------------------------------------------------------------------

// �޴� ���� ���� ( ���ǵǾ� ���� ������ 0������ �ڵ� Ž�� )...
if(!ismember(conf, 'nMenuEnd'))		conf.nMenuStart=0, conf.nMenuEnd=-1;

// ���� ��� �⺻�� ����...
if(!ismember(conf, 'fSwapImage'))	conf.fSwapImage		= false;
if(!ismember(conf, 'fSwapImageP'))	conf.fSwapImageP	= false;
if(!ismember(conf, 'fNoCtrlBtn'))	conf.fNoCtrlBtn		= false;
if(!ismember(conf, 'align'))		conf.align			= "right";

// �޴� ����ں� ������ �޾ƿ�...
if(!ismember(conf, 'fNoAutoOpen'))	conf.fNoAutoOpen	= GetCookie("fNoAutoOpen")	=="true";
if(!ismember(conf, 'fNoAutoClose'))	conf.fNoAutoClose	= GetCookie("fNoAutoClose")	=="true";
if(!ismember(conf, 'fExpandAll'))	conf.fExpandAll		= GetCookie("fExpandAll")	=="true";

// �޴��� ���� ��Ÿ�� ����...


if(getobj) {
	/* �ݽ������� ���� ������ ���� �ʴ´�.
	document.write("<STYLE TYPE='text/css'> <!--\n");
	if(conf.isIE) {
		document.write(".parent	{display: inline;	width: "+conf.hsize+"; text-align: "+conf.align+"; }\n");
		document.write(conf.fExpandAll ? ".child	{display: inline; width: "+conf.hsize+"; text-align: "+conf.align+"; }\n" : ".child	{display: none; width: "+conf.hsize+"; text-align: "+conf.align+"; }\n");
		document.write(".regular {display: inline;	width: "+conf.hsize+"; text-align: center; }\n");
		}
	else if(conf.isNS) {
		document.write(".parent	{position: absolute; visibility: hide; width: "+conf.hsize+"; text-align: "+conf.align+"; }\n");
		document.write(conf.fExpandAll ? ".child {position: absolute; visibility: show; width: "+conf.hsize+"; text-align: "+conf.align+"; }\n" : ".child {position: absolute; visibility: hide; width: "+conf.hsize+"; text-align: "+conf.align+"; }\n");
		document.write(".regular {position: absolute; visibility: show; width: "+conf.hsize+"; text-align: center; }\n");
		}
	
	document.write("--> </STYLE>\n");
	*/
	}


// ���� �Լ���...
function auto_close() {
	var temp=conf.fNoAutoClose;
	conf.fNoAutoClose=false, expandIt(LastMenu), conf.fNoAutoClose=temp;
	}

//window.onblur=auto_close;

LastMenu=-1, conf.fDyMenuInit=false;

//-- NS ---------------------------------------------------------------------------------------------------------
function get_index(el) {
	for (i=0; i<document.layers.length; i++) {
		child = document.layers[i];
		if (child.id == el) return i;
		}
	return -1;
	}

function arrange_layers(flag) {
	if(!conf.isNS || firstIdx<0) return;
	var p=document.layers[firstIdx], nextY = p.pageY + p.document.height;
	//var nextY=0;
	for (i=firstIdx+1; i < document.layers.length; i++)	{
		p = document.layers[i], p.pageY=nextY;
//		if (p.visibility == "hide") nextY -= p.document.height;
		if (p.visibility != "hide" || flag) nextY += p.document.height;
		}
	if(!flag && nextY>document.height) document.height=nextY;
	}

function ns_expand(menuNum, pushBtn) {
	if(!conf.fDyMenuInit) return false;
	if(!pushBtn && conf.fNoAutoOpen) return false;
	LastMenu=menuNum;

	for(i=conf.nMenuStart; i <= conf.nMenuEnd; i++) {
		var child	= document.layers["M" + i + "Child"];
		var img		= conf.fNoCtrlBtn ? null : document.layers["M" + i + "Parent"].document.images[0];
		
		if(menuNum == i) {
			if (child.visibility == "hide") {
				child.visibility = "show";
				if(img) img.src = conf.ctrlon;
				}
			else if(pushBtn == true) {
				child.visibility = "hide";
				if(img) img.src = conf.ctrloff;
				}
			}
		else if(!conf.fNoAutoClose) {
			child.visibility = "hide";
			if(img) img.src = conf.ctrloff;
			}
		}

	arrange_layers();
	return false;
	}

function ns_initmenu() {
	firstIdx = get_index("M"+conf.nMenuStart+"Parent");

	// �޴��� ���۵Ǵ� Y ��ǥ�� ����Ѵ�.
	with(document) {
		var i, sy=0;
		for(i=0;i<firstIdx;i++) {
			layers[i].pageY=sy;
			sy+=layers[i].document.height;
			}

		if(firstIdx>=0) layers[firstIdx].pageY = sy;
		}
	arrange_layers(true);
	//alert(namedump(document));
	for (i=conf.nMenuStart;document.layers["M"+i+"Parent"];i++) {
		document.layers["M"+i+"Parent"].visibility="show";
		
		if(!document.layers["M"+i+"Child"]) {
			alert("Layer [ M"+i+"Child ] not found!");
			continue;
			}
		//alert(document.layers["M"+i+"Child"].classID);
		if(conf.fExpandAll) document.layers["M"+i+"Child"].visibility="show";
		if(!conf.fSwapImage) continue;
		
		var child=document.layers["M"+i+"Child"].document;
		
		init_swapIMG(9,0,0,child.links, child.images);
		}
	
	// detect number of Menus...
	if(conf.nMenuEnd<0)	conf.nMenuEnd=i-1;
	
	arrange_layers();
	conf.fDyMenuInit=true;
	}

//-- IE ---------------------------------------------------------------------------------------------------------
function ie_expand(menuNum, pushBtn) {
	if(!conf.fDyMenuInit) return false;
	if(!pushBtn && conf.fNoAutoOpen) return false;
	
//	if(LastMenu!=menuNum) window.focus();
	LastMenu=menuNum;
	
	for( i = conf.nMenuStart; i <= conf.nMenuEnd; i++) {
		child	= document.all["M" + i + "Child"];
		img		= conf.fNoCtrlBtn ? null : document.all["M" + i + "Parent"].all.tags("IMG")[0];
		
		if(menuNum == i) {
			if (child.style.display == "none") {
				child.style.display = "inline";
				if(img) img.src = conf.ctrlon;
				}
			else if(pushBtn == true) {
				child.style.display = "none";
				if(img) img.src = conf.ctrloff;
				}
			}
		else if(!conf.fNoAutoClose) {
			child.style.display = "none";
			if(menuNum != i) {
				if(img) img.src = conf.ctrloff;
				}
			}
		}
	return false;
	}

function ie_initmenu() {
	childlist = document.all.tags("DIV");
	for (cnt=i=0; i < childlist.length; i++) {
		var child=childlist[i];
		// reset child to hidden...
		if (child.className.indexOf("child")<0) continue;
		
		cnt++, child.style.display = conf.fExpandAll? "inline" : "none";
		
		if(!conf.fSwapImage) continue;
		
		init_swapIMG(9,0,0,child.all.tags("A"), child.all.tags("IMG"));
		}
		
	if(conf.nMenuEnd<0) conf.nMenuEnd=cnt-1;
	conf.fDyMenuInit=true;

//	alert(objdump(conf));
	}

//-- NS & IE ----------------------------------------------------------------------------------------------------

expandIt=null, InitMenu=null;

if(getobj) {
	expandIt = conf.isIE ? ie_expand : ns_expand;
	InitMenu = conf.isIE ? ie_initmenu : ns_initmenu;
	
	window.onresize=resize_reload;
	}
 
if(InitMenu==null && conf.isNobreak) {
	var errmsg="";
	errmsg+="Error occurs during DyMenu initialization; InitMenu() not implemented !\n\n";
	errmsg+="[ 'conf' object dump ]:\n"+objdump(conf, 'conf');
	if(isIE) errmsg+="getobj() = "+getobj+"\n";
	
	alert(errmsg);
	}

//-- writting log -----------------------------------------------------------------------------------------------
wlog("MenuLog("+conf.an+"/"+conf.av+")");



