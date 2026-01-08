function rickrollImages() {
  const imgs = document.querySelectorAll("img");

  imgs.forEach(img => {
    img.src = RICK_IMAGE;
    img.srcset = ""; // IMPORTANT for YouTube
  });
}

// Run initially
rickrollImages();

// Run again when YouTube loads new content
const observer = new MutationObserver(rickrollImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
