function phoneMask() {
    if ($('input[type="tel"]').length || $('input[type="tel"]').length) {
        $('input[type="tel"]').inputmask("+38(099) 999-99-99");  //static mask
    }
}

function immediatelyAppear()
{
	var text = "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	$('.js-immediately').find('p').text(text);

}
function hoverAppear()
{
	var text = "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	$('.js-hover .hover').hover(function()
		{
			$(this).parent().find('p').text(text);
		});
}
function scrollAppear()
{
	var text = "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	var block = $('.js-scroll');	

	$(window).scroll(function(){
		var bottom_of_object = block.offset().top + block.outerHeight();
    	var bottom_of_window = $(window).scrollTop() + $(window).height();	
    	
		if(bottom_of_window > bottom_of_object+100)
		{			
			block.find('p').text(text).animate({'opacity':'1'},1500);
		}
	});
}
function clickAppear()
{
	var text = "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	$('.js-click .click').on('click',function()
		{
			$(this).parent().find('p').text(text);
		});
}
function displayAppear()
{	
	$('.js-css-click .click').on('click',function()
		{
			$(this).parent().find('p').css('display','block');
		});
}

jQuery(document).ready(function($) {
    phoneMask();
    immediatelyAppear();
    hoverAppear();
    scrollAppear();
    clickAppear();
    displayAppear();
});

jQuery(window).resize(function (){

});