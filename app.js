$(document).ready(function() {

  var color = '';
  $('header a').on('click', function() {
    color = $(this).attr('id');
  });

  $('.box').on('click', function() {
    $(this).addClass(color);
  });

  $('#reset').on('click', function() {
    $('.box').removeClass('white green red blue yellow');
  });

  $('header')
    .mousedown(function(){
      $('header div').on('mouseenter', function() {
        $(this).addClass(color);
      });
    })
    .mouseup(function(){
      $('header div').off('mousenter');
    });

});



//Setup buttons to select color
// $(document).ready(function() {
//
  // var color = '';
  // $('header a').on('click', function() {
  //   color = $(this).attr('id');
  // });
//
//   $('box').on('click', function() {
//     $(this).addClass(color);
//   });
//
// $('header')
//   .mousedown(function(){
//     ('header div').on('mouseenter', function() {
//       $(this).addClass(color);
//     });
//   });
//
  // .mouseup(function(){
  //   ('header div').off('mousenter');
  // });
//   $('.box').on('dblclick', function() {
//     $(this).removeClass('white green red blue yellow');
//   });
//
//   // $('#reset').on('click', function() {
//   //   $(this).removeClass('white green red blue yellow');
//   // });
//
//   $('#reset').on('click', function() {
//     $('.box').attr('class', 'box');
//   });



// });
