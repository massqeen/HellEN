$(document).ready(function () {
  //Аякс отправка форм
  $('form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'telegram.php',
      data: $(this).serialize(),
    }).done(function () {
      console.log('done');
      buttonFormLink.dispatchEvent(virtualClick);
      buttonFormLinkPopup.dispatchEvent(virtualClick);
      console.log('done ' + buttonFormLink.dispatchEvent(virtualClick));
      $(this).find('input').val('');
      $('form').trigger('reset');
    });
    return false;
  });
});
