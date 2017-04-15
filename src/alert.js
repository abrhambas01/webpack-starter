import $ from 'jquery'

function notify (message){
	$('.toggleChange').on('click',function(evt){
		alert(message) ; 
	});
}


function log (message) { 
	console.log(message) ; 
}

export default { 
	notify : notify , 
	log   : log
}




