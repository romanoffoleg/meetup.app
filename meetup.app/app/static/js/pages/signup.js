document.onreadystatechange = function(){
   if(document.readyState === 'complete') {
   		var obj1 = document.getElementById('signup__step1');
   		var obj2 = document.getElementById('signup__step2');
   		var obj3 = document.getElementById('signup__step3');
   		var obj4 = document.getElementById('signup__step4');

   		obj1.style.display = "inherit";

		jscontiniue.onclick = function() {
			if (obj1.style.display == "inherit") {
		        if (document.getElementById('name').value == '')
		        {
		        	document.getElementById("name__error").innerHTML = "Пожалуйста заполните поле 'Имя'.";
		        } else {
					obj1.style.display = "none";
					obj2.style.display = "inherit";
				}
			}

			else if(obj2.style.display == "inherit") {
				if (document.getElementById('password').value == '')
				{
					document.getElementById("password__error").innerHTML = "Пожалуйста заполните поле 'Пароль'.";
				} else {
					obj2.style.display = "none";
					obj3.style.display = "inherit";
				}
			}

			else if(obj3.style.display == "inherit") {
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				var address = document.forms['signup'].elements['email'].value;
				if(reg.test(address) == false) {
					document.getElementById("email__error").innerHTML = "Пожалуйста введите действительный 'E-mail'.";
				}
				else {
					obj3.style.display = "none";
					obj4.style.display = "inherit";
				}
			}

			else {
 				if (document.getElementById('code').value != '1234')
		        {
		        	document.getElementById("code__error").innerHTML = "Неверный код!";
		        } 
				else { 
					window.location.replace('login.html');
				}
			}

		};
   }
};