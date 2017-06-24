'use strict';

//Funkcja document.ready() - wersja pełna
jQuery (document).ready(function(){
    
    //Pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagafuPierwszego);
    
    //Dodawanie tekstu
    $(".paragraf").text(textParagrafuPierwszego);
    
    //Dodawanie HTML
    $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br>HTML");
    
    //Dodawanie treści na końcu selektora
    $(".paragrafnext").append("Treść na końcu selektora");
    
    //Dodawanie treści za selektorem
    $(".paragrafnext").after("Treść za selektorem");
    
    //Usuwanie elementu i jego zawartości
    $("strong").remove();
    
    //Usuwanie tylko jego zawartości
    $('.paragraf').empty();
    
    //Dodawanie CSS
    $(".paragrafnext").css({'font-size':'3em', 'color': 'red'});
    
    
    //Dodawanie klasys
    $('h1').addClass('blue');
    
    //Dodawanie atrybutu
    $('h1').attr("imie", "Marcin");
    
});