
$(function(){
    'use strict';
    
//Efekt hide i show
$('p').hide(3000).show(3000);

    //Efekt fadeout i fadein
    
    //Funkja zwrotna - callback
    function animacja() {
        console.log('zakończono pierwszą animację. Zaraz startuje druga:)');
        
        $('h3').animate({'font-size': '1em', 'margin-left':
                        '0px'}, 2000);
    }
    
    
    
    //Efekt animacji z funckją zwrotną animacji
    $('h3').animate({'font-size':'3em', 'margin-left':'100px'}, 2000, animacja);
    
});