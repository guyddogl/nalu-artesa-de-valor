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