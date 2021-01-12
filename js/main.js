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
// --------------------------------------------------------------------------------
// Altre trasformazioni: Colori & Dimensioni

//Change Boolean Logo Dimension on over
$('.header-left > img').hover(
  function() {
    $(this).css('height','41px');
  },
  function() {
    $(this).css('height','40px');
  });

// Change Hamburger-menu  Color on over
$('.header-right > a').hover(
  function() {
  $(this).css('color','#00e165');
  },
  function() {
  $(this).css('color','lightgrey');
});

//Change Hamburger-menu List Item Color & Font-Weight
$('.hamburger-menu ul li a').hover(
  function() {
  $(this).css("color", "#00e165");
  $(this).css("font-weight", "600");
  },
  function() {
  $(this).css("color", "white");
  $(this).css("font-weight", "normal");
});
