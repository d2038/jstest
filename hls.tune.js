function copyVideo() {
  var answer = confirm('Copy video to your account?');
  if (answer) {
    var popupWindow = null;
    LeftPosition = (screen.width) ? (screen.width - 700) / 2 : 0;
    TopPosition = (screen.height) ? (screen.height - 300) / 2 : 0;
    settings = 'height=' + 300 + ',width=' + 700 + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=no';
    popupWindow = window.open("https://netu.ac/ajax.php?mode=copy_video&vid=" + videoid + "&objtype=video", 'copyWindow', settings)

  }
}

function retryWithNextSegment(player) {
  console.log('retryWithNextSegment');
  if (currentLoadingFrag !== null) {
    inSegmentErrorRetry = true;
    var nextStartPoint = currentLoadingFrag.start + currentLoadingFrag.duration + 1;
    console.log('retryWithNextSegment + ' + nextStartPoint);

    player.startLoad(nextStartPoint);
    //player.recoverMediaError();
    olplayer.play();
  } else {
    console.log("Current fragment is null!!");
  }
}

function send_bugged_video() {
  try {
    $.ajax({
      url: olplayer.src(),
      headers: {
        Accept: "*/*"
      },
      success: function (response) { },
      error: function (xmlHttpRequest, textStatus, errorThrown) {
        if (xmlHttpRequest.readyState == 0 || xmlHttpRequest.status == 0) {
          return; // it's not really an error
        } else {
          if (xmlHttpRequest.status == '404') {
            $.post("/ajax.php?mode=insert_bad_video_bug", {
              mode: "insert_bad_video_bug",
              videoid: videoid,
              status: xmlHttpRequest.status
            }).done(function (data) { });
          }
        }
      }
    });
    /*
              $.get(olplayer.src()).done(function( data ) { }).fail(function(xhr, status) {
                   // alert(xhr.status); 
                   if(xhr.status == '404'){
                        $.post( "/ajax.php?mode=insert_bad_video_bug", { mode: "insert_bad_video_bug", videoid:videoid, status: xhr.status}).done(function( data ) { });
                   }
              });
              */
  } catch (e) {
    console.log(e.message)
  }
}

