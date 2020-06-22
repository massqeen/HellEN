let topButton = document.getElementById('top-button');

function scrollFunction() {
  // if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
  //     topButton.style.display = "block";
  // } else {
  //     topButton.style.display = "none";
  // }
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
}

// When the user scrolls down 250px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
