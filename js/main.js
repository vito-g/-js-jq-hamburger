//Devo applicare la funzione show alla classe hamburger-menu
// $('.hamburger-menu').show();
// Ma solo al passaggio del mouse
//Dunque dovrò inserirla all'interno di una action click. Farò lo stesso con la action hide

$('.header-right > a').click(
    function() {
    $('.hamburger-menu').show('slow');
  });
$('a.close').click(
    function() {
    $('.hamburger-menu').hide('slow');
  });
