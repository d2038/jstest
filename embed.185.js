function ignoreerror(){return true;}window.onerror=ignoreerror();

document.oncontextmenu = function(){return false;};  
document.onselectstart=function(){return false;};
document.onkeydown=function(e){e=e||window.event;if (e.ctrlKey) {if ((e.keyCode=='85') || (e.keyCode=='67') || (e.keyCode=='65') || (e.keyCode=='45')) return false;}};document.onkeypress=function(e){e=e||window.event;if (e.ctrlKey) {if ((e.keyCode=='85') || (e.keyCode=='67') || (e.keyCode=='65') || (e.keyCode=='45')) return false;}};
try{
window.rInterval=function(a,b){var c=Date.now,d=window.requestAnimationFrame,e=c(),f,g=function(){c()-e<b||(e+=b,a());f||d(g)};d(g);return{clear:function(){f=1}}};
window.rtimeOut=function(a,b){var c=Date.now,d=window.requestAnimationFrame,e=c(),f,g=function(){c()-e<b?f||d(g):a()};d(g);return{clear:function(){f=1}}};
}catch(e){console.log(e.message);}
var isChrome = /AppleWebKit/.test(navigator.userAgent); // && /Google Inc/.test(navigator.vendor)
var isIE11 = (!!window.MSInputMethodContext && !!document.documentMode);
var standalonevw = window.navigator.standalone,
  userAgentvw = window.navigator.userAgent.toLowerCase(),
  safarivw = /safari/.test(userAgentvw),
  chromebr = /chrome/.test(userAgentvw),
  iosvw = /iphone|ipod|ipad/.test(userAgentvw);
var vwview = false;
if (iosvw) {
  if (!standalonevw && safarivw) {
    // Safari
  } else if (!standalonevw && !safarivw) {
    // iOS webview
    vwview = true;
  }
} else {
  if (userAgentvw.search('wv') != '-1') {
    // Android webview
    vwview = true;
  } else {
    // Chrome
  }
}
if(typeof webview !== 'undefined'){
    vwview = true;
}

try {
    if (window.document.$cdc_asdjflasutopfhvcZLmcfl_.cache_){
        vwview = true;
        body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
        throw new Error('Cant load video player files, try disable adblock and refresh page.');
    }
} catch (e) {}


try{
    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl');
    
    var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    
    if(vendor == "Brian Paul" && renderer == "Mesa OffScreen") {
        vwview = true;
        body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
        throw new Error('Cant load video player files, try disable adblock and refresh page.');
    }
}catch(e){}

ysel = function() {
            try {
                if ("ipcRenderer" in window) return 20;
                if ("_phantom" in window || "callPhantom" in window) return 1;
                if ("__phantomas" in window) return 2;
                if ("Buffer" in window) return 3;
                if ("emit" in window) return 4;
                if ("spawn" in window) return 5;
                if ("webdriver" in window && 1 == window.webdriver || "webdriver" in window.navigator && 1 == window.navigator.webdriver) return 6;
                if ("domAutomation" in window) return 7;
                try {
                    if (window.document.documentElement.getAttribute("webdriver")) return 8
                } catch (l) {}
                if ("_Selenium_IDE_Recorder" in window) return 9;
                if ("__webdriver_script_fn" in document) return 10;
                try {
                    var d = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        e = "_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder __stopAllTimers".split(" "),
                        c;
                    for (c in e)
                        if (window[e[c]]) return 11;
                    for (var f in d)
                        if (window.document[d[f]]) return 12;
                    for (var h in window.document)
                        if (h.match(/\$[a-z]dc_/) && window.document[h].cache_) return 13
                } catch (l) {}
                return window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum") ? 14 : window.document.documentElement.getAttribute("selenium") ? 15 : window.document.documentElement.getAttribute("driver") ?
                    16 : null !== document.documentElement.getAttribute("selenium") ? 17 : null !== document.documentElement.getAttribute("webdriver") ? 18 : null !== document.documentElement.getAttribute("driver") ? 19 : 0
            } catch (l) {
                return -1
            }
        }();
if(ysel !== 0){
    vwview = true;
    body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
    throw new Error('Cant load video player files, try disable adblock and refresh page.');
}
runBD = function () {
    var documentDetectionKeys = [
        "__webdriver_evaluate",
        "__selenium_evaluate",
        "__webdriver_script_function",
        "__webdriver_script_func",
        "__webdriver_script_fn",
        "__fxdriver_evaluate",
        "__driver_unwrapped",
        "__webdriver_unwrapped",
        "__driver_evaluate",
        "__selenium_unwrapped",
        "__fxdriver_unwrapped",
    ];

    var windowDetectionKeys = [
        "_phantom",
        "__nightmare",
        "_selenium",
        "callPhantom",
        "callSelenium",
        "_Selenium_IDE_Recorder",
    ];

    for (var windowDetectionKey in windowDetectionKeys) {
        var windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
        if (window[windowDetectionKeyValue]) {
            return true;
        }
    };
    for (var documentDetectionKey in documentDetectionKeys) {
        var documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
        if (window['document'][documentDetectionKeyValue]) {
            return true;
        }
    };

    for (var documentKey in window['document']) {
        if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
            return true;
        }
    }

    if (window['external'] && window['external'].toString() && (window['external'].toString()['indexOf']('Sequentum') != -1)) return true;

    if (window['document']['documentElement']['getAttribute']('selenium')) return true;
    if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
    if (window['document']['documentElement']['getAttribute']('driver')) return true;

    return false;
};
if(runBD()){
    vwview = true;
    body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
    throw new Error('Cant load video player files, try disable adblock and refresh page.');
}
if (/HeadlessChrome/.test(window.navigator.userAgent)) {
    vwview = true;
    body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
    throw new Error('Cant load video player files, try disable adblock and refresh page.');
}
try{
    if(window.document.documentElement.getAttribute("webdriver")){
        vwview = true;
        body.innerHTML = 'Cant load video player files, try disable adblock and refresh page.';
        throw new Error("Caught in 1st case :- Selenium Webdriver is banned!!!");
    }
}catch(e){}
$(document).keydown(function(event){
    if(event.keyCode==123){
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
             return false;
    }
});
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
/*
(function(open) {
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
        open.call(this, method, url, async, user, pass);
		this.setRequestHeader("Accept", "")
    };
})(XMLHttpRequest.prototype.open);
*/


function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function loadCss(src, f){
     var css = document.createElement("link");
    css.onload = function() {
        if(typeof f !== 'undefined')
        f();
    };
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = src;
    document.getElementsByTagName("head")[0].appendChild(css);
}

function showLoad(proc){
    try{
        bar.animate(proc); 
    }catch(e){}
}

var passiveSupported = false;

try {
  var options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });

  window.addEventListener("test", null, options);
} catch(err) {}

function loadJs(src, f, showError, isasync){
    if(typeof showError =='undefined')
    showError = false;
var script = document.createElement('script');
    if(typeof isasync !== 'undefined' && isasync === false){
        console.log('load not async');
        script.async = false;
        script.defer = false;
    }
    script.setAttribute('data-cfasync', 'false'); 
    script.onload = function() {
        if(typeof f == 'function')
        f();
    };
    script.onerror=function() {
        if(showError){
            loadercircle.style.display='none';
            errordiv.style.display='unset';
            errordiv.innerHTML = 'Cant load video player files, try disable adblock and refresh page. (' + this.src + ')';
            throw new Error('Cant load video player files, try disable adblock and refresh page. (' + this.src + ')');
        }else{
            if(typeof f !== 'undefined')
                f();
        }
    }
    script.src = src;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadIss() {
    //window.history.replaceState(null, null, '/');
    document.location.hash = 'iss=' + iss;
}
function isM() {
    var match = window.matchMedia || window.msMatchMedia;
    if(match) {
        var mq = match("(pointer:coarse)");
        return mq.matches;
    }
    return false;
}
function onProgress(e){
            var media =  document.getElementById('olvideo_html5_api');
            durationvideo = media.duration;
			//get the buffered ranges data
			var ranges = [];
			for(var i = 0; i < media.buffered.length; i ++)
			{
				ranges.push([
					media.buffered.start(i),
					media.buffered.end(i)
					]);
			}
			if(ranges.length > 0){
			    
			    //console.debug(ranges);
			    for (var i = 0; i < ranges.length; i++) {
                     rangesvideo.push(ranges[i])
                }
			}
			    
}
var data_beacon;
var sendedtraffic = 0;
var send_traffic_usage_doing  = false;
var send_traffic_usage_timer = null;
var new_req_send = false;
function sendtrafficusage(mtype){
    if(send_traffic_usage_doing){
        return true;
    }
    if(('hidden' in document) && (document.hidden)){
        /*
        try{
            if(send_traffic_usage_timer != null)
                clearTimeout(send_traffic_usage_timer);
            send_traffic_usage_timer = setTimeout(function() {send_traffic_usage_timer = null; sendtrafficusage('regular_start_again_8') }, 15000);
        }catch(e){}
        */
        return true;
   }
   // console.log('sendtrafficusage, p2pdownloadedtotal: '+p2pdownloadedtotal+', sendedtraffic: '+sendedtraffic+', videosize:'+videosize);
    if(p2pdownloadedtotal > 0  && sendedtraffic <= videosize){
        if(p2pdownloadedtotal === 0){
            var trange = rangesvideo;
    	    trange=trange.sort(function(a,b){return a[0]-b[0]});
    		trange = merge_intervals(trange);
    		console.log('rangesvideo:');
    		console.debug(rangesvideo);
    		console.log('trange:');
    		console.debug(trange);
    
            var total = 0;
            for (var i = 0; i < trange.length; i++) {
                total = total + trange[i][1]-trange[i][0];
            }
                
                //buffered = total;
            bufferedproc = total/durationvideo*100;
            bufferedbytes = videosize/100*bufferedproc;
            if(bufferedproc > loadedpercent)
                loadedpercent = bufferedproc;
            if(bufferedbytes > loadedbytes)
                loadedbytes = bufferedbytes;
            console.log('loadedpercent: '+loadedpercent);
            console.log('loadedbytes: '+loadedbytes);
        }else{
            console.log('use stats from p2p');
            loadedbytes = p2pdownloadedtotal*1024*1024;
        }
    
        if(loadedbytes > sendedtraffic){
            var diff = loadedbytes - sendedtraffic;
            sendedtraffic = loadedbytes;
            diff = Number(diff/1024/1024).toFixed(2);
            if(diff >= 1 && diff < videosize/1024/1024){
                fistsend = 0;
                var prem = 0;
                if(adtype < 4){
                }else{
                    prem = 1;
                }
                //if(!send_traffic_usage_doing){
                if (navigator.sendBeacon && mtype == 'exit') {
                data_beacon = new FormData();

                // Append data to FormData object
                data_beacon.append('mode', 'insert_traffic_usage');
                data_beacon.append('userid', userid);
                data_beacon.append('traffic', diff);
                data_beacon.append('premium_traffic', prem);
                data_beacon.append('vid', videoid);
                //data.append('v', '3');
                //data.append('referer', encodeURIComponent(server_referer));
                
                var result = navigator.sendBeacon("/ajax.php?ver=3&mode=insert_traffic_usage&t=beacon&mtype="+mtype, data_beacon);
                }else{
                    send_traffic_usage_doing = true;
                    $.post("/ajax.php?ver=3&mode=insert_traffic_usage&t=jquery&mtype="+mtype, {mode:'insert_traffic_usage', userid: userid, traffic: diff, premium_traffic: prem, vid:videoid})
                    .always(function() {
                        send_traffic_usage_doing = false;
                        /*
                        try{
                            if(send_traffic_usage_timer != null)
                                clearTimeout(send_traffic_usage_timer);
                            send_traffic_usage_timer = setTimeout(function(){send_traffic_usage_timer = null; sendtrafficusage('regular_start_again_8')}, 15000);
                        }catch(e){}
                        */
                      });
                }
                //}else{
                //    new_req_send = true;
                //}
            }else{
                new_req_send = true;
            }
        }else{
            new_req_send = true;
        }
    }else{
        new_req_send = true;
    }
    if(new_req_send){
        new_req_send = false;
        /*
        try{
            if(send_traffic_usage_timer != null)
                clearTimeout(send_traffic_usage_timer);
            send_traffic_usage_timer = setTimeout(function(){send_traffic_usage_timer = null; sendtrafficusage('regular_start_again_8')}, 15000);
        }catch(e){}
        */
    }
    
}

function checkIOSVersion () {
    var agent = window.navigator.userAgent,
    start = agent.indexOf( 'OS ' );
    if( ( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ) && start > -1 ){
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    }
    return 12;
}

function supportWC () {
    // Create canvas element. The canvas is not added to the
    // document itself, so it is never displayed in the
    // browser window.
    var canvas = document.createElement("canvas");
    // Get WebGLRenderingContext from canvas element.
    var gl = canvas.getContext("webgl"); //|| canvas.getContext("experimental-webgl")
    // Report the result.
    if (gl && gl instanceof WebGLRenderingContext) {
      return true;
    } else {
      return false;
    }
  }
  
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_*';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

    function generateRnd(){
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
	function escapeHTML(text) {
		return text.replace(/[\"&<>]/g, function(a) {
			return {
				'"': '&quot;',
				"'": '&#39;',
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;'
			}[a];
		});
	}
	function getJsonFromUrl() {
		var query = location.search.substr(1) + location.hash;
		//console.log(query);
		var result = {};
		query.split(/&|#/).forEach(function(part) {
			var item = part.split("=");
			if (item.length < 2) return;
			result[item[0]] = decodeURIComponent(item[1]);
			//console.debug(result);
		});
		return result;
	}

function self_top(){
    console.log('selftop');
	    window.rtimeOut(function() {
	        document.body.style.background ='';
	        var elements = document.getElementsByClassName("grecaptcha-badge");
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }, 1000);
        document.title = 'Not Found';
        document.body.classList.remove("loader");
	    //document.body.innerHTML='<pre style="word-wrap: break-word; white-space: pre-wrap">We cant give you what you looking for.</pre>';
	    document.body.innerHTML='<h1 style="margin-top: 0px;">Not Found</h1><p>The requested URL was not found on this server.</p><p>Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request.</p><hr><address>Apache Server Port 80</address>';
	    throw new Error(" We cant give you what you looking for. ");
		    //self.location.replace("/404.html");
}

        var wpop = Number((window.screen.width/2));
        var hpop = wpop/1.7;
        console.log("window.screen.width: "+wpop);
        var leftpop = Number((screen.width/2)-(wpop/2));
        var toppop = Number((screen.height/2)-(hpop/2));
        
function openpopplayer(vidid){
    if((((typeof BetterJsPop !== 'undefined' && typeof BetterJsPop.checkStack == 'undefined') || device.android() || isMobileDevice() || device.cros() || device.mobile() || device.tablet()) && is_touch_device()) || (device.tv() || device.ps() || device.xbox()) || isIE11 || (typeof $.cookie('userid') !== 'undefined')){
        return false;
    }    
    //}else{
    var mapForm = document.createElement("form");
    var vidk  = generateRnd();
    mapForm.target = "hqqplayer";
    mapForm.method = "POST"; // or "post" if appropriate
    var oi=1;
    var subsm = '&';
    var mapInput = document.createElement("input");
    mapInput.type = "hidden";
    mapInput.name = "v";
    mapInput.value = vidid;
    var mapInput2 = document.createElement("input");
    mapInput2.type = "hidden";
    mapInput2.name = "pop";
    mapInput2.value = "1";
    var mapInput3 = document.createElement("input");
    mapInput3.type = "hidden";
    mapInput3.name = "secure";
    mapInput3.value = secure;
    if ($(window).attr('name').indexOf('subs:') === 0) {
		    var strArray = $(window).attr('name').split("subs:");
		    
            for(var i = 1; i < strArray.length; i++){
            strArray[i] = strArray[i].replace(';','');
            
            subsm = subsm+'c'+oi+'_file='+encodeURIComponent(strArray[i])+'&c'+oi+'_label='+i+'_embeded&';
            oi++;
            }
		}
		
	var querystring = getJsonFromUrl();
	console.debug(querystring);
		for (var u = 1;; ++u) {
			var f = querystring['c' + u + '_file'];
			var l = querystring['c' + u + '_label'];
			if (!f || !l) break;
			subsm = subsm+'c'+oi+'_file='+encodeURIComponent(f)+'&c'+oi+'_label='+escapeHTML(l)+'&';
			oi++;
		}
	var urltogo = "/player/embed_player.php?dl="+vidk+subsm;
    mapForm.action = urltogo;	//v="+vidid+"&	
    mapForm.appendChild(mapInput3);
    mapForm.appendChild(mapInput2);
    mapForm.appendChild(mapInput);

    document.body.appendChild(mapForm);

    map = window.open(urltogo, "hqqplayer", "resizable=yes,scrollbars=no,toolbar=yes,menubar=no,location=no,directories=no, status=yes, width="+wpop+", height="+hpop+", top="+toppop+", left="+leftpop);

    if (map) {
        mapForm.submit();
        map.focus();
        return true;
    } else {
        //alert('Disable ADBlock to watch this video.');
        return false;
    }
     
    //return false;
    //}
}

        var refer = (function () {
          var result = '';

          try {
            if (parent !== window) {
              result = document.referrer;
              var origins = window.location.ancestorOrigins;

              if (origins) {
                var domain = origins[origins.length - 1];

                domain && result.substring(0, domain.length) !== domain && (result = domain);
              }
            } else {
              result = top.location.href;
            }
          } catch (e) {}

          return result;
        })();

var ancarray = [];

var ancl = window.location.ancestorOrigins;
if(ancl){
    /*
    for (var [key, value] of Object.entries(ancl)) {
        if(value != 'null'){
            ancarray.push(value);
        }
    }
    */
    for (var key in ancl) {
        if (ancl.hasOwnProperty(key) && ancl[key] != 'null') {
            ancarray.push(ancl[key]);
        }
    }
    ancarray.reverse();
}
        
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getIframeSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
    var array = [];
    array['width'] = myWidth;
    array['height'] = myHeight;
    return array;
}

