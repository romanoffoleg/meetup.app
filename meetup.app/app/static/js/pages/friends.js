document.onreadystatechange = function() {
	if(document.readyState === 'complete') {
		let add = document.getElementById("add");
		let del = document.getElementById("del");

	    del.addEventListener("click", function(){
	    	$(this).parent().parent(".friends-list__item").remove();
	    });

	    add.addEventListener("click", function(){
	    	del.parentNode.parentNode.removeChild(del.parentNode);
	    });
	}
};