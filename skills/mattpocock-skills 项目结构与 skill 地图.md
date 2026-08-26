# mattpocock-skills 项目结构与 skill 地图

> 原始仓库：[mattpocock/skills](https://github.com/mattpocock/skills)
> 目录索引：[skills/README.md](./README.md)

## 这是什么仓库

我现在把 `mattpocock-skills` 理解成一个“可组合的 agent skills 仓库”，而不是一组松散的 `SKILL.md` 文档。

它最值得学的地方有三层：

1. 它怎么给 skill 分桶。
2. 它怎么区分 user-invoked 和 model-invoked。
3. 它怎么把这些 skill 串成一条主流程，而不是让用户自己瞎拼。

## 先抓项目结构，不先抓单个 skill

顶层最该先看的不是某个具体 skill，而是这几类入口：

- [`README.md`](https://github.com/mattpocock/skills/blob/main/README.md) 是总入口，负责讲安装方式、设计哲学和 skill 总表。
- [`CLAUDE.md`](https://github.com/mattpocock/skills/blob/main/CLAUDE.md) 是仓库维护规则，讲清楚什么叫 promoted buckets，README 和插件清单要怎么同步。
- [`skills/engineering/README.md`](https://github.com/mattpocock/skills/blob/main/skills/engineering/README.md) 与 [`skills/productivity/README.md`](https://github.com/mattpocock/skills/blob/main/skills/productivity/README.md) 是两条主线索引。
- [`skills/engineering/ask-matt/SKILL.md`](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md) 是流程地图，不只是索引。
- [`.claude-plugin/plugin.json`](https://github.com/mattpocock/skills/blob/main/.claude-plugin/plugin.json) 是发布视角，能直接验证哪些 skill 真会被插件打包出去。

## 我现在记住的两个关键分类轴

### 1. promoted vs non-promoted

仓库里的 bucket 一共有五个：

- `engineering`
- `productivity`
- `misc`
- `in-progress`
- `deprecated`

但真正的“主线技能区”只有前两个：

- `engineering`
- `productivity`

它们是 promoted buckets，所以：

- 必须出现在顶层 `README.md`
- 必须出现在 `.claude-plugin/plugin.json` 的 `skills` 数组
- 还要有对应的 docs 页面

而 `misc`、`in-progress`、`deprecated` 都不应该出现在这两处。

这个规则很重要，因为它决定了“仓库里存在”和“作者当前主推”不是一回事。

### 2. user-invoked vs model-invoked

同一个 bucket 内部，skill 还会再按“谁能触发”切一刀：

- user-invoked：要用户显式输入，主要负责编排流程。
- model-invoked：模型也可以自行调用，主要承载可复用的方法和纪律。

我目前的一个好记法是：

- user-invoked 更像入口、路由、流程编排器。
- model-invoked 更像底层原语、方法论、行为约束。

比如：

- `ask-matt`、`grill-with-docs`、`teach` 更偏入口和流程。
- `grilling`、`tdd`、`code-review` 更偏底层 discipline。

## ask-matt 为什么特别重要

如果说 README 是“目录总览”，那 `ask-matt` 就是“路线图”。

它最有价值的地方不是罗列 skill 名，而是把 skill 放进一个工作流里：

`idea → grill-with-docs → to-spec → to-tickets → implement`

这条主线外面还挂着几个典型入口：

- `triage`：处理外来 issue / bug report / feature request。
- `diagnosing-bugs`：处理真正难的 bug，把修复建立在可靠反馈回路上。
- `wayfinder`：处理大到一个 session 装不下的模糊项目，先做 decision map。

换句话说，这个仓库不是让你“背技能清单”，而是教你在不同问题状态下切换正确 skill。

## 我给自己的第一阶段学习顺序

如果继续学这个仓库，我会按下面顺序推进：

1. 先把 `README.md`、`CLAUDE.md`、两个 bucket README 和 `ask-matt` 读顺。
2. 再精读一个 user-invoked skill，看它怎么编排整个流程。
3. 再精读一个 model-invoked skill，看“可复用 discipline”是怎么写出来的。
4. 最后再回看 `plugin.json`，把“仓库存在的 skill”和“当前真正出货的 skill”区分清楚。

## 当前对我最有用的提醒

- 不要一上来就逐个精读所有 `SKILL.md`，那样很容易失去地图感。
- 先学“系统怎么组织 skill”，再学“单个 skill 细节”。
- `ask-matt` 值得当成一份流程架构文档来读，而不只是一个 router。
- `plugin.json` 是非常好的校验器，可以拿来确认自己理解的 promoted set 是否正确。

## 后续可继续补的方向

- 单独拆 `ask-matt` 的主流程与各个 on-ramp。
- 对 `teach`、`grilling`、`writing-for-agents` 这种已经有方法感的 skill 做更细的学习卡。
- 提炼一个“如何阅读 skills 仓库”的 playbook，等积累的样本更多后再决定是否进入 `playbook/`。
