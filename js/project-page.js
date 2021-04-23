
$(function () {
  var allReadMore = $('.read-more')
  allReadMore.each(function(index) {
    $(this).on("click", function(){
        const par=$(this).parent()[0];
        console.log(par)
        xgf=par;
        const readMore=par.getElementsByClassName('read-more');
        const moreDetails=par.getElementsByClassName('more-details');
        console.log({readMore,moreDetails})
        $(readMore).css("display","none");
        $(moreDetails).css("display","block");
    });
});





});







