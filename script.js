document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("navbar-toggler");
  const sidebar = document.getElementById("sidebar");

  navbarToggler.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
});
