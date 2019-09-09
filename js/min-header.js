;(function(){
	"use strict"
	var gh=document.querySelector(".gd-header");
	$(window).on('scroll', function(){
            var _scroll = $(window).scrollTop();
            if(_scroll >200 ){
            	gh.style.display="block";
//              $('#header').addClass('gd-header');
            }else{
            	gh.style.display="none";
//              $('#header').removeClass('gd-header');
            }
        });
        
        
        //热销榜切换
         $(function(){
       $(".ranking_list").click(function(){
           $(this).addClass('on-tab');
           $(this).siblings().removeClass('on-tab');

           var tabId = $(this).attr("data-id");
           $("#my_ranktab_"+tabId).fadeIn("slow");
           $("#my_ranktab_"+tabId).siblings(".my_ranktab_content").hide();
       });
    });
})();
