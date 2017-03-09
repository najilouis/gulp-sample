// es5
// $(document).ready(function(){
// 	$('a').click(function(e) {
// 		alert('clicked!!!');
// 		e.preventDefault();
// 	});
// });

// babel (es6 / es2015)
$(document).ready(() => {
	$('a').click((e) => {
		alert('clicked!!!');
		e.preventDefault();
	});
});