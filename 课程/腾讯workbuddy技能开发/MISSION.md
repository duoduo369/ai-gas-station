# Mission: 腾讯 WorkBuddy 技能开发

## Why
你想先搞清腾讯 WorkBuddy 的 skill 到底由哪些固定部件组成，再判断它和业界常见的 agent skill 结构是不是一回事。学完后，你至少能看懂一张 WorkBuddy skill 卡，知道哪些字段是平台要的，哪些写法只是作者习惯，也能把它和 OpenAI / Claude Code 这类结构放在同一张图里比较。

## Success looks like
- 能说清 WorkBuddy skill 的最小骨架：`SKILL.md`、frontmatter、正文、`references/`、`scripts/`、`templates/`
- 能指出 WorkBuddy 文档里哪些字段是必填，哪些是可选
- 能用一张对照表解释 WorkBuddy、OpenAI Skills、Claude Code Skills 分别在“skill”的哪一层发力
- 能用 `writing-for-agents` 的规则改写一个更容易触发、成本更低的 skill 描述
- 能判断什么时候该把内容留在正文，什么时候下沉到 `references/` 或 `scripts/`

## Constraints
- 先收一课，不直接展开发布、审核、连接器接入
- 课程需要配图，并把关键原文折叠嵌进 lesson
- 对照对象先固定为 WorkBuddy、OpenAI Skills、Claude Code Skills
- 讨论重点放在结构，不放在模型能力排行

## Out of scope
- 不讲 WorkBuddy 入驻、上架、运营流程
- 不讲 OpenAI function calling 或 MCP 规范全景
- 不做某一家公司“谁更先进”的选型结论
