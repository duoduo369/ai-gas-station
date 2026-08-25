# skills

这里记录 agent skills 的学习、拆解、实践与复盘。
它只收和 agent 的 skill 包、调用方式、写法约定、使用边界直接相关的经验，不作为泛化工具目录。
这批条目先围绕 `mattpocock/skills` 仓库里 `skills/productivity` 下已经能提炼出稳定方法感的 skill 来写：既保留原始 skill 入口，也回链到本地学习文件。

## 对话澄清与深挖

- [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) - 用 design tree 和 frontier 分轮追问，把方案里的隐含决策一层层问出来；[学习拆解](<./grilling 学习拆解.md>)
- [wait-what](https://github.com/mattpocock/skills/blob/main/skills/productivity/wait-what/SKILL.md) - 当上一条消息没有真正打中时，强制代理带着上下文和统一术语重讲一遍；[学习拆解](<./wait-what 学习拆解.md>)

## 协作交接

- [handoff](https://github.com/mattpocock/skills/blob/main/skills/productivity/handoff/SKILL.md) - 把当前会话压缩成下一位 agent 能直接接手的 handoff 文档，同时避免重复搬运已有产物；[学习拆解](<./handoff 学习拆解.md>)

## 写作机制

- [writing-for-agents](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md) - 系统讲 agent 文档怎么写：context pointer、信息层级、completion criteria、leading words 与 pruning；[学习拆解](<./writing-for-agents 学习拆解.md>)

## skills 写作与维护

- 当前目录优先记录已经形成明确学习收获的 skill；如果只是先留入口，可以只在索引里放原始链接和一句判断。
- 新建或大修的具体 skill 学习文档，默认做成“顶部导航 + 主体拆解 + 底部附录”的自包含结构；既有旧文档允许逐步补齐。
- 顶部导航区默认补三类入口：原始 skill 链接、回到当前目录 `README.md` 的索引链接、以及跳到文末附录的文内锚点链接。
- 文末附录默认保留两段：`附录 A：原始 SKILL.md`，以及在原文不是中文时补 `附录 B：中文翻译`。
- 文内跳转优先使用显式锚点，例如 `<a id="skill-source-md"></a>` 与 `[跳到原文附录](#skill-source-md)`，保证 Obsidian 与 GitHub 的跳转都稳定。
- 对 user-invoked skill，要特别记清它解决的具体卡点；对 model-invoked skill，要特别记清触发词、边界和为什么值得常驻描述。
- 当一个 skill 已经带出稳定的概念、词汇表或方法论时，可以给它配一篇同层级参考文档，而不是把所有解释都塞回 `SKILL.md`。
- 如果文档重心已经转成跨多个 skill 的概念解释或机制说明，就应转入 [`概念/`](../概念/README.md)，不要继续堆在 `skills/` 里。
- 如果某个 skill 的价值已经从“学习对象”转成“重复可复用方法”，再考虑把方法部分提炼进 `playbook/`。
