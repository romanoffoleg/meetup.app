function changeText() {
  var maxlength = 33;
  var strGlobal = document.getElementsByClassName("user-list__item__status");
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