
  // Get the nav element
  const nav = document.querySelector("nav");

  // Add a scroll event listener to the window
  window.addEventListener("scroll", () => {
    // Check if the page has been scrolled
    if (window.scrollY > 0) {
      nav.classList.add("scrolled"); // Add the "scrolled" class
    } else {
      nav.classList.remove("scrolled"); // Remove the "scrolled" class
    }
  });

