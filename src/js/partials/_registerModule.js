$(document).ready(function () {
  $("a#go").click(function (event) {
    event.preventDefault();
    $("#background").fadeIn(400, function () {
      $("#modal")
      .css('display', 'block')
      .animate({opacity: 1, top: '50%'}, 200);
    });
  });

$("#close, #background").click(function () {
  $('#modal')
    .animate({opacity: 0, top: '45%'}, 200,
    function () {
    $(this).css('display', 'none');
    $('#background').fadeOut(400);
  });
});
});
