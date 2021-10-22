
     
     
        function copyVideo(){
            var answer = confirm('Copy video to your account?');
            if (answer) {
                var popupWindow = null;
                LeftPosition = (screen.width) ? (screen.width-700)/2 : 0;
                TopPosition = (screen.height) ? (screen.height-300)/2 : 0;
                settings ='height='+300+',width='+700+',top='+TopPosition+',left='+LeftPosition+',scrollbars=no';
                popupWindow = window.open("https://netu.io/ajax.php?mode=copy_video&vid="+videoid+"&objtype=video",'copyWindow',settings)

            }
        }
        
         function retryWithNextSegment(player) {
     console.log('retryWithNextSegment');
    if (currentLoadingFrag !== null) {
      inSegmentErrorRetry = true;
      var nextStartPoint = currentLoadingFrag.start + currentLoadingFrag.duration + 1;
      console.log('retryWithNextSegment + '+nextStartPoint);

      player.startLoad(nextStartPoint);
      //player.recoverMediaError();
       olplayer.play();
    }
    else {
      console.log("Current fragment is null!!");
    }
  }
  
        function initHlsJsEvents(player, engine) {

            player.on("hlsError", function(_event, errorData) {
                
            console.log(errorData.details);
            if(errorData.details == 'fragLoadError'){
                fragerror++;
                console.log('fragLoadError + '+fragerror);
                //olvideo_html5_api.currentTime = olvideo_html5_api.currentTime + 20;
                console.log('olvideo_html5_api.currentTime: '+olvideo_html5_api.currentTime);
                console.log('inSegmentErrorRetry: '+inSegmentErrorRetry);
                if (!inSegmentErrorRetry) {
                    console.log('start inSegmentErrorRetry + ');
                    retryWithNextSegment(player);
                }
                //player.startLoad();
                //player.recoverMediaError();
                
            }
            
            //if( data.fatal ){
                //recover here, maybe check data.details for type of error
                //possibly api.trigger("error", [ api, {code: 4, video: videoInfo}] );
            //}

            if(errorData.details == 'manifestLoadError'){
                console.log('manifestLoadError + ');
                if(trymanifestload < 10){
                    trymanifestload++;
                    wasPreload = false;
                    player_init("1",event);
                }
            }
            
            if(errorData.details == 'fragParsingError'){
                console.log('fragParsingError +');
                //if(fragerror < 10){//skip baad frames
                //    fragerror++;
                //    player.recoverMediaError();
                //}
            }
            }); 
        }
        
        var useP2pv = true;
        var httpDownloadInitialTimeoutv = 600000;
        if($.cookie('userid')){
            httpDownloadInitialTimeoutv = 0;
            //useP2pv = false;
        }

        var engine;
        var errcount = 0;
        var html5 = {
          hlsjsConfig: {
                  "manifestLoadingMaxRetry": 999,
                  "maxBufferLength": 60,
                  "maxMaxBufferLength": 180,
                  "backBufferLength": 60,
                  "fragLoadingMaxRetry": 990,
                  "fragLoadingTimeOut":30000,
                  "maxFragLookUpTolerance":-5,
                  //"maxBufferHole":15,
                  //"nudgeOffset":15,
                  //"maxSeekHole":15,
                  //"maxBufferHole":0.9,
                  "forceKeyFrameOnDiscontinuity":false
              /*
                 "maxBufferHole":41
                "forceKeyFrameOnDiscontinuity":false,
                "enableWorker":true,
                "debug": false,
                "maxBufferHole":41,
                "maxBufferLength": 180,
                "MAX_GOAL_BUFFER_LENGTH":180,
                "maxMaxBufferLength":180,
                "autoStartLoad": true,
                "fragLoadingMaxRetry": 990,
                "fragLoadingRetryDelay":500,
                "fragLoadingTimeOut":30000,
                "startFragPrefetch":false,
                "manifestLoadingMaxRetry": 999,
                "manifestLoadingRetryDelay": 500,
                "appendErrorMaxRetry": 999,
                "levelLoadingMaxRetry": 500,
                //"nudgeOffset":21,
                "nudgeMaxRetry":999,
                "stretchShortVideoTrack":true,
                "maxFragLookUpTolerance":0,
                "liveBackBufferLength":0
                //maxSeekHole:3//,maxBufferHole:0.25
                */
          }
        };
        
        if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
              html5.nativeTextTracks = true;
        }else{
              html5.nativeTextTracks = false;
              html5.nativeAudioTracks = false;
              html5.nativeVideoTracks = false;
        }
  

  var currentLoadingFrag = null;
  var inSegmentErrorRetry = false;
  console.log('typeof Hls: '+ typeof Hls);
  