function initHlsJsEvents(player, engine) {

  //player.on('seeking', function() {
  //    sended_bad_video = true;
  //});

  player.on("hlsError", function (_event, errorData) {

    console.log("hlsError: " + errorData.details);
    if (errorData.details == 'bufferAddCodecError') {
      sended_bad_video = true;
    }
    if (errorData.details == 'fragLoadError') {
      fragerror++;
      console.log('fragLoadError + ' + fragerror);
      //olvideo_html5_api.currentTime = olvideo_html5_api.currentTime + 20;
      console.log('olvideo_html5_api.currentTime: ' + olvideo_html5_api.currentTime);
      console.log('inSegmentErrorRetry: ' + inSegmentErrorRetry);
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

    if (errorData.details == 'manifestLoadError') {
      console.log('manifestLoadError + ' + trymanifestload);
      if (trymanifestload < 10) {
        trymanifestload++;
        wasPreload = false;
        player_init("1", event);
        if (trymanifestload == 1) {
          send_bugged_video();
        }
      }
    }

    if (errorData.details == 'fragParsingError') {
      console.log('fragParsingError +');
      //if(fragerror < 10){//skip baad frames
      //    fragerror++;
      //    player.recoverMediaError();
      //}
    }
  });
}

var useP2pv = false;
var httpDownloadInitialTimeoutv = 0;
if ($.cookie('userid')) {
  httpDownloadInitialTimeoutv = 0;
  //useP2pv = false;
}

var engine;
var errcount = 0;
var html5 = {
  hlsjsConfig: {
    "maxBufferLength": 20,
    "manifestLoadingMaxRetry": 999,
    "fragLoadingMaxRetry": 990,
    "fragLoadingTimeOut": 30000,
    "enableWorker": true,
    "liveSyncDurationCount": 7,
    "backBufferLength": 0
    //"forceKeyFrameOnDiscontinuity":false,
    //"stretchShortVideoTrack":true,
    //"maxAudioFramesDrift":100,
    //"lowLatencyMode": false,
    //"testBandwidth":false
  }
};

/*
          "progressive":true
          //"maxBufferHole":0,
          //"nudgeOffset":0.1,
          //"nudgeMaxRetry":20,
          //"maxSeekHole":21,
          //"maxBufferHole":21,
          //"maxFragLookUpTolerance":0
          //"forceKeyFrameOnDiscontinuity":false
          //"maxBufferLength":60,
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

if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
  html5.nativeTextTracks = true;
} else {
  html5.nativeTextTracks = false;
  html5.nativeAudioTracks = false;
  html5.nativeVideoTracks = false;
}


var currentLoadingFrag = null;
var inSegmentErrorRetry = false;
console.log('typeof Hls: ' + typeof Hls);

var sended_bad_video = false;
var bad_buff_count = 0;
var current_frag = 0;
var current_frag_stored = 0;
var video_buff_d = 0;
var video_buff_c = 0;
var count_i = 0;
var buf_hole = false;
var buf_hole_stored = false;
var buf_hole_false = false;
var buf_hole_true = false;

function send_bad_video_f(dif, time) {
  try {
    $.post("/ajax.php?mode=insert_bad_video_buff", {
      mode: "insert_bad_video_buff",
      videoid: videoid,
      dif: dif,
      frag: current_frag,
      time: time
    }).done(function (data) { });
  } catch (e) {
    console.log(e.message)
  }
}

function timeRangesToString(r) {
  try {
    var log = '';

    for (var i = 0; i < r.length; i++) {
      log += '[' + r.start(i) + ', ' + r.end(i) + ']';
      log += ' ';
    }

    return log;
  } catch (e) { }
}

try {
  console.log('typeof p2pml: ' + typeof p2pml + ', typeof videojs.Html5Hlsjs: ' + typeof videojs.Html5Hlsjs + ', p2pml.hlsjs.Engine.isSupported(): ' + p2pml.hlsjs.Engine.isSupported());

  if (typeof p2pml != "undefined" && p2pml.hlsjs.Engine.isSupported() && p2pml.core.HybridLoader.isSupported() && typeof videojs.Html5Hlsjs != "undefined") {
    p2pml.hlsjs.initVideoJsHlsJsPlugin();
    try {
      videojs.Html5Hlsjs.addHook("beforeinitialize", function (videojsPlayer, hlsjs) {
        if (hlsjs.config && hlsjs.config.loader && typeof hlsjs.config.loader.getEngine === "function") {
          //console.log(hlsjs);
          hlsjs.on("hlsFragLoading", function (_event, data) {
            //console.log('hlsFragLoading + ');
            //console.log(data);
            currentLoadingFrag = data.frag;
          });
          hlsjs.on("hlsFragLoaded", function (_event, data) {
            if (videokeyorig == 'VkpZTTJDQ2lUdHBlRVhqQ0wwMlhUQT09') {
              alert('hlsFragLoaded');
            }
            //console.log('hlsFragLoaded + ');
            //console.log(data);
            if (inSegmentErrorRetry === true) {
              inSegmentErrorRetry = false;
            }
            currentLoadingFrag = data.frag;
          });
          hlsjs.on("hlsfragLoadError", function (_event, data) {
            console.log('HLS hlsfragLoadError + ');
            //console.log(data);
            retryWithNextSegment(hlsjs);
          });
          hlsjs.on("mediaError", function (_event, errorData) {
            console.log('mediaError + ');
            hlsjs.recoverMediaError();
          });
          hlsjs.on("networkError", function (_event, errorData) {
            console.log('networkError + ');
            hlsjs.startLoad();
          });
          hlsjs.on("hlsFragChanged", function (_event, data) {
            current_frag = data.frag.sn;
            if (olvideo_html5_api.currentTime > 90 && false) {
              hlsjs.trigger("hlsBufferFlushing", {
                startOffset: 0,
                endOffset: olvideo_html5_api.currentTime - 90
              });
              console.log('Flush old chunks From 0 till ' + (olvideo_html5_api.currentTime - 90));
              hlsjs.trigger("hlsBufferFlushing", {
                startOffset: olvideo_html5_api.currentTime + 90,
                endOffset: olvideo_html5_api.duration
              });
              console.log('Flush old chunks From ' + olvideo_html5_api.currentTime + 90 + ' till ' + (olvideo_html5_api.duration));

              if (buf_hole_false && !buf_hole_true) {
                bad_buff_count++;
                buf_hole_false = false;
                buf_hole_stored = false;
                if (!sended_bad_video && bad_buff_count > 5 && !sended_bad_video) {
                  sended_bad_video = true;
                  send_bad_video_f(video_buff_d, olvideo_html5_api.currentTime);
                  clearInterval(count_i);
                }
              } else {
                bad_buff_count = 0;
              }
            }
          });
          hlsjs.on("hlsBufferAppended", function (eventName, _ref) {

            return true;
            //console.debug(_ref);
            //if(_ref.frag.sn > 2){
            var tracks = _ref.timeRanges;
            var video_buffer = timeRangesToString(document.getElementById('olvideo_html5_api').buffered);
            //console.debug(tracks);
            var log = '';
            var audio = 0;
            var video = 0;
            if ((tracks['audio'].length == tracks['video'].length) && (tracks['audio'].length == 1)) {
              for (var type in tracks) {
                if (type == 'audio') {
                  for (var i = 0; i < tracks[type].length; i++) {
                    audio = Math.abs(parseFloat(tracks[type].end(i))); // - tracks[type].start(i) tracks[type].end(i)
                  }
                } else if (type == 'video') {
                  for (var i = 0; i < tracks[type].length; i++) {
                    video = Math.abs(parseFloat(tracks[type].end(i))); //- tracks[type].start(i) tracks[type].end(i)
                  }
                }
                log += "Buffer for " + type + " contains:" + timeRangesToString(tracks[type]) + "\n";
              }
              var diff_buff = Math.abs(parseFloat(video - audio));
              video_buff_d = diff_buff;

              if (current_frag == current_frag_stored) {
                if (video_buff_d < 10) {
                  buf_hole_true = true;
                } else {
                  buf_hole_false = true;
                }
              } else {
                current_frag_stored = current_frag;
                buf_hole_stored = buf_hole_false;
                buf_hole_true = false;
                buf_hole_false = false;

              }

              console.log(log);
              console.log('Buffer difference: ' + diff_buff);
            }
            //}

          });
          initHlsJsEvents(hlsjs, hlsjs.config.loader.getEngine());
          //console.log(hlsjs);
        }
      });


    } catch (e) {
      console.log(e.message);
    }

    console.debug('p2p channel_url:' + md5p2p);

    var store_segments = 3,
      forwardSegmentCount = 6,
      p2pDownloadMaxPriority = 3;    

    var requiredSegmentsPriority = 7;
    var simultaneousHttpDownloads = 3;

    if (typeof ou !== 'undefined' && ou > 100) {
      simultaneousHttpDownloads = 3;
    }
    console.log("HLS: simultaneousHttpDownloads:" + simultaneousHttpDownloads);

    engine = new p2pml.hlsjs.Engine({
      "segments": {
        "swarmId": md5p2p,
        "forwardSegmentCount": forwardSegmentCount, //100
        "maxHistorySegments": store_segments //20
      },
      "loader": {
        // xhrSetup: function (xhr,url) {xhr.setRequestHeader('Accept','*/*')},
        "useP2P": useP2pv,
        "cachedSegmentExpiration": 86400000,
        "cachedSegmentsCount": store_segments,
        "httpDownloadProbability": 0.06, //0.06
        "httpDownloadProbabilityInterval": 1000,
        "peerRequestsPerAnnounce": 5,
        "bufferedSegmentsCount": 8,
        "httpDownloadMaxPriority": 8,
        "httpDownloadProbabilitySkipIfNoPeers": true,
        "p2pDownloadMaxPriority": p2pDownloadMaxPriority, //100
        "requiredSegmentsPriority": requiredSegmentsPriority, //3
        "httpFailedSegmentTimeout": 1000,
        "simultaneousP2PDownloads": 6,
        "simultaneousHttpDownloads": simultaneousHttpDownloads,
        "httpDownloadInitialTimeout": httpDownloadInitialTimeoutv, //120000
        "httpDownloadInitialTimeoutPerSegment": 16000,
        //"p2pSegmentDownloadTimeout":          15000, //4000 //60000
        "httpUseRanges": false,
        "webRtcMaxMessageSize": 65535,

        "rtcConfig": {
          "iceServers": [{
            "urls": "stun:stun.l.google.com:19302"
          },
          {
            "urls": "stun:global.stun.twilio.com:3478"
          }
          ]
        },
        "trackerAnnounce": [
          "wss://wss.commentsmodule.com:8443/" + ws
        ]
      }
    });

    html5.hlsjsConfig.liveSyncDurationCount = 7; // To have at least 7 segments in queue
    html5.hlsjsConfig.loader = engine.createLoaderClass();

    //html5.hlsjsConfig.maxBufferSize = 60*1000*1000;

    //engine.on("segment_loaded", function (segment, peerId) { if(typeof peerId != 'undefined'){var peer = '${peerId}'}else{var peer = 'HTTP'};console.log(segment.sequence+" segment_loaded from " + peer)});

    engine.on(p2pml.core.Events.PeerConnect, function () {
      //console.log("Connecteed to peer");
    });

    engine.on(p2pml.core.Events.SegmentLoaded, function (segment, peerId) {
      var peer = " HTTP";
      if (typeof peerId !== 'undefined') {
        p2pdownloadedtotal = p2pdownloadedtotal + segment.data.byteLength;
        peer = " P2P";
      } else {
        httpdownloadedtotal = httpdownloadedtotal + segment.data.byteLength;
      }
      console.log("Loading finished " + segment.id + ", bytes:" + segment.data.byteLength + " from: " + peer);
    });

    engine.on(p2pml.core.Events.SegmentError, function (segment, error) {
      //console.log("Loading failed", segment, error);
    });

    engine.on(p2pml.core.Events.PieceBytesUploaded, function (method, bytes) {
      p2puploadedtotal = p2puploadedtotal + bytes;
      //console.log("Uploading pieace to P2P finished, bytes:", bytes);
    });

  } else if (typeof p2pml != "undefined" && p2pml.core.HybridLoader.isSupported()) {

    var loader;
    var tsDb = new Map();

    (function () {
      var regexts = /(\w*)\.mp666\/(Frag-([0-9]*)-v.*)/gmi;
      "use strict";

      if (navigator.serviceWorker && navigator.serviceWorker.register) {
        const messageChannel = new MessageChannel();

        function createSwMessageChannel() {

          navigator.serviceWorker.ready.then((registration) => {
            registration.update();
            console.log("SW: create message channel");

            navigator.serviceWorker.controller.postMessage({
              type: 'INIT_PORT',
            }, [messageChannel.port2]);

            // Listen to the response
            messageChannel.port1.onmessage = (event) => {

              // Print the result
              //console.debug(event.data);
              if (event.data && event.data.req == 'load_ts') {
                (async () => {
                  //console.log('message load_ts received');
                  //console.debug(event);
                  //console.debug(event.data);
                  //console.debug(event.data.evnt);
                  //console.debug(event.data.evntt);
                  //loader.load(JSON.parse(event.data.evnt),event.data.evntt);
                  var file_name = '';
                  var ts_name = '';
                  var mts = '';
                  while ((mts = regexts.exec(event.data.evnt)) !== null) {
                    if (mts.index === regexts.lastIndex) {
                      regexts.lastIndex++;
                    }
                    mts.forEach((match, groupIndex) => {
                      if (groupIndex == 1) {
                        file_name = match;
                      }
                      if (groupIndex == 2) {
                        ts_name = match;
                      }
                    });
                  }
                  if (file_name != '' && ts_name != '') {
                    //console.log('Search Frag from MAP '+file_name+'/'+ts_name );
                    //var segmetInMap = await segmentsStorage.getSegment(file_name+'/'+ts_name);
                    var segmetInMap = tsDb.get(file_name + '/' + ts_name);
                    //console.debug(segmetInMap);
                    if (segmetInMap && segmetInMap !== undefined) {
                      //console.log('Asking segment on loader: '+segmetInMap.id);
                      const segmentl = await loader.getSegment(segmetInMap);

                      if (segmentl) {
                        const segment = segmentl;
                        if (segment && typeof segment.data !== 'undefined') {
                          //console.log('Segment '+segmetInMap.id+' found in loader, sending it to SW');
                          event.ports[0].postMessage({
                            result: segment
                          });
                        } else {
                          event.ports[0].postMessage({
                            error: ''
                          });
                        }
                      } else {
                        event.ports[0].postMessage({
                          error: ''
                        });
                      }
                    } else {
                      event.ports[0].postMessage({
                        error: ''
                      });
                    }
                  } else {
                    event.ports[0].postMessage({
                      error: ''
                    });
                  }
                })();
              } else
                if (event.data && event.data.req == 'load_m3u8') {
                  //console.log('message load m3u8 received');
                  //console.debug(event.data.evnt);
                  var link = '';
                  var regex_link = /^(.*)\/(\w*)/gmi;
                  let ml;
                  while ((ml = regex_link.exec(event.data.evntt)) !== null) {
                    if (ml.index === regex_link.lastIndex) {
                      regex_link.lastIndex++;
                    }

                    ml.forEach((match, groupIndex) => {
                      if (groupIndex == 1) {
                        link = match;
                      } else if (groupIndex == 2) {
                        file_name = match;
                      }
                    });
                  }
                  var t = 1;
                  var tt = [];
                  var ts = {};
                  var m = '';
                  var lines = event.data.evnt.split(/[\r\n]/);
                  for (var i in lines) {
                    var line = lines[i];
                    if (/Frag/.test(line)) {
                      //console.log('FRAG line');
                      ts = {};
                      var ts_name = '';
                      while ((m = regexts.exec(line)) !== null) {
                        if (m.index === regexts.lastIndex) {
                          regexts.lastIndex++;
                        }
                        //console.debug(m);
                        m.forEach((match, groupIndex) => {
                          if (groupIndex == 2) {
                            ts_name = match;
                          }
                        });
                      }
                      if (ts_name !== '') {
                        //console.log('Insert Line to MAP '+file_name+'/'+ts_name + ' '+  file_name+'+'+t);
                        //var segment_insert = segmentsStorage.storeSegment(file_name+'/'+ts_name, file_name+'+'+t);
                        tsDb.set(file_name + '/' + ts_name, file_name + '+' + t);
                        ts.id = file_name + '+' + t;
                        ts.url = link + '/' + line;
                        ts.masterSwarmId = file_name;
                        ts.masterManifestUri = event.data.evntt;
                        ts.sequence = t;
                        ts.responseUrl = link + '/' + line;
                        ts.requestUrl = link + '/' + line;
                        ts.range = undefined;
                        ts.streamId = undefined;
                        t++;
                        ts.priority = t;

                        tt.push(ts);
                      }
                    }
                  }
                  if (tt.length !== 0) {
                    //console.debug(tt);
                    console.log('HLS: Loader start load');
                    loader.load(tt, file_name);
                  }
                } else
                  if (event.data && event.data.req == 'insert_ts') {
                    //console.debug(event.data.evnt);
                    //console.debug(event.data.evntt);
                    var tss = JSON.parse(event.data.evnt);
                    //console.debug(tss);
                    tss.forEach((element) => {
                      //console.debug(element);
                      segmentsStorageS.storeSegment(element.url, element.id);

                    });
                  } else
                    if (event.data && event.data.req == 'log') {
                      //console.log('HLS: log: '+event.data.evnt);
                    } else
                      if (event.data && event.data.req == 'debug') {
                        //console.debug('HLS: debug: '+event.data.evnt);
                      } else
                        if (event.data && event.data.req == 'ts_length') {
                          console.log("HLS: ts loaded, size: " + event.data.evnt);
                          httpdownloadedtotal = httpdownloadedtotal + event.data.evnt;
                        }

            };
          });
        }


        //setTimeout(function(){video.src='https://6rf7dt.cfeucdn.com/silverlight/secip/104712/8359/6qCVxOdQ4s-oVwG0pzgINg/MjEzLjg3LjE2MS4xNTg=/1641757452/hls-vod-s001/flv/api/files/videos/2021/11/05/1636106522j0evf.mp4.m3u8';console.log('insert video.src');}, 5000);

        navigator.serviceWorker.addEventListener("controllerchange", (evt) => {
          console.log("controller changed");
          this.controller = navigator.serviceWorker.controller;
        });

        try {
          navigator.serviceWorker.register('/service_worker.js?3').then(onRegistration);
        } catch (e) {
          console.log(e.message)
        }

        function onRegistration(registration) {
          if (registration.waiting) {
            //console.log('waiting', registration.waiting);
            registration.waiting.addEventListener('statechange', onStateChange('waiting'));
          }
          if (registration.installing) {
            //console.log('installing', registration.installing);
            registration.installing.addEventListener('statechange', onStateChange('installing'));
          }
          if (registration.active) {
            createSwMessageChannel();
            //console.log('active', registration.active);
            registration.active.addEventListener('statechange', onStateChange('active'));
          }
        }

        function onStateChange(from) {
          return function (e) {
            if (e.target.state == 'activated') {
              createSwMessageChannel();
            } else if (e.target.state == 'installed') {
              createSwMessageChannel();
            }
            //console.log('statechange initial state ', from, 'changed to', e.target.state);
          }
        }
      }
    })();


    (async () => {

      loader = new p2pml.core.HybridLoader({
        "webRtcMaxMessageSize": 65535,
        "rtcConfig": {
          "iceServers": [{
            "urls": "stun:stun.l.google.com:19302"
          },
          {
            "urls": "stun:global.stun.twilio.com:3478"
          }
          ]
        },
        "httpDownloadMaxPriority": 0,
        "peerRequestsPerAnnounce": 5,
        "requiredSegmentsPriority": 0,
        "forwardSegmentCount": 10,
        "p2pDownloadMaxPriority": 10,
        "cachedSegmentsCount": 5,
        "cachedSegmentExpiration": 10000000,
        "simultaneousP2PDownloads": 1,
        //"p2pSegmentDownloadTimeout":        15000, //4000 //60000
        "httpUseRanges": false,
        "webRtcMaxMessageSize": 65535,
        "rtcConfig": {
          "iceServers": [{
            "urls": "stun:stun.l.google.com:19302"
          },
          {
            "urls": "stun:global.stun.twilio.com:3478"
          }
          ]
        },
        "trackerAnnounce": [
          "wss://wss.commentsmodule.com:8443/" + ws
        ]
      });


      loader.on(p2pml.core.Events.PeerConnect, function () {
        console.log("HLS: Connecteed to peer");
      });

      loader.on(p2pml.core.Events.SegmentLoaded, function (segment, peerId) {
        var peer = " HTTP";
        if (typeof peerId !== 'undefined') {
          p2pdownloadedtotal = p2pdownloadedtotal + segment.data.byteLength;
          peer = " P2P";
        } else {
          httpdownloadedtotal = httpdownloadedtotal + segment.data.byteLength;
        }
        console.log("HLS: Loading finished " + segment.id + ", bytes:" + segment.data.byteLength + " from: " + peer);

      });

      loader.on(p2pml.core.Events.SegmentError, function (segment, error) {
        console.log("HLS: Loading failed", segment, error);
      });

      loader.on(p2pml.core.Events.PieceBytesUploaded, function (method, bytes) {
        p2puploadedtotal = p2puploadedtotal + bytes;
        //console.log("Uploading pieace to P2P finished, bytes:", bytes);
      });

    })();


  } else {

    engine = Hls.DefaultConfig.loader;
    html5.hlsjsConfig.loader = engine.createLoaderClass();
    //html5.hlsjsConfig.maxBufferSize = 60*1000*1000;

  }
} catch (e) {
  console.log(e.message);
}
