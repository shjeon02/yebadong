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


// ���� �Լ���...
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

