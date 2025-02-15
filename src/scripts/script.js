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

function incressPadding() {
  var padding = document.getElementById("about-me");
  padding.style.paddingTop = "3.3em";
}

function highlightNav() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".link");
  let scrollY = window.scrollY;

  sections.forEach((section, index) => {
      let sectionTop = section.offsetTop - 70; // Ajuste para navbar fixa
      let sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          // Remove a classe ativa de todos os links
          navLinks.forEach(link => link.classList.remove("active"));
          // Adiciona a classe ativa ao link correspondente
          navLinks[index].classList.add("active");
      }
  });
}

// Detecta rolagem e aplica a função
window.addEventListener("scroll", highlightNav);

function toggleExpand(card) {
  card.classList.toggle("expanded");
}

function scrollCards(direction) {
  const container = document.getElementById('certifications-scroll');
  container.scrollBy({
      left: direction * 200, // Ajuste o valor conforme necessário
      behavior: 'smooth'
  });
}