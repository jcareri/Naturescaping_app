$( document ).ready(function() {
    $(".dragTooltip").hide();
    $(".dragTarget").hide();
	$(".endScreen").hide();
	$(".bottomSheet").delay(600).animate({top: "53%"}, 1400);
	$(".gardenImage").delay(1500).animate({height: "67%"});
    $(".homeTooltip").delay(2500).fadeIn(800);
    console.log("ready");
});

$( ".mainCTA" ).on( "click", function() {
    $(".addPlantScreen").animate({top: "0%"});
    $(".addTooltipContainer").delay(800).fadeIn(800);
    $(".homeTooltip").css("display", "none");
    console.log("open plant list");
});

$( ".addBack" ).on( "click", function() {
    $(".addPlantScreen").animate({top: "100%"});
    $(".homeTooltip").delay(800).fadeIn(800);
    $(".addTooltipContainer").css("display", "none");
    console.log( "back to home" );
});

$( ".basil" ).on( "click", function() {
    $(".homeTooltip").css("display", "none");
    $(".addPlantScreen").animate({top: "100%"});
    $(".bottomNav").delay(300).animate({top: "100%"});
    $(".mainCTAContainer").delay(300).animate({top: "100%"});
    $(".mainCTA").delay(300).animate({top: "100%"});
    $(".bottomSheetContainer").delay(300).animate({top: "120%"});
    $(".bottomSheet").delay(300).animate({top: "120%"});
    $(".gardenImage").delay(300).animate({height: "100%"});
    $(".bottomSheet").delay(400).hide();
    $(".dragTarget").delay(800).fadeIn(800);
    $(".dragTooltip").delay(800).fadeIn(800);
    console.log("ready for drag");
});

$("document").ready(function() {
    $(".plantTile").draggable({
        revert: true
    });
    $(".dragTarget").droppable({
        accept: ".plantTile",
        drop: function(event, ui) {
        $(this).append($(ui.draggable));
        }
    });
    console.log("drag is working!");
});


$( ".plantTile" ).draggable({
      start: function() {
        $(".dragTooltip").fadeOut(300);
		$(".plantTile").animate({"width": "45px", "height": "45px", "border-radius": "10px"}, 800);
        $(".plantTileIcon").animate({"width": "25px", "height": "25px"}, 800);
        $(".plantTileText").animate({"font-size": "8px"}, 800);
      },
      stop: function() {
        $(".plantTile").delay(300).fadeOut(700);
        $(".checkmark").delay(900).fadeIn(800);
		$(".checkmark").delay(1200).fadeOut(500);
		$("#circle1").delay(3300).fadeOut(500);
		$('.gardenImage')
  			.delay(3600)
  			.queue(function (next) { 
    			$(this).css('background-image', 'url(Images/withbasil.png)'); 
    			next(); 
  			});
		$(".endScreen").delay(6000).fadeIn(300);
      }
    });

$( ".endScreen" ).on( "click", function() {
    location.reload(true);
});