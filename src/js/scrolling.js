$(document).ready(function () {
  $('#topButton').click(function (e) {
    return (
      e.preventDefault(),
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        'slow',
      ),
      !1
    );
  });
});

$(function () {
  $('body').on('click', '[href*="#"]', function (e) {
    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: $(this.hash).offset().top - '',
        },
        800,
      ),
      e.preventDefault();
  });
});
