document.addEventListener("DOMContentLoaded", async () => {
  const [navbarRes, footerRes] = await Promise.all([
    fetch("/src/pages/navbar.html"),
    fetch("/src/pages/footer.html")
  ]);

  const navbarHtml = await navbarRes.text();
  const footerHtml = await footerRes.text();

  document.getElementById("navbar-placeholder").innerHTML = navbarHtml;
  document.getElementById("footer-placeholder").innerHTML = footerHtml;
});
