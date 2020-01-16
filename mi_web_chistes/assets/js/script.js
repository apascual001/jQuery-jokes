$(function (){
	
	getJoke(); 
	
	$('#refreshjoke').on('click', function(){
		getJoke();	
	});
	
	function getJoke(){
		var $jokegoeshere = $('#jokegoeshere');
		$.ajax({
			type:'GET',
			url: 'http://localhost/practica_api/api/apiChiste.php',
			dataType:'json',
			success: function (result) {
				if(result.type == 'success'){
					$jokegoeshere.html(result.data[0].chiste);
				}else{
					alert("No se encontraron chistes");
				}
			}
		});		
	}
	
});

