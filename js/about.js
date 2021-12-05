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
let scroll = 0;
function start(){
	windowtick();
	$('#alls').show();
	$('body').css('overflow-y','scroll')
	$(window).scroll(function (){
		if ($(this).scrollTop() <= 0) {
			scroll -= 2;
		}else if($(this).scrollTop() >= 2) {
			scroll += 2;
		}
		if (scroll < 0) {
			scroll = 0;
		}
		let top = 100 - scroll;
		let opacity = scroll / 100;
		console.log(scroll);
		$('#about').css('top',top + 'vh');
		if (opacity <= 0.8) {
			$('#opacity').css('opacity',opacity);
		}
		window.scrollTo(0,1);
	})
}
$('#bottom').click(function(){
	alert("Pls scroll.")
})