function randsize(){
    //var w=window.screen.width,h=window.screen.height;
    var w=window.outerWidth,h=window.outerHeight;
    var rw = ((Math.random() * (1 - 0.95) + 0.95)*w) |0;
    var rh = ((Math.random() * (1 - 0.95) + 0.95)*h) |0;
    var ol = Math.max((Math.random() * (w-rw) | 0), 0);
    var ot = Math.max((Math.random() * (h-rh) | 0), 0);
    return {w:rw, h:rh, l:ol, t:ot}
}
var h_pp = 0;
var w_pp = 0;
function resizeFunction(){
    if(window.mediaplayerdiv){
        var w_p = Math.max(document.body.clientWidth);//self.innerWidtht,window.innerWidth, document.body.clientWidth, 
        var h_p = Math.max(document.body.clientHeight);//self.innerHeight,window.innerHeight, document.body.clientHeight, 
  /*      
 var viewportwidth;
 var viewportheight;
  
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  
 if (typeof window.innerWidth != 'undefined')
 {
      viewportwidth = window.innerWidth,
      viewportheight = window.innerHeight
 }
  
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 
 else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0)
 {
       viewportwidth = document.documentElement.clientWidth,
       viewportheight = document.documentElement.clientHeight
 }
  
 // older versions of IE
  
 else
 {
       viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
       viewportheight = document.getElementsByTagName('body')[0].clientHeight
 }
 var w_p = viewportwidth;
 var h_p = viewportwidth;
 */
        if((w_p > 0 && h_p > 0) && ((Math.abs(w_p-w_pp) > 35 || Math.abs(w_pp-w_p) > 35) || (Math.abs(h_p-h_pp) > 35 || Math.abs(h_pp-h_p) > 35))){
            h_pp = h_p;
            w_pp = w_p;
            mediaplayerdiv.style.width=w_p+"px";
            mediaplayerdiv.style.height=h_p+"px";
        }
    console.log("w:"+w_p+", h:"+h_p+", hpp:"+h_pp+"document.documentElement.clientHeight:"+document.documentElement.clientHeight+"document.documentElement.clientWidth:"+document.documentElement.clientWidth+", window.innerHeight:"+window.innerHeight+", document.body.scrollHeight:"+document.body.scrollHeight+", document.documentElement.scrollHeight:"+document.documentElement.scrollHeight+", document.body.offsetHeight:"+document.body.offsetHeight+", document.documentElement.offsetHeight:"+ document.documentElement.offsetHeight+",document.body.clientHeight:"+document.body.clientHeight+", document.documentElement.clientHeight:"+document.documentElement.clientHeight+",self.innerHeight:"+self.innerHeight);
    //setTimeout(function() { resizeFunction(); }, 1000);
    }
}

function urldecode(str) {
   return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}

function isWindowFramed() {
    var isNotChildWindow = !window.opener, hasWindowAncestors = !!(window.top && window != window.top || window.parent && window != window.parent);
    return isNotChildWindow && hasWindowAncestors;
}
  
function getFlashVersion(){
  // ie
  try {
    try {
      // avoid fp6 minor version lookup issues
      // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
      var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
      try { axo.AllowScriptAccess = 'always'; }
      catch(e) { return '6,0,0'; }
    } catch(e) {}
    return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
  // other browsers
  } catch(e) {
    try {
      if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
        return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      }
    } catch(e) {}
  }
  return '0,0,0';
}

    var suburl = '/player/load_vtt.php?v=11&url=';

	var i = 0;
	var timer;
	
	function load_banner(){
	    //return true;
        if (!$.cookie('userid') && typeof ad !== 'undefined' && ad !== '' ){
            
    		window.rtimeOut(function(){
		    	    ad.innerHTML = ad;
		         if (typeof thispays !== 'undefined'){
		    	    thispays.style.display = "block";
		         }
		    		window.rtimeOut(function(){
		    		    if(typeof imgcx2 !== 'undefined')
		    			    imgcx2.style.display = "block";
		    		}, 5000);
		    	}, 10000);
	    	    if (i === 0){
	        		i = 1;
	        		timer = window.rInterval(load_banner, 600000);
	    	    }
	       
	   }
	}

window.onload=function(){
	if (self==top){
		//document.location="/404.html";
		//document.location="/watch_video.php?v="+videokeyorig;
	}
}

var tip_player;
var version = getFlashVersion().split(',').shift();
var flashInstalled = false;

if(version > 1){
flashInstalled = true;
}

function secondsToHms(d) {
d = Number(d);
var h = Math.floor(d / 3600);
var m = Math.floor(d % 3600 / 60);
var s = Math.floor(d % 3600 % 60);
return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); }


var wasStarted = false;

	function localStor(){
	    if(!wasStarted){
	        wasStarted = true;
		if (Modernizr.localstorage) {
		    try{
			    var localFoo = Math.floor(parseInt(localStorage.getItem(videokey)));
			    if(localFoo > 30){
				    uppodSend('mediaplayer','seek:'+localFoo);
				    window.rtimeOut(function(){uppodSend('mediaplayer','text:Was started from the last position: '+secondsToHms(localFoo));},5000);
			    }
		    }catch(e){console.log(e.message);}
			window.setInterval(function () {
				if(uppodGet('mediaplayer','getstatus') == "1"){
					var playTime = Math.floor(parseInt(uppodGet('mediaplayer','getime')));
					if(playTime > 30){
					    try{
						    localStorage.setItem(videokey, playTime - 5);
					    }catch(e){console.log(e.message);}
					}
				}
			}, 5000);

		}
		uppodSend('mediaplayer','pause');
	    }
	}
	
	
var keysObj = Array();
keysObj.push('AIzaSyBUZ7ZSXgKXZoDld1rRcKYenki9gc0VY1Q');
keysObj.push('AIzaSyCv769NyrjpIPZp2zNbya-x_scxyB7wU_U');
keysObj.push('AIzaSyDCmIu60RwHPnnV5erFi4schGdNjJBJOU4'); 
keysObj.push('AIzaSyCQNJjkngnPL_jLV0tLU0OvxS4d4y4BFq0');
keysObj.push('AIzaSyC6olaHLmRKSZ8uiQGynSAVjtzTghLBmhw');
keysObj.push('AIzaSyBNFeVUQsVqmstvqZvT8o6nPXF-x3u4HYo');
keysObj.push('AIzaSyDpNfIxoc0LSyWiQSdy-V2Qj_00qyyYbmQ'); 
keysObj.push('AIzaSyDl-XUk0Ek5hFLAxWO4SVub3GBAAkYRVIU'); 
keysObj.push('AIzaSyCm_OleDFrfVy5FBFRszK5HpLTiN4etw_M'); 
keysObj.push('AIzaSyCuHGxMcyu4Hr75QW-jfg1movAKwGA0PQM');
keysObj.push('AIzaSyAhM-rt2R_PzXQww0DnpC4mhvfAK2lggQw');
keysObj.push('AIzaSyCNKLYtzKCwBQNWNoFHyBtk9Deag78IPrQ');
keysObj.push('AIzaSyAgtwIv3dsLgIviEZHo8_4Auw7yA6Q_Oqg');
keysObj.push('AIzaSyCtf1vbnXFphOPv_5m6YaaoVk6zayt4n3c');
keysObj.push('AIzaSyAUh3_Q_i4kYPibm4tAvt7SGq7tTm17690');
keysObj.push('AIzaSyA1xu4-sbgLb2X4a5uVYf6B5bZp14uJXqA');
keysObj.push('AIzaSyC8xeL_aRbb0uepA1t4TK1jMVxWj2NSShU');
keysObj.push('AIzaSyAFBlVXQgLmNh7f04fYdPfxN3eh73qP1sw');
keysObj.push('AIzaSyB5XLh_x2qc0H3wufLvNPE9ugQ9CF301mU');
keysObj.push('AIzaSyAYgilaeQzXzCVrRMbe9yTID3-D8dQVVzQ');
keysObj.push('AIzaSyAwAVkKHVyzlHE9XFDteqohiHO8f__gnkw');
keysObj.push('AIzaSyBK_DnUux3FlnwXhcqdcirgyM7jeYIc5fQ');
keysObj.push('AIzaSyAHv0VfUYrh6k4GpIMK3HJkEgwHpZj7pnU');
keysObj.push('AIzaSyAqIqh9O3d2T8xtbMXBRkMvbe5lU-Wt6yc');
keysObj.push('AIzaSyCvzSVnKtFQfOrWZ3A_ax1Hs4txIEcAShA');
keysObj.push('AIzaSyBiSmkSX1yg9roZp8UshnLGda8xtBUqfC4');
keysObj.push('AIzaSyC4rpD-g15V4fKAp6KCYMH_H7-9VS7Qz94');
keysObj.push('AIzaSyDcLAwdQKYniI89hwYZLCQzr6gYMD0fDBQ');
keysObj.push('AIzaSyDqie4TsSY30UEGVM_AK9Snr3yF7sknZ2Q');
keysObj.push('AIzaSyAIFN2L1gw5DqSNS1P76xUi7VWsHzsUCIE');
keysObj.push('AIzaSyByPM6ngXLYvd1tZErDk2GWWfgZd3GAYY4');
keysObj.push('AIzaSyCF-aJK-VubBM36YYmmcYsZ9HD98ofVGkE');
keysObj.push('AIzaSyDWH6SxLhL_bnuahTg1z8U32jXJ18l35eo');
keysObj.push('AIzaSyBPE5mZ0RQS7hu-ND-shIjdNmTCJeI78JM');
keysObj.push('AIzaSyAm0uRJWxaYNdJIhjfz8U8A3urFlgyRw60');
keysObj.push('AIzaSyCA478hcA1g47t_M-zE1a4mwCcNKgB2e6o');
keysObj.push('AIzaSyDGeKk_APkh1mMxlHQNIZ8VZLOq6Av5PWk');

