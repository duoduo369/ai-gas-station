# AGENTS.md

> 给 AI 的渐进式加载入口。给人看的总说明在 [README.md](./README.md)。
> 这里只放不变量、分支路由、默认动作；解释性正文沉到被指向的文件里。

## 仓库目标

这是一个面向 AI 学习沉淀的个人知识库。你的职责是帮助归类、维护索引、补充已形成的学习沉淀，并把重复验证过的方法提炼进 `playbook/`。

## 全局不变量

- 顶层结构采用“对象目录 + 横切目录”混合方式。
- 对象目录只有：`书籍/`、`演讲/`、`skills/`、`概念/`。
- 横切目录保留：`playbook/`、`assets/`、`docs/`。
- 不建 `资源/`、`主题/`、`plans/`、`收件箱/`。
- 对象目录与正文文件中文优先；`skills/` 因直接对应 agent skills 保留英文，机制目录也保留英文，如 `playbook/`、`assets/`、`docs/`。
- 每个对象目录都以 `README.md` 作为索引入口，索引风格参考 awesome 项目。
- 索引条目最小字段 = 名称 + 一句话注释；原始链接与本地笔记链接都可选。
- 只有当已经形成明确学习收获、摘录或实践记录时，才单开深度笔记。
- 本地引用统一使用标准 Markdown 相对路径，不依赖 Obsidian 双链承载关键结构。
- 不对不存在的目标预先加链接，避免 Obsidian 误建空文件。
- 附件统一放 `assets/`，文件名采用“日期 + 英文短语”。
- 涉及顶层结构、机制变化或新增目录时，先看 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)，优先补决策票而不是直接扩目录。

## 分支路由

- `整体结构`、`仓库入口`、`从哪里开始` -> [README.md](./README.md)
- `术语`、`对象目录`、`索引`、`深度笔记`、`playbook` 的含义 -> [CONTEXT.md](./CONTEXT.md)
- `命名`、`链接`、`附件规则`、`README 写法` -> [docs/conventions.md](./docs/conventions.md)
- `书`、`阅读笔记`、`书摘`、`作者相关内容` -> [书籍/README.md](./书籍/README.md)
- `演讲`、`播客`、`访谈`、`分享` -> [演讲/README.md](./演讲/README.md)
- `skill`、`agent skill`、`技能经验`、`skills 目录` -> [skills/README.md](./skills/README.md)
- `概念`、`名词解释`、`机制解释`、`agent 是什么`、`token 是什么` -> [概念/README.md](./概念/README.md)
- `方法`、`流程`、`套路`、`准则`、`可复用经验` -> [playbook/README.md](./playbook/README.md)
- `截图`、`PDF`、`讲义`、`附件` -> [assets/README.md](./assets/README.md)
- `扩目录`、`改顶层结构`、`新增机制`、`结构分歧`、`ticket` -> [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)

## 默认加载链

本文件 -> 命中的目录 `README.md` 或 [docs/conventions.md](./docs/conventions.md) -> 最相关的 1-2 个正文文件 -> 只有涉及结构决策时再看 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)。

## 默认动作

- 收录内容时：先判断属于 `书籍/`、`演讲/`、`skills/`、`概念/` 还是 `playbook/`，再修改对应 `README.md` 索引。
- `skills/` 只收与 agent skills 直接相关的学习、拆解、踩坑和复用经验；不作为泛化工具目录。
- `概念/` 收不依附于单一本资源或单个 skill 的概念解释、术语拆解与机制理解。
- 只有在已经形成明确学习收获、摘录或实践记录时，才新增或补充同目录正文文件；否则停在索引条目。
- 涉及命名、链接、附件、索引写法时，先对照 [docs/conventions.md](./docs/conventions.md)。
- 涉及方法沉淀时，只有“重复验证、下次还能直接复用”的内容才进入 `playbook/`。
- 涉及顶层结构或机制变化时，不直接拍脑袋扩目录，先回到 [docs/wayfinder/MAP.md](./docs/wayfinder/MAP.md)。

## 维护

- 结构文档允许逐步演化，但冲突时以已关闭 ticket 的结论为准。
- 同类内容如果连续出现且现有目录明显容纳不顺，再考虑新增对象目录。
- 不要为了“可能以后会用”预建很多空目录。
