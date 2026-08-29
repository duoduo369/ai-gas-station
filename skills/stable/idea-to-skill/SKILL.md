---
name: idea-to-skill
description: 把一个可复用方法送入本仓库的项目级 skills 生命周期，创建候选 skill。
disable-model-invocation: true
---

# idea-to-skill

把一个已经有复用预期的方法送进本仓库的 project-level skills 生命周期。
默认产出 user-invoked 的候选 skill，落在 `skills/in-process/`。

## Before you start

- 先读 [`../../README.md`](../../README.md) 和 [`./reference/admission-bar.md`](./reference/admission-bar.md)。
- 只有当候选 skill 确实依赖仓库术语或结构约定时，再补读 [`../../../AGENTS.md`](../../../AGENTS.md)、[`../../../CONTEXT.md`](../../../CONTEXT.md) 与 [`../../../docs/conventions.md`](../../../docs/conventions.md)。
- 先判断这是不是项目级 skill：如果它还是一次性说明、只是灵感，或者下次不太可能再用，就不要创建 skill，留在当前文档里。

## Lock the inputs

1. 在动笔前压实四个输入：
   - 英文 kebab-case 的 skill slug
   - 一句话用途
   - 人会手动输入的 invoke 名称
   - 这次要压缩成 skill 的源材料
2. 如果四项里有缺口，只追问缺的那一项，再继续。

## Build the candidate

1. 创建 `skills/in-process/<skill-slug>/` 目录。  
   完成标准：目录只为这一条候选 skill 服务，不顺手创建多余文件。
2. 先写 `SKILL.md`，按 [`./reference/candidate-template.md`](./reference/candidate-template.md) 的形状压成短步骤。  
   完成标准：主文件短、动作导向、默认 user-invoked，而且每一步都有清楚的停点。
3. 只有当这条候选 skill 真的还需要 disclosed reference 时，才创建 `reference/`。  
   完成标准：补充规则下沉到 `reference/<meaningful-name>.md`，文件名直接表达用途；不要默认创建通用备注文件。
4. 更新 [`../../README.md`](../../README.md) 与 [`../../in-process/README.md`](../../in-process/README.md)。  
   完成标准：两个索引都能看到名称、一句话说明和手动调用示例。

## Finish

- 确认候选 skill 仍是 user-invoked：`disable-model-invocation: true`，`description` 只写给人看的一句话，不写触发词清单。
- 确认没有顺手塞进临时工作记录或通用备注文件；需要下沉的补充规则只放进 `reference/`。
- 确认所有链接都用相对路径，并且目标文件已经存在。
- 交付时说明三件事：创建了什么、源材料是什么、如果建了 `reference/` 又为什么需要它。
