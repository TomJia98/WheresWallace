const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


function scrollToCard(cardId) {
  var cardElement = document.getElementById(cardId);
  if (cardElement) {
    var offset = 500; // Adjust this based on your navbar height
    var elementPosition = cardElement.getBoundingClientRect().top + window.scrollY;
    var offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL without reloading
    window.history.pushState(null, null, '#' + cardId);
  }
}
