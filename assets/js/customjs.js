/*created by Pranav Gupta (pg07codes) on 26-07-2018 */

//calculating offset from tops

let bannerHead=$('#banner-head').offset().top;
let whatWeDo=$('#what-we-do').offset().top;
let whoCanJoin=$('#who-can-join-us').offset().top ;
// let blog=$('#blog').offset().top ;
let connect=$('#connect').offset().top ;

//smooth scroll code here-----------

$('#logo').on('click',(e)=>{
    e.preventDefault()
    $('body,html').animate({'scrollTop': bannerHead},700)
})
// $('#link').on('click',(e)=>{
//     e.preventDefault()
//     $('body,html').animate({'scrollTop': bannerHead},600)
// })
$('#link1').on('click',(e)=>{
    e.preventDefault()
    $('body,html').animate({'scrollTop': whatWeDo},600)
})
$('#link2').on('click',(e)=>{
    e.preventDefault()
    $('body,html').animate({'scrollTop': whoCanJoin},1000)
})
// $('#link3').on('click',(e)=>{
//     e.preventDefault()
//     $('body,html').animate({'scrollTop': blog},1500)
// })
$('#link4').on('click',(e)=>{
    e.preventDefault()
    $('body,html').animate({'scrollTop': connect},1500)
})

//smooth scroll code ends here-----------

// code for changing focus on current scroll nav-element-----changed the styling and so this whole piece of code is commented out
//$("#link").focus()
//
// $(window).on('scroll',()=>{
//     let currentScroll=$(window).scrollTop()
//
//     if(currentScroll>connect-63){
//         $("#link4").focus()
//     }
//     // else if(currentScroll>blog-63){
//     //     $("#link3").focus()
//     // }
//     else if(currentScroll>whoCanJoin-63){
//         $("#link2").focus()
//     }
//     else if(currentScroll>whatWeDo-63){
//         $("#link1").focus()
//     }
//     else
//         $("#link").focus()
//
// })
// // code for changing focus on current scroll nav-element ends here


//preloader removal code
$(window).on('load',()=>{
    $("#preload").css('display','none')
})

//preloader removal code here