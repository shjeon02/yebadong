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

// 본 스크립트는 빠르면서도 많은 기능을 구현하기 위하여 많은 테스트를 거쳐 상당히 
// 정교하게 작성되어 있고, 따라서 수정시 오동작할 우려가 있으며, 또한 제작자가 심혈을
// 기울여 작성 및 업그레이드하는 것이므로, 일체의 수정을 삼가해 주시기 바랍니다.

//-- NS/IE ------------------------------------------------------------------------------------------------------

// 메뉴 개수 설정 ( 정의되어 있지 않으면 0번부터 자동 탐지 )...
if(!ismember(conf, 'nMenuEnd'))		conf.nMenuStart=0, conf.nMenuEnd=-1;

// 보조 기능 기본값 설정...
if(!ismember(conf, 'fSwapImage'))	conf.fSwapImage		= false;
if(!ismember(conf, 'fSwapImageP'))	conf.fSwapImageP	= false;
if(!ismember(conf, 'fNoCtrlBtn'))	conf.fNoCtrlBtn		= false;
if(!ismember(conf, 'align'))		conf.align			= "right";

// 메뉴 사용자별 설정을 받아옴...
if(!ismember(conf, 'fNoAutoOpen'))	conf.fNoAutoOpen	= GetCookie("fNoAutoOpen")	=="true";
if(!ismember(conf, 'fNoAutoClose'))	conf.fNoAutoClose	= GetCookie("fNoAutoClose")	=="true";
if(!ismember(conf, 'fExpandAll'))	conf.fExpandAll		= GetCookie("fExpandAll")	=="true";


// 내부 함수들...
function auto_close() {
	var temp=conf.fNoAutoClose;
	conf.fNoAutoClose=false, expandIt(LastMenu), conf.fNoAutoClose=temp;
	}

LastMenu=-1, conf.fDyMenuInit=false;
baseMenuArray=new Array();

function HideMenuChild(o) {
	if(!o.menuitems) return;
	var i, items=o.menuitems;
	for(i in items) {
		items[i].hide(), HideMenuChild(items[i]);
		}
	}

function ShowMenuChild(o) {
	if(!o.menuitems) return;
	var i, items=o.menuitems;
	for(i in items) {
		items[i].show(), HideMenuChild(items[i]);
		}
	}

function SyncMenuObj(o, sy) {
	o.movexy(o.x, sy);
	if(!o.showed) return sy;
	sy+=o.vsize;
	if(!o.menuitems) return sy;
	var i, items=o.menuitems;
	for(i in items) {
//		alert(i+" "+sy);
		sy=SyncMenuObj(items[i], sy);
		}
	return sy;
	}

function SyncMenuObjAll(sy) { var i;
	for(i in baseMenuArray) {
		sy=SyncMenuObj(baseMenuArray[i], sy);
		}
	return sy;
	}

function BindMenuObj(o, id) {
	var child=getobj(id);
	if(child) child.movexy(30, 0);
	if(!o) {
		if(child) baseMenuArray[id] = child;
		return child;
		}
	if(!ismember(o,'menuitems')) o.menuitems=new Array();
	if(!child) {
		alert('menuitemobj '+id+' not found !');
		return null;
		}
	o.menuitems[id]=child;
	
	return child;
	}

var lastselect=-1;

function expandIt(i, tflag) { var o, ob, oc;
	o=getobj("M"+lastselect+"Child");
	if(o) o.hide();
	
	ob=getobj("M"+i+"Parent");
	oc=getobj("M"+i+"Child");
	if(tflag && oc.showed) HideMenuChild(ob);
	else ShowMenuChild(ob);
	
	lastselect=i;
	SyncMenuObjAll(50);
	return false;
	}

function InitMenu() { var i=0;

	for(i=0;;i++) {
		var curr=BindMenuObj(null, "M"+i+"Parent");
		if(!curr) break;
		curr.show();
		BindMenuObj(curr, "M"+i+"Child");
		HideMenuChild(curr);
		}
	
	SyncMenuObjAll(50);
	}

