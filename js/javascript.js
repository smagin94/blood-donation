/* make sure everything is loaded before we execute our script */
window.onload = function () {
    /* initialise skrollr */
    var s = skrollr.init();
};

$(".menuIcon").click(function () {
    $("#slideMenu").toggle("slide");
});

$("#slideMenu ul li").click(function () {
    $("#slideMenu").toggle("slide");
});

$("#redCellParent").mouseenter(function () {
    $(".redCellChild").css("background-color", "#353535");
    $(".redCellChild").css("color", "white");
    $("#redCellParent").css("background-color", "#353535");
    $("#redCellParent").css("color", "white");
});

$("#redCellParent").mouseleave(function () {
    $(".redCellChild").css("background-color", "white");
    $(".redCellChild").css("color", "black");
    $("#redCellParent").css("background-color", "white");
    $("#redCellParent").css("color", "black");
});

$("#plasmaParent").mouseenter(function () {
    $(".plasmaChild").css("background-color", "#353535");
    $(".plasmaChild").css("color", "white");
    $("#plasmaParent").css("background-color", "#353535");
    $("#plasmaParent").css("color", "white");
});

$("#plasmaParent").mouseleave(function () {
    $(".plasmaChild").css("background-color", "white");
    $(".plasmaChild").css("color", "black");
    $("#plasmaParent").css("background-color", "white");
    $("#plasmaParent").css("color", "black");
});

$("#plateletsParent").mouseenter(function () {
    $(".plateletsChild").css("background-color", "#353535");
    $(".plateletsChild").css("color", "white");
    $("#plateletsParent").css("background-color", "#353535");
    $("#plateletsParent").css("color", "white");
});

$("#plateletsParent").mouseleave(function () {
    $(".plateletsChild").css("background-color", "white");
    $(".plateletsChild").css("color", "black");
    $("#plateletsParent").css("background-color", "white");
    $("#plateletsParent").css("color", "black");
});

/* Australia Canvas Map
*/
var c_canvas = document.getElementById("australiaCanvas");
var context = c_canvas.getContext("2d");

context.moveTo(0, 220);
context.lineTo(110, 150);
context.lineTo(110, 95);
context.lineTo(140, 95);
context.lineTo(140, 60);
context.lineTo(200, 60);
context.lineTo(200, 15);
context.lineTo(300, 15);
context.lineTo(285, 60);
context.lineTo(400, 100);
context.lineTo(400, 0);
context.lineTo(565, 220);
context.lineTo(565, 285);
context.lineTo(490, 420);
context.lineTo(370, 420);
context.lineTo(370, 380);
context.lineTo(315, 380);
context.lineTo(315, 350);
context.lineTo(250, 310);
context.lineTo(100, 380);
context.lineTo(60, 380);
context.lineTo(60, 350);
context.lineTo(0, 220);

context.moveTo(370, 450);
context.lineTo(420, 515);
context.lineTo(470, 450);
context.lineTo(370, 450);

context.fillStyle = "#fff";
context.fill();

//event handler for togggle 
var isPresent = true; 

$("#toggler").click(function(){

    $("#toggleButton").toggleClass("rightButton");
//toggle the class that moves the slider button


if (isPresent) {
    //changing to 2025
    $("#presentSwitch").html("2,700,000");
    $('#lines').animateNumber({ number: 2700000 });
    isPresent = false;
} else if (!isPresent) {
    //toggling to 2015
    $("#presentSwitch").html("27,000");
    $('#lines').animateNumber({ number: 27000 });
    isPresent = true;
}

});


