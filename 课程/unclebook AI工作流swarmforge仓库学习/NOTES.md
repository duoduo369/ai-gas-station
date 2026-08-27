# Notes

- 课程目录名按用户指定：`unclebook AI工作流swarmforge仓库学习`（Uncle Bob 写作 unclebob）。
- 用户明确把学习对象钉在 `https://github.com/unclebob/swarm-forge/tree/main/swarmforge`，同时整仓 README 是必要上下文，因为 `swarmforge/` 在 `main` 上是共享底座，不是完整可运行 pack。
- 课件风格对齐 `mattpocock-skills 仓库学习课`：同一套 `course.css`、测验组件、GitHub 外链。四课 + reference 顶栏用 `assets/course-nav.js` 相对路径互跳；外链脚本只把 http(s) 开新标签。
- 学习者在 Windows；SwarmForge 前置是 zsh / tmux / Babashka。第一课不做成安装课。
- 本知识库已有 Grill → Spec → Tickets 词汇；SwarmForge 用 specifier / coder / … 角色链，对照时不要强行一一映射，等后面课再比。
- 用户要求：课里的名词（尤其角色链）就地解释，不要为此新开 lesson。
- 本地克隆允许切分支备课；课件一律链 GitHub（pack 用 `blob/two-pack/...`，共享件用 `blob/main/...`）。
- 术语表把 BDD、Gherkin、CRAP、git_handoff 加厚。teach 嵌入权威中文见 [playbook/teach-课件-嵌入权威中文.md](../../playbook/teach-课件-嵌入权威中文.md)。
- 按该 playbook 复审（2026-08-27）：共享宪法中文只保留在 0001；0002–0004 只嵌各 pack 独有 `project`/`local-*` 与角色 prompt，共享三篇链 0001 锚点。0001 角色段不嵌全文，明确留给后课。`handoff-protocol.md` 给人读，agent 跟 `handoffs.prompt`（已在 0001），协议 md 只外链。
