const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");
const galleryDiv = document.getElementById("gallery-container");
const dropdownContainer = document.getElementById("dropdownMenu");
const cardContainer = document.getElementById("serviceCards");
const modalContainer = document.getElementById("serviceModals");


const galleryImages = [
"images/3f74942e-84e6-47ea-8848-3293b708b755.jpg",
"images/5f6fa9ad-1132-4ad5-a110-822e4bec08e7.jpg",
"images/48fbdadb-2b61-4a2c-8085-ef38c4166120.jpg",
"images/57f8e273-efe9-4946-b4e5-c4543184d421.jpg",
"images/263c5c04-9243-4ef0-852e-d4b41c9f59b1.jpg",
"images/076710e6-c0f9-4827-815b-668ede619691.jpg",
"images/b9772c7a-13b0-4587-a870-2a929a5c585c.jpg",
"images/ba979b32-72bd-4f4b-8c0b-81713d9bac07.jpg",
"images/c15e8bba-59d2-4fc4-803b-e46abf60b082.jpg",
"images/cd2afddb-cdb2-427b-b20e-f56e7414ceab.jpg",
"images/gardening before.jpg",
"images/gardening after.jpg",
"images/gardening2.jpg",
"images/lawn1.jpg",
"images/lawn2.jpg",
]

galleryImages.forEach(image => {
  const imageElement = ` <img src="${image}" class="gallery-item showmodal" data-show-modal="imageModal">`;
galleryDiv.innerHTML += imageElement;
})


const cardInfo = [
  {
    id: "lawnmowing",
    target: "lawnmowingModal",
    image: "images/57f8e273-efe9-4946-b4e5-c4543184d421.jpg",
    title: "Lawnmowing",
    description: "Regular lawn mowing can be a time consuming task, but with our team it will be no hassle at all.",
  },
  {
    id: "acreage",
    target: "acreageModal",
    image: "images/3f74942e-84e6-47ea-8848-3293b708b755.jpg",
    title: "Acreage Mowing",
    description: "Maintain the beauty and order of your extensive property.",
  },
  {
    id: "lawncare",
    target: "lawncareModal",
    image: "images/lawn1.jpg",
    title: "Lawncare & Maintenance",
    description:
      "Transform your lawn with our extensive care and maintenance services.",
  },
  {
    id: "gardening",
    target: "gardeningModal",
    image: "images/263c5c04-9243-4ef0-852e-d4b41c9f59b1.jpg",
    title: "Gardening",
    description: `Revitalize your garden or design an entirely new outdoor space for your
                          home or business`,
  },
  {
    id: "window",
    target: "windowModal",
    image: "images/5f6fa9ad-1132-4ad5-a110-822e4bec08e7.jpg",
    title: "Window Cleaning",
    description:
      "Enjoy spotless, streak-free windows with our professional services.",
  },
  {
    id: "pressure",
    target: "pressureModal",
    image: "images/pressure.jpg",
    title: "Pressure Washing",
    description:
      "Restore and maintain your property with our professional pressure washing services.",
  },
  {
    id: "soft",
    target: "softModal",
    image: "images/soft.jpg",
    title: "Soft Washing",
    description: "Refresh and protect your property with expert soft washing.",
  },
  {
    id: "cleaning",
    target: "cleaningModal",
    image: "images/cleaning.jpg",
    title: "Commercial & Residential Cleaning",
    description:
      "Keep your space spotless with our professional cleaning services.",
  },
  {
    id: "blind",
    target: "blindModal",
    image: "images/blinds.jpg",
    title: "Ultrasonic Blind Cleaning",
    description: "Transform your blinds with cutting-edge ultrasonic cleaning.",
  },
];

