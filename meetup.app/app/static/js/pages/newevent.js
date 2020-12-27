document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
		$('#f').change( function(event) {
		    $(".newevent__image").fadeIn("fast").attr('style', 'background-image: url(" ' + URL.createObjectURL(event.target.files[0]) + '");');
		});
   }
};