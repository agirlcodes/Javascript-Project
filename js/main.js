//validation form
function validate() {   
  if( document.myForm.Name.value == "" ) {
     alert( "Please provide your name!" );
     document.myForm.Name.focus() ;
     return false;
  }
  if( document.myForm.Email.value == "" ) {
     alert( "Please provide your Email!" );
     document.myForm.EMail.focus() ;
     return false;
  }
  return( true);
}

//MOBILE LAYOUT
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 