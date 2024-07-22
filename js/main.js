//  function for conmtact us
$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    // Simple form validation
    var valid = true;
    $("#contactForm input, #contactForm textarea").each(function () {
      if ($(this).val() === "") {
        valid = false;
        $(this).css("border", "1px solid red");
      } else {
        $(this).css("border", "1px solid #ccc");
      }
    });

    if (valid) {
      // For demonstration purposes, just show a success message
      $("#response").html(
        "<p>Thank you for contacting us. We will get back to you soon.</p>"
      );
      $("#contactForm")[0].reset();
    } else {
      $("#response").html("<p>Please fill out all required fields.</p>");
    }
  });
});



//   function for testimonial slider

let currentIndex = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// function for slick slider
$(document).ready(function () {
  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


// Add event listener to each FAQ question
document.querySelectorAll('#faq li h3').forEach(function(question) {
    question.addEventListener('click', function() {
      // Toggle the active class on the parent list item
      this.parentNode.classList.toggle('active');
    });
  });