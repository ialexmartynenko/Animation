function setEqualHeight(columns)
{
var tallestcolumn = 0;
columns.each(
function()
{
currentHeight = $(this).height();
if(currentHeight > tallestcolumn)
{
tallestcolumn = currentHeight;
}
}
);
columns.height(tallestcolumn);
}


$(document).ready(function() {
	setEqualHeight($(".boxes > .books"));
    setEqualHeight($(".books .price"));
});


$(window).scroll(function(){
	console.log($(window).scrollTop())
	if($(window).scrollTop() >= 1400){
		$('.book_light').addClass('book_light_move');
		$('.book_classic').addClass('book_classic_move');
		$('.book_premium').addClass('book_premium_move');
	}
});