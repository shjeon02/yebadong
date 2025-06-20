///////////////////////////////////////////////////////////////////////////////
//
//	init.js	-	FAST javascript library for NS & IE 4.x common interface
//
//				Script Written by :	Gi-il, Kim.
//				Technical Contect : kiexpert@nobreak.com
//				Home-Page URL     : http://kiexpert.nobreak.ne.kr/
//
//			Powered by Nobreak Technologies, Inc.
//
///////////////////////////////////////////////////////////////////////////////

// 본 스크립트는 빠르면서도 많은 기능을 구현하기 위하여 많은 테스트를 거쳐 상당히 
// 정교하게 작성되어 있고, 따라서 수정시 오동작할 우려가 있으며, 또한 제작자가 심혈을
// 기울여 작성 및 업그레이드하는 것이므로, 일체의 수정을 삼가해 주시기 바랍니다.

// 환경설정...
function CONF() {
	this.an		=navigator.appName;
	this.av		=parseFloat(navigator.appVersion);
	this.isNS	=(this.an=='Netscape');
	this.isIE	=(this.an.indexOf('Explorer')>=0);
	this.f_inited=false;
	this.objs	=new Array();
	this.onpreload_done=null;
	
	var host="";
	if(this.isIE) host=location.host;
	
	this.isNobreak = host ? (host.indexOf('.nobreak.')>=0) : false;
	
	isNS=this.isNS, isIE=this.isIE;
	}

conf = new CONF();

// 디버깅 관련 함수군...
function ismember(obj, name) {
	var i;
	for(i in obj) if(i==name) return true;
	return false;
	}

function namedump(obj) {
	var result="", i="";
	for(i in obj) result += i + ", ";
	return result;
	}

function objdump(obj, objname) {
	var result="", i="";
	if(objname==null) objname="obj";
	for(i in obj) {
		result += objname + "." + i + " = ";
		var members=namedump(obj[i]);
		result += (members=="" ? obj[i].toString() : "[obj] " +  members) + "\n";
		}
	return result;
	}

function objdumpeach(obj, objname) {
	var result, i="";
	if(objname==null) objname="obj";
	for(i in obj) {
		result = objname + "." + i + " = ";
		if(confirm(result)==false) continue;
		var members=namedump(obj[i]);
		result += (members=="" ? obj[i] : "[obj] " +  members) + "\n";
		alert(result);
		}
	return result;
	}

// 쿠키 관련 함수군...
function GetCookie(Name) {
	var	arg= " "+Name + "=", cookie= " "+document.cookie;
	var	alen= arg.length, s, e;

	s=cookie.indexOf(arg, 0);
	if(s==-1) return null;
	
	s+=alen, e=cookie.indexOf(";", s);
	if (e==-1) e=cookie.length;
	return unescape(cookie.substring(s, e));
	}

function SetCookie(Name, value,	expires) {
	var str= Name + "=" + escape(value);
	if(expires) {
		if(expires.setDate) {
			str += "; expires=" + expires.toGMTString();
			}
		else {
			var exp=new Date;
			exp.setDate(exp.getDate()+expires);
			str += "; expires=" + exp.toGMTString();
			}
		}
	document.cookie	= str;
	}

function DeleteCookie(Name)	{
	var exp=new Date, cval = GetCookie(Name);
	document.cookie=Name+"=" + cval	+ "; expires=" + exp.toGMTString();
	}

// 새창열기 보조함수들...
function DEFWIN() {
	this.toolbar='no', this.location='no', this.directories='no', this.status='no';
	this.menubar='no', this.scrollbars='no', this.resizable='no', this.copyhistory='no';
	this.width='300', this.height='200';
	}

function wopen(uri) {
	var w=new DEFWIN, i, rv='';

	for	(i = 1;	i < wopen.arguments.length; i++) {
		var s=wopen.arguments[i], idx=s.indexOf('=');
		w[s.substr(0, idx)]=s.substr(idx+1);
		}
	for(i in w)	rv +=  i+"="+w[i]+",";
	
	return window.open(uri, "_blank", rv.substr(0, rv.length-1));
	}

// 보조함수들...
function random(s, e) {	
	var rv=Math.random()*100;
	rv-=parseInt(rv);
	var seed=Math.floor(rv*(e-s+1)+s);
	if(seed>e) alert('random('+s+','+e+')='+seed+'; retry');
	return seed>e ? random(s,e) : seed;
	}

// 이미지 미리읽어오기 관련 함수군...
var preload_imgarray= new Array(), preloaded=0, npreload=0;
function _preload_done() {
	preloaded++, this.f_loaded=true;
	if(preloaded<npreload) return;
	if(conf.onpreload_done) conf.onpreload_done();
	}
