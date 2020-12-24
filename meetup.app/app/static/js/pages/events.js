document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
     let schedule = document.getElementById('schedule'),
     	 active = document.getElementById('active'),
     	 showActive = document.getElementById('showActive'),
     	 showSchedule = document.getElementById('showSchedule');

     schedule.style.display = "none";
	 showActive.onclick = function() { 
		 schedule.style.display = "none";
		 active.style.display = "block";
		 showActive.classList.add("events__tabs__item_active");
		 showSchedule.classList.remove("events__tabs__item_active");
	 }
	 showSchedule.onclick = function() { 
		 active.style.display = "none";
		 schedule.style.display = "block";
		 showSchedule.classList.add("events__tabs__item_active");
		 showActive.classList.remove("events__tabs__item_active");
	 }
   }
	function Calendar(id, year, month) {
		var Dlast = new Date(year,month+1,0).getDate(),
    	D = new Date(year,month,Dlast),
    	DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    	DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
	    calendar = '<tr>',
	    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
		if (DNfirst != 0) {
  			for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
		} else{
  			for(var  i = 0; i < 6; i++) calendar += '<td>';
		}		
		for(var  i = 1; i <= Dlast; i++) {
	  		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
	    			calendar += '<td class="events__schedule__month_active">' + i;
	  		} else{
	    		calendar += '<td>' + i;
	 		}
	  		if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
	    		calendar += '<tr>';
	  		}
		}
		for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
		document.querySelector('#'+id+' tbody').innerHTML = calendar;
		document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
		document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
		document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
			if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
			    document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
			}
	}
	Calendar("events__schedule__month", new Date().getFullYear(), new Date().getMonth());
	document.querySelector('#events__schedule__month thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
			Calendar("events__schedule__month", document.querySelector('#events__schedule__month thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#events__schedule__month thead td:nth-child(2)').dataset.month)-1);
	}
	document.querySelector('#events__schedule__month thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
		Calendar("events__schedule__month", document.querySelector('#events__schedule__month thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#events__schedule__month thead td:nth-child(2)').dataset.month)+1);
	}
};