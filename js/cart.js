let scrollTop = document.querySelector('#scroll-top');

window.onscroll = () =>{
  if(window.scrollY > 60){
    scrollTop.classList.add('active');
  }else{
    scrollTop.classList.remove('active');
  }
}