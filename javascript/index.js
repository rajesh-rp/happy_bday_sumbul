var video=$("video")[0];
$(".wish-button-play").on("click",function(){
    video.play();
});
$(".wish-button-pause").on("click",function(){
    video.pause();
});