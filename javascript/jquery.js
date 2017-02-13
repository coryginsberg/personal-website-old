/**
 * Created by Cory Ginsberg on 11/29/2015.
 *
 * When the corresponding link in the navbar is clicked,
 * animate the scroll to the linked container.
 */
$(function () {

    $("#portBtn").click(function (e) {
        //e.preventDefault();
        //$.scrollTo($('#portfolio').offset().top, 'slow');
    });

    $("#aboutBtn").click(function (e) {
        //e.preventDefault();
        //$.scrollTo($('#about-me').offset().top, 'slow');
    });

    $("assuranceModal").click(function () {
        $("assuranceModal").modal('show');
    });

    $("breathEZModal").click(function () {
        $("breathEZModal").modal('show');
    });

    $("boilingPointModal").click(function () {
        $("boilingPointModal").modal('show');
    })

});