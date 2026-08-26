# AI加油站

一个面向 AI 学习沉淀的个人知识库。

它服务于三类动作：

- 收藏值得留的内容入口；
- 沉淀自己的理解、摘录与实践记录；
- 累积已经验证过、下次还能直接复用的方法与打法。

本仓库同时面向 Obsidian 与 GitHub 使用，因此采用“对象目录 + 横切目录”的轻量结构。对象目录自己承载索引与深度笔记，不再额外单列 `资源/`。

AI 协作入口见 [AGENTS.md](./AGENTS.md)。记录规则见 [docs/conventions.md](./docs/conventions.md)。

## 顶层结构

| 目录 | 用途 |
| --- | --- |
| `书籍/` | 书的索引与单本学习笔记 |
| `演讲/` | 演讲、分享、播客等内容的索引与学习笔记 |
| `skills/` | agent skills 的学习、拆解与实践记录 |
| `概念/` | AI 概念、术语与机制解释 |
| `课程/` | 自成体系的多课时课程与 lesson 课件 |
| `playbook/` | 已验证、可复用的方法、流程、套路 |
| `assets/` | 功能性附件，如截图、PDF、讲义 |
| `docs/` | 机制与规范文档 |

## 使用约定

- 对象目录默认使用中文命名；`skills/` 因直接对应 agent skills 保留英文，机制目录也保留英文，如 `playbook/`、`assets/`、`docs/`。
- 每个对象目录都用 `README.md` 作为索引入口。
- `课程/` 以“每门课一个子目录”的方式组织，课程目录内部自带 `README.md`、`lessons/`、`reference/`、`assets/`。
- 索引条目最少包含：名称、一句话注释；原始链接与本地笔记链接都是可选项。
- 索引条目可以先于正文存在。书籍笔记只有在明确要求创建某书的 md 时才建；其他对象目录默认仍是有摘录、感悟或实践记录后再单开正文。
- 本地链接统一使用标准 Markdown 相对路径；不存在的目标不预先加链接。

## 从哪里开始

- 看整体协作方式： [AGENTS.md](./AGENTS.md)
- 看结构规则： [docs/conventions.md](./docs/conventions.md)
- 开始记录内容：
  - [书籍](./书籍/README.md)
  - [演讲](./演讲/README.md)
  - [skills](./skills/README.md)
  - [概念](./概念/README.md)
  - [课程](./课程/README.md)
  - [playbook](./playbook/README.md)