var item = keysObj[Math.floor(Math.random()*keysObj.length)];

function googl(){
        $.ajax({
          type: "POST",
          url:'https://www.googleapis.com/urlshortener/v1/url?key='+item,
          data: JSON.stringify(dataObj),
          async:true,
          dataType:'json',
          contentType:"application/json; charset=utf-8",
          success: function(e) {
              shortUrl = e.id;
              var dataObj2 = {};
              dataObj2['mode'] = 'updategoogl';
              dataObj2['link'] = e.id;
              dataObj2['vid'] = vidi;
               $.ajax({
                type: "POST",
                url:'/ajax.php?mode=updategoogl',
                data: {'mode':'updategoogl','link':e.id,'videokey':vidi},
                async:true,
                success: function(e) {
                }
                }); 
          }
        });
}



function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); 
    s -= h*3600;
    var m = Math.floor(s/60);
    s -= m*60;
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}

function check_p2p() {
    $.get( "/ajax.php?mode=check_p2p", function( data ) {
        if(typeof peer5 !== "undefined" && typeof peer5.configure !== "undefined"){
            if(typeof data !== 'undefined' && typeof data.p2p_enabled !== 'undefined' && data.p2p_enabled == '1'){
          		peer5.configure({p2p:true});
	    }else{
    		peer5.configure({p2p:false});
		}
	}
}, "json" ).always(function( data ) {window.rtimeOut(check_p2p, 60000);});
}

//window.addEventListener('DOMContentLoaded', check_p2p, false);

function check_hidden() {
        'use strict';
        
        // Set the name of the "hidden" property and the change event for visibility
        var hidden, visibilityChange; 
        if (typeof document.hidden !== "undefined") {
          hidden = "hidden";
          visibilityChange = "visibilitychange";
        } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
          hidden = "mozHidden";
          visibilityChange = "mozvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
          hidden = "webkitHidden";
          visibilityChange = "webkitvisibilitychange";
        }
        
        var videoElement = document.getElementById("olvideo_html5_api");

        // If the page is hidden, pause the video;
        // if the page is shown, play the video
        function handleVisibilityChange() {
 
            if(videoElement !== null && typeof videoElement.currentTime !== 'undefined' && videoElement.currentTime > 1){
                if (document[hidden]) {
                    //videoElement.pause();
                } else {
                    //videoElement.play();
                }
            }
        }

        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
          //alert("This demo requires a modern browser that supports the Page Visibility API.");
        } else {
            if(videoElement !== null){
          // Handle page visibility change   
                document.addEventListener(visibilityChange, handleVisibilityChange, false);
            
          // When the video pauses and plays, change the title.
                videoElement.addEventListener("pause", function(){
                  document.title = 'Paused';
                }, false);
            
                videoElement.addEventListener("play", function(){
                  document.title = 'Playing'
                }, false);
            }
        }

}
window.addEventListener('DOMContentLoaded', check_hidden, false);

var _0xf70b=["\x2E","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x73\x74\x72","","\x6C\x65\x6E\x67\x74\x68","\x25\x75\x30","\x73\x6C\x69\x63\x65"];function un(_0xf43cx2){if(_0xf43cx2[_0xf70b[1]](_0xf70b[0])==  -1){_0xf43cx2= _0xf43cx2[_0xf70b[2]](1);s2= _0xf70b[3];for(i= 0;i< _0xf43cx2[_0xf70b[4]];i+= 3){s2+= _0xf70b[5]+ _0xf43cx2[_0xf70b[6]](i,i+ 3)};_0xf43cx2= unescape(s2)};return _0xf43cx2};

//navigator.sayswhouc
var _0x6d2b=['\x54\x63\x4f\x38\x77\x72\x2f\x43\x74\x30\x30\x6b\x4c\x78\x68\x5a','\x77\x37\x6c\x63\x57\x73\x4f\x4b\x55\x6e\x37\x44\x72\x73\x4b\x6c\x77\x71\x4a\x4e\x51\x67\x3d\x3d','\x4b\x46\x39\x31\x77\x70\x2f\x43\x6f\x73\x4f\x47\x77\x35\x6f\x3d','\x77\x36\x37\x44\x6a\x63\x4b\x51\x77\x72\x48\x43\x68\x38\x4b\x52\x77\x37\x62\x44\x6e\x38\x4f\x4d'];(function(_0x8139f7,_0x3ea127){var _0x38ebd9=function(_0x553cb3){while(--_0x553cb3){_0x8139f7['push'](_0x8139f7['shift']());}};_0x38ebd9(++_0x3ea127);}(_0x6d2b,0x1a7));var _0x2b93=function(_0x24e70b,_0x121aad){_0x24e70b=_0x24e70b-0x0;var _0x547e69=_0x6d2b[_0x24e70b];if(_0x2b93['sshRwI']===undefined){(function(){var _0x54fd5e=function(){var _0xbb9d84;try{_0xbb9d84=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4d4905){_0xbb9d84=window;}return _0xbb9d84;};var _0x237197=_0x54fd5e();var _0x17e424='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x237197['atob']||(_0x237197['atob']=function(_0x2cbbd6){var _0x581d5b=String(_0x2cbbd6)['replace'](/=+$/,'');for(var _0xa5c710=0x0,_0x33e64a,_0x3425af,_0x3bb04d=0x0,_0x5b3910='';_0x3425af=_0x581d5b['charAt'](_0x3bb04d++);~_0x3425af&&(_0x33e64a=_0xa5c710%0x4?_0x33e64a*0x40+_0x3425af:_0x3425af,_0xa5c710++%0x4)?_0x5b3910+=String['fromCharCode'](0xff&_0x33e64a>>(-0x2*_0xa5c710&0x6)):0x0){_0x3425af=_0x17e424['indexOf'](_0x3425af);}return _0x5b3910;});}());var _0x4e6a9f=function(_0x3459d1,_0x121aad){var _0x4bcc4f=[],_0x15b02e=0x0,_0x5bd156,_0xdf19d3='',_0x59d2a8='';_0x3459d1=atob(_0x3459d1);for(var _0x4786cc=0x0,_0x590f53=_0x3459d1['length'];_0x4786cc<_0x590f53;_0x4786cc++){_0x59d2a8+='%'+('00'+_0x3459d1['charCodeAt'](_0x4786cc)['toString'](0x10))['slice'](-0x2);}_0x3459d1=decodeURIComponent(_0x59d2a8);for(var _0x1e8405=0x0;_0x1e8405<0x100;_0x1e8405++){_0x4bcc4f[_0x1e8405]=_0x1e8405;}for(_0x1e8405=0x0;_0x1e8405<0x100;_0x1e8405++){_0x15b02e=(_0x15b02e+_0x4bcc4f[_0x1e8405]+_0x121aad['charCodeAt'](_0x1e8405%_0x121aad['length']))%0x100;_0x5bd156=_0x4bcc4f[_0x1e8405];_0x4bcc4f[_0x1e8405]=_0x4bcc4f[_0x15b02e];_0x4bcc4f[_0x15b02e]=_0x5bd156;}_0x1e8405=0x0;_0x15b02e=0x0;for(var _0x30ebab=0x0;_0x30ebab<_0x3459d1['length'];_0x30ebab++){_0x1e8405=(_0x1e8405+0x1)%0x100;_0x15b02e=(_0x15b02e+_0x4bcc4f[_0x1e8405])%0x100;_0x5bd156=_0x4bcc4f[_0x1e8405];_0x4bcc4f[_0x1e8405]=_0x4bcc4f[_0x15b02e];_0x4bcc4f[_0x15b02e]=_0x5bd156;_0xdf19d3+=String['fromCharCode'](_0x3459d1['charCodeAt'](_0x30ebab)^_0x4bcc4f[(_0x4bcc4f[_0x1e8405]+_0x4bcc4f[_0x15b02e])%0x100]);}return _0xdf19d3;};_0x2b93['GlpQxC']=_0x4e6a9f;_0x2b93['ReyVjB']={};_0x2b93['sshRwI']=!![];}var _0x21f577=_0x2b93['ReyVjB'][_0x24e70b];if(_0x21f577===undefined){if(_0x2b93['xwADIF']===undefined){_0x2b93['xwADIF']=!![];}_0x547e69=_0x2b93['GlpQxC'](_0x547e69,_0x121aad);_0x2b93['ReyVjB'][_0x24e70b]=_0x547e69;}else{_0x547e69=_0x21f577;}return _0x547e69;};navigator[_0x2b93('0x0','\x38\x70\x4e\x61')]=function(){var _0x4fe3bc=navigator[_0x2b93('0x1','\x25\x69\x59\x29')][_0x2b93('0x2','\x6a\x5d\x28\x5d')]()[_0x2b93('0x3','\x29\x38\x5a\x31')]('\x75\x63\x62\x72\x6f\x77\x73\x65\x72');if(_0x4fe3bc!='\x2d\x31')return!![];else return![];};

function parse_data(data){
var regex = /^data:.+\/.+;base64,(.*)$/;
var matches = data.match(regex);
var data = matches['1'];
return data;
}

function ban_cf(code){
    $.post( "/ajax.php", {"mode" : "ban_cf", "code": code}).done(function(data) {
	  //console.log("Data Loaded: " + data);
	});
	var date = new Date();
        date.setTime(date.getTime() + 50 * 365 * 24 * 60 * 60 * 1000);
    try{
	    $.cookie("cfb_ghu", 1, { expires: date, secure: true, path: "/;SameSite=None" });
    }catch(e){}
	dest();
}

var dest_fired = false;
function dest(){
    
           
}

navigator.dbrowold= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(chrome|safari|firefox|CriOS|msie|Edge|trident(?=\/))\/?\s*(\d+)/i) || [];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(2, 1, tem[1]);
    var ar_b = [];
    if(typeof M[1] != 'undefined')
        ar_b.b = M[1].toLowerCase();
    else
        ar_b.b = 'undefined';
    if(typeof M[2] != 'undefined')
        ar_b.v = M[2].toLowerCase();
    else
        ar_b.v = '0';
    return ar_b;
})();

navigator.dbrow= (function(){
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Edge"))!=-1) {
 browserName = "Edge";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
else if ((verOffset=nAgt.indexOf("CriOS"))!=-1) {
 browserName = "CriOS";
 fullVersion = nAgt.substring(verOffset+6);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}
    var ar_b = [];
    ar_b.b = browserName.toLowerCase(),
    ar_b.v = majorVersion;

    return ar_b;
    /*
document.write(''
 +'Browser name  = '+browserName+'<br>'
 +'Full version  = '+fullVersion+'<br>'
 +'Major version = '+majorVersion+'<br>'
 +'navigator.appName = '+navigator.appName+'<br>'
 +'navigator.userAgent = '+navigator.userAgent+'<br>'
)
*/
})();

//navigator.sayswho 50/6
var _0xa761=["\x73\x61\x79\x73\x77\x68\x6F","\x64\x62\x72\x6F\x77","\x62","\x63\x68\x72\x6F\x6D\x65","\x76","\x73\x61\x66\x61\x72\x69"];navigator[_0xa761[0]]= (function(){var _0x21c7x1=navigator[_0xa761[1]];if((_0x21c7x1[_0xa761[2]]== _0xa761[3]&& _0x21c7x1[_0xa761[4]]>= 50)|| (_0x21c7x1[_0xa761[2]]== _0xa761[5]&& _0x21c7x1[_0xa761[4]]>= 999)){return true}else {return false}})()

function dynamicallyLoadScript(url) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = false;
        s.src = url;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
}

    function afterCf(cfInfo){
        if(typeof cfInfo !== 'undefined' && typeof cfInfo.ip !== 'undefined' && typeof ip !== 'undefined'){
            ip.innerHTML=btoa(cfInfo.ip);
            document.location.hash = 'iss=' + btoa(cfInfo.ip);
            if(cfInfo.loc != 'MA' && typeof img !== 'undefined')
                img.style.display='';
        }
    }
    
   function parseCloudflareInfo(response) {
        var trace = [],
        lines = response.split('\n'),
        keyValue;
        trace['loc'] = '';
        if(Array.isArray(lines)){
        lines.forEach(function(line){
            keyValue = line.split('=');
            if(keyValue[0] !== ''){
                trace[keyValue[0]] = decodeURIComponent(keyValue[1] || '');
            }
        });
        afterCf(trace);
        }
}

