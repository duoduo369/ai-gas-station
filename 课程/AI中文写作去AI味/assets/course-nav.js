(function () {
  function basename(p) {
    const parts = String(p || "").replace(/\\/g, "/").split("/").filter(Boolean);
    return decodeURIComponent(parts[parts.length - 1] || "");
  }

  const path = (location.pathname || location.href || "").replace(/\\/g, "/");
  const current = basename(path);

  const lessons = [
    { file: "0001-ai-flavor-traces.html", label: "0001 AI味的七种痕迹" },
    { file: "0002-model-workflow-skills.html", label: "0002 模型、流程与技能矩阵" },
  ];

  const refs = [
    { file: "seven-traces-checklist.html", label: "七痕迹速查" },
    { file: "workflow-and-models.html", label: "流程与模型速查" },
  ];

  const lessonFiles = {};
  lessons.forEach(function (item) { lessonFiles[item.file] = true; });
  const refFiles = {};
  refs.forEach(function (item) { refFiles[item.file] = true; });

  const inLessons = /\/lessons\//i.test(path) || !!lessonFiles[current];
  const inReference = /\/reference\//i.test(path) || !!refFiles[current];

  const rootPrefix = "..";
  const lessonPrefix = inLessons ? "." : "../lessons";
  const refPrefix = inReference ? "." : "../reference";
  const homepageHref = (inLessons ? "." : "../lessons") + "/homepage.html";
  const sep = '<span class="course-nav-sep" aria-hidden="true">·</span>';

  function link(href, label, isCurrent) {
    if (isCurrent) {
      return '<span class="course-nav-current" aria-current="page">' + label + "</span>";
    }
    return '<a href="' + href + '">' + label + "</a>";
  }

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
    var idx = lessons.findIndex(function (item) { return item.file === current; });
    if (idx >= 0) {
      var parts = [];
      if (idx > 0) {
        parts.push('<a href="' + lessonPrefix + "/" + lessons[idx - 1].file + '">← ' + lessons[idx - 1].label + "</a>");
      } else {
        parts.push('<span class="course-nav-muted">← 已是第一篇</span>');
      }
      if (idx < lessons.length - 1) {
        parts.push('<a href="' + lessonPrefix + "/" + lessons[idx + 1].file + '">' + lessons[idx + 1].label + " →</a>");
      } else {
        parts.push('<span class="course-nav-muted">已是最后一篇 →</span>');
      }
      prevNext = '<div class="course-nav-row course-nav-prevnext">' + parts.join("") + "</div>";
    }
  }

  var nav = document.createElement("nav");
  nav.className = "course-nav";
  nav.setAttribute("aria-label", "课程导航");

  nav.innerHTML =
    '<div class="course-nav-row">' +
    link(homepageHref, "首页", current === "homepage.html") +
    sep +
    lessonLinks +
    "</div>" +
    (refs.length > 0
      ? '<div class="course-nav-row course-nav-refs">' +
        '<span class="course-nav-label">速查</span>' +
        refLinks +
        "</div>"
      : "") +
    prevNext;

  function mount() {
    var main = document.querySelector("main");
    if (!main) return;
    main.insertBefore(nav, main.firstChild);
    if (prevNext) {
      var bottom = document.createElement("nav");
      bottom.className = "course-nav course-nav-bottom";
      bottom.setAttribute("aria-label", "上一篇下一篇");
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