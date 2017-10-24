//I put everything in this function.

console.log('script file loaded...');

$(document).ready {function() {

	console.log('in my doc ready f/n');

	$('#my-div').addClass('my-border');

	$('.div-class').on('mouseover', function() {
		$(this).append(' <span>moused over </span>');
});
