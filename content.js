function rickrollImages() {
  const imgs = document.querySelectorAll("img");

  imgs.forEach(img => {
    img.src = RICK_IMAGE;
    img.srcset = ""; 
  });
}


rickrollImages();


const observer = new MutationObserver(rickrollImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
