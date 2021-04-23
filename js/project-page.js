// $(function () {
//     $('.pop').popover({
//         container: 'body'
//     })
// })

// $(function () {
//     $('.pop').popover()
// })

// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

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







