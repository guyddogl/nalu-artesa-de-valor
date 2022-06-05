function getUrlParameter() {
  let urlParams = new URLSearchParams(window.location.search);
  let urlObj = {
    utm_id: urlParams.get('utm_id'), 
    utm_campaign: urlParams.get('utm_campaign'), 
    utm_source: urlParams.get('utm_source'), 
    utm_medium: urlParams.get('utm_medium'), 
    utm_term: urlParams.get('utm_term'), 
    utm_content: urlParams.get('utm_content'), 
    src: urlParams.get('src')
  };
  let utms ="";
  for (let index = 0; index < Object.keys(urlObj).length; index += 1) {
      if (Object.values(urlObj)[index] !== null) {
          utms += `&${Object.keys(urlObj)[index]}=${Object.values(urlObj)[index]}`;
      }
  }
  let urlOriginal = document.getElementById('checkout').href;
  return document.getElementById('checkout').href=`${urlOriginal}${utms}`;
}
getUrlParameter();

var video_wrapper1 = $('.youtube-video-place-1');
if(video_wrapper1.length){
  $('.play-youtube-video-1').on('click', function(){
  video_wrapper1.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video_wrapper1.data('yt-url') + '"></iframe>');
  });
}

var video_wrapper2 = $('.youtube-video-place-2');
if(video_wrapper2.length){
  $('.play-youtube-video-2').on('click', function(){
  video_wrapper2.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video_wrapper2.data('yt-url') + '"></iframe>');
  });
}

var video_wrapper3 = $('.youtube-video-place-3');
if(video_wrapper3.length){
  $('.play-youtube-video-3').on('click', function(){
  video_wrapper3.html('<iframe allowfullscreen frameborder="0" class="embed-responsive-item" src="' + video_wrapper3.data('yt-url') + '"></iframe>');
  });
}