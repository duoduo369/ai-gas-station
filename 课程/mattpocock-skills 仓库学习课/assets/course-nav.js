/**
 * Inject course-local navigation (relative paths).
 * Works from lessons/ and reference/; highlights the current page.
 */
(function () {
  function basename(p) {
    const parts = String(p || "")
      .replace(/\\/g, "/")
      .split("/")
      .filter(Boolean);
    return decodeURIComponent(parts[parts.length - 1] || "");
  }

  const path = (location.pathname || location.href || "").replace(/\\/g, "/");
  const current = basename(path);

  const lessons = [
    { file: "0001-repo-structure-and-skill-map.html", label: "0001 地图" },
    { file: "0002-ask-matt-main-flow-and-onramps.html", label: "0002 ask-matt" },
    { file: "0003-grilling-vs-grill-with-docs-vs-wayfinder.html", label: "0003 grilling" },
    { file: "0004-handoff-and-phase-boundaries.html", label: "0004 handoff" },
    { file: "0005-post-implement-qa-and-branch-review.html", label: "0005 验收" },
    { file: "0006-issue-tracker-is-config.html", label: "0006 tracker" },
  ];

  const refs = [
    { file: "project-map.html", label: "项目地图" },
    { file: "ask-matt-flow-map.html", label: "ask-matt" },
    { file: "grilling-vs-grill-with-docs-vs-wayfinder.html", label: "三者对照" },
    { file: "handoff-and-phase-boundaries.html", label: "handoff" },
    { file: "post-implement-qa-and-branch-review.html", label: "验收" },
    { file: "issue-tracker-is-config.html", label: "tracker" },
  ];

  const lessonFiles = {};
  lessons.forEach(function (item) {
    lessonFiles[item.file] = true;
  });
  const refFiles = {};
  refs.forEach(function (item) {
    refFiles[item.file] = true;
  });

  const inLessons = /\/lessons\//i.test(path) || !!lessonFiles[current];
  const inReference = /\/reference\//i.test(path) || !!refFiles[current];

  const rootPrefix = "..";
  const lessonPrefix = inLessons ? "." : "../lessons";
  const refPrefix = inReference ? "." : "../reference";

  function link(href, label, isCurrent) {
    if (isCurrent) {
      return '<span class="course-nav-current" aria-current="page">' + label + "</span>";
    }
    return '<a href="' + href + '">' + label + "</a>";
  }

  const sep = '<span class="course-nav-sep" aria-hidden="true">·</span>';

  const lessonLinks = lessons
    .map(function (item) {
      return link(lessonPrefix + "/" + item.file, item.label, current === item.file);
    })
    .join(sep);

  const refLinks = refs
    .map(function (item) {
      return link(refPrefix + "/" + item.file, item.label, current === item.file);
    })
    .join(sep);

  var prevNext = "";
  if (inLessons) {
    var idx = lessons.findIndex(function (item) {
      return item.file === current;
    });
    if (idx >= 0) {
      var prev = idx > 0 ? lessons[idx - 1] : null;
      var next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
      var parts = [];
      if (prev) {
        parts.push('<a href="' + lessonPrefix + "/" + prev.file + '">← ' + prev.label + "</a>");
      } else {
        parts.push('<span class="course-nav-muted">← 已是第一课</span>');
      }
      if (next) {
        parts.push('<a href="' + lessonPrefix + "/" + next.file + '">' + next.label + " →</a>");
      } else {
        parts.push('<span class="course-nav-muted">已是最后一课 →</span>');
      }
      prevNext =
        '<div class="course-nav-row course-nav-prevnext">' +
        parts.join('<span class="course-nav-sep" aria-hidden="true">|</span>') +
        "</div>";
    }
  }

  var nav = document.createElement("nav");
  nav.className = "course-nav";
  nav.setAttribute("aria-label", "课程导航");
  nav.innerHTML =
    '<div class="course-nav-row">' +
    link(rootPrefix + "/README.md", "课程入口", false) +
    sep +
    lessonLinks +
    "</div>" +
    '<div class="course-nav-row course-nav-refs">' +
    '<span class="course-nav-label">速查</span>' +
    refLinks +
    "</div>" +
    prevNext;

  function mount() {
    var main = document.querySelector("main");
    if (!main) return;
    main.insertBefore(nav, main.firstChild);
    if (prevNext) {
      var bottom = document.createElement("nav");
      bottom.className = "course-nav course-nav-bottom";
      bottom.setAttribute("aria-label", "上一课下一课");
      bottom.innerHTML = prevNext;
      main.appendChild(bottom);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
