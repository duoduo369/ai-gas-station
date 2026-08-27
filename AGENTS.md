# AGENTS.md

> 给 AI 的渐进式加载入口。给人看的总说明在 [README.md](./README.md)。
> 这里只放不变量、分支路由、默认动作；解释性正文沉到被指向的文件里。

## 仓库目标

这是一个面向 AI 学习沉淀的个人知识库。你的职责是帮助归类、维护索引、补充已形成的学习沉淀，并把重复验证过的方法提炼进 `playbook/`。

## 全局不变量

- 顶层结构采用“对象目录 + 横切目录”混合方式。
- 对象目录只有：`书籍/`、`演讲/`、`skills/`、`概念/`、`课程/`。
- 横切目录保留：`playbook/`、`assets/`、`docs/`。
- 不建 `资源/`、`主题/`、`plans/`、`收件箱/`。
- 对象目录与正文文件中文优先；`skills/` 因直接对应 agent skills 保留英文，机制目录也保留英文，如 `playbook/`、`assets/`、`docs/`。
- 每个对象目录都以 `README.md` 作为索引入口，索引风格参考 awesome 项目。
- `课程/` 用于多课时、自成体系的 lesson 课程；每门课在自己的子目录中自包含 `README.md`、`lessons/`、`reference/`、`assets/`。共用课件 chrome 在 `课程/assets/`。
- 索引条目最小字段 = 名称 + 一句话注释；原始链接与本地笔记链接都可选。
- 不要主动新建深度笔记；`书籍/` 下的书籍笔记只有在用户明确要求创建某书的 md 时才创建。
- 本地引用统一使用标准 Markdown 相对路径，不依赖 Obsidian 双链承载关键结构。
- 不对不存在的目标预先加链接，避免 Obsidian 误建空文件。
- 附件统一放 `assets/`，按类型分子目录；书籍封面放 `assets/cover/`，普通图片放 `assets/image/`；其余附件文件名采用“日期 + 英文短语”。
- 不直接扩顶层目录或改机制；结构分歧对照 [docs/conventions.md](./docs/conventions.md) 并先问人。spec / 工单走 GitHub Issues；`.scratch/` 仍 gitignore，只给真正的本地草稿，engineering skills 不往那里写 issue。

## 分支路由

- `整体结构`、`仓库入口`、`从哪里开始` -> [README.md](./README.md)
- `术语`、`对象目录`、`索引`、`深度笔记`、`书籍笔记`、`playbook` 的含义 -> [CONTEXT.md](./CONTEXT.md)
- `命名`、`链接`、`附件规则`、`README 写法`、`书籍笔记骨架`、`导读写法` -> [docs/conventions.md](./docs/conventions.md)
- `书`、`阅读笔记`、`书摘`、`作者相关内容`、`书籍索引` -> [书籍/README.md](./书籍/README.md)
- `演讲`、`播客`、`访谈`、`分享` -> [演讲/README.md](./演讲/README.md)
- `skill`、`agent skill`、`技能经验`、`skills 目录` -> [skills/README.md](./skills/README.md)
- `概念`、`名词解释`、`机制解释`、`agent 是什么`、`token 是什么` -> [概念/README.md](./概念/README.md)
- `课程`、`lesson`、`教程`、`学习课`、`课件` -> [课程/README.md](./课程/README.md)
- `teach`、`课件 chrome`、`导航条`、`课程样式`、`课件口吻`、`stop-slop` -> [playbook/teach-me.md](./playbook/teach-me.md)
- `方法`、`流程`、`套路`、`准则`、`可复用经验` -> [playbook/README.md](./playbook/README.md)
- `截图`、`PDF`、`讲义`、`附件` -> [assets/README.md](./assets/README.md)
- `扩目录`、`改顶层结构`、`新增机制`、`结构分歧` -> [docs/conventions.md](./docs/conventions.md)
- `工单`、`issue`、`spec`、`tracker`、`triage` -> [docs/agents/issue-tracker.md](./docs/agents/issue-tracker.md)

## 默认加载链

本文件 -> 命中的目录 `README.md` 或 [docs/conventions.md](./docs/conventions.md) -> 最相关的 1-2 个正文文件。

## 默认动作

- 收录内容时：先判断属于 `书籍/`、`演讲/`、`skills/`、`概念/`、`课程/` 还是 `playbook/`，再修改对应 `README.md` 索引。
- `skills/` 只收与 agent skills 直接相关的学习、拆解、踩坑和复用经验；不作为泛化工具目录。
- `概念/` 收不依附于单一本资源或单个 skill 的概念解释、术语拆解与机制理解。
- `课程/` 收多课时、带 lesson 结构的课程化内容；单条概念解释、单个 skill 学习卡或单本资源笔记不要塞进这里。
- 写课、改课件、续课时：先走上游 teach，再套 [playbook/teach-me.md](./playbook/teach-me.md)。
- 不要主动新建书籍笔记；只有用户明确要求创建某书的 md 时才创建，并按 [docs/conventions.md](./docs/conventions.md) 一次生成三区：书目信息不放封面，阅读记录只放空壳，导读用程序员视角写一篇、不另开「程序员要点」。
- 不得修改书籍笔记中的「个人阅读记录」区；封面只在用户把图放到 `assets/cover/` 并要求引用后才写入书目信息。
- 其他对象目录仍默认：没有明确学习收获、摘录或实践记录时，停在索引条目，不单开正文。
- 涉及命名、链接、附件、索引写法时，先对照 [docs/conventions.md](./docs/conventions.md)。
- 涉及方法沉淀时，只有“重复验证、下次还能直接复用”的内容才进入 `playbook/`。
- 涉及顶层结构或机制变化时，不直接扩目录，对照 [docs/conventions.md](./docs/conventions.md) 并先问人。

## 维护

- 结构文档允许逐步演化，冲突时以 [docs/conventions.md](./docs/conventions.md) 与 [CONTEXT.md](./CONTEXT.md) 为准。
- 同类内容如果连续出现且现有目录明显容纳不顺，再考虑新增对象目录。
- 不要为了“可能以后会用”预建很多空目录。

## Agent skills

### Issue tracker

本仓库的 spec / 工单走 GitHub Issues（`duoduo369/ai-gas-station`）。见 [docs/agents/issue-tracker.md](./docs/agents/issue-tracker.md)。

### Triage labels

使用默认五套：`needs-triage`、`needs-info`、`ready-for-agent`、`ready-for-human`、`wontfix`。见 [docs/agents/triage-labels.md](./docs/agents/triage-labels.md)。

### Domain docs

单上下文：根目录 `CONTEXT.md`。ADR 按需由 domain-modeling 懒创建。见 [docs/agents/domain.md](./docs/agents/domain.md)。
