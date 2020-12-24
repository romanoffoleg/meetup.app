function changeText() {
  var maxlength = 33;
  var strGlobal = document.getElementsByClassName("message__column__text");
  var strNum = strGlobal.length;
  for (var i = 0; i < strNum; i++) {
    strGlobal[i].innerHTML = strGlobal[i].innerHTML.slice(0, maxlength) + '...';
  }
}

function changeQuantity() {
  var strGlobal = document.getElementsByClassName("message__column__quantity");
  var strNum = strGlobal.length;
  for (var i = 0; i < strNum; i++) {
    if(strGlobal[i].innerHTML.length > 2) {
    	strGlobal[i].innerHTML = "99+";
    }
  }
}

document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
     changeText();
     changeQuantity();
   }
};