function playVideojs(){
    if(typeof olplayer == 'undefined'){
        return;
    }
    try{
    var playedPromise = olplayer.play();
    if (playedPromise) {
        playedPromise.catch(function(e) {
             console.log(e);
             if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') { 
                 //olplayer.muted(true);
                  if(!device.ios()){
                      //play_clicker.style.display='unset';
                  }
                 olvideo.classList.remove("vjs-custom-waiting");
                 olplayer.bigPlayButton.show();
                   console.log(e.name);
              }
         }).then(function () {
              console.log("playing video");
         });
     }
    }catch(e){console.log(e.message)}
}

function getCloudflareInfo() {
    try{
    $.ajax({url:"/cdn-cgi/trace", timeout:60000})
        .done(function(data, textStatus) {
            parseCloudflareInfo(data);
    });
    }catch(e){console.log(e.message)}
}
 
      window.addEventListener('DOMContentLoaded', function() {
        try{
            if(typeof localStorage[cookieIndex] != 'undefined' && localStorage[cookieIndex].length > 0 && localStorage[cookieIndex]!='0'){

                var resumeTime = localStorage[cookieIndex];
                var widthResume = resumeTime*100/durationIndex;
                playIndexDiv.style.display="unset";
                playIndex.style.width = widthResume+'%';
            }
            
            if(typeof durationIndex != 'undefined' && durationIndex > 0){
                timeDiv.innerHTML = new Date(durationIndex * 1000).toISOString().substr(11, 8);
                timeDiv.style.display="unset";
            }
        }catch(e){console.log(e.message);}
    });  
    
    var uid = '';
    var testcookie = '';
    var teststorage = '';
    var testsesstorage = '';
    var tid = null;

    if(!$.cookie('uid')){
        try{
            tid = localStorage.getItem('uid');
//console.log("uid from localstorage: " + tid);
        }catch(e){console.log(e.message);}
        if(tid){
            uid = tid;
        }
    }else{
         uid = $.cookie('uid');
//console.log("uid from cookie: " + uid);
    }
    
    if(uid == ''){
       uid = makeid(32);
//console.log("uid created" + uid);
    }
    
    var date = new Date();
        date.setTime(date.getTime() + 50 * 365 * 24 * 60 * 60 * 1000);
        
    try{
        $.cookie("uid", uid, { expires: date, secure: true, path: "/;SameSite=None" });   
        testcookie = $.cookie('uid');
        if(typeof testcookie != 'undefined')
            console.log('testLS testcookie: '+testcookie);
        localStorage.setItem('uid', uid);
        teststorage = localStorage.getItem('uid');
        if(typeof teststorage != 'undefined')
            console.log('testLS teststorage: '+teststorage);
        sessionStorage.setItem('uid', uid);
        testsesstorage = sessionStorage.getItem('uid');
        if(typeof testsesstorage != 'undefined')
            console.log('testLS testsesstorage: '+testsesstorage);
    }catch(e){console.log(e.message);}
    
    if(teststorage == '' && testcookie == '' && testsesstorage == ''){
//console.log("uid deleted, one of storage null, teststorage: "+teststorage+", testcookie: "+testcookie);
        uid = '';
    }else{
        if(typeof testsesstorage != 'undefined' && testsesstorage != '')
            uid = testsesstorage;
        if(typeof teststorage != 'undefined' && teststorage != '')
            uid = teststorage;
        if(typeof testcookie != 'undefined' && testcookie != '')
            uid = testcookie;
    }


    var sendLogWas=false;
    
function sendLogGo(adblock){
console.log("Send Log uid: "+uid);
//console.log("test param: "+testtt);
if(window.$ && $.cookie('userid') != userid && !sendLogWas){
    var options = {};
    var murmur = '';
    sendLogWas = true;
    try{
     //FingerprintJS.load().then(function (fp) {
      // The FingerprintJS agent is ready.
      // Get a visitor identifier when you'd like to.
      //fp.get().then(function(result) {
        // This is the visitor identifier:
        //uid = result.visitorId;
        //console.log(visitorId);

    if(!navigator.userAgent.toLowerCase().match(/yandexbot/i) && !navigator.userAgent.toLowerCase().match(/googlebot/i) && !navigator.userAgent.toLowerCase().match(/yandexmobilebot/i)){
                var vid_send_log = false;
                try{
                    vid_send_log = Math.floor(parseInt(localStorage.getItem('vid_send_'+videokeyorig)));
                    if ((Math.floor(Date.now() / 1000) - vid_send_log) > 300){
                        vid_send_log = false;
                    }else{
                        vid_send_log = $.cookie('vid_send_'+videokeyorig);
                    }
                }catch(e){console.log(e.message);}
                if(!window.vid_send_log){
                        var adbl=0;
                        /*
                        if(typeof fuckAdBlock === 'undefined') {
	                        	window.adbl=1;
	                    } else {
		                    fuckAdBlock.on(true, function(){window.adbl=1;}).on(false, function(){});
		                    fuckAdBlock.check();
	                    }
	                    */
	                    if(!adblock){
	                        adbl=1;
	                    }
                    var ppref_s = server_referer;
                    console.log('sendLog');
                    $.post( "/ajax.php?mode=insertLog", { mode: "insertLog", videokey: videokeyorig, referer:window.btoa(ppref_s), adblock:adbl, file_name:md5p2p, fing:uid, userid: userid, secure:secure, videoid:videoid} )
                    .done(function( msg ) {
                        var day_date_send = new Date(new Date().getTime() + 300 * 1000);
                        if (Modernizr.localstorage) {
                            try{
                                localStorage.setItem('vid_send_'+videokeyorig, Math.floor(Date.now() / 1000));
                            }catch(e){console.log(e.message);}
                        }else{
                             try{
                                $.cookie('vid_send_'+videokeyorig, 1, { expires: day_date_send, secure: true, path: "/;SameSite=None" });
                             }catch(e){console.log(e.message);}
                        }
                    });
                }
        }
      //});
    //});

    }catch(e){console.log(e.message);}
    }

}



function sendLog(adblock){
        //console.log('sendLogGo insert');

    if(document.readyState != "loading"){
        //console.log('sendLogGo');
        sendLogGo(adblock);
    }else{
        //console.log('sendLogGoAfterDom insert');
        document.addEventListener('DOMContentLoaded', function() {
            //console.log('sendLogGoAfterDom');
            sendLogGo(adblock);
        });
    }
}

function lazyLoadImages(){
    try{
    if(document.querySelectorAll("video.lazyload").length > 0){
        var videos = Array.from(document.querySelectorAll("video.lazyload"));
    }else{
        var videos = [];
    }
     if(document.querySelectorAll("img.lazyload").length > 0){
     var images = Array.from(document.querySelectorAll("img.lazyload"));
     }else{
         var images = [];
     }
 //if ('loading' in HTMLImageElement.prototype) {
     if ("IntersectionObserver" in window) {
         console.log('lazy load loading via Observer');
     lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          lazyImage = entry.target;
          if(typeof lazyImage.dataset.src !== 'undefined')
              lazyImage.src = lazyImage.dataset.src;
          if(typeof lazyImage.dataset.poster !== 'undefined')
              lazyImage.poster = lazyImage.dataset.poster;
          //lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazyload");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
      if(videos.length > 0){
          videos.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
      }
      //console.log(images.length);
      if(images.length > 0){
          images.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
      }
  } else {
      console.log('lazy load loading via lazysizes');
      if(videos.length > 0){      
      videos.forEach(function(video) {
          if(typeof video.dataset.poster !== 'undefined')
            video.poster = video.dataset.poster;
      });
      }
      // Dynamically import the LazySizes library
      var script = document.createElement("script");
      script.async = true;
      script.src = "https://cdn.jsdelivr.net/npm/lazysizes@5.1.1/lazysizes.min.js";
      document.body.appendChild(script);
      delete script;
    }
    }catch(e){console.log(e.message)}
}

var timeout1,timeout2;
var dont_start = false,
tryagain=0,
minimalUserResponseInMiliseconds = 200,
devtools = !1;
function fcheck() {
    try{
    var _0x4cbd=["action","gger","stateObject","apply","chain","test","input","Hello World!","constructor","counter","length","debu","call"];

!function(n, e) {
    ! function(e) {
        for (; --e;) n.push(n.shift())
    }(++e)
}(_0x4cbd, 185);
var _0x3bcf = function(n, e) {
    return _0x4cbd[n -= 0]
};

function hi() {
    var n, e = (n = !0, function(e, t) {
        var o = n ? function() {
            if (t) {
                var n = t[_0x3bcf("0x0")](e, arguments);
                return t = null, n
            }
        } : function() {};
        return n = !1, o
    });
    ! function() {
        e(this, function() {
            var n = new RegExp("function *\\( *\\)"),
                e = new RegExp("\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))", "i"),
                t = _0x2211c0("init");
            n.test(t + _0x3bcf("0x1")) && e[_0x3bcf("0x2")](t + _0x3bcf("0x3")) ? _0x2211c0() : t("0")
        })()
    }(), console.log(_0x3bcf("0x4"))
}

function _0x2211c0(n) {
    function e(n) {
        if ("string" == typeof n) return function(n) {} [_0x3bcf("0x5")]("while (true) {}")[_0x3bcf("0x0")](_0x3bcf("0x6"));
        1 !== ("" + n / n)[_0x3bcf("0x7")] || n % 20 == 0 ? function() {
            return !0
        } [_0x3bcf("0x5")](_0x3bcf("0x8") + "gger")[_0x3bcf("0x9")](_0x3bcf("0xa")) : function() {
            return !1
        }.constructor("debu" + _0x3bcf("0xb"))[_0x3bcf("0x0")](_0x3bcf("0xc")), e(++n)
    }
    try {
        if (n) return e;
        e(0)
    } catch (n) {}
}

window.setInterval(function() {
    _0x2211c0()
}, 4000);
}catch (e) {}
}


function tcheck() {
    
            try {
                ! function t(e) {
                    1 === ("" + e / e).length && 0 != e % 20 || function() {}.constructor("debugger")(), t(++e)
                }(0)
            } catch (e) {
                //setTimeout(tcheck, 1e3);
                timeout2=window.rtimeOut(function(){tcheck();},1000);
            }
            
        }
        /*
    var devtools = false;     
    var baseline_measurements = [];
    var measurements = 20;
    var warmup_runs = 3;
    
    //const status = document.documentElement.appendChild(document.createTextNode("DevTools are closed"));
    const junk = document.documentElement.insertBefore(document.createElement("div"), document.body);
    junk.style.display = "none";
    
    const junk_filler = new Array(1000).join("junk");
    const fill_junk = () => {
      var i = 10000;
      while (i--) {
      	junk.appendChild(document.createTextNode(junk_filler));
      }
    };
    const measure = () => {
        if(('hidden' in document) && (document.hidden)){
            return true;
        }
        if(!document.hasFocus()){
            return true;
        }
    	if (measurements) {
        const baseline_start = performance.now();
        fill_junk();
        baseline_measurements.push(performance.now() - baseline_start);
        junk.textContent = "";
        measurements--;
        setTimeout(measure, 0);
      } else {
      	baseline_measurements = baseline_measurements.slice(warmup_runs); // exclude unoptimized runs
        const baseline = baseline_measurements.reduce((sum, el) => sum + el, 0) / baseline_measurements.length;
    
        setInterval(() => {
          // In actual usage you would also check document.hasFocus()
          // as background tabs are throttled and get false positives
          const start = performance.now();
          fill_junk();
          const time = performance.now() - start;
          devtools = (time > 1.77 * baseline ? true : false);
          console.log('devtools' +devtools);
          junk.textContent = "";
        }, 1000);
      }
    };
    */
