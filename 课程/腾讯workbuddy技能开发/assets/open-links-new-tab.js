function openLinksInNewTab() {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) {
      return;
    }

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", openLinksInNewTab);
} else {
  openLinksInNewTab();
}
