const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body; 

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open'); 
    burger.classList.toggle('open'); 
});

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Message sent");
  });