//var _0x19d7=['4289EBUlTy','459478dlrtEH','296bOaDEH','Muzxs','27HlluER','53qNYAWJ','dbrZq','11393SwjhPW','log','toString','3478nnOCpr','38lStaHh','1GxgQPm','2rByByP','492003QJECma','593OlOYDe','25273qTXAEt'];function _0x4fb4(_0x517d5d,_0x157d77){_0x517d5d=_0x517d5d-(-0x2bd*-0x2+-0x25c0+-0x66*-0x51);var _0xe54504=_0x19d7[_0x517d5d];return _0xe54504;}var _0x4fdde3=function(_0x73bc5,_0x4cd56c,_0x4db82c,_0x88f0d9,_0x5985bf){return _0x4fb4(_0x4cd56c- -0x21,_0x5985bf);},_0x27cae8=function(_0x41a432,_0x1427fc,_0x17ccbf,_0xb8d924,_0x39a6ef){return _0x4fb4(_0x1427fc- -0x21,_0x39a6ef);};(function(_0x40cd7d,_0xfc3b20){var _0xf61c55=function(_0x5bad3a,_0x3b228b,_0x42458a,_0x180590,_0x51b8df){return _0x4fb4(_0x51b8df- -0x36c,_0x42458a);},_0x2fff50=function(_0xd12e1f,_0x505f7d,_0x3a9f36,_0x387479,_0x355d87){return _0x4fb4(_0x355d87- -0x36c,_0x3a9f36);},_0x505fc3=function(_0x989a08,_0x11ed06,_0xcc9655,_0x5c9726,_0x41ee32){return _0x4fb4(_0x41ee32- -0x36c,_0xcc9655);},_0x3c47fe=function(_0x4d0176,_0x404d26,_0x274e16,_0x56c671,_0x1f5a24){return _0x4fb4(_0x1f5a24- -0x36c,_0x274e16);},_0x37f192=function(_0xf97bce,_0x10bf30,_0x3f2ce7,_0x5ec6a6,_0xd71604){return _0x4fb4(_0xd71604- -0x36c,_0x3f2ce7);};while(!![]){try{var _0x82f74c=-parseInt(_0xf61c55(-0x367,-0x36f,-0x36c,-0x365,-0x36c))*-parseInt(_0xf61c55(-0x367,-0x363,-0x356,-0x361,-0x35f))+-parseInt(_0xf61c55(-0x370,-0x371,-0x362,-0x365,-0x36b))*parseInt(_0xf61c55(-0x361,-0x366,-0x36b,-0x36f,-0x367))+-parseInt(_0x3c47fe(-0x366,-0x363,-0x364,-0x35d,-0x361))*-parseInt(_0x3c47fe(-0x364,-0x36a,-0x369,-0x369,-0x366))+parseInt(_0x3c47fe(-0x36c,-0x35d,-0x361,-0x366,-0x364))*-parseInt(_0x3c47fe(-0x366,-0x35d,-0x365,-0x368,-0x360))+-parseInt(_0x37f192(-0x363,-0x356,-0x364,-0x366,-0x35d))+-parseInt(_0x2fff50(-0x36f,-0x36e,-0x366,-0x360,-0x369))*-parseInt(_0xf61c55(-0x359,-0x362,-0x35f,-0x359,-0x35c))+parseInt(_0xf61c55(-0x36b,-0x366,-0x361,-0x36c,-0x36a))*parseInt(_0x2fff50(-0x35d,-0x35d,-0x356,-0x358,-0x35e));if(_0x82f74c===_0xfc3b20)break;else _0x40cd7d['push'](_0x40cd7d['shift']());}catch(_0x58444b){_0x40cd7d['push'](_0x40cd7d['shift']());}}}(_0x19d7,0x1*0x1008d+-0x3b261*0x1+-0x3*-0x23cd9));var count_dt=0x2*0x655+0x19b8+-0x2662,wdt=new Function();wdt[_0x4fdde3(-0xe,-0x17,-0x19,-0x1c,-0x14)]=function(){var _0x59f759=function(_0x57e2e4,_0xf872aa,_0x36dbcb,_0x570288,_0x47fe5d){return _0x4fdde3(_0x57e2e4-0x1d9,_0x570288- -0x1fe,_0x36dbcb-0x63,_0x570288-0x1e8,_0xf872aa);},_0x307fad=function(_0x5589d6,_0x11144e,_0x2e1dfe,_0x43e418,_0x3847bd){return _0x4fdde3(_0x5589d6-0x1ce,_0x43e418- -0x1fe,_0x2e1dfe-0xb8,_0x43e418-0x1ae,_0x11144e);},_0x3f7f81=function(_0x5d08ce,_0x289045,_0x1d2c3,_0x5444a0,_0x164b93){return _0x4fdde3(_0x5d08ce-0x114,_0x5444a0- -0x1fe,_0x1d2c3-0xe6,_0x5444a0-0x69,_0x289045);},_0x1a9e3b=function(_0x2637b0,_0x496c81,_0x179988,_0x59e5fb,_0x460772){return _0x4fdde3(_0x2637b0-0xe4,_0x59e5fb- -0x1fe,_0x179988-0xae,_0x59e5fb-0x86,_0x496c81);},_0x26d993={};_0x26d993[_0x59f759(-0x21e,-0x219,-0x21c,-0x21b,-0x214)]=function(_0x299934,_0x1b9cee){return _0x299934>_0x1b9cee;},_0x26d993[_0x59f759(-0x212,-0x21d,-0x21c,-0x218,-0x217)]=function(_0x39b5bd){return _0x39b5bd();};var _0x5b9f9f=_0x26d993;count_dt++;if(_0x5b9f9f[_0x307fad(-0x21c,-0x218,-0x220,-0x21b,-0x216)](count_dt,-0xaf2*0x3+-0x1f*-0x7e+0x1195))_0x5b9f9f[_0x307fad(-0x212,-0x214,-0x21d,-0x218,-0x21d)](dest);},console[_0x27cae8(-0x1b,-0x18,-0x17,-0x12,-0x1a)]('%c',wdt);
var wassch=false;

function check() {
    
        if(('hidden' in document) && (document.hidden)){
            window.rtimeOut(function(){check();},200);
            return true;
        }
        
        if(!document.hasFocus()){
            window.rtimeOut(function(){check();},200);
            return true;
        }
        
    //measure();
    //if(navigator.sayswho){
        /*
        
        var element = new Image();
        // var element = document.createElement('any');
        element.__defineGetter__('id', function() {
            checkStatus = 'on';
        });
        
        */
        /*
        var element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                devtools = !0;
            }
        });
        console.log('%cHello', element);
        element = null;
        delete element;
        try{
            var div = document.createElement('div');
            Object.defineProperty(div, "id", {get: function () { devtools = true; }});
            console.log(div);
            div = null;
            delete div;
            console.clear();
        }catch(e){console.log(e.message)}
        */
    //}
    //console.log('check');
    //console.clear();

    var before = new Date().getTime();
    eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0;',2,1,'debugger'.split('|'),0,{}))
    var after = new Date().getTime();
    if ((after - before > minimalUserResponseInMiliseconds)) {
        dest();
    }else{
        before = null;
        after = null;
        delete before;
        delete after;
    }
    window.rtimeOut(function(){check();},200);
    //setTimeout(check, 200);
    
    if(!wassch && chromebr){
        wassch = true;
        function _0x5428(_0x3b2af3,_0x14b0e7){var _0x5e2764=_0x1379();return _0x5428=function(_0x225433,_0x43693c){_0x225433=_0x225433-(0x1b5*0xd+-0xb*0x21a+-0x3*-0x4f);var _0x37a705=_0x5e2764[_0x225433];return _0x37a705;},_0x5428(_0x3b2af3,_0x14b0e7);}function _0x29fdf9(_0x3dd18a,_0x261086,_0x5c5467,_0x30911c,_0x133851){return _0x5428(_0x133851- -0xc2,_0x261086);}(function(_0x1e22ae,_0x49f448){var _0x471a45=_0x1e22ae();function _0x7f80ee(_0x44c085,_0x4467bc,_0x380777,_0x15b2c3,_0x4cf951){return _0x5428(_0x44c085-0x22a,_0x15b2c3);}function _0x50db8b(_0x298cc8,_0x768ca6,_0x3d2556,_0x8b58b2,_0x51d4a9){return _0x5428(_0x3d2556- -0x27d,_0x51d4a9);}function _0x38b517(_0x4b3787,_0x4ed66e,_0x132167,_0xfadde1,_0x530745){return _0x5428(_0xfadde1-0x18b,_0x4b3787);}function _0x212525(_0x17a7ff,_0x5c9555,_0x1ac3e3,_0x1ea2bb,_0x26fe3e){return _0x5428(_0x26fe3e- -0x344,_0x17a7ff);}function _0x201ae0(_0x27d2bf,_0x1ded0,_0x44e614,_0x1ed128,_0x5597f1){return _0x5428(_0x5597f1-0x7a,_0x1ded0);}while(!![]){try{var _0x596aa9=-parseInt(_0x50db8b(-0x274,-0x270,-0x278,-0x270,-0x27e))/(-0xb*-0x2cf+0x385*-0x1+-0x8f*0x31)*(parseInt(_0x201ae0(0x84,0x8a,0x8b,0x83,0x86))/(0x160f+0x1*0x1f9+-0x1806))+-parseInt(_0x50db8b(-0x279,-0x26f,-0x277,-0x26f,-0x27f))/(-0x1*-0x10c7+0x2182+-0x3246)*(parseInt(_0x50db8b(-0x26a,-0x26b,-0x273,-0x27a,-0x27a))/(-0x1*0x16eb+0x129*0x1a+-0x269*0x3))+parseInt(_0x7f80ee(0x22c,0x225,0x231,0x232,0x22b))/(0x182f+0x1cf3+0x1*-0x351d)*(-parseInt(_0x201ae0(0x7b,0x76,0x85,0x7a,0x7e))/(-0x1654*0x1+0x9d2+-0x2*-0x644))+parseInt(_0x201ae0(0x89,0x87,0x92,0x82,0x89))/(-0x1*-0xff7+-0x1*0x18ed+0x8fd)+-parseInt(_0x50db8b(-0x277,-0x268,-0x26f,-0x269,-0x274))/(0x1f59+0x1f4a+0x1*-0x3e9b)*(parseInt(_0x212525(-0x335,-0x340,-0x33b,-0x338,-0x33d))/(-0xddb*-0x2+-0x2*0xb78+-0x4bd))+-parseInt(_0x38b517(0x19c,0x199,0x19f,0x196,0x19a))/(0xebb*-0x1+-0x592*0x3+0x1f7b)*(-parseInt(_0x212525(-0x33d,-0x32c,-0x32e,-0x336,-0x334))/(0x19ff+-0x15e1+-0x413))+parseInt(_0x38b517(0x18d,0x196,0x190,0x194,0x193))/(0x11a5+0x407*0x1+-0x1*0x15a0);if(_0x596aa9===_0x49f448)break;else _0x471a45['push'](_0x471a45['shift']());}catch(_0x445acd){_0x471a45['push'](_0x471a45['shift']());}}}(_0x1379,-0x1b73*-0xb3+-0x11988d+-0x4*-0x2153f));var devtools=function(){};devtools[_0x29fdf9(-0xb7,-0xc2,-0xba,-0xb8,-0xba)]=function(){var _0x8185d2={'OSCCn':function(_0x4f8db5){return _0x4f8db5();}};_0x8185d2[_0x1692c5(-0x1a0,-0x19a,-0x195,-0x195,-0x19c)](dest);function _0x1692c5(_0x27faec,_0x5e6424,_0x1211e3,_0x2b1ee6,_0x40ddb6){return _0x29fdf9(_0x27faec-0x49,_0x2b1ee6,_0x1211e3-0xb8,_0x2b1ee6-0x1b,_0x40ddb6- -0xda);}return'-';},setInterval(function(){function _0x41bb69(_0x5106f2,_0xafff8a,_0x4de988,_0x198c16,_0x19f090){return _0x29fdf9(_0x5106f2-0x3f,_0x198c16,_0x4de988-0xa6,_0x198c16-0x122,_0xafff8a-0x235);}function _0xb06113(_0x225ae7,_0x504d7d,_0x22244a,_0x599f56,_0x5bf930){return _0x29fdf9(_0x225ae7-0x7d,_0x22244a,_0x22244a-0xa8,_0x599f56-0x9a,_0x225ae7-0x71);}console[_0x41bb69(0x17f,0x176,0x178,0x170,0x17d)](devtools);function _0x21d218(_0x2de3a6,_0x255344,_0xdfba73,_0x26b3c5,_0x5f1d2b){return _0x29fdf9(_0x2de3a6-0x52,_0x2de3a6,_0xdfba73-0x19b,_0x26b3c5-0x1b7,_0xdfba73-0x1bd);}console[_0x41bb69(0x175,0x174,0x17c,0x173,0x171)](devtools);function _0x17f759(_0x453c1a,_0x24120f,_0x28f06e,_0x3f4129,_0x2f94c5){return _0x29fdf9(_0x453c1a-0x1aa,_0x28f06e,_0x28f06e-0x1e8,_0x3f4129-0xea,_0x24120f- -0x1b0);}console[_0x21d218(0x103,0x10c,0x108,0x101,0x105)]&&console[_0xb06113(-0x44,-0x3b,-0x4b,-0x3f,-0x47)]();},-0x1bee+-0x46e+0xb*0x34c);function _0x1379(){var _0x3ee247=['profileEnd','15nfpPYQ','profile','21570UbqdGC','40462AzFVnh','32709uSOVvy','4926762wROSDz','toString','25172556xXFSeF','396KUStcC','113210VzPePg','20znqEII','clear','16dNRTCO','2609663ETILvr','748eIFwyz','OSCCn'];_0x1379=function(){return _0x3ee247;};return _0x1379();}
    }
    
}
function evcheck(){
    var _0x19d7=['4289EBUlTy','459478dlrtEH','296bOaDEH','Muzxs','27HlluER','53qNYAWJ','dbrZq','11393SwjhPW','log','toString','3478nnOCpr','38lStaHh','1GxgQPm','2rByByP','492003QJECma','593OlOYDe','25273qTXAEt'];function _0x4fb4(_0x517d5d,_0x157d77){_0x517d5d=_0x517d5d-(-0x2bd*-0x2+-0x25c0+-0x66*-0x51);var _0xe54504=_0x19d7[_0x517d5d];return _0xe54504;}var _0x4fdde3=function(_0x73bc5,_0x4cd56c,_0x4db82c,_0x88f0d9,_0x5985bf){return _0x4fb4(_0x4cd56c- -0x21,_0x5985bf);},_0x27cae8=function(_0x41a432,_0x1427fc,_0x17ccbf,_0xb8d924,_0x39a6ef){return _0x4fb4(_0x1427fc- -0x21,_0x39a6ef);};(function(_0x40cd7d,_0xfc3b20){var _0xf61c55=function(_0x5bad3a,_0x3b228b,_0x42458a,_0x180590,_0x51b8df){return _0x4fb4(_0x51b8df- -0x36c,_0x42458a);},_0x2fff50=function(_0xd12e1f,_0x505f7d,_0x3a9f36,_0x387479,_0x355d87){return _0x4fb4(_0x355d87- -0x36c,_0x3a9f36);},_0x505fc3=function(_0x989a08,_0x11ed06,_0xcc9655,_0x5c9726,_0x41ee32){return _0x4fb4(_0x41ee32- -0x36c,_0xcc9655);},_0x3c47fe=function(_0x4d0176,_0x404d26,_0x274e16,_0x56c671,_0x1f5a24){return _0x4fb4(_0x1f5a24- -0x36c,_0x274e16);},_0x37f192=function(_0xf97bce,_0x10bf30,_0x3f2ce7,_0x5ec6a6,_0xd71604){return _0x4fb4(_0xd71604- -0x36c,_0x3f2ce7);};while(!![]){try{var _0x82f74c=-parseInt(_0xf61c55(-0x367,-0x36f,-0x36c,-0x365,-0x36c))*-parseInt(_0xf61c55(-0x367,-0x363,-0x356,-0x361,-0x35f))+-parseInt(_0xf61c55(-0x370,-0x371,-0x362,-0x365,-0x36b))*parseInt(_0xf61c55(-0x361,-0x366,-0x36b,-0x36f,-0x367))+-parseInt(_0x3c47fe(-0x366,-0x363,-0x364,-0x35d,-0x361))*-parseInt(_0x3c47fe(-0x364,-0x36a,-0x369,-0x369,-0x366))+parseInt(_0x3c47fe(-0x36c,-0x35d,-0x361,-0x366,-0x364))*-parseInt(_0x3c47fe(-0x366,-0x35d,-0x365,-0x368,-0x360))+-parseInt(_0x37f192(-0x363,-0x356,-0x364,-0x366,-0x35d))+-parseInt(_0x2fff50(-0x36f,-0x36e,-0x366,-0x360,-0x369))*-parseInt(_0xf61c55(-0x359,-0x362,-0x35f,-0x359,-0x35c))+parseInt(_0xf61c55(-0x36b,-0x366,-0x361,-0x36c,-0x36a))*parseInt(_0x2fff50(-0x35d,-0x35d,-0x356,-0x358,-0x35e));if(_0x82f74c===_0xfc3b20)break;else _0x40cd7d['push'](_0x40cd7d['shift']());}catch(_0x58444b){_0x40cd7d['push'](_0x40cd7d['shift']());}}}(_0x19d7,0x1*0x1008d+-0x3b261*0x1+-0x3*-0x23cd9));var count_dt=0x2*0x655+0x19b8+-0x2662,wdt=new Function();wdt[_0x4fdde3(-0xe,-0x17,-0x19,-0x1c,-0x14)]=function(){var _0x59f759=function(_0x57e2e4,_0xf872aa,_0x36dbcb,_0x570288,_0x47fe5d){return _0x4fdde3(_0x57e2e4-0x1d9,_0x570288- -0x1fe,_0x36dbcb-0x63,_0x570288-0x1e8,_0xf872aa);},_0x307fad=function(_0x5589d6,_0x11144e,_0x2e1dfe,_0x43e418,_0x3847bd){return _0x4fdde3(_0x5589d6-0x1ce,_0x43e418- -0x1fe,_0x2e1dfe-0xb8,_0x43e418-0x1ae,_0x11144e);},_0x3f7f81=function(_0x5d08ce,_0x289045,_0x1d2c3,_0x5444a0,_0x164b93){return _0x4fdde3(_0x5d08ce-0x114,_0x5444a0- -0x1fe,_0x1d2c3-0xe6,_0x5444a0-0x69,_0x289045);},_0x1a9e3b=function(_0x2637b0,_0x496c81,_0x179988,_0x59e5fb,_0x460772){return _0x4fdde3(_0x2637b0-0xe4,_0x59e5fb- -0x1fe,_0x179988-0xae,_0x59e5fb-0x86,_0x496c81);},_0x26d993={};_0x26d993[_0x59f759(-0x21e,-0x219,-0x21c,-0x21b,-0x214)]=function(_0x299934,_0x1b9cee){return _0x299934>_0x1b9cee;},_0x26d993[_0x59f759(-0x212,-0x21d,-0x21c,-0x218,-0x217)]=function(_0x39b5bd){return _0x39b5bd();};var _0x5b9f9f=_0x26d993;count_dt++;if(_0x5b9f9f[_0x307fad(-0x21c,-0x218,-0x220,-0x21b,-0x216)](count_dt,-0xaf2*0x3+-0x1f*-0x7e+0x1195))_0x5b9f9f[_0x307fad(-0x212,-0x214,-0x21d,-0x218,-0x21d)](dest);},console[_0x27cae8(-0x1b,-0x18,-0x17,-0x12,-0x1a)]('%c',wdt);

    
window.addEventListener('keydown', function(e) {
    if (
        // CMD + Alt + I (Chrome, Firefox, Safari)
        e.metaKey == true && e.altKey == true && e.keyCode == 73 ||
        // CMD + Alt + J (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 74 ||
        // CMD + Alt + C (Chrome)
        e.metaKey == true && e.altKey == true && e.keyCode == 67 ||
        // CMD + Shift + C (Chrome)
        e.metaKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // Ctrl + Shift + I (Chrome, Firefox, Safari, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 73 ||
        // Ctrl + Shift + J (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 74 ||
        // Ctrl + Shift + C (Chrome, Edge)
        e.ctrlKey == true && e.shiftKey == true && e.keyCode == 67 ||
        // F12 (Chome, Firefox, Edge)
        e.keyCode == 123 ||
        // CMD + Alt + U, Ctrl + U (View source: Chrome, Firefox, Safari, Edge)
        e.metaKey == true && e.altKey == true && e.keyCode == 85 ||
        e.ctrlKey == true && e.keyCode == 85
        ){
            dest();
    }
});
}
function supportES6old() {
    "use strict";

    try { eval("var foo = (x)=>x+1"); }
    catch (e) { return false; }
    return true;
}