const modalInfo = [
  {
    id: "lawncareModal",
    label: "lawncareModalLabel",
    images: [
      "images/lawn1.jpg",
      "images/b9772c7a-13b0-4587-a870-2a929a5c585c.jpg",
    
    ],
    title: "Lawncare and Maintainance",
    desc: `  
                    Transform your lawn with our extensive care and maintenance services! In addition to
                    regular mowing, we offer professional fertilizing treatments and lawn rejuvenation packages
                    designed to enhance the health and appearance of your outdoor space. With flexible
                    mowing schedules tailored to suit your needs and personalised lawncare solutions, we
                    ensure your lawn receives the attention it needs for the best possible results.`,
  },

  {
    id: "acreageModal",
    label: "acreageModalLabel",
    images: [
      "images/3f74942e-84e6-47ea-8848-3293b708b755.jpg",
      "images/cd2afddb-cdb2-427b-b20e-f56e7414ceab.jpg",
      
    ],
    title: "Acreage Mowing",
    desc: `  
                      Maintain the beauty and order of your extensive property with our expert acreage mowing
                    services. Equipped with specialized ride-on mowers designed for large properties, we can
                    efficiently ensure your property is well looked after. Whether you have a small acre or
                    several, we tailor our mowing services to suit the unique needs of you and your property to
                    help it look its best all year-round.`,
  },

  {
    id: "windowModal",
    label: "windowModalLabel",
    images: [
      "images/5f6fa9ad-1132-4ad5-a110-822e4bec08e7.jpg",
      "images/076710e6-c0f9-4827-815b-668ede619691.jpg",
      "images/48fbdadb-2b61-4a2c-8085-ef38c4166120.jpg",
    ],
    title: "Window Cleaning",
    desc: `  
                     Enjoy spotless, streak-free windows with our professional window cleaning services, perfect
                    for single and multi-story homes, multi-story buildings, and commercial properties. Using the
                    latest and best equipment and techniques, we provide an efficient and safe service that
                    enhances the appearance of your property and maximizes natural light. Whether it&#39;s a
                    residential or commercial space, we tailor our services to meet your window needs,
                    delivering exceptional results every time. No job is too big or small—we will make your
                    windows sparkle and shine!`,
  },

  {
    id: "pressureModal",
    label: "pressureModalLabel",
    images: [
        "images/pressure.jpg",
    ],
    title: "Pressure Washing",
    desc: `  
                     Restore the appearance and maintain your property with our professional pressure washing
                    services. From driveways and pathways, to roofs and patios, we use professional pressure
                    washing equipment to effectively remove dirt, grime, Mold, and stains, bringing your surfaces
                    back to life. Our team ensures safe, thorough cleaning for all areas, enhancing curb appeal
                    and maintaining the longevity of your property. Whether it&#39;s for a small residential space or a
                    large commercial area, we deliver outstanding results every time, leaving your surfaces
                    spotless and looking like new.`,
  },

  {
    id: "softModal",
    label: "softModalLabel",
    images: [
    "images/soft.jpg"
    ],
    title: "Soft Washing",
    desc: `  
                      Refresh and protect the exterior of your property with our expert soft washing services. Ideal
                    for surfaces that require a gentler touch, soft washing uses low-pressure water and
                    specialized, eco-friendly solutions to effectively remove algae, mold, dirt, and mildew without
                    causing damage. This method is perfect for roofs, siding, fences, and other delicate areas,
                    offering a deep clean that lasts longer than traditional pressure washing. With soft washing,
                    we ensure your property looks its best while preserving the integrity of your surfaces,
                    providing both a thorough clean and peace of mind.`,
  },

  {
    id: "cleaningModal",
    label: "cleaningModalLabel",
    images: [
  "images/cleaning.jpg"
    ],
    title: "Commercial and Residential Cleaning",
    desc: `  
                       Keep your space spotless, sparkling and well-kept with our professional level cleaning
                    services. Whether it’s your home or business, we offer customized cleaning solutions to suit
                    all your needs. From routine to deep cleaning projects our experienced team uses eco-
                    friendly products and effective techniques to ensure every surface is thoroughly cleaned,
                    sanitized, and restored. From kitchens and bathrooms to offices and commercial spaces, we
                    take care of the details so you can enjoy a cleaner, healthier environment. Let us help you
                    maintain your pristine space that you can enjoy.`,
  },

  {
    id: "blindModal",
    label: "blindModalLabel",
    images: [
      "images/blinds.jpg"
    ],
    title: "Ultrasonic Blind Cleaning",
    desc: `  
                          Transform your blinds using our cutting-edge ultrasonic cleaning service that will have them
                    looking better than ever. Using high-frequency sound waves, we deliver a deep, gentle clean
                    that removes dust, dirt, allergens, and grime from every slat, without the risk of damage. This
                    advanced technique penetrates hard-to-reach areas, ensuring a thorough, spotless result
                    that traditional cleaning methods can’t achieve. Ideal for all types of blinds, ultrasonic
                    cleaning restores their original shine, improves their functionality, and extends their
                    lifespan—leaving your blinds looking pristine and like new.`,
  },

  {
    id: "gardeningModal",
    label: "gardeningModalLabel",
    images: [
      "images/gardening5.jpg",
      "images/263c5c04-9243-4ef0-852e-d4b41c9f59b1.jpg",
      "images/gardening2.jpg",
      "images/ba979b32-72bd-4f4b-8c0b-81713d9bac07.jpg"
    ],
    title: "Gardening",
    desc: `  
                          Whether you're looking to revitalize your garden or design an entirely new outdoor space for your
                          home or business, you can trust us to bring your vision to life. With years of expertise in every aspect
                           of gardening and landscaping, we work closely with you to ensure the rresluts not only meet but exceed
                           your expectations. Our commitmen to quality and attention to detail guarantees that you'll recieve the 
                           outdoor space you've always dreamed of.`,
  },

  {
    id: "lawnmowingModal",
    label: "lawnmowingModalLabel",
    images: [
      "images/57f8e273-efe9-4946-b4e5-c4543184d421.jpg",
      "images/lawn2.jpg",
     
    ],
    title: "Lawnmowing",
    desc: `  
                          Regular lawn mowing can be a time consuming task, but with our team it will be no hassle at all.
                          We offer customisable scheduling options to fit your lifestyle, and your lawn's neeeds so that it
                          stays maintained all year round without you having to worry at all.`,
  },
];

