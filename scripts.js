$(document).ready(function(){
    $("nav ul li a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("href");
        
        $("section").hide();
        $(target).fadeIn();
    });
    
    // Show the introduction section by default
    $("#introductie").show();
    
});
