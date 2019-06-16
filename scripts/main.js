// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById('backBtn').style.visibility = "visible";
  } else {
    document.getElementById('backBtn').style.visibility = "hidden";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Scroll to project section
function scrollProject() {
  const projectLocation = "#project-section";
  if (window.location.href !== projectLocation) {
      window.location.href = projectLocation;
  }
};