cardInfo.forEach(card => {

  const liElement = `
  <li><a class="dropdown-item" onclick="scrollToCard('${card.id}');" data-bs-toggle="modal" data-bs-target="#${card.target}">${card.title}</a></li>
  `;
  dropdownContainer.innerHTML += liElement;

  const cardElement = `
  <div class="col-lg-4 col-md-6 col-sm-12" id="${card.id}" data-bs-toggle="modal" data-bs-target="#${card.target}">
                <div class="card hover">
                    <img src="${card.image}" class="cardimgtop" alt="${card.title} image">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                    </div>
                </div>
            </div>

  `;

  cardContainer.innerHTML += cardElement;

})

modalInfo.forEach(modal => {

  const modalElement = `
    <div class="modal fade text-center" id="${modal.id}" tabindex="-1" aria-labelledby="${modal.label}"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="position-relative">
                
                                <!-- Header -->
                                <div class="modal-header justify-content-center">
                                    <h1 class="modal-title fs-5">${modal.title}</h1>
                                </div>
                    <!-- Carousel -->
                    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
  ${modal.images.map((img, index) => `
    <div class="carousel-item d-flex justify-content-center ${index === 0 ? 'active' : ''}">
      <img src="${img}" class="imageStyle" alt="...">
    </div>
  `).join("")}
</div>
                    </div>

                    <!-- Close Button -->
                    <button type="button" class="btn-close position-absolute top-0 end-0 p-3" data-bs-dismiss="modal"
                        aria-label="Close" style="z-index: 1055;"></button>
                </div>

                <!-- Body -->
                <div class="modal-body">
                    ${modal.desc}
                </div>

                <!-- Footer -->
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary buttonColoured" data-bs-dismiss="modal"
                        onclick="scrollToCard('contact-form')">Get A Quote</button>
                </div>

            </div>
        </div>
    </div>

  `;

  modalContainer.innerHTML += modalElement;

})


function scrollToCard(cardId) {
  var cardElement = document.getElementById(cardId);
  if (cardElement) {
    var offset = 500; // Adjust this based on your navbar height
    var elementPosition =
      cardElement.getBoundingClientRect().top + window.scrollY;
    var offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update URL without reloading
    window.history.pushState(null, null, "#" + cardId);
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

window.addEventListener("scroll", function () {
  let branding = document.querySelectorAll(".Carousel-module__branding--X3Gce");
  branding.forEach((element) => {
    console.log(element);
    element.style.display = "none";
  });
});
