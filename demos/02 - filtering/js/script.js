$(".filters button").click(function () {
    const yearClass = $(this).data("year");

    // show matched records and hide all other records
    $(".record").filter(yearClass).fadeIn(500);
    $(".record").not(yearClass).fadeOut(500);
});