function preload(a,b) { var i, av=preload.arguments;
	for(i=0;	i <	av.length; i++) {
		var url=av[i], img=(preload_imgarray[url]= new Image());
		img.onload=_preload_done, img.src= url, img.f_loaded=false;
		npreload++;
		}
	}

// GIF 화일 바꾸기 관련 함수군...
function on_mouse_over(isover)	{ if(this.im && preload_imgarray[this.imsrc_].f_loaded) this.im.src = this.imsrc_; }
function on_mouse_out(isover)	{ if(this.im) this.im.src = this.imsrc; }

function _get_swapIMG(fname) { 
	var idx =fname.lastIndexOf(".");
	return  fname.substr(0, idx) + "_" + fname.substr(idx);
	}

function init_swapIMG(nImgs, ancidx, imgidx, anclist, imglist) {
	if(nImgs==null) return;
	
	if(ancidx==null) ancidx=document.links.length - nImgs;
	if(imgidx==null) imgidx=document.images.length - nImgs;
	if(ancidx<0 || imgidx<0) return;
	if(!anclist || !imglist) 
		anclist=document.links, imglist=document.images;
	
	var j;
	for(j=0;j<nImgs;j++) {
		var anc=anclist[ancidx+j], im=imglist[imgidx+j];
		if(!im || !anc) break;
		anc.im=im, anc.imsrc=im.src+"", anc.imsrc_=_get_swapIMG(im.src);
		anc.onmouseover=on_mouse_over, anc.onmouseout=on_mouse_out;
		preload(anc.imsrc, anc.imsrc_);
		}
	}

// 로그화일 작성 함수...
function wlog(page) {
	var host=document.location.host;

	if(!conf.isNobreak) return;
	
	preload("http://kiexpert.nobreak.ne.kr/cgi-bin/click_log.cgi?page=" + escape(page+":"+ host));
	}

// 프레임 크기를 얻는다.
function get_framewidth()	{ return isNS ? window.innerWidth-8 : document.body.clientWidth; }
function get_frameheight()	{ return isNS ? window.innerHeight : document.body.clientHeight; }

// 레이어 제어 멤버함수들...
function ns_movexy(x,y)		{ this.left=x, this.top=y; }
function ie_movexy(x,y)		{ this.pixelLeft=x, this.pixelTop=y; this.x=this.pixelLeft, this.y=this.pixelTop; }
function ns_movedxy(dx,dy)	{ this.left+=dx, this.top+=dy; }
function ie_movedxy(dx,dy)	{ this.pixelLeft+=dx,	this.pixelTop+=dy;	this.x=this.pixelLeft, this.y=this.pixelTop; }
function ns_show()			{ this.showed=true, this.visibility =	"show";		}
function ie_show()			{ this.showed=true, this.visibility =	"visible";	}
function ns_hide()			{ this.showed=false, this.visibility = "hide";	}
function ie_hide()			{ this.showed=false, this.visibility = "hidden";	}

function ns_cliprect(cLeft, cTop, cRight, cBottom) {
    this.clip.top = cTop, this.clip.right = cRight;
    this.clip.bottom = cBottom, this.clip.left =  cLeft;
	}

function ie_cliprect(cLeft, cTop, cRight, cBottom) {
	this.clip = 'rect(' + cTop + ' ' + cRight + ' ' + cBottom + ' ' + cLeft + ')';
	}

// 레이어 내용 변경함수군...
function ie_close()				{	this.f_closed=true; this.style.refresh(); }
function ie_write(contents)		{	if(this.f_closed) this.f_closed=false, this.innerHTML=contents; else this.innerHTML+=contents; }
function ie_writeln(contents)	{	this.write(contents+"\n"); }

var _loadobj;

function _loaditer(target) {
	if(target) {
		_loadobj=target, window.status="loadpage() started. ";
		window.loadend=_loaditer;
		if(conf.isIE) loadpageIframe.window.loadend=_loaditer;
		return;
		}

	if(conf.isIE) {
		if(!document.frames['loadpageIframe']) { parent.window.loadend(); return; }
		
		var src=loadpageIframe.document.body.innerHTML;
		_loadobj.hide(), _loadobj.html.innerHTML=src, _loadobj.refresh(), _loadobj.show();
		}
	if(conf.isNS) {
		_loadobj.refresh();
		}
	window.status="loadpage() done.";
	}

function ns_loadpage(url, width) {
	this.load(url, width), this.html.close();
	_loadobj=this, window.loadend=_loaditer;
	}

function ie_loadpage(url, width) {
	loadpageIframe.document.location.href=url;
	_loaditer(this);
	}

