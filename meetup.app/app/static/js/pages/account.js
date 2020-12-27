document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
		$('#f').change( function(event) {
		    $(".account__data__column__img").fadeIn("fast").attr('style', 'background-image: url(" ' + URL.createObjectURL(event.target.files[0]) + '");');
		});
   }
};