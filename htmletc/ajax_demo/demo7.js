// Using JQuery to attach dynamic styles to some html

$(document).ready(function() {

    $(".line").css("line-height", "100%");

    $(".stanza").css("margin-bottom", "15px").css("margin-left", "15px");

    $(".author").css("font-size", "50pt").css("margin-left", "35px");

    $("#first .line").css("color", "brown");

    $(".stanza").css("display", "none");

    $(".stanza").fadeIn(2000);

});
