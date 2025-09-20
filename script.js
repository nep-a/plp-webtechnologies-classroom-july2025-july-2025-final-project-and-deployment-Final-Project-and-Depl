document.querySelector(".menu-toggle").addEventListener("click", function() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
