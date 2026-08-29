---
name: idea-to-skill
description: 把一个可复用方法送入当前工作区的项目级 skills 生命周期，创建候选 skill。
disable-model-invocation: true
---

# idea-to-skill

把一个已经有复用预期的方法送进当前工作区的 project-level skills 生命周期。
默认产出 user-invoked 的候选 skill，落在 `skills/in-process/`。
这条 skill 先闭包在自己的目录里：默认只依赖这里的 reference；只有候选 skill 本身真的依赖当前工作区的术语、结构或索引写法时，才按需去看外部文档。

## Before you start

- 先读 [`./reference/admission-bar.md`](./reference/admission-bar.md) 和 [`./reference/candidate-template.md`](./reference/candidate-template.md)。
- 不要默认把仓库总说明、术语表、目录约定整坨装进上下文；只有候选 skill 本身真的依赖这些本地规则时，才去查看对应文档。
- 先判断这是不是项目级 skill：如果它还是一次性说明、只是灵感，或者下次不太可能再用，就不要创建 skill，留在当前文档里。

## Lock the inputs

1. 在动笔前压实四个输入：
   - 英文 kebab-case 的 skill slug
   - 一句话用途
   - 人会手动输入的 invoke 名称
   - 这次要压缩成 skill 的源材料
2. 如果四项里有缺口，只追问缺的那一项，再继续。
   完成标准：四项都已经锁定；如果还有缺口，也已经被收缩成一个明确待问项，而不是一串开放问题。

## Build the candidate

1. 在当前工作区的 `skills/in-process/` 桶里创建 `skills/in-process/<skill-slug>/` 目录。  
   完成标准：目录只为这一条候选 skill 服务，不顺手创建多余文件，也不额外创建临时记录。
2. 先写 `SKILL.md`，按 [`./reference/candidate-template.md`](./reference/candidate-template.md) 的形状压成短步骤。  
   完成标准：主文件短、动作导向、默认 user-invoked，而且每一步都有清楚的停点。
3. 只有当这条候选 skill 真的还需要 disclosed reference 时，才创建 `reference/`。  
   完成标准：补充规则下沉到 `reference/<meaningful-name>.md`，文件名直接表达用途；不要默认创建通用备注文件。
4. 更新当前工作区里负责承接 project-level skills 生命周期的索引入口。  
   完成标准：稳定入口和 `in-process` 桶的相关索引都能看到名称、一句话说明和手动调用示例。

## Finish

- 确认候选 skill 仍是 user-invoked：`disable-model-invocation: true`，`description` 只写给人看的一句话，不写触发词清单。
- 确认没有顺手塞进临时工作记录或通用备注文件；需要下沉的补充规则只放进 `reference/`。
- 确认这条 skill 仍然是闭包式写法：自己的核心规则留在本目录，外部文档只在候选 skill 真需要本地约定时才按需引用。
- 确认所有保留下来的链接都用相对路径，并且目标文件已经存在。
- 交付时说明三件事：创建了什么、源材料是什么、如果建了 `reference/` 又为什么需要它。
