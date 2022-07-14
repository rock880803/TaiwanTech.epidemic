const $langBut = $('.lang');
const $cn = $('.cn');
const $en = $('.en');

//---------------------

$en.addClass('hide');

$langBut.click(function(){
    $cn.toggle(100);
    $en.toggle(100);
})


