window.onload =function(){
  document.getElementsByClassName("fa-bars")[0].addEventListener("click", showMenu);}
function showMenu() {
  var menu = document.getElementsByClassName("mobile_menu")[0];
  if (menu.style.display == "none"){
    menu.style.display = "flex"
  }
  else menu.style.display = "none"
}