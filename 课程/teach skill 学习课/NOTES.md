# Notes

- 用户现在要两节课：`0001` 先讲 `teach-me`，`0002` 再讲 `/teach`。未再要求前先收在这两节。
- 这是精读课：按 [`../../skills/in-process/add-prompt-to-skill-lessons/SKILL.md`](../../skills/in-process/add-prompt-to-skill-lessons/SKILL.md) 把关键条文嵌进 HTML。`0001` 精读 `teach-me` 覆盖层，`0002` 精读上游 `teach`。
- 教学工作区落在 `课程/teach skill 学习课/`，不摊在仓库根目录。chrome 放在该课 `assets/`；整课写作覆盖层来自外部 [`teach-me`](https://github.com/duoduo369/teach-me) skill。
- 用户已经用 `/teach` 写过几门课，起始点不是“第一次听说 skill”，而是“要把工作区文件和调用时机钉住”。
- 新增的 `0001` 默认不额外配图；已有 `workspace-loop.svg` 继续留给 `0002` 解释上游工作区循环。
- 现在两课至少两页速查，`course-nav.js` 负责课序和 reference 导航。
- 两节 lesson 的精读条文都按 `add-prompt-to-skill-lessons` 改成 `details.prompt-fold + div.prompt-md`；原文继续保留稳定外链。
- 2026-08-29 补了 `lessons/homepage.html`，封面复制到 `assets/cover/teachskill课程.jpg`。导航去掉“课程入口”README 链，改成 `首页 · lessons / 速查`，与 `teach-me` 的 `homepage-guide.md`、`nav-guide.md` 对齐。
- 用户不要页内测验 /「练一下」/ 选择题。默认不加 `lesson-quiz.js`。这条约束跟随外部 `teach-me` skill。
- `0002` 已补怎么开口：斜杠参数、GitHub `owner/repo` 或 URL、日常技能（尤克里里）、先钉 RESOURCES、续课口令。
- 封面已接到仓库首页和 `课程/README.md`，图在 `assets/cover/teachskill课程.jpg`。
