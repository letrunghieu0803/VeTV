window.onload = init

function init(){
  let currentView = localStorage.getItem('currentView');

  if(currentView){
    view.showScreen(currentView)
  } else{
    view.showScreen('home')
  }
  
}
