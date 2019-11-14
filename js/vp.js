
function vp(){
  return new Promise(function(resolve, reject){
    we.addEventListener("canplaythrough",resolve)
  })
}
vp().then(function(){
  window.addEventListener("scroll",function(e){
    if(we.getBoundingClientRect().top<window.innerHeight/2*1.4){
      document.getElementById('we').play()
    }
    if(we.getBoundingClientRect().top>window.innerHeight/2*2 ){
      we.pause()
      we.currentTime = 0;
    }
  })
})
