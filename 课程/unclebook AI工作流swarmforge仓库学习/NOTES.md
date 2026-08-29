# Notes

- 课程目录名按用户指定：`unclebook AI工作流swarmforge仓库学习`（Uncle Bob 写作 unclebob）。
- 用户明确把学习对象钉在 `https://github.com/unclebob/swarm-forge/tree/main/swarmforge`，同时整仓 README 是必要上下文，因为 `swarmforge/` 在 `main` 上是共享底座，不是完整可运行 pack。
- 课件风格对齐 `mattpocock-skills 仓库学习课`：`course.css` 与 `open-links-new-tab.js` 在该课 `assets/`，页面走 `../assets/`。四课 + reference 顶栏用该课 `assets/course-nav.js` 相对路径互跳；外链脚本只把 http(s) 开新标签。课内不要自测、不要「预计 xx 分钟」。
- 学习者在 Windows；SwarmForge 前置是 zsh / tmux / Babashka。第一课不做成安装课。
- 本知识库已有 Grill → Spec → Tickets 词汇；SwarmForge 用 specifier / coder / … 角色链，对照时不要强行一一映射，等后面课再比。
- 用户要求：课里的名词（尤其角色链）就地解释，不要为此新开 lesson。
- 本地克隆允许切分支备课；课件一律链 GitHub（pack 用 `blob/two-pack/...`，共享件用 `blob/main/...`）。
- 术语表把 BDD、Gherkin、CRAP、git_handoff 加厚。teach 嵌入权威中文见 [add-prompt-to-skill-lessons](../../skills/in-process/add-prompt-to-skill-lessons/SKILL.md)。
- 按这条 skill 复审（2026-08-27）：共享宪法中文只保留在 0001；0002–0004 只嵌各 pack 独有 `project`/`local-*` 与角色 prompt，共享三篇链 0001 锚点。0001 角色段不嵌全文，明确留给后课。`handoff-protocol.md` 给人读，agent 跟 `handoffs.prompt`（已在 0001），协议 md 只外链。
- 2026-08 重写：四课正文按 teach-me 的中文写作指南清理翻案腔 / AI 高频词 / 破折号。2026-08-28 再按 `add-prompt-to-skill-lessons` 调整权威正文块：默认改成 `details.prompt-fold` 折叠，Markdown 类 prompt 预先转成 `div.prompt-md`，只有必须逐行对照的原始片段保留 `pre.prompt-raw`。新增 `lessons/homepage.html` 首页，封面复制到 `assets/cover/cover.jpg`（源图 `assets/image/2026-08-27-course-cover-swarmforge.jpg`）；`course-nav.js` 导航加入首页链接；README 顶部用封面图链接到首页。
