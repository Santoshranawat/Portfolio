// Get the scrool down button
let mybutton = document.getElementById("scrolldown");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Contact Me 
function contactme(){
  
	var name_your = $('#name').val();
	var company_your = $('#company').val();
	var message_your = $('#message').val();

	var url = "https://wa.me/+917379988894?text="
		+ "Name: " + name_your + "%0a"
		+ "Company: " + company_your + "%0a"
		+ "Message: " + message_your;

	window.open(url, '_blank').focus();

}