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



function showModal(modalId) {
  const modalElement = document.getElementById(modalId);
  if (modalElement) {
      let modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
  }
}

// Attach event listeners to all elements with 'showmodal' class
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".showmodal").forEach((element) => {
      element.addEventListener("click", function (event) {
          event.preventDefault();
          if (element.hasAttribute("data-show-modal")) {
              // Update the image source if opening the image modal
              if (element.getAttribute("data-show-modal") === "imageModal") {
                  document.getElementById("modalImage").src = element.src;
              }
              showModal(element.getAttribute("data-show-modal"));
          }
      });
  });
});

// Handle browser back button
window.addEventListener("popstate", function () {
  let openModal = document.querySelector(".modal.show");
  if (openModal) {
      let modalInstance = bootstrap.Modal.getInstance(openModal);
      modalInstance.hide();
  }
});