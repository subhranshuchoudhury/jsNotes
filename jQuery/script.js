// selecting elements with jQuery

$('h1');
$('#div h1');
$('button'); //select all buttons

// manupulating css

$('h1').css('color','green');
$('h1').css('font-size','50px');
console.log($('h1').css('color'));

// remove a class

$('h1').removeClass('className');

// add class

$('h1').addClass("className className2"); // add more than one class

// check if class available or not

$('h1').hasClass('className'); // true
console.log($('h1').hasClass('className'));

// manupulating text

$('h1').text("jQuery");
console.log($('h1').text()) // display the text

// add HTML (like innerHTML)

$('h1').html("<i>jQuery</i>");

// manupulate attribute

console.log($("a").attr("href")); // output: nothing
$("a").attr("href","https://about.me/subhranshu");

// addEventListner

$("h1").click(function(){
	$("h1").css("color","red");
});

$("button").click(function(){
	$("h1").text("Button Clicked")
});

$("input").keypress(function(event){
	$("h1").text(event.key)
})

// for all DOM events

$("h1").on("mouseover",function(){
	console.log("hover");
})


// adding and removing elements

// $('h1').before("<button>jQuery Button</button>");
$('h1').after("<button>jQuery Button</button>");
// $('h1').prepend("<button>jQuery Button</button>"); // inside element, before the text.
// $('h1').append("<button>jQuery Button</button>");

// $('button').remove();  // remove element

// hide and show element

$("h1").hide();
$("h1").show();

// animation

$("h1").fadeOut();
$("h1").fadeIn();
// $("h1").fadeToggle();
$("h1").slideUp();
$("h1").slideDown();

// custom animation

$('h1').animate({opacity: 0.5});
$('h1').animate({margin: "30%"});

// combine animation

$('h1').slideUp().slideDown().animate({opacity: 0.5});