try{
if (typeof p2pml != "undefined" && p2pml.hlsjs.Engine.isSupported() && p2pml.core.HybridLoader.isSupported() && typeof videojs.Html5Hlsjs != "undefined") {
    console.log('typeof p2pml: '+ typeof p2pml+', typeof videojs.Html5Hlsjs: '+typeof videojs.Html5Hlsjs+', p2pml.hlsjs.Engine.isSupported(): '+p2pml.hlsjs.Engine.isSupported());
    p2pml.hlsjs.initVideoJsHlsJsPlugin();
    try{
        videojs.Html5Hlsjs.addHook("beforeinitialize", function(videojsPlayer, hlsjs) {
            if (hlsjs.config && hlsjs.config.loader && typeof hlsjs.config.loader.getEngine === "function") {
                //console.log(hlsjs);
                hlsjs.on("hlsFragLoading", function(_event, data) {
                    console.log('hlsFragLoading + ');
                    //console.log(data);
                   currentLoadingFrag = data.frag;
                });
                hlsjs.on("hlsFragLoaded", function(_event, data) {
                    console.log('hlsFragLoaded + ');
                    //console.log(data);
                    if (inSegmentErrorRetry === true) {
                        inSegmentErrorRetry = false;
                    }
                   currentLoadingFrag = data.frag;
                });
                hlsjs.on("hlsfragLoadError", function(_event, data) {
                    console.log('HLS hlsfragLoadError + ');
                    //console.log(data);
                    retryWithNextSegment(hlsjs);
            });
               hlsjs.on("mediaError", function(_event, errorData) {
                    console.log('mediaError + ');
                    hlsjs.recoverMediaError();
                });
                hlsjs.on("networkError", function(_event, errorData) {
                    console.log('networkError + ');
                    hlsjs.startLoad();
                });
                initHlsJsEvents(hlsjs, hlsjs.config.loader.getEngine());
                //console.log(hlsjs);
            }
        });
        

    }catch(e){console.log(e.message);}
    console.debug('channel_url:'+md5p2p);
    if(typeof navigator.deviceMemory == 'undefined'){
        if(device.mobile()||device.ps()||device.tv()||device.xbox()||device.tablet() || is_touch_device()){
            store_segments = 50;
            p2pDownloadMaxPriority = 50;
            forwardSegmentCount = 100;
        }else{
             forwardSegmentCount = 1000;
             store_segments = 500;
             p2pDownloadMaxPriority = 500;
        }
    }else{
        if(navigator.deviceMemory < 8 || (device.mobile()||device.ps()||device.tv()||device.xbox()||device.tablet() || is_touch_device())){
            store_segments = 50;
            p2pDownloadMaxPriority = 50;
            forwardSegmentCount = 100;
        }else{
            forwardSegmentCount = 1000;
            store_segments = 500;
            p2pDownloadMaxPriority = 500;
        }
    }
    engine = new p2pml.hlsjs.Engine({
        "segments":{
                "swarmId":                            md5p2p,
                "forwardSegmentCount":                15, //forwardSegmentCount, //100
                "maxHistorySegments":                 20, //store_segments //20
        },
        "loader":{
               // xhrSetup: function (xhr,url) {xhr.setRequestHeader('Accept','*/*')},
                "consumeOnly":                        true,
                "useP2P":                             useP2pv,
                "cachedSegmentExpiration":            250000, //86400000,
                "cachedSegmentsCount":                5, //store_segments,
                "httpDownloadProbability":            0.1, //0.06, //0.06
                "httpDownloadProbabilityInterval":    1000,
                "bufferedSegmentsCount":              9,
                "httpDownloadMaxPriority":            9,
                "httpDownloadProbabilitySkipIfNoPeers":true,
                "p2pDownloadMaxPriority":             5, //p2pDownloadMaxPriority, //100
                "requiredSegmentsPriority":           5,//3
                "httpFailedSegmentTimeout":           1000,
                "simultaneousP2PDownloads":           6,
                "simultaneousHttpDownloads":          3,
                "httpDownloadInitialTimeout":         0, //httpDownloadInitialTimeoutv, //120000
                "httpDownloadInitialTimeoutPerSegment":16000,
                "p2pSegmentDownloadTimeout":          8000, //4000 //60000
                "httpUseRanges":                      false,
                "webRtcMaxMessageSize":               65535,
                
                "iceServers": [
                    { 'urls': 'stun:stun2.l.google.com:19302' }, 
                    { 'urls': 'stun:global.stun.twilio.com:3478?transport=udp' }
                ],
                "trackerAnnounce": [
                    "wss://wss.analyticacdn.com:8443/"+ws
                ]
        }
    });
   
    html5.hlsjsConfig.liveSyncDurationCount = 7; // To have at least 7 segments in queue
    html5.hlsjsConfig.loader = engine.createLoaderClass();
    //html5.hlsjsConfig.maxBufferSize = 60*1000*1000;
engine.on("segment_loaded", function (segment, peerId) { if(typeof peerId != 'undefined'){var peer = '${peerId}'}else{var peer = 'HTTP'};console.log(segment.sequence+" segment_loaded from " + peer)});
}else{
engine = Hls.DefaultConfig.loader;
html5.hlsjsConfig.loader = engine.createLoaderClass();
//html5.hlsjsConfig.maxBufferSize = 60*1000*1000;
}
}catch(e){console.log(e.message);}
