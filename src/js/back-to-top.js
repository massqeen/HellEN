const topButton = document.querySelector('.top-button');

function scrollFunction() {
  // if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  //     topButton.style.display = "block";
  // } else {
  //     topButton.style.display = "none";
  // }
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
}

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// topButton.addEventListener('click', () => {
//   topFunction();
// });
