---
name: idea-to-skill
description: 把一个可复用方法送入本仓库的项目级 skills 生命周期，创建或迁移候选 skill。
disable-model-invocation: true
---

# idea-to-skill

把一个已经有复用预期的方法送进本仓库的 project-level skills 生命周期。
默认产出 user-invoked 的候选 skill，落在 `skills/in-process/`。

## Before you start

- 先读 [`../../../AGENTS.md`](../../../AGENTS.md)、[`../../../CONTEXT.md`](../../../CONTEXT.md)、[`../../../docs/conventions.md`](../../../docs/conventions.md)、[`../../README.md`](../../README.md) 和 [`./NOTES.md`](./NOTES.md)。
- 先判断这是不是项目级 skill：如果它还是一次性说明、只是灵感，或者下次不太可能再用，就不要创建 skill，留在当前文档里。
- 如果来源是历史 `playbook/` 条目，先完成候选 skill 和索引迁移，再删除旧源文件。

## Lock the inputs

1. 先确定模式：`new` 或 `migrate-playbook`。
2. 在动笔前压实四个输入：
   - 英文 kebab-case 的 skill slug
   - 一句话用途
   - 人会手动输入的 invoke 名称
   - 这次要压缩成 skill 的源材料
3. 如果四项里有缺口，只追问缺的那一项，再继续。

## Build the candidate

1. 创建 `skills/in-process/<skill-slug>/` 目录。  
   完成标准：目录只为这一条候选 skill 服务，不顺手创建多余文件。
2. 先写 `SKILL.md`，按 [`./NOTES.md`](./NOTES.md) 里的模板走。  
   完成标准：主文件短、动作导向、默认 user-invoked，而且每一步都有清楚的停点。
3. 再写 `NOTES.md`。  
   完成标准：长说明、边界、失败样例、迁移备注和试跑记录都下沉到这里，不把它们重新塞回 `SKILL.md`。
4. 更新 [`../../README.md`](../../README.md) 与 [`../../in-process/README.md`](../../in-process/README.md)。  
   完成标准：两个索引都能看到名称、一句话说明和手动调用示例。

## Mode rules

### `new`

- 把最小可复用闭环压成 skill，不要把源文档里的每一句解释都搬过来。
- 如果这个方法依赖本仓库自己的术语，写作时用 [`../../../CONTEXT.md`](../../../CONTEXT.md) 的词，不要自己换同义词。

### `migrate-playbook`

- 把 `playbook/` 条目当成源材料，不把旧写法原样搬成新结构。
- 可执行闭环进入候选 `SKILL.md`；解释、示例、迁移备注和历史上下文下沉到 `NOTES.md`。
- 迁移完成并确认全仓库路由都改到新 skill 后，删除旧 `playbook/` 文件。
- 在候选 `NOTES.md` 里补一条迁移来源；如果旧文件已经删除，就记录原路径与删除状态，不再保留失效链接。

## Finish

- 确认候选 skill 仍是 user-invoked：`disable-model-invocation: true`，`description` 只写给人看的一句话，不写触发词清单。
- 确认所有链接都用相对路径，并且目标文件已经存在。
- 交付时说明三件事：创建了什么、源材料来自哪里、升到 `stable` 前还差哪些试跑证据。
