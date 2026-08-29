# Notes

- 本地克隆：`D:\work\codeup\mattpocock-skills`。课件一律链 GitHub，不写本地绝对路径。
- 知识库 `技能拆解/` 已有 [grilling](../../技能拆解/grilling%20学习拆解.md)、[handoff](../../技能拆解/handoff%20学习拆解.md)、[wait-what](../../技能拆解/wait-what%20学习拆解.md)、[writing-for-agents](../../技能拆解/writing-for-agents%20学习拆解.md)，以及仓库地图 / ask-matt 笔记。课里的中文以克隆仓库当前正文为准，不直接复制笔记附录（handoff 原文有过小改）。
- 加厚方法见 [teach-embed-authoritative-zh](../../skills/in-process/teach-embed-authoritative-zh/SKILL.md)。0001 是地图课：嵌 `CLAUDE.md`（本课真正讲的分桶规则）；`ask-matt` 全文留给 0002。
- 覆盖关系：
  - 0002 嵌 `ask-matt/SKILL.md` + `PHASE-BOUNDARIES.md` 全文
  - 0003 嵌 `grilling`、`grill-with-docs`、`domain-modeling`、`wayfinder`；`ask-matt` 链 0002
  - 0004 嵌 `handoff`；phase boundary 链 0002
  - 0005 嵌 `code-review` skill + 人读 docs 的关键 FAQ、`tdd` 的 seam 节、`implement` 全文、`to-spec` / `triage` 本课所需小节
  - 0006 嵌 setup 的 tracker 决策、`issue-tracker-local.md` 全文、GitLab 模板同形节、docs 里 Other / 意外持久化相关节
- 用户在 Windows；GitHub 外链可打开原文。
- 流程插图用课程内 SVG（保证 skill 名与中文准确）：`flow-ask-matt.svg`、`flow-phase-boundary.svg`、`flow-grilling-family.svg`、`flow-branch-qa.svg`。0006 的 tracker 配置是对照表，没有加图。
- 2026-08 重写：六课正文按 teach-me 的中文写作指南清理翻案腔 / AI 高频词 / 破折号。2026-08-28 再按 `teach-embed-authoritative-zh` 收尾：默认改成 `details.prompt-fold` 折叠，Markdown 类 prompt 预先转成 `div.prompt-md`，带 frontmatter 的 `SKILL.md` 拆成 `pre.prompt-raw` + `div.prompt-md`，只有必须逐行对照的短示例保留原样代码块。新增 `lessons/homepage.html` 首页，封面复制到 `assets/cover/cover.jpg`（源图 `assets/image/2026-08-27-course-cover-matt-skills.jpg`）；`course-nav.js` 导航加入首页链接；README 顶部用封面图链接到首页。
