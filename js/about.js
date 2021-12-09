$(function(){
	setTimeout(function(){$('#anime').hide();}, 4000)
	setTimeout(function(){start()},4500)
})
const windowtick = () => {
	let height = window.innerHeight;
	let width = window.innerWidth;
	if(width > height) {
		$('.title').css({width:'60%',left:'20%'});
		$('#opacity').css('height','100%');
	}else {
		$('.title').css({width:'100%',left:'0%'});
		$('#opacity').css('height','0%');
		$('#about').css('top','65%');
	}
	setTimeout(windowtick,100);
}
function start(){
	windowtick();
	$('#alls').show();
	$('body').css('overflow-y','scroll')
	$(window).scroll(function (){
		let scroll = $(this).scrollTop() / 10;
		let top = 100 - scroll;
		let opacity = scroll / 100;
		console.log(scroll);
		if (opacity <= 0.8) {
			$('#opacity').css('opacity',opacity);
		}
	})
}
$('#bottom').click(function(){
	alert("Pls scroll.")
})