// 레이어 보조 멤버 함수들...
function _ismoving()	{ return ismember(this, 'xlist') && this.xlist!=null; }
function _stopmove()	{ 
	if(this.automoveTmr) clearTimeout(this.automoveTmr); 
	this.xylen=0, this.xlist=null, this.ylist=null,	this.automoveTmr=null; 
	return false;
	}
function _automove_wait(msec)	{
	if(this.automoveTmr) clearTimeout(this.automoveTmr); 
	this.automoveTmr=setTimeout("conf.objs."+this.obj_id+".moveiter();", msec);
	}
function _automove()	{
	with (this)	{
		var arlen =	automove.arguments.length;
		var	cx=x, cy=y, ar=automove.arguments;
		// 변수를 초기화 한다.
		if(!ismember(this,'xlist') || xlist==null) {
			this.xlist= new Array();
			this.ylist= new Array();
			this.xylen= 0,	this.xypos= 0;
			this.delay= 50,	this.loop = 1;
			}
		else {
			cx=xlist[xylen-1], cy=ylist[xylen-1];
			if(loop<=0) loop=1;
			}
		// 좌표를 모두계산한다.
		for(var i=0, iw=xylen; i<arlen; i+=3) {
			var	tx=ar[i], ty=ar[i+1], dx=tx-cx, dy=ty-cy, len=Math.sqrt(dx*dx + dy*dy);
			var velocity=ar[i+2], niter=len*1000/(delay*velocity);

			for(var	j=0;j<niter;j++, iw++) {
				xlist[iw] =	cx + dx*j/niter;
				ylist[iw] =	cy + dy*j/niter;
				}

			xlist[iw] =	tx,	ylist[iw] =	ty,	iw++;
			cx=tx, cy=ty;
			}

		xylen=iw;
		this.automoveTmr=setTimeout("conf.objs."+obj_id+".moveiter();", delay);
		}
	}
function _moveiter() {
	with (this)	{
		if(!xlist || !ylist) return;
		if(xypos==0) show();
		movexy(xlist[xypos], ylist[xypos]);
		if(++xypos>=xylen)	{
			if(--loop<=0) {
				stopmove();
				return;
				}
			xypos=0;
			}
		setTimeout("conf.objs."+obj_id+".moveiter();", delay);
		}
	}
function _velocity(vx, vy) {
	if(vx!=null) this.vx=vx;
	if(vy!=null) this.vy=vy;
	if(this.delay==null) this.delay=50;
	
	with (this) {
		if(vx==0 && vy==0) return;
		movedxy(vx, vy);
		setTimeout("conf.objs."+obj_id+".velocity();", delay);
		}
	}

	
// 오브젝트 초기화 함수들...
function ns_refresh() {
	with(this) {
		this.showed	= visibility=="show";
		this.x		= left,this.y = top;
		this.doc	= document;
		this.images	= doc.images,this.links=doc.links, this.forms=document.forms;
		this.hsize	= doc.width,this.vsize=doc.height;
		this.html	= document;
		}
	}

function ns_getobj(layer_id) {
	if(!conf.f_inited) init_library();
	var	o=document.layers[layer_id];
	if(o==null || ismember(o, 'obj_id')) return o;
	// init constants...
	o.obj_id	= layer_id,	conf.objs[layer_id]=o;
	// init member functions...
	o.refresh	= ns_refresh;
	o.movexy	= ns_movexy,o.movedxy	= ns_movedxy;
	o.hide		= ns_hide,	o.show		= ns_show;
	o.ismoving	= _ismoving,o.stopmove	= _stopmove,o.automove	= _automove, o.automove_wait=_automove_wait;
	o.moveiter	= _moveiter,o.velocity	= _velocity;
	o.cliprect	= ns_cliprect;
	o.loadpage	= ns_loadpage;
	// init variables...
	o.refresh();
	
	return o;
	}

function ie_refresh() {
	with(this) {
		this.x		= pixelLeft, this.y=pixelTop;
		this.doc	= html.document;
		this.showed	= this.visibility == "visible";
		this.images	= html.all.tags("IMG"),	this.links=html.all.tags("A"), this.forms=html.all.tags("FORM");
		this.hsize	= parseInt(html.clientWidth), this.vsize=parseInt(html.clientHeight);
		}
	}

