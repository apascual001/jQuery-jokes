$(function (){
	
	getJoke(); 
	
	$('#refreshjoke').on('click', function(){
		getJoke();	
	});
	
	function getJoke(){
		var $jokegoeshere = $('#jokegoeshere');
		$.ajax({
			type:'GET',
			url: 'http://api.icndb.com/jokes/random',
			dataType:'json',
			success: function (result) {
				if(result.type == 'success'){
					$jokegoeshere.html(result.value.joke);
					console.log(result.value.joke);
				}else{
					alert("No se encontraron chistes");
				}
			}
		});		
	}
	
});