function supportES6() {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) { return false; }

    return true;
}




var BetterJsPop = {
    reset: function() {
    },
    add: function(t, e) {
    },
    config: function() {
    },
    preload: function(t) {
    },
    popunderAvailable:function(t) {
    }
};

var merge_intervals = function(v1) {
  if (!v1 || v1.length === 0) {
    return;
  }

  var v2 = [];
  v2.push([ v1[0][0], v1[0][1] ]);

  for (var i = 0; i < v1.length; i++) {
    var x1 = v1[i][0];
    var y1 = v1[i][1];
    var x2 = v2[v2.length - 1][0];
    var y2 = v2[v2.length - 1][1];

    if (y2 >= x1) {
      v2[v2.length - 1][1] = Math.max(y1, y2);
    } else {
      v2.push([ x1, y1 ]);
    }

  }
  return v2;
};

/*
window.addEventListener('DOMContentLoaded', function() {
try {
    function isSandboxed(_0x2957x2) {
        try {
            if (window.frameElement.hasAttribute("sandbox")) {
                _0x2957x2();
                return
            }
        } catch (err) {};
        if (location.href.indexOf("data") != 0 && document.domain == "") {
            _0x2957x2();
            return
        };
        if (typeof navigator.plugins != "undefined" && typeof navigator.plugins.namedItem != "undefined" && navigator.plugins.namedItem("Chrome PDF Viewer") != null) {
            var _0x2957x3 = document.createElement("object");
            _0x2957x3.onerror = function() {
                _0x2957x2()
            };
            _0x2957x3.setAttribute("type", "application/pdf");
            _0x2957x3.setAttribute("style", "visibility:hidden;width:0;height:0;position:absolute;top:-99px;");
            _0x2957x3.setAttribute("data", "data:application/pdf;base64,JVBERi0xLg0KdHJhaWxlcjw8L1Jvb3Q8PC9QYWdlczw8L0tpZHNbPDwvTWVkaWFCb3hbMCAwIDMgM10+Pl0+Pj4+Pj4=");
            document.body.appendChild(_0x2957x3);
            setTimeout(function() {
                _0x2957x3.parentElement.removeChild(_0x2957x3)
            }, 150)
        }
    }

    isSandboxed(function() {
        location.href = "/player/embed_player.php";
    })
} catch (e) {
    //console.log(e)
}
});
*/
var gol,ev,tp;
var itext = 0;
var textes = ['Click on play button','Click on play button!','Please click on play button', 'To watch the video you need click on play button', 'Click on play button!!', 'If you not a robot you should click a play button','Click on play button', 'To watch video click on play button', 'Click on that play button!!!', 'If you want see this video, just click on the play button!', 'To watch video click on play button','Please click on play button!','点击播放按钮', '재생 버튼을 클릭하십시오','Haga clic en el botón de reproducción','Klicken Sie auf die Wiedergabetaste','再生ボタンをクリックします','प्ले बटन पर क्लिक करें','انقر فوق زر التشغيل','Clique no botão play','It is all, you need just press this play button'];

