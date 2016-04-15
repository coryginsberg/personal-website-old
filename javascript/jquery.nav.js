/**
 * Created by Cory Ginsberg on 11/29/2015.
 *
 * When the corresponding link in the navbar is clicked,
 * animate the scroll to the linked container.
 */
$(function () {

    $("#portBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#portfolio').offset().top - 50, 'slow');
    });

    $("#aboutBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#about-me').offset().top - 50, 'slow');
    });

    $("#contactBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#contact').offset().top - 50, 'slow');
    });
});