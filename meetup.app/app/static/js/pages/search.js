function changeText() {
  var maxlength = 255;
  var strGlobal = document.getElementsByClassName("events-list__item__description");
  var strNum = strGlobal.length;
  for (var i = 0; i < strNum; i++) {
    strGlobal[i].innerHTML = strGlobal[i].innerHTML.slice(0, maxlength) + '...';
  }
}

document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
     changeText();
   }
};