# agent 编程方法论探索 Resources

检索与核对时点：约 2026-08。过期后先更新本清单，再改课。

## Knowledge

- [书籍笔记：人月神话](../../书籍/人月神话.md)
  布鲁克斯：人月不可互换、概念完整性、没有银弹。Use for: 0001 把今天的 agent 热潮接到已经存在的软件工程判断。
- [The AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook) — Louis Claxton, Anthropic, 2026-08-21
  开篇判断：code 不再是瓶颈，瓶颈移到 plan / review / deploy。Use for: 0001 的证据，不是第一节大纲。
- [mattpocock/skills](https://github.com/mattpocock/skills)
  可组合 skill 库；主线 `grill-with-docs → to-spec → to-tickets → implement`。Use for: 0002 的 Matt 定位与主流程入口。
- [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)
  决策树访谈原语。Use for: 0002「对齐发生在对话里」这一轴。
- [to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)
  明确写：不要再 interview，只综合已经谈过的。Use for: 0002 / 0003 说明 spec 是对齐之后的合成物。
- [wayfinder docs](https://github.com/mattpocock/skills/blob/main/docs/engineering/wayfinder.md)
  多 session 决策地图；警告全面规划会掉进瀑布。Use for: 0002 点名「prototypemaxxing，不是 planmaxxing」。
- [obra/superpowers](https://github.com/obra/superpowers)
  自称 complete methodology；七步工作流 + 自动触发。Use for: 0002 的 Superpowers 定位。
- [using-superpowers](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md)
  1% 规则与「觉得 overkill 往往是在跳流程」。Use for: 0002 解释「太重」。
- [brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)
  spike / bounded / architectural；批准闸不随任务消失。Use for: 0002 对齐轴与过程谁启动。
- [unclebob/swarm-forge](https://github.com/unclebob/swarm-forge)
  共享宪法 + pack 流水线 + git 交接。Use for: 0002 的 Bob 定位。
- [Design Concept Grilling](https://www.howardism.dev/articles/design-concept-grilling) — 对 Matt 工作流的整理
  负命题：specs-to-code 是换皮的 vibe coding。Use for: 0003 主来源之一。
- [The Problems with Spec Driven Development](https://sibylline.dev/articles/2026-01-28-problems-with-spec-driven-development/) — Sibylline, 2026-01
  Markdown spec 有损；agent 把 spec 当建议。Use for: 0003 公开批评。
- [SpecKit creates the illusion of work](https://github.com/github/spec-kit/discussions/1784)
  社区对 GitHub Spec Kit 的现场抱怨：生成大量文本、丢掉工作本质。Use for: 0001 / 0003 的证据点名。
- [Spec-Driven Development Is an Anti-Pattern](https://opheleon.ai/blog/spec-driven-development-is-an-anti-pattern)
  引用 Kent Beck：先写完整 spec 等于假定实现教不会你任何东西。Use for: 0003 瀑布指控。

## Wisdom (Communities)

- [github/spec-kit discussions](https://github.com/github/spec-kit/discussions)
  一线对 spec-first 脚手架的摩擦记录。Use for: 听「文本幻觉」和「小改没有位置」，不要当安装指南。
- [obra/superpowers Discord](https://discord.gg/35wsABTejz)（README 所链）
  Superpowers 维护者与使用者的现场讨论。本课不要求加入。

## Gaps

- Matt 原讲「Full Walkthrough: Workflow for AI Coding」没有稳定、可引用的逐字稿 URL；0003 用 Howardism 整理并链回可核对的 skill 原文。
- OpenSpec / BMAD / Kiro 没有做成与三套同等深度的课；本课只点名。
