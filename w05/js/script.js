$("#preamble-btn-1").click(function(){
    alert("clicked");
   
})

$("#preamble-btn-2").click(function(){

    $("#preamble-btn-2").toggleClass("rotate")

})





$(document).scroll(function() {
    let distance = $(document).scrollTop();
    let height = $(document).height()-$(window).height();
    let ratio = distance/height;

    console.log(distance)

    $(".header-right").html(ratio);

    $("h1").css({
        "transform":"rotate" + (360)
    })


    // $(".header-right").html("you have travelled" + distance)
})
// 1. when you click on the title element
// 2. toggle the class "active" on the #menu element


$(".album-thumbs").flickity({
    wrapAround: true,
    freescroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false
})

// 1. remove the dots (carousel)
// 2. make the whole thing fade