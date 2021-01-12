//Devo applicare la funzione show alla classe hamburger-menu
// $('.hamburger-menu').show();
// Ma solo al click sull'icona dell'hamburger menu
//La chiusura dello stesso, invece, applicando la funzione
// $('.hamburger-menu').hide('slow');
// da inserire sempre nell'action click
//Dunque dovrò inserirla all'interno di una action click. Farò lo stesso con la action hide

$('.header-right > a').click(
    function() {
    $('.hamburger-menu').show('slow');
  });
$('a.close').click(
    function() {
    $('.hamburger-menu').hide('slow');
  });
