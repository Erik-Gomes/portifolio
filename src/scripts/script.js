function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("full-text");
  var btnText = document.getElementById("read-more");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}