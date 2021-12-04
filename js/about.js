$(function(){
	setTimeout(function(){$('#anime').hide();}, 4000)
	setTimeout(function(){start()},4500)
})
const windowtick = () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	if(width > height) {
		$('.title').css({width:'60%',left:'20%'});
	}else {
		$('.title').css({width:'100%',left:'0%'});
	}
	setTimeout(windowtick,100);
}
function start(){
	windowtick();
	$('#alls').show();
}