$(document).ready(function(){
    $('#virat').hide();
    $("#ranveer").hide();
    $(".errorName").hide();
    $(".errorEmail").hide();
    $(".errorPhone").hide();
    $("#default").show();

});

$("#article1").click(function(){
    $("#default").hide();
    $("#ranveer").hide();
    $("#virat").show();
});

$("#article2").click(function(){
    $("#ranveer").show();
    $("#default").hide();
    $("#virat").hide();
});

