$(function() {
  
  $("ul#work li a").click(function(){
  	$("#work-images li").hide();
  	var showImg = $(this).attr('href');
  	$("#work-images li"+showImg).show();

  	return false;
  });

});
