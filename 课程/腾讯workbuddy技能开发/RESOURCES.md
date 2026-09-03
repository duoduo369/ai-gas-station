# 腾讯 WorkBuddy 技能开发 Resources

## Knowledge

- [WorkBuddy 开放平台 · 技能](https://open.workbuddy.cn/docs/skill)
  官方结构页。用来确认 WorkBuddy skill 的 frontmatter 字段、`references / scripts / templates` 三类子目录，以及平台文档给出的最小骨架。
- [writing-for-agents · SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md)
  写给 agent 的通用写法。用来判断 description 怎么写得更容易触发、正文怎么减负、材料什么时候该下沉。
- [writing-for-agents · SKILL-MECHANICS.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL-MECHANICS.md)
  skill 专用分支。用来理解 model-invoked / user-invoked 的分界，以及为什么“会不会自动触发”其实是上下文预算问题。
- [OpenAI Skills](https://developers.openai.com/api/docs/guides/tools-skills)
  OpenAI 官方的 skill 指南。用来确认 OpenAI skill 是“版本化文件包 + `SKILL.md` manifest”，以及 hosted / local 两种挂载方式。
- [Claude Code · Skills](https://code.claude.com/docs/en/skills)
  Claude Code 官方 skills 文档。用来确认 `.claude/skills/<skill>/SKILL.md`、自动触发、手动 `/skill-name` 调用、目录级 supporting files 这些机制。
- [Claude Code · Create custom subagents](https://code.claude.com/docs/en/sub-agents)
  官方 subagent 文档。用来区分 Claude 里“skill”和“subagent”不是同一层：前者是可复用流程，后者是独立上下文里的专门 worker。
- [Claude Code · How Claude remembers your project](https://code.claude.com/docs/en/memory)
  官方 memory 文档。用来区分 `CLAUDE.md` 的长期上下文和 skill 的按需加载，避免把持久规则误写进 skill。

## Gaps

- WorkBuddy 这页文档目前主要讲“结构长什么样”，没有细讲 skill 的自动发现、覆盖优先级和跨目录加载规则。下一课如果要往“怎么写第一张卡”走，最好补实际样例或平台演示。
- “业界标准”这件事在 agent world 里并没有单一文档一次说死。当前只能拿 OpenAI、Claude Code 这两套官方实现，再加 `writing-for-agents` 这种写作方法层，拼出一张实用对照图。
