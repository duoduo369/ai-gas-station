function openExternalLinksInNewTab() {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
      return;
    }

    // Keep in-course relative navigation in the same tab.
    const isExternal = /^https?:\/\//i.test(href) || href.startsWith("//");
    if (!isExternal) {
      return;
    }

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", openExternalLinksInNewTab);
} else {
  openExternalLinksInNewTab();
}
