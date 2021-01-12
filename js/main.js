//Devo applicare la funzione show alla classe hamburger-menu
// $('.hamburger-menu').show();
// Ma solo al passaggio del mouse
//Dunque dovrò inserirla all'interno dell'action hover assieme alla funzione hide


// $('.header-right > a').click(
//     function() {
//     $('.hamburger-menu').show('slow');
//   },
//     function() {
//     $('.hamburger-menu').hide('slow');
//   });
$('.header-right > a').click(
    function() {
    $('.hamburger-menu').show('slow');
  });
