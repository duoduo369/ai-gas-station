# ask-matt 主流程与上坡入口

> 原始 skill：[ask-matt](https://github.com/mattpocock/skills/blob/main/skills/engineering/ask-matt/SKILL.md)
> 目录索引：[skills/README.md](./README.md)

## 先记一句

`ask-matt` 不是“告诉你有哪些 skill”的目录，而是“你现在应该走哪条 skill 流程”的路由器。

它的价值在于把 skill 放进时机里，而不是只放进分类里。

## 我现在理解的主线

最短主线是：

`idea → grill-with-docs → to-spec → to-tickets → implement`

这个顺序不是随便排的，而是在解决不同阶段的问题：

- `grill-with-docs`：先把问题问清，顺手更新 glossary / ADR 等文档。
- `to-spec`：把已经对齐好的理解综合成 spec，而不是重新 interview。
- `to-tickets`：把 spec 拆成 tracer-bullet vertical slices，并标出 blocking edges。
- `implement`：拿着 spec 或 ticket 去做实现，内部再驱动 `tdd` 和 `code-review`。

这里一个很重要的提醒是：

`implement` 不是站在一片混沌之上直接开干，而是默认前面已经把“要做什么”和“怎么拆”收敛过了。

## 为什么多 session 构建要先拆票

`ask-matt` 对多 session 工作的判断很鲜明：

- 如果工作能在一个上下文里做完，就可以直接进入 `implement`。
- 如果工作跨多个 session，更推荐 `to-spec → to-tickets → implement`。

这样做的核心不是项目管理味，而是上下文管理：

- 每个 ticket 都应该是一个能在新鲜上下文窗口里完成的 vertical slice。
- 每个 slice 要能独立演示或验证。
- `Blocked by` 要显式写出，方便看清 frontier。

也就是说，票据不是文书工作，而是把上下文边界和依赖关系显式化。

## 三个 on-ramp 分别在解决什么

### 1. triage

当输入不是“我有个想法”，而是“外面来了 issue / PR”，你要先判断它属于什么类别、是否成立、要不要补信息、能不能变成 agent-ready brief。

所以 `triage` 解决的是：让原始请求先进入一个可工作的状态。

### 2. diagnosing-bugs

当输入不是“我们想做什么”，而是“有个 bug、错误、性能问题”，就不能直接按普通 feature 流来。

它先要求建立 tight feedback loop，再做：

- minimise
- hypothesise
- instrument
- fix + regression test

所以它解决的是：先把“坏在哪里”这件事变成可验证对象。

### 3. wayfinder

当问题不是“小 feature 怎么实现”，而是“这个目标太大、太雾、一个 session 根本装不下”，就先别急着写 spec 或 tickets。

`wayfinder` 先画 decision map，产出的是决策，不是 deliverables。等地图清楚后，再并回主线。

所以它解决的是：在路线还没看清前，先找路。

## 主线之外还有哪些值得记的东西

`ask-matt` 还把一些 skill 放在主线外部，但它们并不是次要：

- `research`：把阅读型工作外包给背景代理。
- `prototype`：用便宜原型回答设计问题。
- `to-questionnaire`：当卡点在别人脑子里时，先把问题变成问卷。
- `wizard`：把必须人手操作的步骤脚本化。
- `wait-what`：当前一条消息没有真正讲明白时，强制重讲。
- `teach`：把某个主题做成多 session 的教学工作区。
- `writing-for-agents`：作为面向 agent 文档写作的参考。

另外还有两层“底层词汇”：

- `domain-modeling`
- `codebase-design`

它们不像主线入口，更像上层 skill 共同使用的语言系统。

## phase boundary 给我的一个纠偏

我以前很容易把 `/compact` 当默认第一反应，但 `PHASE-BOUNDARIES.md` 其实在纠偏这件事：

顺序应该是：

1. 能不能继续留在当前 session？
2. 当前上下文是不是完全无关，可以直接 `/clear`？
3. 真的需要 portability 吗？只有这时才 `/handoff`。
4. 能不能交给 subagent AFK 做？
5. 前面都不合适，才 `/compact`。

这里最值得记的一句不是技巧，而是：

> Continue 成本最低，也最不损失 primary source。

所以 compact 是兜底，不是本能。

## 我当前对 ask-matt 的总判断

如果 README 负责“把 skill 摆出来”，那 `ask-matt` 负责“把 skill 摆进时间顺序和问题状态里”。

它真正教的是：

- 当问题还模糊时，先澄清。
- 当工作要跨会话时，先切成 vertical slices。
- 当输入来自 bug / 外部 issue / 巨大模糊项目时，先走对应 on-ramp。
- 当要切换上下文时，先判断是否真的需要损失 primary source。

## 后续值得继续深挖的方向

- 继续拆 `grill-with-docs`，看它怎么借 `grilling` 和 `domain-modeling` 共同工作。
- 继续拆 `to-tickets`，看 tracer-bullet 和 blocking edges 的写法如何约束粒度。
- 继续拆 `implement`，看它为什么被设计成“内部拉起 `tdd` 和 `code-review`”。