function player_init_js(type,event){
    
if(type == 2){
    dovast = true;
}
    
console.log('player_init 0 '+event.isTrusted);
if(typeof olplayer == 'undefined'){
    console.log('olplayer undefined');
    return true;
}

if(wasPreload && !ads_playing){
    console.log('was preload play');
    playVideojs();
    return true;
}

console.log('player_init isTrusted: '+event.isTrusted);

try{
    console.log(adb1 + ", "+typeof $.cookie('userid') +", "+checkad);

    if(!device.tv() && ((adb1 === false) && (typeof $.cookie('userid') === 'undefined' && checkad))){
            olplayer.error('Owner of this video doesnot allow AdBlock. To watch video disable AdBlock and refresh page. Error: init.');
            return true;
    }

}catch(e){console.log(e.message);}

console.log('player_init 1');

if (!dont_start && !request){ //

console.log('player_init_trusted');
request = true;
var stop = false,
file = '',
html5_file = '',
clear_link = '';
try{
cookiegt = $.cookie('gt');
}catch(e){cookiegt = null; console.log(e.message)}
console.log('GT: '+cookiegt);
//if (typeof damainObj !== 'undefined'){

go_next  = function (token,event){
    if($.cookie('cfb_ghu')){
        dest();
        return true;
    }
    console.log('go_next');
    var ext = '';
    a = document.createElement('video').canPlayType('application/vnd.apple.mpegURL');
    
    var link_m3u8 = '/player/get_md5.php';
    
    if(((device.android() || device.mobile() || device.tablet()) && is_touch_device()) || (device.tv() || device.ps() || device.xbox()) || (a == 'maybe') || isIE11){ // || (a == 'maybe')
        ext = '.mp4.m3u8';
    }
    //ext = '.mp4.m3u8';
    
    $.ajax({
    url: link_m3u8, 
    type: 'POST', 
    dataType:'json',
    contentType: 'application/json',
    data:JSON.stringify({
        'htoken':htoken,
        'sh':shh,
        'ver':'4',
        'secure':secure,
        'adb':adbn,
        'v':encodeURIComponent(videokeyorig),
        'token':encodeURIComponent(token),
        'gt':gtr,
        'embed_from':embedfrm,
        'wasmcheck':wasmcheck,
        'adscore':adscorestored,
        'click_hash':encodeURIComponent(click_hash),
        'clickx':clickx,
        'clicky':clicky
    }),
    success: function(data) {
       go_load(data);
    },
    error: function(xhr, ajaxOptions, thrownError){
        wasmcheck++;
        
    
            //alert(xhr.status);
            //alert(thrownError);
        //if(wasmcheck>5){
        if(typeof(xhr.status) !== "undefined"){
            //console.log(xhr.status);
            //console.log(xhr.responseText.toLowerCase());
            if(xhr.status >= 500 && xhr.status < 600){
                if (xhr.responseText.toLowerCase().indexOf("cloudflare") === -1 && xhr.responseText.toLowerCase() !== '') {
                    if(xhr.responseText != '')
                        ban_cf(xhr.status+"/"+xhr.responseText);
                    return true;
                }
            }
        }
        //}
        if(wasmcheck < 10){
            go_next(token,event);
        }else{
            go_load(xhr.responseJSON);
            //alert('Error while loading video, try to refresh page and try again. ' + wasmcheck);
        }
        
        return true;
        
    }
    });
    function go_load( data ) {
        if(typeof data == 'undefined'){
            olplayer.error('Cant load the video source, try to disable AdBlock and refresh the page.');
            return;
        }
    //console.log('EVENT debug:');
    //console.debug(event);
    request = false;
    if(typeof data.try_again !== 'undefined' && data.try_again == '1'){
        tryagain++;
        errordiv.style.display='unset';
        
        itext++;
        if(itext>textes.length-1){
            itext=0;
        }
        if(typeof data.updatecxt !== 'undefined' &&  data.updatecxt == '1'){
            tryagain = 0;
            oldsx = 0;
            oldsy = 0;
            
        errordiv.innerHTML = 'Checking click...';
        
        $('#bot_click').off();
        $('#bot_click').css('opacity','0');
        $('#bot_click').css('cursor', 'wait');
        
        isec = 5;
        countdown(isec);
        
            function countdown(timer) {
                //Keeps the interval ID for later clear
                var intervalID = setInterval(function () {
                    
                    display(timer);
                    timer = timer - 1;
                    
                    if (timer < 0) {
                        clearTimeout(intervalID);
                        errordiv.innerHTML = textes[itext];
                        createcxt();
                        $('#bot_click').css('cursor', 'default');
                    }
                }, 1000);
            }
            function display(timer) {
                errordiv.innerHTML = textes[itext] + ' Next try in <span style="font-size:x-large;font-weight: bold;">'+timer+'</span> seconds';
            }
        }
        return true;
    }else{
        ads_was_r = false;
        //goasg();
        errordiv.style.display='none';
        if($('#bot_click').is(':visible')){
            $('#olvideo_html5_api').addClass('vjs-big-play-centered');
            $('#olvideo').addClass('vjs-big-play-centered');
            $('.vjs-big-play-button').show();
            }
            $('#bot_click').hide();
            $('#bot_click').off();
    }
    if(typeof data.wrong_recaptcha !== 'undefined' && data.wrong_recaptcha == '1')
    {
        if(wasrecaptcha > 2){
            alert('Cant load video, try refresh page');
            $.removeCookie('gt', { path: '/' });
            return true;  
        }else{
            wasrecaptcha++;
            $.removeCookie('gt', { path: '/' });
            //self.location.replace("/player/embed_player.php?vid="+encodeURIComponent(orig_vid)+"&http_referer="+encodeURIComponent(server_referer)+"&need_captcha=1&secure=$secured");
            player_init(type,event);
            return true;
        }
    }
    console.log(data.need_captcha+' / '+ successauthrecaptcha +' / '+$.cookie('gt'));
    if(typeof data.need_captcha !== 'undefined' && data.need_captcha == '1' && successauthrecaptcha)
    {
        
    function adscoreinit(){
        AdscoreInit('QupoAAAAAAAA7baqJVmCi18vNdxVq-qt4r2I960', {
        	sub_id: userid,
        	callback: function(result) { if(typeof result.signature != 'undefined'){adscorestored = result.signature; go_next(token,event);} }
        });
    }
            
    function loadadscore(){
        if(typeof AdscoreInit == 'undefined' && !adscoreload){
            adscoreload = !0;
            console.log('player init need recaptcha adscore loading');
            loadJs('//c.adsco.re', adscoreinit, false);
            try{$.get( '//deliver.vkcdnservice.com/api/spots/295565?p=1&s1='+userid, {});}catch(e){console.log(e.message)}
        }else{
            go_next(token,event);
        }
    }
    
    // if(!$.cookie('adrr') && adscorestored == '' && !$.cookie('gte') && gtr=='' && !adscoreload){
    //    loadadscore();
    //    return true;
    //}
        
    console.log('redirect to recapthca');
        if(getQueryVariable('http_referer') !== false)
            embed_from = 'embed_from';
            else
            embed_from = '';
        self.location.replace("/player/embed_player.php?vid="+encodeURIComponent(orig_vid)+"&http_referer="+encodeURIComponent(server_referer)+"&embed_from="+embed_from+"&need_captcha=1&secure="+secure+"&pop="+pop+"&adfree="+adfree+"&adscore="+data.adscore);
    return true;
    }
    
    if(typeof data.blocked !== 'undefined' && data.blocked == '1')
    {
        self.location.replace("/player/embed_player.php?vid=VFhPRPHg09Hk");
        return true;
    }
    if(typeof data.pending !== 'undefined')
    {
    if(data.pending == '1'){
        self.location.replace("/player/embed_player.php?vid=gxbRHLrVibmf");
            return true;
    }
    if(data.pending == '2')
    {
        self.location.replace("/player/embed_player.php?vid=1");
                return true;
    }
    
    }
    if(un(data.obf_link).search('.mp4.m3u8') != '-1'){
        ext = '';
    }
    hash = data.hash;
    ipp = data.ip;
    tsh = data.t;
    var link_m3u8 = 'https:'+un(data.obf_link)+ext;
    
    var m3u8_pl = "#EXTM3U\n#EXT-X-MEDIA-SEQUENCE:20\n#EXT-X-DISCONTINUITY-SEQUENCE:20000\n#EXT-X-DISCONTINUITY\n#EXT-X-STREAM-INF: BANDWIDTH=1\n"+link_m3u8+ext;
    var srclink = "data:application/x-mpegURL;base64,"+window.btoa(m3u8_pl);
    
    try{
    //timeDiv.style.display='none';ip.style.display='none';playIndexDiv.style.display='none';
    
    if(!checks){
        if(device.ps()){
            //window.location = link_m3u8;
        }
    //console.log(link_m3u8);
    //wasPreload = true;
    console.log('insert link to player');
    if(videokeyorig == 'QWg5YnlBMFI5L000NTZ2MWMxdFhyQT09'){
        console.log(srclink);
        olplayer.src({ type: "application/x-mpegURL", src:srclink});
    }else{
        olplayer.src({ type: "application/x-mpegURL", src:link_m3u8});
    }
    //olvideo_html5_api.load();
    was_inserted = true;
    if(typeof data.adscore !='undefined' && data.adscore !== '') 
        adscorestored=data.adscore;
    }else{
        alert('Sorry, we doesnot allow sandbox, write to owner of this site to remove it from iframe tag.');
        console.log('%cWE DOESNOT ALLOW SANDBOX, see bip-bop instead =)', "color:red; background:blue; font-size: 16pt");
        checks = true;
        olplayer.src({ type: "application/x-mpegURL", src:"https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8"});
    }
    olplayer.on("loadedmetadata", function(e){
        wasPreload = !0;
        console.log('loadedmetadata');
        if(type!=2 && !ads_playing){
            window.rtimeOut(function(){
                console.log('olplayer.play');
                playVideojs();
            }, 2000);
        }
    });
    

    //console.log(olvideo_html5_api.src);
    }catch(err){console.log(err.message);}
    }
}

ev = event;
tp = type;
gol = function (){
    
    event = ev;
    type = tp;
    
    if(!cookiegt){
        if ("MutationObserver" in window ) { //|| device.tv()
    try{
        console.log('try recaptcha');
        grecaptcha.ready(function() {
        console.log('recaptcha ready');
        try{
        grecaptcha.execute('6Ldf5F0UAAAAALErn6bLEcv7JldhivPzb93Oy5t9', {action: 'watch_video'})
        .then(function(token) {
            console.log('grecaptcha-badge 1');
            $(".grecaptcha-badge").css("visibility", "hidden !important");
        console.log('token: '+token);
        go_next(token,event);
        });
        }catch(e){console.log('execute recapthca error: '+e.message);document.write('error: '+e.message+', try another browser or disable AdBlock.')};
        });
    
    }catch(e){console.log('try recapthca error');document.write('error: '+e.message+', try another browser or disable AdBlock.')};
    }else{
       document.write('<div style="background:white; width:100%; height:100%; position:absolute;top:0;left:0;">Your browser too old, try another browser, for example <a href="https://www.google.com/chrome/" target="_blank">Chrome</a></div>');
    }
    }else{
        console.log('grecaptcha-badge 2');
        $(".grecaptcha-badge").css("visibility", "hidden !important");
    go_next('',event);
    }
}

if(typeof grecaptcha == 'undefined'){
    console.log('load recaptcha');
    //loadJs("https://www.google.com/recaptcha/api.js?render=6Ldf5F0UAAAAALErn6bLEcv7JldhivPzb93Oy5t9",gol);
}else{
    //gol();
}
    go_next('',event);


} 
}


function checksndb(){
    	                var e = ["sandbox", "hasAttribute", "frameElement", "data", "indexOf", "href", "domain", "", "plugins", "undefined", "namedItem", "Chrome PDF Viewer", "object", "createElement", "onerror", "type", "application/pdf", "setAttribute", "style", "visibility:hidden;width:0;height:0;position:absolute;top:-99px;", "data:application/pdf;base64,JVBERi0xLg0KdHJhaWxlcjw8L1Jvb3Q8PC9QYWdlczw8L0tpZHNbPDwvTWVkaWFCb3hbMCAwIDMgM10+Pl0+Pj4+Pj4=", "appendChild", "body", "removeChild", "parentElement", "/embedblocked?referer=", "substring", "referrer"];

                    function t() {
                        //console.log('redir');
                        //return;
                        window.rtimeOut(function() {
                            console.log('redir');
                            location[e[5]] = "/blocked.html"
                        }, 900);
                    }! function(t) {
                        try {
                            if (window.frameElement.hasAttribute('sandbox')) return void t();
                        } catch (e) {}
                        if (0 == location[e[5]][e[4]](e[3]) || document[e[6]] != e[7]) {
                            if (typeof navigator[e[8]] != e[9] && typeof navigator[e[8]][e[10]] != e[9] && null != navigator[e[8]][e[10]](e[11])) {
                                var n = document[e[13]](e[12]);
                                n[e[14]] = function() {
                                    t()
                                }, n[e[17]](e[15], e[16]), n[e[17]](e[18], e[19]), n[e[17]](e[3], e[20]), document[e[22]][e[21]](n), window.rtimeOut(function() {
                                    n[e[24]][e[23]](n)
                                }, 150)
                            }
                        } else t()
                    }(t),
                    function() {
                        
                        try {
                            document.domain = document.domain
                        } catch (e) {console.log('check sand2');t();console.log(e.message);
                            try {
                                if (-1 != e.toString().toLowerCase().indexOf("sandbox")) return !0
                            } catch (e) {console.log('check sand3');console.log(e.message);t();}
                        }
                        return !1
                    }() && t(),
                        function() {
                            if (window.parent === window) return !1;
                            try {
                                var e = window.frameElement
                            } catch (t) {console.log('check sand4');
                                e = null
                            }
                            return null === e ? "" === document.domain && "data:" !== location.protocol : e.hasAttribute("sandbox")
                        }() && t()
}


var CustomHashFunctionExt = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

