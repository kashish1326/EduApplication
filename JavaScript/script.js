
// Select all the social media links
const socialMediaLinks = document.querySelectorAll('.social-icons a');

// Add click event listeners to each link
socialMediaLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Log which link is clicked
    console.log(`Redirecting to: ${link.href}`);

  });
});


 