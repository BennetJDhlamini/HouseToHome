let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let scrollTop = document.querySelector('#scroll-top');

searchBtn.onclick = () =>{
  searchForm.classList.toggle('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');

  if(window.scrollY > 60){
    scrollTop.classList.add('active');
  }else{
    scrollTop.classList.remove('active');
  }
}