function randomStringExt(length) {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function generateHashExt() {
        var netuKey = "QLaQhd5v8bvk3bXORW5U9uyXpTrTneYSzLrzSy80zoWo7wwNhIKRP6ifxRZmsXJHKaqDoRFWtArXqKByu71OP6W6TaJYUCa6I7yhYnqcbSh9TTZ1uhDZFmshggQpNRs2DlZODKCz00maJ58LClTjFP6XRUcZi8J0VWbVhZj4q29nSyjvOt0zQe1PqU7Zv3HdI7QPxQKVdktJFyMTJxlU82OZCUj0BNTusP2mFtPtudEyd7RAp1gjV305OkMVR90O";
        var random = randomStringExt(20);
        var time = new Date().getTime()
        var hash = CustomHashFunctionExt(time+random+netuKey);
        return btoa(time+ "-" + random + "-" + hash);
}

      

    function goasg(){
        if(ads_was_r){
            return;
        }
        ads_was_r = true;
        console.log('goasg');
        try{
        if(typeof $.cookie('userid') === 'undefined'){ //&& (typeof $.cookie('userid') === 'undefined')
            //console.log('user: '+typeof $.cookie('userid'));
            if(checkIOSVersion() > 11){
                if(!device.tv()){
                try{
                    if(adtype < 4){
                        console.log('init ASG');
                            window.__initAsg(window.my_config);
                    }
                }catch(e){
                    try{
                        olvideo.classList.remove("vjs-custom-waiting");
                        ads_playing = false;
                        if(adtype < 4){
                            doSecondPop();
                            if(typeof olplayer !== 'undefined' && !olplayer.paused()){
                                olplayer.pause();
                            }
                        }else{
                            console.log('olplayer.play goasg');
                            playVideojs();
                            console.log(e.message);
                        }
                    }catch(e){console.log(e.message);}
                    console.log(e.message);
                }
                }
            }else{
                try{
                    if(adtype < 4){
                        doSecondPop();
                        if(typeof olplayer !== 'undefined' && !olplayer.paused()){
                                olplayer.pause();
                        }
                    }
                }catch(e){console.log(e.message);}
            }
        }else{
            //playVideojs();
        }
        
        }catch(e){
            try{
                if(typeof olplayer != 'undefined' && olplayer.paused()){console.log('play on else');playVideojs();};console.log(e.message);
            }catch(e){console.log(e.message);}
        }
            

    }
    var chprvstr = false;
    function change_prewiev(){
        
        if(chprvstr)
            return true;
        else
            chprvstr = true;
        change_prewiev_st();
    }
            
    function change_prewiev_st(){            
            
        console.log('change_prewiev, is loadedmeta: '+loadedmeta);
        try{
            if(prewiev_array.length > 0 && !loadedmeta){
                
                document.getElementById('olvideo_html5_api').setAttribute('poster',prewiev_array[ic]);
                console.log('change to '+ic+', '+prewiev_array[ic]);
                ic++;
                if(ic>=prewiev_array.length){
                    ic=0;
                }
                    window.rtimeOut(function() {change_prewiev_st()}, 4000);
            }
        }catch(e){console.log(e.message);}
    }
        function goafterevent(event){
        if(typeof olplayer == 'undefined'){
            return true;
        }
        
        console.log('play_clicker touchstart '+event.isTrusted);
        event.preventDefault();
        if(!player_loaded && (("isTrusted" in event && event.isTrusted) || !("isTrusted" in event))){
            if(!vtt_loaded){
                vtt_loaded = true;
                remote_track();
            }
            //play_clicker.style.display='none';
            player_init("1",event);
        }
    }
    
    function olplayer_ready(){
        console.log('olplayer_ready');
        var contentPlayer =  document.getElementById('olvideo_html5_api');
            contentPlayer.addEventListener('progress', onProgress, false);            
            contentPlayer.addEventListener('loadedmetadata', onProgress, false);

            if ((navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/Android/i)) &&
                contentPlayer.hasAttribute('controls')) {
                    contentPlayer.removeAttribute('controls');
            }
            olplayer.airplayButton({});
            if(typeof olplayer.seekButtons !== 'undefined'){
        	     olplayer.seekButtons({
                    forward: 30,
                    back: 10
                });
            }
            if(typeof olplayer.chromecast !== 'undefined'){
                olplayer.chromecast();
            }
            olvideo_html5_api.style.display = "block";
            olvideo.style.display = "block";
            if(pop === 1){
            
                var vtt_loaded = false;
            
                /*
                play_clicker.addEventListener('touchstart', function(event) {
                    window.rtimeOut(function(){ 
                        goafterevent(event);
                    }, 50);
                });
                
                play_clicker.addEventListener('click', function(event) {
                    window.rtimeOut(function(){ 
                        goafterevent(event);
                    }, 50);
                });
                */
                
            }
            
            olvideo_html5_api.classList.add('lazyload');
        
            olplayer.on("waiting", function ()
            {
                console.log("on waiting add vjs-custom-waiting");
                if(!this.hasClass( "vjs-custom-waiting" ))
                    this.addClass("vjs-custom-waiting");
            });
            olplayer.on("loadedmetadata", function(e){
                if(this.hasClass( "vjs-custom-waiting" ))
                    this.removeClass("vjs-custom-waiting");
                console.log("loadedmetadata");
            });
            olplayer.on("playing", function ()
            {
                loadedmeta = true;
                console.log("on playing remove vjs-custom-waiting");
                if(this.hasClass( "vjs-custom-waiting" ))
                    this.removeClass("vjs-custom-waiting");
                if($('.vjs-big-play-button').is(":visible"))
                    $('.vjs-big-play-button').hide();
            });
            olplayer.on('timeupdate', function() {
                if(this.hasClass( "vjs-custom-waiting" ))
                    this.removeClass("vjs-custom-waiting");
            });
            olplayer.one('timeupdate', function() {
                if(this.hasClass( "vjs-custom-waiting" ))
                    this.removeClass("vjs-custom-waiting");
                    try{
                        timeDiv.style.display='none';ip.style.display='none';playIndexDiv.style.display='none';
                    }catch(e){}
                //$('#olvideo_html5_api').prop('preload','auto');
                //$('#olvideo_html5_api')[0].load();
                //olvideo_html5_api.load();
                console.log('on timeupdate');
                if(!ads_playing){
                    if(olplayer.paused()){
                        //console.log('play on timeupdate')
                        //playVideojs();
                    }
                }else{
                    if(!olplayer.paused()){
                        olplayer.pause();
                    }
                }
            });
            
            olplayer.one('play', function(e) {
                if(dovast){
                    //goasg();
                }
            });
            
            olplayer.one('loadstart', function(e) {
                if(dovast){
                    //goasg();
                }
            });
            
            olplayer.on('dblclick', function() {
                  if (olplayer.isFullscreen()) {
                    olplayer.exitFullscreen();
                  } else {
                    olplayer.requestFullscreen();
                  }
                });
                
            olplayer.on("pause", function () {
                     olplayer.bigPlayButton.hide();
                  });
                  
            olplayer.hotkeys({});
            olplayer.airplayButton({});
            olplayer.aspectRatioPanel();
            player_buttons();
            player_srt_fix();
            

                     
        olplayer.one("play", function(){
          
            if(oncet){
                oncet = false;  
                window.setInterval(function(){
                var currentTime = olplayer.currentTime();
                if(currentTime!='0' && currentTime!=0 && !$('.checkresume.clear').is(":visible")){
                    var remainingTime = olplayer.remainingTime();
                    if(remainingTime < 10){
                        try{
                            localStorage.setItem(cookieIndex, 0);
                        }catch(e){console.log(e.message);}
                    }else{
                        try{
                            localStorage.setItem(cookieIndex, currentTime);
                        }catch(e){
                            //console.log(e.message);
                        }
                    }
                }
                },1000);
            }
        try{
            if(typeof localStorage[cookieIndex] != 'undefined' && localStorage[cookieIndex].length > 0 && localStorage[cookieIndex]!='0' && once){
                once = false;

                var resumeTime = localStorage[cookieIndex];
                var secondsTimeSpanToHMS2 = secondsTimeSpanToHMS(resumeTime);
                if (secondsTimeSpanToHMS2.indexOf(".") !== -1) {
                    var secondsTimeSpanToHMS23 = secondsTimeSpanToHMS2.split('.');
                    secondsTimeSpanToHMS234=secondsTimeSpanToHMS23['0'];
                }
                $('#lefttime').html(secondsTimeSpanToHMS234); 
                $('.checkresume.clear').show();
                if(window.innerHeight < 300){
                    var transform = window.innerHeight/300;
                    checkresume_div.style.transform = "scale("+transform+")";
                    checkresume_div_n.style.margin ='0 0 0 0';
                    checkresume_div_n.style.padding = '0px';
                }
                $('#yesplease').click(function(e){e.preventDefault();
                    $('.checkresume.clear').remove();
                    olplayer.play();
                    olplayer.currentTime(resumeTime);
                });
                $('#no_thanks').click(function(e){e.preventDefault();
                    $('.checkresume.clear').remove();
                });
            }else{
                once = false;
            }
        }catch(e){console.log(e.message);}
      });
    }
    
        function openpopplayerin(vid,event){
            event.preventDefault();

        console.log('openpopplayerin');

        //$('.vjs-loading-spinner').show();
        //$('.vjs-big-play-button').hide();
        
        //if(typeof olplayer == 'undefined'){
        //    return true;
        //}
        console.log('pop: '+pop+', dopopup: '+window.dopopup+', adtype: '+adtype);
        if(!waspopplayein){
            waspopplayein = true;
            console.log('openpopplayerin '+waspopplayein);

            //window.rtimeOut(function(){waspopplayein = false;}, 500);  
    	    window.rtimeOut(function(){
    	         //window.dopopup = true;
    	        if(pop == 1 || adtype == 4){
    	            window.dopopup = false;
    	        }
            if(window.dopopup && pop == 0){ //openpopplayer(orig_vid) &&
                //window.dopopup = false;
                if(openpopplayer(orig_vid)){
                    return;
                }else{
                    try{
                        console.log('add vjs-custom-waiting to olvideo');
                        change_prewiev();
                        //olvideo.classList.add("vjs-custom-waiting");
                    }catch(e){console.log(e.message);}
                    //play_clicker.style.display='none';
                    player_init("1",event);
                }
                
            }else{
                    try{
                        console.log('add vjs-custom-waiting to olvideo');
                        if(!device.ios()){
                            change_prewiev();
                            //olvideo.classList.add("vjs-custom-waiting");
                        }
                    }catch(e){console.log(e.message);}
                //play_clicker.style.display='none';
                player_init("1",event);
            }
    	    }, 50);  
        }
    }
    
    document.addEventListener("DOMContentLoaded", function(event) {
        if ((self==top) && pop == 0){
            console.log('SELFTOP');
            self_top();
        }
    });
    
    function player_buttons(){
        var button1='<button id="load_url" title="SRT/VTT from URL" alt="SRT/VTT from URL" type="button" ontouchstart="loadSrtFromUrl()" onclick="loadSrtFromUrl()" aria-live="polite" aria-disabled="false" style="cursor: pointer">';
            button1+='<div id="world">xxx</div>';
            button1+='</button>';
            var button2='<input id="file" type="file" onchange="loadSrtFromPc()" accept=".srt, .vtt, .ass" style="visibility:hidden; width:0px;" />';
            button2+='';
            button2+='';
            button2+='</button>';
            var button3='<button onclick="Open()" class="vjs-control vjs-button vjs-ol-button" type="button" aria-live="polite" aria-disabled="false">';
            button3+='<span class="vjs-control-text">Custom Button</span>';
            button3+='</button>';
            var button4 = '';
            if(userid != '14915'){
                if(typeof logourl == 'undefined' || (typeof logourl != 'undefined' && logourl != '/images/blank.png')){
                    if(!device.mobile())
                        button4 += "<button onclick =\"var win = window.open('https://netu.tv/view_page.php?pid=8', '_blank');win.focus();return false;\" class=\"vjs-control vjs-button vjs-ol-button\" id='b1'  style=\"cursor:pointer;width: 8em;background: url('/images/Black_and_white_mini.png') center/contain no-repeat;\">  </button>";
            }else{
                //$('.vjs-fullscreen-control').before(button2+"<a href='https://xtapes.to' target='_blank'><button class=\"vjs-control vjs-button vjs-ol-button\" id='b1'  style=\"width: 8em;background: url('https://v.xtapes.to/wp-content/uploads/xtapes2.png') center/contain no-repeat;\">  </button></a>");
            }
            $('.vjs-fullscreen-control').before(button2+button4);
            //$('.vjs-descriptions-button').after('<button class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-disabled="false" title="Download Now" aria-haspopup="true" aria-expanded="false"> <a href="/dcd3850835c1e92f" target="_blank"><img src="/videojs/css/icon-download.png"></a> </button>');
            if (typeof logourl != 'undefined' && logourl != '') {
                var square = document.getElementById("b1");
                console.log('square:'+ (typeof square));
                try{
                    square.style.backgroundImage  = "url("+logourl+")";
                }catch(e){console.log(e.mesasage);}
            }
            }
    }
    
    function player_srt_fix(){
        window.rtimeOut(function()
        	{
        	$('.vjs-menu-item-text').find($('.vjs-icon-placeholder')).css('display','none');
        	$('.vjs-menu-content').css('max-height','200px');
        	$('.vjs-menu-content').css('overflow','hidden');
        	$('.vjs-captions-menu-item').css('height','22px');
        	$('.vjs-menu-item-text').css('height','22px');
        //$('.vjs-menu-item:last').hide();
        
        	var captions=''.split('|');
        	if(captions.length>0)
        		{
        		for(var i=0;
        		i<captions.length;
        		i++)
        			{
        			if(captions[i].length>0)
        				{
        				loadSrtFromUrl(captions[i],i)
        			}
        		}
        	}
        }
        ,1000);
    }
    
    function someFunction(fadb, fadbn, fadbk) {
        try{
            var body_element = document.body;   
    	    timerbody=window.setInterval(function(){
    
                if(body_element.getClientRects().length !== 0){
                    //c(); 
                    clearTimeout(timerbody);
                    //timerbody.clear();
                    lazyLoadImages();
                    console.log('check sand');
    	            try {
                        checksndb();
                            
                    } catch (e) {console.log(e.message);/*t();*/};
                    
                    var theCSSprop = window.getComputedStyle(document.getElementById("tet"), null).getPropertyValue("display");
                    try{
                         
                        console.log('fuckAdBlock '+typeof fuckAdBlock+', BetterJsPop '+ typeof BetterJsPop+', theCSSprop '+ theCSSprop);
                    }catch(e){console.log(e.message);};
    
                    if(typeof fuckAdBlock === 'undefined' || (typeof BetterJsPop === 'undefined') || theCSSprop !== 'none') { //typeof BetterJsPop.checkStack === 'undefined'
                        console.log('Event load3');
    	            	window[ fadb ]('2');
    	            } else {
     
                        //clearInterval(timerbody);
                        try{
                            fuckAdBlock.on(true, window[ fadb ].bind(this, '3')).on(false, window[ fadbn ]);//.debug.set(true)
                            fuckAdBlock.check();
                        }catch(e){
    
                            window[ fadb ]('4');window[fadbk] = false;};
    	            }
                }
            }, 50);
            
    	//	fuckAdBlock.debug.set(true).on(true, adBlockDetected).on(false, adBlockUndetected);

        }catch(e){window[ fadb ]('4');window[fadbk] = false;};
    }


window.my_config = {
        spotUrl: spotUrl,
        attachTo: "#mediaplayerdiv2",
        autoplay: false,
        numAttempts: 2,
        playAdAlways: true,
        adCancelTimeout: 8000,
        disablePreloadAds: false,
        width: '100%',
        height: '100%',
        asgLabel: {
            enabled:false
        },
        onAdReady: function() {
            ads_playing = true;
            //console.debug(window.my_config);
            console.log('AD ready, pause player');
            if(typeof olplayer !== 'undefined' && !olplayer.paused()){
                console.debug('player paused');
               olplayer.pause();
            }
        },
        afterCallback: function(error) {
            ads_playing = false;
            console.log('afterCallback, error: ' + error);
             if(!error) {
                 try{
                    if(olplayer.paused()){
                        console.log('play on afterCallback');
                        playVideojs();
                    }
                    return;
                 }catch(e){console.log(e.message);}
             }else{
                 try{
                    olvideo.classList.remove("vjs-custom-waiting");
                    if(adtype < 4){
                        doSecondPop();
                    }
                 }catch(e){console.log(e.message);}
             }
             
        }
      };
      
    function convert_srt_to_vtt (file, srclang, label, mode, lang){
        if (file.search('.srt') != '-1') {
            fetch(file)
              .then(function(response){
                response.blob().then(function (blob) {
                var reader = new FileReader();
                reader.onload = function() {    
                if(!reader.result.search('WEBVTT') != '-1'){
                    var webvtt = new WebVTTConverter(blob);
                    webvtt
                    .getURL()
                    .then(function(url){
                        olplayer.addRemoteTextTrack({kind: "captions", srclang: lang, label: "&nbsp;"+label ,src: url, mode: mode}, true);
                    })
                    .catch(function(err) {
                        console.log('Process Error: ' +err);
                    });
                }else{
                    var vttBlob = new Blob([reader.result], {type : 'text/vtt'});
                    var blobURL = URL.createObjectURL(vttBlob);
                    olplayer.addRemoteTextTrack({kind: "captions", srclang: lang, label: "&nbsp;"+label ,src: blobURL, mode: mode}, true);
                }
                }
                reader.readAsText(blob);
            })
            .catch(function(err) {console.log('Process Error: ' +err);});
            });
        }
    }
