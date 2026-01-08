function rickrollImages() {
  const imgs = document.querySelectorAll("img");
  const rickUrl = chrome.runtime.getURL("rick-astley.png");

  imgs.forEach(img => {
    
    if (img.src === rickUrl) return;
    img.src = rickUrl;
    img.srcset = "";
  });
}


rickrollImages();


const observer = new MutationObserver(rickrollImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
