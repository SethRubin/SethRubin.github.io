$(document).ready(function(){
  $(this).foundation();
	// if cookie does not exist
		animate();
	// make/refresh cookie
});

function animate(){
	var images = ["img/ph1.png", "img/ph2.jpg", "img/ph3.jpeg", "img/ph4.jpg", "img/ph1.png", "img/ph2.jpg"];
	var top = [5, 50, 25, 0, 55, 30];
	var delay = 0;

	// fade out screen
	$("div.overlay").delay(1000).fadeIn(1000);

	// slide images on screen
	$.each(images, function(index, src){
		var image = $("<img>").attr("src", src).addClass("animate").appendTo("body")
		                      .css("top", top[index % top.length] + (Math.random() * 20 - 10) + "%");
		var movement = 40 + (Math.random() * 30 - 15);
		if (index % 2) {
			var properties = { left: "+=" + movement + "%", opacity: 1.5 };
			image.css("left", "-25%");
		} else {
			var properties =  { right: "+=" + movement + "%", opacity: 1.5 };
			image.css("right", "-25%");
		}
		setTimeout(function(){
			image.animate(properties, 5000);
		}, delay + 2000);
		delay += 1000;
	});

	// images fly off screen
	$("img.animate").each(function(index, image){
		var num1 = Math.random() * 500 - 250;
		num1 = num1 >= 0 ? num1 + 100 : num1 - 100;
		var num2 = Math.random() * 500 - 250;
		num2 = num2 >= 0 ? num2 + 100 : num2 - 100;
		var properties = index % 2 ? {left: num1 + "%", top: num2 + "%"} : {right: num1 + "%", top: num2 + "%"};
		setTimeout(function(){
			$(image).animate(properties, 2000);
			setTimeout(function(){
				$(image).remove();
			}, 2000);
		}, delay + 7000);
		delay += 20;
	});

	// show name
	var div = $("<div>").addClass("name").appendTo("body").html("<h1 class='name'>Seth Rubin</h1><h3 class='name'>Software Developer</h3>");
	div.delay(delay + 7000).fadeIn(1000).delay(3000).fadeOut(1000);
	setTimeout(function(){
		div.remove();
	}, delay + 12000);

	// fade in screen
	$("div.overlay").delay(delay + 11500).fadeOut(1000);
}