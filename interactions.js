$( document ).ready(function() {
    $( ".homeTooltip" ).hide();
    $( ".homeTooltip" ).delay(800).fadeIn(800);
    console.log( "ready" );
});

$( ".mainCTA" ).on( "click", function() {
    $(".addPlantScreen").animate({top: "0%"});
    console.log( "open plant list" );
});

$( ".addBack" ).on( "click", function() {
    $(".addPlantScreen").animate({top: "100%"});
    console.log( "back to home" );
});