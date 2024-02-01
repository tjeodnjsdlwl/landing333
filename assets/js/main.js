

gsap.registerPlugin(ScrollTrigger);
setTimeout(() => {
    $('.intro').addClass('hide');
  }, 500);

let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if (curr > lastScroll) {
        $('.fix-menu').addClass('hide');
        $('.fix-menu').removeClass('open');
    } else{
        $('.fix-menu').removeClass('hide');
    }
    lastScroll = curr;
})



const headTxt = new SplitType('.title h2', { types: 'words, chars', });


$('.btn-open').click(function(){
    $(this).parent().parent().toggleClass('open');
});
$('.btn-close').click(function(){
    $('.fix-menu').removeClass('open');
});
$(document).click(function(e){
    if (  $('.fix-menu').has(e.target).length === 0 ) {
        $('.fix-menu').removeClass('open');
    }
});



gsap.utils.toArray('.sc-common').forEach(element => {
    item01 = gsap.timeline({
        scrollTrigger:{
            trigger:element,
            start:"0% 80%",
            end:"100% 100%",
            toggleActions:"play resume resume reverse",  
        },
    })
    item01.from(element.querySelector('.title h2'),1,{ scale:1.2},'a');
    item01.from(element.querySelectorAll('.title .char'),1,{ 
        opacity:0,
        stagger:{
            from:"random",
            each:0.01,
        }

    },'a');

});

work = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-work",
        start:"0 80%",
        end:"100% 100%",
        scrub:4,
    },
})
work.set('.sc-work .work-list > li:nth-child(2n)',{y:200});
work.to('.sc-work .work-list > li:nth-child(2n)',{y:-100});


careerTitle = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service .title",
        start:"0 80%",
        end:"100% 0%",
        // markers:true,
        toggleActions:"play reverse play reverse",
    },
})
// careerTitle.from('.sc-service .title h2',{
//     xPercent:-100
// },'a')
careerTitle.from('.sc-service .title .char',{
    opacity:0,
    yPercent:100,
    stagger:{
        from:"random",
        each:0.1,
    }
})

marqueeTl = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service",
        start:"0 100%",
        end:"100% 0%",
        scrub:0
        // toggleActions:"play resume resume reverse",
    },
})
marqueeTl.to('.row .marquee-inner',{xPercent:-10},'a')
marqueeTl.to('.reverse .marquee-inner',{xPercent:10},'a')


// flower = gsap.timeline({
//     scrollTrigger:{
//         trigger:".sc-flower",
//         start:"0 80%",
//         end:"100% 100%",
//         toggleActions:"play resume resume reverse",
//     },
// })
// flower.from('.sc-flower .bg-area', {scale:0.9});

// card = gsap.timeline({
//     scrollTrigger:{
//         trigger:".sc-card",
//         start:"0 0",
//         end:"100% 100%",
//         scrub:0,
//     },
// })
// // card.set('.sc-card .card-list', {x:0, y:0});
//  card.to('.sc-card .card-list', {x:-610, y:-1890});


 work = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-business",
        start:"0% 50%",
        end:"100% 50%",
        scrub:0,
    },
})
work.from('.sc-business .business-list > li:nth-child(2)',{yPercent:10}, 'a');
work.from('.sc-business .business-list > li:nth-child(3)',{yPercent:20}, 'a');
work.from('.sc-business .business-list > li:nth-child(4)',{yPercent:30}, 'a');
work.to('.sc-business .business-list > li:nth-child(1)',{yPercent:30}, 'b');
work.to('.sc-business .business-list > li:nth-child(2)',{yPercent:20}, 'b');
work.to('.sc-business .business-list > li:nth-child(3)',{yPercent:10}, 'b');
work.to('.sc-business .business-list > li:nth-child(4)',{yPercent:0}, 'b');



function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // 시, 분, 초가 한 자리 숫자인 경우 앞에 0을 붙여 두 자리로 표시
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds;
    
    // 시간을 표시할 DOM 요소에 텍스트 업데이트
    document.getElementById('time').textContent = timeString;
}

// 1초마다 displayTime 함수 호출
setInterval(displayTime, 1000);



$('.container .sc-work .btn-common a').mousemove(function(e){
    x=e.offsetX;
    y=e.offsetY;

    gsap.to($(this).find('.box'),{
        x:(x-$(this).width()/2)/3,
        y:(y-$(this).height()/2)/3
    })

})

$('.container .sc-work .btn-common a').mouseleave(function(){
    gsap.to($(this).find('.box'),{
        x:0,
        y:0
    })
})