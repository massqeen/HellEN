$(document).ready(function() {

  function moreLess(initiallyVisibleCharacters) {
    var visibleCharacters = initiallyVisibleCharacters;
    var paragraph = $(".text")


    paragraph.each(function() {
      var text = $(this).text();
      var wholeText = text.slice(0, visibleCharacters) + "<span class='ellipsis'>... </span><a href='#' class='more'>Читать дальше</a>" + "<span style='display:none'>" + text.slice(visibleCharacters, text.length) + "<a href='#' class='less'> Скрыть</span>"

      if (text.length < visibleCharacters) {
        return
      } else {
        $(this).html(wholeText)
      }
    });
    $(".more").on('click', function(e) {
      e.preventDefault();
      $(this).hide().prev().hide();
      $(this).next().show();
    });
    $(".less").on('click', function(e) {
      e.preventDefault();
      $(this).parent().hide().prev().show().prev().show();
    });
  };


    if(window.screen.width>=100 && window.screen.width<=768){
      moreLess(167);
      console.log("width>=100");
    }else if(window.screen.width>=768){
      moreLess(310);
      console.log("width>=768");
    }






});
