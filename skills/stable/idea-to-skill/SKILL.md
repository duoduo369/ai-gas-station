---
name: idea-to-skill
description: 把一个可复用方法送入当前工作区的项目级 skills 生命周期，创建候选 skill。
disable-model-invocation: true
---

# idea-to-skill

把一个已经有复用预期的方法送进当前工作区的 project-level skills 生命周期。
默认产出 user-invoked 的候选 skill，落在 `skills/in-process/`。
这条 skill 先闭包在自己的目录里：候选 skill 运行时需要的 steps 和 reference 都留在自己的目录里；外部文档最多只作为写作时的源材料，不直接留成候选 skill 的必读链接。

## Before you start

- 先读 [`./reference/admission-bar.md`](./reference/admission-bar.md) 和 [`./reference/candidate-template.md`](./reference/candidate-template.md)。
- 不要默认把仓库总说明、术语表、目录约定整坨装进上下文；只有候选 skill 本身真的依赖这些本地规则时，才去查看对应文档。
- 如果为了压实方法临时查看了仓库里的其他文档，收口前要把还活着的最小规则改写进候选 skill 本目录；不要把这些外部文档链接直接留进产物。
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
   完成标准：主文件短、动作导向、默认 user-invoked，而且每一步都有清楚的停点；agent 执行前不需要再跳出这条 skill 的目录去读必需说明。
3. 只有当这条候选 skill 真的还需要 disclosed reference 时，才创建 `reference/`。  
   完成标准：补充规则下沉到 `reference/<meaningful-name>.md`，文件名直接表达用途；如果你在写作时参考过外部文档，最终只保留已经压回本目录的最小活规则，不保留跨出 skill 目录的说明链接。
4. 更新当前工作区里负责承接 project-level skills 生命周期的索引入口。  
   完成标准：稳定入口和 `in-process` 桶的相关索引都能看到名称、一句话说明和手动调用示例。

## Finish

- 确认候选 skill 仍是 user-invoked：`disable-model-invocation: true`，`description` 只写给人看的一句话，不写触发词清单。
- 确认没有顺手塞进临时工作记录或通用备注文件；需要下沉的补充规则只放进 `reference/`。
- 确认这条 skill 仍然是闭包式写法：运行时需要的核心规则都在本目录；如果候选 skill 还需要读目录外文档才跑得稳，就说明还没有收口好。
- 确认保留下来的 Markdown 链接只指向这条 skill 目录内已经存在的文件；仓库里的工作目标只写成代码路径，不把目录外文档挂成必读链接。
- 交付时说明三件事：创建了什么、源材料是什么、如果建了 `reference/` 又为什么需要它。
