[...document.querySelectorAll('[data-bs-toggle="popover"]')]
  .forEach(el => new bootstrap.Popover(el))
  

function displayOn(){
  if(document.querySelector('#competances').style.display=='flex'){
  return document.querySelector('#competances').style.display='none';}
  document.querySelector('#competances').style.display='flex';
    
  

  }