//Devo applicare la funzione show alla classe hamburger-menu
// $('.hamburger-menu').show();
// Ma solo al click sull'icona dell'hamburger menu
//La chiusura dello stesso, invece, applicando la funzione hide
// $('.hamburger-menu').hide('slow');
// da inserire sempre nell'action click che stavolta agisca sulla fas fa-times


$('.header-right > a').click(
    function() {
    $('.hamburger-menu').show('slow');
  });
$('a.close').click(
    function() {
    $('.hamburger-menu').hide('slow');
  });
