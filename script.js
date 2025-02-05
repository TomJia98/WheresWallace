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

function openModal(imgElement) {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src;

  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  imageModal.show();
}

document.addEventListener("DOMContentLoaded", function () {
  // Track when a modal is opened
  document.querySelectorAll(".modal").forEach(modal => {
      modal.addEventListener("shown.bs.modal", function () {
          history.pushState({ modalOpen: true }, "", "#modal");
      });

      modal.addEventListener("hidden.bs.modal", function () {
          // Remove state when the modal closes
          if (history.state && history.state.modalOpen) {
              history.back();
          }
      });
  });

  // Detect when user presses "Back"
  window.addEventListener("popstate", function (event) {
      let openModal = document.querySelector(".modal.show");
      if (openModal) {
          let modalInstance = bootstrap.Modal.getInstance(openModal);
          modalInstance.hide();
      }
  });
});