/**
 * Created by Cory Ginsberg on 11/29/2015.
 *
 * When the corresponding link in the navbar is clicked,
 * animate the scroll to the linked container.
 */
$(function () {

    $("#aboutBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#about-me'), 'slow');
    });

    $("#portBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#portfolio'), 'slow');
    });

    $("#contactBtn").click(function (e) {
        e.preventDefault();
        $.scrollTo($('#contact'), 'slow');
    });
});