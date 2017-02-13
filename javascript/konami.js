$(document).ready(function() {
	$(kcode).css("font-family", "Open Sans, sans-serif");
});

(function( $ ) {
	"use strict";

	$(function() {
		$( window ).konami({
			cheat: function() {
				$(kcode).css("font-family", "Comic Sans MS, sans-serif");
				alert( 'Cheat code activated!' );
			} // end cheat
		});
	});
}(jQuery));