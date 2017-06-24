'use strict';

//Funkcja document.ready() - wersja skrócona
$(function(){
    
//pojedyncze zdarzenie na pragrafie
    $('p').click(function(){
        $(this).css("color", "orange");
        
    });
    
    //grupa zdarzeń na nagłówku
    $('h1').on({
        'click': function(){
            $(this).css("color", "orange");
        },
        'mouseleave':function() {
            $(this).css("color", "inherit");
        }
    });
});