$(document).ready(function(){
	// if cookie does not exist
		animate();
	// make/refresh cookie
});

function animate(){
	$("div").delay(1000).fadeTo(1000, 0.7);
	var images = ["img/ph1.png", "img/ph2.jpg", "img/ph3.jpeg", "img/ph4.jpg"]
	var delay = 0;
	// randomize position, side, etc
	$.each(images, function(index, image){
		$("<img>").attr("src", image).appendTo('body').delay(2000+delay).queue(function(){
    	$(this).addClass('move').dequeue();
		});
		delay += 1000;
	});
	// send pics in all directions, then delete
	setTimeout(function(){
		$(".move").remove();
	}, 5000+delay);
	$("div").delay(5000+delay).fadeTo(1000, 1);
}