function ie_getobj(layer_id) {
	if(!conf.f_inited) init_library();
	var	ob=document.all.tags("DIV")[layer_id];
	if(ob==null)		return null;
	var	o=ob.style;
	if(o.obj_id!=null)	return o;
	// init constants...
	o.html		= ob;
	o.obj_id	= layer_id,	conf.objs[layer_id]=o;
	// init member functions...
	o.refresh	= ie_refresh;
	o.movexy	= ie_movexy,o.movedxy	= ie_movedxy;
	o.hide		= ie_hide,	o.show		= ie_show;
	o.ismoving	= _ismoving,o.stopmove	= _stopmove,o.automove	= _automove, o.automove_wait=_automove_wait;
	o.moveiter	= _moveiter,o.velocity	= _velocity;
	o.cliprect	= ie_cliprect;
	o.loadpage	= ie_loadpage;
	ob.write	= ie_write,ob.writeln	= ie_writeln,ob.close	= ie_close, ob.f_closed=true;
	// init variables...
	o.refresh();

	return o;
	}

function resize_reload() {
	if(!conf.f_inited) return;
	if(get_framewidth()==conf.hsize && get_frameheight()==conf.vsize) return;
//	alert('window-resize detected ('+get_framewidth()+','+get_frameheight()+'); reloading document '+self.name+' !\n\n'+objdump(conf,'conf'));
	document.location.href=document.location.href;
	}

function put_objstyle(addstr) {
	if(!addstr) addstr="";
	
	document.write("<STYLE TYPE='text/css'> <!-- \n");
	if(conf.isNS) {
		alert("Warning ! Netscape is so dangerous on using document.write(...) function !");
		document.write(".hideclass	{position: absolute; visibility: hide; z-index: 10; }\n");
		document.write(".showclass	{position: absolute; visibility: show; z-index: 10; }\n");
		
		document.write(".hideinlnine	{position: absolute; visibility: hide; }\n");
		document.write(".showinlnine	{position: absolute; visibility: show; }\n");
		}
	if(conf.isIE){
		document.write(".hideclass	{position: absolute; visibility: hidden;  width: 1; height: 1; z-index: 10; }\n");
		document.write(".showclass	{position: absolute; visibility: visible; width: 1; height: 1; z-index: 10; }\n");
		
		document.write(".hideinline	{display: none;}\n");
		document.write(".showinline	{display: inline;}\n");
		}
	document.write("--> </STYLE>\n");
	}

function err_handler() {
	document.location.href='javascript:';
	}

// binding fuctions	by Browser type...
window.getobj=null;
if(conf.av>=4) {
	if(conf.isNS)	window.getobj = ns_getobj;//, window.onerror=err_handler;
	if(conf.isIE)	window.getobj = ie_getobj;
	}

if(!window.getobj && conf.isNobreak) {
	var errmsg="";
	errmsg+="Error occurs during global initialization; getobj() is not implemented !\n\n";
	errmsg+="(document.layers || document.all) = "+(document.layers || document.all)
	errmsg+="\n\n[ 'conf' object dump ]:\n"+objdump(conf, 'conf');
	
	alert(errmsg);
	}

//	마우스 제어함수군...
function ns_onmouse(e) {
	conf.moux=e.pageX, conf.mouy=e.pageY;
	}

function ie_onmouse() {
	if(!window.event) return;
	conf.moux=window.event.x+document.body.scrollLeft, conf.mouy=window.event.y+document.body.scrollTop;
	}

function enable_mouse() {
	if(conf.isNS) {
		document.captureEvents(Event.MOUSEMOVE);
		document.onmousemove = ns_onmouse;
		}
	else {
		document.onmousemove =  ie_onmouse;
		setInterval("ie_onmouse()", 1000);
		}
	}

// 키보드 제어 함수군...
function handler_onkey(e) {
	var key_press = conf.isNS ? e.which : window.event.keyCode;
	
	with(conf) {
		keybuf[keytail++] = key_press;
		keytail%=maxkey;
		if(keytail==keyhead) ++keyhead, keyhead %= maxkey;
		}
	}

function getkey() {
	with(conf) {
		if(keyhead==keytail) return null;
		var rv=keybuf[keyhead++];
		keyhead%=maxkey;
		return rv;
		}
	}

function enable_getkey() {
	if(conf.isNS) {
		document.onkeydown = handler_onkey;
		document.captureEvents(Event.KEYDOWN);
		} 
	if(conf.isIE) document.onkeydown = handler_onkey;
	
	conf.maxkey=32, conf.keyhead=conf.keytail=0;
	conf.keybuf=new Array();
	}


// 문서정보를 초기화한다.
function init_library() {
	/*
	if(conf.isIE && !window.frames['loadpageIframe']) {
		var divs=document.all.tags("DIV");
		if(divs.length>0) {
			divs[0].outerHTML += "<IFRAME name=loadpageIframe src='about:blank' style='display: none;'></IFRAME></BODY></HTML>";
			}
		}
	*/
	conf.hsize=get_framewidth();
	conf.vsize=get_frameheight();
	
	conf.f_inited=true;
	}

