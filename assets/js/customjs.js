/*created by Pranav Gupta (pg07codes) on 26-07-2018 */

//smooth scroll code here-----------
$('#link1').on('click',(e)=>{
    e.preventDefault()
    let x=$('#what-we-do').offset().top;
    $('body,html').animate({'scrollTop': x},500)
})
$('#link2').on('click',(e)=>{
    e.preventDefault()
    let x=$('#who-can-join').offset().top;
    $('body,html').animate({'scrollTop': x},1000)
})
$('#link3').on('click',(e)=>{
    e.preventDefault()
    let x=$('#blog').offset().top;
    $('body,html').animate({'scrollTop': x},1500)
})
$('#link4').on('click',(e)=>{
    e.preventDefault()
    let x=$('#connect').offset().top;
    $('body,html').animate({'scrollTop': x},2000)
})

//smooth scroll code ends here-----------