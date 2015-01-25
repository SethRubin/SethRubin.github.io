$(document).ready(function(){
  $(this).foundation();
	// if cookie does not exist
		animate();
	// make/refresh cookie
});

function animate(){
	var images = ["img/ph1.png", "img/ph2.jpg", "img/ph3.jpeg", "img/ph4.jpg", "img/ph1.png", "img/ph2.jpg"]
	var top = [5, 55, 30, 0, 60, 35];
	var delay = 0;
	$("div.overlay").delay(1000).fadeTo(1000, 0.5);
	$.each(images, function(index, src){
		var image = $("<img>").attr("src", src).addClass("animate").appendTo("body")
		                      .css("top", top[index % top.length] + (Math.random() * 20 - 10) + "%");
		var properties = { opacity: 1.5 };
		var movement = 40 + (Math.random() * 30 - 15);
		if (index % 2) {
			$.extend(properties, { left: "+=" + movement + "%" });
			image.css("left", "-25%");
		} else {
			$.extend(properties, { right: "+=" + movement + "%" });
			image.css("right", "-25%");
		}
		setTimeout(function(){
			image.animate(properties, 5000);
		}, delay + 2000);
		delay += 1000;
	});
	var side = true;
	$("img.animate").each(function(){
		var image = $(this);
		var num1 = Math.random() * 500 - 250;
		num1 = num1 >= 0 ? num1 + 100 : num1 - 100;
		var num2 = Math.random() * 500 - 250;
		num2 = num2 >= 0 ? num2 + 100 : num2 - 100;
		if (side) {
			var properties = {right: num1 + "%", top: num2 + "%"};
		} else {
			var properties = {left: num1 + "%", top: num2 + "%"};
		}
		side = !side;
		setTimeout(function(){
			image.animate(properties, 2500);
			setTimeout(function(){
				image.remove();
			}, 2500);
		}, delay + 7000);
		delay += 20;
	});
	var div = $("<div>").addClass("name").appendTo("body").html("<h1>Seth Rubin</h1><h3>Software Developer</h3>");
	div.delay(delay + 9000).fadeIn(1000).delay(2000).fadeOut(1000);
	setTimeout(function(){
		div.remove();
	}, delay + 13000);
	$("div.overlay").delay(delay + 12500).fadeOut(1000);
}